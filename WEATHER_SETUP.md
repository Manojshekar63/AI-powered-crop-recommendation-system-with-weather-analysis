# Weather Analysis Feature Setup Guide

This guide will help you set up the Real-Time Weather Analysis feature for your CropCanvas AI application.

## Features Implemented

✅ **Weather Button**: Added to top navigation with tooltip  
✅ **Phone Registration**: Modal with validation for SMS alerts  
✅ **Backend API**: Express server with Twilio SMS integration  
✅ **OpenWeather Integration**: Real-time weather data fetching  
✅ **Alert System**: Automated weather condition monitoring  
✅ **Scheduled Alerts**: Cron jobs for periodic weather checks  

## Prerequisites

- Node.js (v14 or higher)
- Twilio account with SMS capabilities
- OpenWeather API key
- Phone number for testing

## Environment Variables

The following environment variables are already configured in the server:

```bash
PORT=3001
TWILIO_ACCOUNT_SID=ACabc70aa6520a679d7cde2d0a63fe610a
TWILIO_AUTH_TOKEN=3cd98a9043ec3492c931a8519055754a
TWILIO_PHONE_NUMBER=+16209828273
OPENWEATHER_API_KEY=6e1e1c06b045f2fb5058af6ca0c6f753
```

## Setup Instructions

### 1. Install Server Dependencies

```bash
# Copy the server package.json to your project root
cp server-package.json package-server.json

# Install server dependencies
npm install express cors twilio node-cron node-fetch
npm install --save-dev nodemon
```

### 2. Start the Backend Server

```bash
# Start the weather server
node server.js

# Or for development with auto-restart
npx nodemon server.js
```

The server will run on `http://localhost:3001`

### 3. Start the Frontend

```bash
# In a separate terminal, start the React app
npm run dev
```

The frontend will run on `http://localhost:8080` with API proxy configured.

## API Endpoints

### GET /api/weather
Fetch current weather data for a location
- **Query params**: `lat`, `lon` (latitude, longitude)
- **Response**: Weather data with alerts

### POST /api/register-weather-alerts
Register a phone number for weather alerts
- **Body**: `{ phoneNumber, location }`
- **Response**: Registration confirmation

### GET /api/registered-users
Get list of registered users (for debugging)
- **Response**: Array of registered users

### POST /api/send-test-sms
Send a test SMS message
- **Body**: `{ phoneNumber, message }`
- **Response**: SMS sending status

## Weather Alert Conditions

The system monitors these conditions and sends SMS alerts:

- **Low Rainfall**: < 5mm - Irrigation reminder
- **High Humidity**: > 80% - Fungal disease warning
- **Extreme Temperature**: > 35°C - Heat stress warning
- **High Wind**: > 25 km/h - Equipment security warning

## Scheduled Alerts

Weather checks run automatically every 6 hours using cron jobs:
```javascript
'0 */1* * *' // Every 6 hours
```

## Testing the Feature

1. **Open the app** and click the "Live Weather" button in the top navigation
2. **Enter a phone number** in the modal (use a real number for SMS testing)
3. **Click "Register for Alerts"** - you should receive a welcome SMS
4. **Click "Get Current Weather"** to see real-time weather data
5. **Check the console** for server logs and any errors

## Troubleshooting

### SMS Not Sending
- Verify Twilio credentials are correct
- Check Twilio account balance
- Ensure phone number format is correct (+1234567890)

### Weather Data Not Loading
- Verify OpenWeather API key is valid
- Check browser location permissions
- Look for CORS errors in browser console

### Server Connection Issues
- Ensure backend server is running on port 3001
- Check Vite proxy configuration in `vite.config.ts`
- Verify no firewall blocking localhost connections

## File Structure

```
├── src/
│   ├── components/
│   │   └── WeatherAnalysisButton.tsx    # Main weather component
│   ├── pages/
│   │   ├── Index.tsx                    # Updated with weather button
│   │   └── Dashboard.tsx                # Updated with weather button
│   └── ...
├── server.js                            # Backend Express server
├── server-package.json                  # Server dependencies
├── vite.config.ts                       # Updated with API proxy
└── WEATHER_SETUP.md                     # This setup guide
```

## Production Deployment

For production deployment:

1. **Set environment variables** on your hosting platform
2. **Update API URLs** to use your production domain
3. **Configure Twilio webhooks** for delivery status
4. **Set up database** instead of in-memory storage for user data
5. **Configure SSL certificates** for secure API communication

## Security Considerations

- Store sensitive API keys in environment variables
- Implement rate limiting for API endpoints
- Add input validation and sanitization
- Use HTTPS in production
- Implement user authentication for admin endpoints

## Support

If you encounter any issues:

1. Check the browser console for frontend errors
2. Check the server console for backend errors
3. Verify all environment variables are set correctly
4. Test API endpoints directly using tools like Postman

The weather analysis feature is now fully integrated and ready to use! 🌦️
