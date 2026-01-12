// Test script for Weather Analysis API
import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3001';

async function testWeatherAPI() {
  console.log('🌦️ Testing Weather Analysis API...\n');

  try {
    // Test 1: Weather data endpoint
    console.log('1. Testing weather data endpoint...');
    const weatherResponse = await fetch(`${BASE_URL}/api/weather?lat=12.9716&lon=77.5946`);
    
    if (weatherResponse.ok) {
      const weatherData = await weatherResponse.json();
      console.log('✅ Weather data fetched successfully:');
      console.log(`   Location: ${weatherData.location}`);
      console.log(`   Temperature: ${weatherData.temperature}°C`);
      console.log(`   Humidity: ${weatherData.humidity}%`);
      console.log(`   Rainfall: ${weatherData.rainfall}mm`);
      console.log(`   Wind Speed: ${weatherData.windSpeed} km/h`);
      console.log(`   Condition: ${weatherData.condition}`);
      console.log(`   Alerts: ${weatherData.alerts.length > 0 ? weatherData.alerts.join(', ') : 'None'}\n`);
    } else {
      console.log('❌ Weather data fetch failed:', weatherResponse.status);
    }

    // Test 2: User registration
    console.log('2. Testing user registration...');
    const testPhoneNumber = '+1234567890'; // Use a test number
    const registerResponse = await fetch(`${BASE_URL}/api/register-weather-alerts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: testPhoneNumber,
        location: 'Test Location'
      }),
    });

    if (registerResponse.ok) {
      const registerData = await registerResponse.json();
      console.log('✅ User registration successful:');
      console.log(`   Message: ${registerData.message}`);
      console.log(`   Registered users: ${registerData.userCount}\n`);
    } else {
      console.log('❌ User registration failed:', registerResponse.status);
    }

    // Test 3: Get registered users
    console.log('3. Testing registered users endpoint...');
    const usersResponse = await fetch(`${BASE_URL}/api/registered-users`);
    
    if (usersResponse.ok) {
      const usersData = await usersResponse.json();
      console.log('✅ Registered users fetched successfully:');
      console.log(`   Total users: ${usersData.count}`);
      if (usersData.users.length > 0) {
        usersData.users.forEach((user, index) => {
          console.log(`   User ${index + 1}: ${user.phoneNumber} (${user.location})`);
        });
      }
      console.log('');
    } else {
      console.log('❌ Registered users fetch failed:', usersResponse.status);
    }

    // Test 4: Test SMS (optional - requires valid Twilio credentials)
    console.log('4. Testing SMS functionality...');
    console.log('⚠️  SMS test skipped (requires valid Twilio credentials and phone number)');
    console.log('   To test SMS, uncomment the code below and use a real phone number\n');

    /*
    const smsResponse = await fetch(`${BASE_URL}/api/send-test-sms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: '+1234567890', // Replace with real number
        message: 'Test message from CropCanvas Weather API'
      }),
    });

    if (smsResponse.ok) {
      const smsData = await smsResponse.json();
      console.log('✅ SMS sent successfully:', smsData.message);
    } else {
      console.log('❌ SMS sending failed:', smsResponse.status);
    }
    */

    console.log('🎉 Weather API testing completed!');
    console.log('\n📋 Next steps:');
    console.log('   1. Start the frontend: npm run dev');
    console.log('   2. Open http://localhost:8080');
    console.log('   3. Click the "Live Weather" button');
    console.log('   4. Register with a real phone number');
    console.log('   5. Test the complete weather analysis flow');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('   1. Make sure the server is running: npm run server');
    console.log('   2. Check if port 3001 is available');
    console.log('   3. Verify all dependencies are installed');
  }
}

// Run the test
testWeatherAPI();
