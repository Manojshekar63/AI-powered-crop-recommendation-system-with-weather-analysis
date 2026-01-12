import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CloudRain, Cloud, Sun, Thermometer, Droplets, Wind, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';

interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  condition: string;
  alerts: string[];
}

export const WeatherAnalysisButton = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);

  // Phone number validation regex
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;

  const validatePhoneNumber = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleaned);
  };

  const handlePhoneSubmit = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Register with backend
      const response = await fetch('/api/register-weather-alerts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          location: 'User Location'
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Store phone number in localStorage
      localStorage.setItem('weather_phone_number', phoneNumber);
      setIsRegistered(true);
      
      toast({
        title: "Registration Successful",
        description: "You will now receive weather alerts via SMS",
      });

      // Fetch initial weather data
      await fetchWeatherData();
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchWeatherData = async () => {
    setIsLoadingWeather(true);
    
    try {
      // Get user's location
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;

      // Fetch weather data from OpenWeather API
      const response = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      toast({
        title: "Weather Data Unavailable",
        description: "Could not fetch current weather conditions",
        variant: "destructive"
      });
    } finally {
      setIsLoadingWeather(false);
    }
  };

  const getWeatherIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes('rain')) return <CloudRain className="h-6 w-6 text-blue-500" />;
    if (lowerCondition.includes('cloud')) return <Cloud className="h-6 w-6 text-gray-500" />;
    return <Sun className="h-6 w-6 text-yellow-500" />;
  };

  const getAlertLevel = (alerts: string[]) => {
    if (alerts.length === 0) return { level: 'success', icon: CheckCircle, text: 'No Alerts' };
    if (alerts.some(alert => alert.toLowerCase().includes('severe'))) {
      return { level: 'destructive', icon: AlertTriangle, text: 'Severe Alert' };
    }
    return { level: 'default', icon: AlertTriangle, text: 'Weather Alert' };
  };

  // Check if user is already registered
  const checkRegistration = () => {
    const savedPhone = localStorage.getItem('weather_phone_number');
    if (savedPhone) {
      setPhoneNumber(savedPhone);
      setIsRegistered(true);
    }
  };

  // Check registration when dialog opens
  const handleDialogOpen = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      checkRegistration();
    }
  };

  return (
    <TooltipProvider>
      <Dialog open={isOpen} onOpenChange={handleDialogOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200"
              >
                <CloudRain className="h-4 w-4 mr-2" />
                Live Weather
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Check real-time weather updates</p>
          </TooltipContent>
        </Tooltip>
        
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CloudRain className="h-5 w-5 text-blue-500" />
              Real-Time Weather Analysis
            </DialogTitle>
            <DialogDescription>
              Get live weather updates and SMS alerts for your farm location
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {!isRegistered ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Register for Weather Alerts</CardTitle>
                  <CardDescription>
                    Enter your phone number to receive SMS weather alerts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1234567890"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button 
                    onClick={handlePhoneSubmit} 
                    disabled={isLoading || !phoneNumber.trim()}
                    className="w-full"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Registering...
                      </>
                    ) : (
                      'Register for Alerts'
                    )}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      Registered Phone
                      <Badge variant="outline" className="text-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {phoneNumber} - You will receive weather alerts via SMS
                    </p>
                  </CardContent>
                </Card>

                <Button 
                  onClick={fetchWeatherData} 
                  disabled={isLoadingWeather}
                  className="w-full"
                  variant="outline"
                >
                  {isLoadingWeather ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Fetching Weather...
                    </>
                  ) : (
                    <>
                      <CloudRain className="h-4 w-4 mr-2" />
                      Get Current Weather
                    </>
                  )}
                </Button>

                {weatherData && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {getWeatherIcon(weatherData.condition)}
                        Current Weather - {weatherData.location}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-red-500" />
                          <div>
                            <p className="text-sm text-muted-foreground">Temperature</p>
                            <p className="font-semibold">{weatherData.temperature}°C</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-blue-500" />
                          <div>
                            <p className="text-sm text-muted-foreground">Humidity</p>
                            <p className="font-semibold">{weatherData.humidity}%</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <CloudRain className="h-4 w-4 text-blue-600" />
                          <div>
                            <p className="text-sm text-muted-foreground">Rainfall</p>
                            <p className="font-semibold">{weatherData.rainfall}mm</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Wind className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="text-sm text-muted-foreground">Wind Speed</p>
                            <p className="font-semibold">{weatherData.windSpeed} km/h</p>
                          </div>
                        </div>
                      </div>

                      {weatherData.alerts.length > 0 && (
                        <div className="mt-4 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="h-4 w-4 text-yellow-600" />
                            <span className="font-semibold text-yellow-800">Weather Alerts</span>
                          </div>
                          <ul className="text-sm text-yellow-700 space-y-1">
                            {weatherData.alerts.map((alert, index) => (
                              <li key={index}>• {alert}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};
