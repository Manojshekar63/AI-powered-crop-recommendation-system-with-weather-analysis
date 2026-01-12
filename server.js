import express from 'express';
import cors from 'cors';
import twilio from 'twilio';
import cron from 'node-cron';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Environment variables
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || 'ACabc70aa6520a679d7cde2d0a63fe610a';
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || '3cd98a9043ec3492c931a8519055754a';
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER || '+16209828273';
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY || '6e1e1c06b045f2fb5058af6ca0c6f753';

// Initialize Twilio client
const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// In-memory storage for registered users (in production, use a database)
const registeredUsers = new Map();

// Weather alert conditions
const ALERT_CONDITIONS = {
  LOW_RAINFALL: { threshold: 5, message: 'Low rainfall detected. Consider irrigation.' },
  HIGH_HUMIDITY: { threshold: 80, message: 'High humidity detected. Watch for fungal diseases.' },
  EXTREME_TEMPERATURE: { threshold: 35, message: 'Extreme temperature detected. Protect crops from heat stress.' },
  HIGH_WIND: { threshold: 25, message: 'High wind speed detected. Secure farm equipment and structures.' }
};

// Fetch weather data from OpenWeather API
async function fetchWeatherData(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error(`OpenWeather API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Get rainfall data (requires One Call API for precipitation)
    const oneCallResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&appid=${OPENWEATHER_API_KEY}&units=metric`
    );
    
    let rainfall = 0;
    if (oneCallResponse.ok) {
      const oneCallData = await oneCallResponse.json();
      rainfall = oneCallData.current.rain ? oneCallData.current.rain['1h'] || 0 : 0;
    }
    
    return {
      location: data.name,
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      rainfall: rainfall,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      condition: data.weather[0].description,
      alerts: generateWeatherAlerts(data.main.temp, data.main.humidity, rainfall, data.wind.speed * 3.6)
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

// Generate weather alerts based on conditions
function generateWeatherAlerts(temperature, humidity, rainfall, windSpeed) {
  const alerts = [];
  
  if (rainfall < ALERT_CONDITIONS.LOW_RAINFALL.threshold) {
    alerts.push(ALERT_CONDITIONS.LOW_RAINFALL.message);
  }
  
  if (humidity > ALERT_CONDITIONS.HIGH_HUMIDITY.threshold) {
    alerts.push(ALERT_CONDITIONS.HIGH_HUMIDITY.message);
  }
  
  if (temperature > ALERT_CONDITIONS.EXTREME_TEMPERATURE.threshold) {
    alerts.push(ALERT_CONDITIONS.EXTREME_TEMPERATURE.message);
  }
  
  if (windSpeed > ALERT_CONDITIONS.HIGH_WIND.threshold) {
    alerts.push(ALERT_CONDITIONS.HIGH_WIND.message);
  }
  
  return alerts;
}

// Send SMS using Twilio
async function sendSMS(phoneNumber, message) {
  try {
    const messageResponse = await twilioClient.messages.create({
      body: message,
      from: TWILIO_PHONE_NUMBER,
      to: phoneNumber
    });
    
    console.log(`SMS sent successfully to ${phoneNumber}: ${messageResponse.sid}`);
    return { success: true, sid: messageResponse.sid };
  } catch (error) {
    console.error(`Error sending SMS to ${phoneNumber}:`, error);
    return { success: false, error: error.message };
  }
}

// API Routes

// Get current weather data
app.get('/api/weather', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    
    if (!lat || !lon) {
      return res.status(400).json({ error: 'Latitude and longitude are required' });
    }
    
    const weatherData = await fetchWeatherData(parseFloat(lat), parseFloat(lon));
    res.json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Register user for weather alerts
app.post('/api/register-weather-alerts', async (req, res) => {
  try {
    const { phoneNumber, location } = req.body;
    
    if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    }
    
    // Store user registration
    registeredUsers.set(phoneNumber, {
      phoneNumber,
      location: location || 'Unknown',
      registeredAt: new Date().toISOString(),
      active: true
    });
    
    // Send welcome SMS
    const welcomeMessage = `Welcome to CropCanvas Weather Alerts! You'll receive real-time weather updates for your farm. Reply STOP to unsubscribe.`;
    await sendSMS(phoneNumber, welcomeMessage);
    
    res.json({ 
      success: true, 
      message: 'Successfully registered for weather alerts',
      userCount: registeredUsers.size
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Failed to register for weather alerts' });
  }
});

// Get registered users (for admin/debugging)
app.get('/api/registered-users', (req, res) => {
  const users = Array.from(registeredUsers.values());
  res.json({ 
    count: users.length, 
    users: users.map(user => ({
      phoneNumber: user.phoneNumber,
      location: user.location,
      registeredAt: user.registeredAt,
      active: user.active
    }))
  });
});

// Send test SMS
app.post('/api/send-test-sms', async (req, res) => {
  try {
    const { phoneNumber, message } = req.body;
    
    if (!phoneNumber || !message) {
      return res.status(400).json({ error: 'Phone number and message are required' });
    }
    
    const result = await sendSMS(phoneNumber, message);
    
    if (result.success) {
      res.json({ success: true, message: 'SMS sent successfully', sid: result.sid });
    } else {
      res.status(500).json({ error: 'Failed to send SMS', details: result.error });
    }
  } catch (error) {
    console.error('Test SMS error:', error);
    res.status(500).json({ error: 'Failed to send test SMS' });
  }
});

// Scheduled weather check and alert system
cron.schedule('0 */1 * * *', async () => {
  console.log('Running scheduled weather check...');
  
  try {
    // For each registered user, check their location's weather
    for (const [phoneNumber, user] of registeredUsers) {
      if (!user.active) continue;
      
      try {
        // For demo purposes, we'll use a default location (you can enhance this to store user locations)
        const defaultLat = 12.9716; // Bangalore coordinates
        const defaultLon = 77.5946;
        
        const weatherData = await fetchWeatherData(defaultLat, defaultLon);
        
        // Send alerts if conditions are met
        if (weatherData.alerts.length > 0) {
          const alertMessage = `🌦 Weather Alert for ${weatherData.location}:\n\n${weatherData.alerts.join('\n')}\n\nTemperature: ${weatherData.temperature}°C\nHumidity: ${weatherData.humidity}%\nRainfall: ${weatherData.rainfall}mm\n\n- CropCanvas AI`;
          
          await sendSMS(phoneNumber, alertMessage);
          console.log(`Weather alert sent to ${phoneNumber}`);
        }
      } catch (error) {
        console.error(`Error checking weather for ${phoneNumber}:`, error);
      }
    }
  } catch (error) {
    console.error('Scheduled weather check error:', error);
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Weather alerts scheduled to run every 6 hours`);
  console.log(`Registered users: ${registeredUsers.size}`);
});
