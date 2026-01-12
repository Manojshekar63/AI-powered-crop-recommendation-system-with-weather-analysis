export type Language = 'en' | 'hi' | 'kn';

export interface TranslationKey {
  en: string;
  hi: string;
  kn: string;
}

export const translations = {
  // Navigation & Main Actions
  dashboard: {
    en: "Dashboard",
    hi: "डैशबोर्ड", 
    kn: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"
  },
  start_analysis: {
    en: "Start Analysis",
    hi: "विश्लेषण शुरू करें",
    kn: "ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ"
  },
  back: {
    en: "Back",
    hi: "वापस",
    kn: "ಹಿಂದೆ"
  },
  new_analysis: {
    en: "New Analysis", 
    hi: "नया विश्लेषण",
    kn: "ಹೊಸ ವಿಶ್ಲೇಷಣೆ"
  },
  
  // Hero Section
  smart_crop_recommendations: {
    en: "Smart Crop Recommendations",
    hi: "स्मार्ट फसल सिफारिशें",
    kn: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಶಿಫಾರಸುಗಳು"
  },
  hero_subtitle: {
    en: "AI-powered insights for modern farmers. Get personalized crop recommendations based on your soil conditions, climate, and market trends.",
    hi: "आधुनिक किसानों के लिए AI-संचालित अंतर्दृष्टि। अपनी मिट्टी की स्थिति, जलवायु और बाजार के रुझान के आधार पर व्यक्तिगत फसल सिफारिशें प्राप्त करें।",
    kn: "ಆಧುನಿಕ ರೈತರಿಗೆ AI-ಚಾಲಿತ ಒಳನೋಟಗಳು. ನಿಮ್ಮ ಮಣ್ಣಿನ ಪರಿಸ್ಥಿತಿಗಳು, ಹವಾಮಾನ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಬೆಳೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ."
  },

  // Features Section
  how_ai_helps: {
    en: "How Our AI Helps You",
    hi: "हमारी AI आपकी कैसे मदद करती है",
    kn: "ನಮ್ಮ AI ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ"
  },
  soil_analysis: {
    en: "Soil Analysis",
    hi: "मिट्टी विश्लेषण",
    kn: "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ"
  },
  soil_analysis_desc: {
    en: "Analyze soil pH, nutrients (NPK), and composition to match optimal crop requirements",
    hi: "मिट्टी का pH, पोषक तत्व (NPK), और संरचना का विश्लेषण करके इष्टतम फसल आवश्यकताओं से मेल खाएं",
    kn: "ಅತ್ಯುತ್ತಮ ಬೆಳೆ ಅಗತ್ಯತೆಗಳಿಗೆ ಹೊಂದಿಸಲು ಮಣ್ಣಿನ pH, ಪೋಷಕಾಂಶಗಳು (NPK), ಮತ್ತು ಸಂಯೋಜನೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ"
  },
  ai_predictions: {
    en: "AI Predictions",
    hi: "AI भविष्यवाणियां",
    kn: "AI ಭವಿಷ್ಯವಾಣಿಗಳು"
  },
  ai_predictions_desc: {
    en: "Machine learning algorithms analyze weather patterns and predict best crop matches",
    hi: "मशीन लर्निंग एल्गोरिदम मौसम के पैटर्न का विश्लेषण करते हैं और सर्वोत्तम फसल मिलान की भविष्यवाणी करते हैं",
    kn: "ಯಂತ್ರ ಕಲಿಕೆ ಅಲ್ಗಾರಿದಮ್‌ಗಳು ಹವಾಮಾನ ಮಾದರಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತವೆ ಮತ್ತು ಅತ್ಯುತ್ತಮ ಬೆಳೆ ಹೊಂದಾಣಿಕೆಗಳನ್ನು ಊಹಿಸುತ್ತವೆ"
  },
  market_insights: {
    en: "Market Insights",
    hi: "बाजार अंतर्दृष्टि",
    kn: "ಮಾರುಕಟ್ಟೆ ಒಳನೋಟಗಳು"
  },
  market_insights_desc: {
    en: "Real-time market prices and profitability analysis for informed decision making",
    hi: "सूचित निर्णय लेने के लिए रियल-टाइम बाजार मूल्य और लाभप्रदता विश्लेषण",
    kn: "ತಿಳುವಳಿಕೆಯುಳ್ಳ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಲು ನೈಜ-ಸಮಯದ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು ಮತ್ತು ಲಾಭದಾಯಕತೆಯ ವಿಶ್ಲೇಷಣೆ"
  },

  // Form Fields
  farm_analysis: {
    en: "Farm Analysis",
    hi: "फार्म विश्लेषण", 
    kn: "ಕೃಷಿ ವಿಶ್ಲೇಷಣೆ"
  },
  crop_recommendation_analysis: {
    en: "Crop Recommendation Analysis",
    hi: "फसल सिफारिश विश्लेषण",
    kn: "ಬೆಳೆ ಶಿಫಾರಸು ವಿಶ್ಲೇಷಣೆ"
  },
  enter_farm_details: {
    en: "Enter your farm details to get AI-powered crop recommendations",
    hi: "AI-संचालित फसल सिफारिशें प्राप्त करने के लिए अपने फार्म का विवरण दर्ज करें",
    kn: "AI-ಚಾಲಿತ ಬೆಳೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಲು ನಿಮ್ಮ ಕೃಷಿ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ"
  },
  location: {
    en: "Location",
    hi: "स्थान",
    kn: "ಸ್ಥಳ"
  },
  farm_location: {
    en: "Farm Location",
    hi: "फार्म स्थान",
    kn: "ಕೃಷಿ ಸ್ಥಳ"
  },
  soil_properties: {
    en: "Soil Properties",
    hi: "मिट्टी गुण",
    kn: "ಮಣ್ಣಿನ ಗುಣಗಳು"
  },
  soil_type: {
    en: "Soil Type",
    hi: "मिट्टी का प्रकार",
    kn: "ಮಣ್ಣಿನ ಪ್ರಕಾರ"
  },
  select_soil_type: {
    en: "Select soil type",
    hi: "मिट्टी का प्रकार चुनें",
    kn: "ಮಣ್ಣಿನ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ"
  },
  sandy: {
    en: "Sandy",
    hi: "रेतीली",
    kn: "ಮರಳು"
  },
  loamy: {
    en: "Loamy",
    hi: "दोमट",
    kn: "ಮಿಶ್ರ ಮಣ್ಣು"
  },
  clay: {
    en: "Clay",
    hi: "मिट्टी",
    kn: "ಕೆಸರು"
  },
  silt: {
    en: "Silt",
    hi: "गाद",
    kn: "ಮುಲ್ಲು"
  },
  peaty: {
    en: "Peaty",
    hi: "पीटी",
    kn: "ಪೀಟ್"
  },
  chalky: {
    en: "Chalky",
    hi: "चाकी",
    kn: "ಚುನ್ನದ"
  },
  climate_conditions: {
    en: "Climate Conditions",
    hi: "जलवायु स्थितियां",
    kn: "ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳು"
  },
  annual_rainfall: {
    en: "Annual Rainfall (mm)",
    hi: "वार्षिक वर्षा (मिमी)",
    kn: "ವಾರ್ಷಿಕ ಮಳೆ (ಮಿಮೀ)"
  },
  avg_temperature: {
    en: "Avg Temperature (°C)",
    hi: "औसत तापमान (°C)",
    kn: "ಸರಾಸರಿ ತಾಪಮಾನ (°C)"
  },
  humidity: {
    en: "Humidity (%)",
    hi: "आर्द्रता (%)",
    kn: "ಆರ್ದ್ರತೆ (%)"
  },
  analyzing: {
    en: "Analyzing...",
    hi: "विश्लेषण कर रहे हैं...",
    kn: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ..."
  },
  get_crop_recommendations: {
    en: "Get Crop Recommendations",
    hi: "फसल सिफारिशें प्राप्त करें",
    kn: "ಬೆಳೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ"
  },

  // Results Page
  crop_recommendations: {
    en: "Crop Recommendations",
    hi: "फसल सिफारिशें",
    kn: "ಬೆಳೆ ಶಿಫಾರಸುಗಳು"
  },
  show_comparison: {
    en: "Show Comparison",
    hi: "तुलना दिखाएं",
    kn: "ಹೋಲಿಕೆ ತೋರಿಸಿ"
  },
  hide_comparison: {
    en: "Hide Comparison", 
    hi: "तुलना छुपाएं",
    kn: "ಹೋಲಿಕೆ ಮರೆಮಾಡಿ"
  },

  // Language Selector
  language: {
    en: "English",
    hi: "हिंदी",
    kn: "ಕನ್ನಡ"
  },

  // Dashboard
  home: {
    en: "Home",
    hi: "होम",
    kn: "ಮನೆ"
  },
  my_farm_dashboard: {
    en: "My Farm Dashboard",
    hi: "मेरा फार्म डैशबोर्ड",
    kn: "ನನ್ನ ಕೃಷಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"
  },
  saved_analyses: {
    en: "Saved Analyses",
    hi: "सहेजे गए विश्लेषण",
    kn: "ಉಳಿಸಿದ ವಿಶ್ಲೇಷಣೆಗಳು"
  },
  locations: {
    en: "Locations",
    hi: "स्थान",
    kn: "ಸ್ಥಳಗಳು"
  },
  days_since_first: {
    en: "Days Since First",
    hi: "पहले से दिन",
    kn: "ಮೊದಲಿನಿಂದ ದಿನಗಳು"
  },
  back_to_dashboard: {
    en: "Back to Dashboard",
    hi: "डैशबोर्ड पर वापस",
    kn: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ"
  },
  saved_analysis_details: {
    en: "Saved Analysis Details",
    hi: "सहेजे गए विश्लेषण विवरण",
    kn: "ಉಳಿಸಿದ ವಿಶ್ಲೇಷಣೆ ವಿವರಗಳು"
  },
  saved_on: {
    en: "Saved on",
    hi: "सहेजा गया",
    kn: "ಉಳಿಸಲಾಗಿದೆ"
  },
  recommendations: {
    en: "Recommendations",
    hi: "सिफारिशें",
    kn: "ಶಿಫಾರಸುಗಳು"
  },
  crops: {
    en: "crops",
    hi: "फसलें",
    kn: "ಬೆಳೆಗಳು"
  },
  ai_confidence: {
    en: "AI Confidence",
    hi: "AI विश्वास",
    kn: "AI ವಿಶ್ವಾಸ"
  },
  high_profit: {
    en: "High Profit",
    hi: "उच्च लाभ",
    kn: "ಹೆಚ್ಚು ಲಾಭ"
  },
  medium_profit: {
    en: "Medium Profit", 
    hi: "मध्यम लाभ",
    kn: "ಮಧ್ಯಮ ಲಾಭ"
  },
  low_profit: {
    en: "Low Profit",
    hi: "कम लाभ",
    kn: "ಕಡಿಮೆ ಲಾಭ"
  },
  expected_yield: {
    en: "Expected Yield:",
    hi: "अपेक्षित उत्पादन:",
    kn: "ನಿರೀಕ್ಷಿತ ಇಳುವರಿ:"
  },
  market_price: {
    en: "Market Price:",
    hi: "बाजार मूल्य:",
    kn: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ:"
  },
  season: {
    en: "Season:",
    hi: "मौसम:",
    kn: "ಋತು:"
  },
  duration: {
    en: "Duration:",
    hi: "अवधि:",
    kn: "ಅವಧಿ:"
  },
  no_saved_analyses: {
    en: "No Saved Analyses",
    hi: "कोई सहेजा गया विश्लेषण नहीं",
    kn: "ಯಾವುದೇ ಉಳಿಸಿದ ವಿಶ್ಲೇಷಣೆಗಳಿಲ್ಲ"
  },
  start_first_analysis: {
    en: "Start by creating your first crop recommendation analysis",
    hi: "अपना पहला फसल सिफारिश विश्लेषण बनाकर शुरुआत करें",
    kn: "ನಿಮ್ಮ ಮೊದಲ ಬೆಳೆ ಶಿಫಾರಸು ವಿಶ್ಲೇಷಣೆಯನ್ನು ರಚಿಸುವ ಮೂಲಕ ಪ್ರಾರಂಭಿಸಿ"
  },
  soil: {
    en: "Soil:",
    hi: "मिट्टी:",
    kn: "ಮಣ್ಣು:"
  },
  view: {
    en: "View",
    hi: "देखें",
    kn: "ನೋಡಿ"
  },

  // New Location & Option Selection
  automatic_recommendations: {
    en: "Get recommendations from my exact location",
    hi: "मेरे सटीक स्थान से सिफारिशें प्राप्त करें",
    kn: "ನನ್ನ ನಿಖರ ಸ್ಥಳದಿಂದ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ"
  },
  manual_input: {
    en: "Enter details manually",
    hi: "विवरण मैन्युअल रूप से दर्ज करें",
    kn: "ವಿವರಗಳನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ನಮೂದಿಸಿ"
  },
  choose_option: {
    en: "Choose Your Option",
    hi: "अपना विकल्प चुनें",
    kn: "ನಿಮ್ಮ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ"
  },
  automatic_detection_description: {
    en: "We'll automatically detect your location and fetch soil & climate data",
    hi: "हम स्वचालित रूप से आपका स्थान पता लगाएंगे और मिट्टी और जलवायु डेटा प्राप्त करेंगे",
    kn: "ನಾವು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪತ್ತೆ ಮಾಡಿ ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ಡೇಟಾವನ್ನು ಪಡೆಯುತ್ತೇವೆ"
  },
  manual_input_description: {
    en: "Manually enter your farm's soil and climate details",
    hi: "अपने खेत की मिट्टी और जलवायु का विवरण मैन्युअल रूप से दर्ज करें",
    kn: "ನಿಮ್ಮ ಕೃಷಿಯ ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನದ ವಿವರಗಳನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ನಮೂದಿಸಿ"
  },
  detecting_location: {
    en: "Detecting Your Location",
    hi: "आपका स्थान खोजा जा रहा है",
    kn: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪತ್ತೆ ಮಾಡಲಾಗುತ್ತಿದೆ"
  },
  allow_location_access: {
    en: "Please allow location access when prompted",
    hi: "कृपया प्रेरित होने पर स्थान पहुंच की अनुमति दें",
    kn: "ಕೇಳಿದಾಗ ದಯವಿಟ್ಟು ಸ್ಥಳ ಪ್ರವೇಶಕ್ಕೆ ಅನುಮತಿ ನೀಡಿ"
  },
  fetching_soil_climate_data: {
    en: "Fetching Soil & Climate Data",
    hi: "मिट्टी और जलवायु डेटा प्राप्त कर रहे हैं",
    kn: "ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ಡೇಟಾವನ್ನು ಪಡೆಯುತ್ತಿದ್ದೇವೆ"
  },
  analyzing_your_location: {
    en: "Analyzing your location's agricultural conditions",
    hi: "आपके स्थान की कृषि स्थितियों का विश्लेषण कर रहे हैं",
    kn: "ನಿಮ್ಮ ಸ್ಥಳದ ಕೃಷಿ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತಿದ್ದೇವೆ"
  },
  location_data_detected: {
    en: "Location Data Detected",
    hi: "स्थान डेटा का पता चला",
    kn: "ಸ್ಥಳ ಡೇಟಾ ಪತ್ತೆಯಾಗಿದೆ"
  },
  detected_location_description: {
    en: "We've analyzed your location and detected the following soil and climate conditions",
    hi: "हमने आपके स्थान का विश्लेषण किया है और निम्नलिखित मिट्टी और जलवायु स्थितियों का पता लगाया है",
    kn: "ನಾವು ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ವಿಶ್ಲೇಷಿಸಿದ್ದೇವೆ ಮತ್ತು ಈ ಕೆಳಗಿನ ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿದ್ದೇವೆ"
  },
  detected_soil_properties: {
    en: "Detected Soil Properties",
    hi: "पता लगाए गए मिट्टी के गुण",
    kn: "ಪತ್ತೆಯಾದ ಮಣ್ಣಿನ ಗುಣಗಳು"
  },
  detected_climate_conditions: {
    en: "Detected Climate Conditions",
    hi: "पता लगाई गई जलवायु स्थितियां",
    kn: "ಪತ್ತೆಯಾದ ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳು"
  },
  level: {
    en: "Level",
    hi: "स्तर",
    kn: "ಮಟ್ಟ"
  },
  acidic: {
    en: "Acidic",
    hi: "अम्लीय",
    kn: "ಆಮ್ಲೀಯ"
  },
  alkaline: {
    en: "Alkaline",
    hi: "क्षारीय",
    kn: "ಕ್ಷಾರೀಯ"
  },
  neutral: {
    en: "Neutral",
    hi: "तटस्थ",
    kn: "ತಟಸ್ಥ"
  },
  soil_texture: {
    en: "Soil Texture",
    hi: "मिट्टी की बनावट",
    kn: "ಮಣ್ಣಿನ ರಚನೆ"
  },
  organic_carbon: {
    en: "Organic Carbon",
    hi: "जैविक कार्बन",
    kn: "ಸಾವಯವ ಇಂಗಾಲ"
  },
  detect_again: {
    en: "Detect Again",
    hi: "फिर से खोजें",
    kn: "ಮತ್ತೆ ಪತ್ತೆ ಮಾಡಿ"
  },
  automatic_location_detection: {
    en: "Automatic Location Detection",
    hi: "स्वचालित स्थान खोज",
    kn: "ಸ್ವಯಂಚಾಲಿತ ಸ್ಥಳ ಪತ್ತೆ"
  },
  what_we_detect: {
    en: "What we'll detect:",
    hi: "हम क्या खोजेंगे:",
    kn: "ನಾವು ಏನನ್ನು ಪತ್ತೆ ಮಾಡುತ್ತೇವೆ:"
  },
  exact_coordinates: {
    en: "Your exact farm coordinates",
    hi: "आपके खेत के सटीक निर्देशांक",
    kn: "ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಕೃಷಿಯ ನಿರ್ದೇಶಾಂಕಗಳು"
  },
  soil_ph_nutrients: {
    en: "Soil pH and nutrient levels",
    hi: "मिट्टी का pH और पोषक तत्व स्तर",
    kn: "ಮಣ್ಣಿನ pH ಮತ್ತು ಪೋಷಕಾಂಶದ ಮಟ್ಟಗಳು"
  },
  local_climate_data: {
    en: "Local climate and weather patterns",
    hi: "स्थानीय जलवायु और मौसम पैटर्न",
    kn: "ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮತ್ತು ಹವಾಮಾನ ಮಾದರಿಗಳು"
  },
  soil_texture_composition: {
    en: "Soil texture and composition",
    hi: "मिट्टी की बनावट और संरचना",
    kn: "ಮಣ್ಣಿನ ರಚನೆ ಮತ್ತು ಸಂಯೋಜನೆ"
  },
  detect_my_location: {
    en: "Detect My Location",
    hi: "मेरा स्थान खोजें",
    kn: "ನನ್ನ ಸ್ಥಳವನ್ನು ಪತ್ತೆ ಮಾಡಿ"
  },
  geolocation_not_supported: {
    en: "Geolocation is not supported by this browser",
    hi: "इस ब्राउज़र द्वारा भौगोलिक स्थान समर्थित नहीं है",
    kn: "ಈ ಬ್ರೌಸರ್‌ನಿಂದ ಭೌಗೋಳಿಕ ಸ್ಥಳವು ಬೆಂಬಲಿತವಾಗಿಲ್ಲ"
  },
  error_fetching_data: {
    en: "Error fetching data. Please try again or use manual input.",
    hi: "डेटा प्राप्त करने में त्रुटि। कृपया पुनः प्रयास करें या मैन्युअल इनपुट का उपयोग करें।",
    kn: "ಡೇಟಾ ಪಡೆಯುವಲ್ಲಿ ದೋಷ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ಹಸ್ತಚಾಲಿತ ಇನ್‌ಪುಟ್ ಬಳಸಿ."
  },
  location_permission_denied: {
    en: "Location access denied. Please allow location access or use manual input.",
    hi: "स्थान पहुंच से इनकार। कृपया स्थान पहुंच की अनुमति दें या मैन्युअल इनपुट का उपयोग करें।",
    kn: "ಸ್ಥಳ ಪ್ರವೇಶ ನಿರಾಕರಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಸ್ಥಳ ಪ್ರವೇಶಕ್ಕೆ ಅನುಮತಿ ನೀಡಿ ಅಥವಾ ಹಸ್ತಚಾಲಿತ ಇನ್‌ಪುಟ್ ಬಳಸಿ."
  },
  location_unavailable: {
    en: "Location information unavailable.",
    hi: "स्थान की जानकारी उपलब्ध नहीं है।",
    kn: "ಸ್ಥಳದ ಮಾಹಿತಿ ಲಭ್ಯವಿಲ್ಲ."
  },
  location_timeout: {
    en: "Location request timed out.",
    hi: "स्थान अनुरोध का समय समाप्त हो गया।",
    kn: "ಸ್ಥಳ ವಿನಂತಿಯು ಸಮಯ ಮೀರಿದೆ."
  },
  location_unknown_error: {
    en: "Unknown error occurred while getting location.",
    hi: "स्थान प्राप्त करते समय अज्ञात त्रुटि हुई।",
    kn: "ಸ್ಥಳವನ್ನು ಪಡೆಯುವಾಗ ಅಜ್ಞಾತ ದೋಷ ಸಂಭವಿಸಿದೆ."
  },
  select_preferred_method: {
    en: "Select your preferred method to get crop recommendations",
    hi: "फसल की सिफारिशें प्राप्त करने के लिए अपनी पसंदीदा विधि चुनें",
    kn: "ಬೆಳೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಲು ನಿಮ್ಮ ಆದ್ಯತೆಯ ವಿಧಾನವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ"
  },
  instant_analysis: {
    en: "Instant soil & climate analysis",
    hi: "तत्काल मिट्टी और जलवायु विश्लेषण",
    kn: "ತತ್ಕ್ಷಣ ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ವಿಶ್ಲೇಷಣೆ"
  },
  saves_time: {
    en: "Saves time - no manual data entry",
    hi: "समय बचाता है - कोई मैन्युअल डेटा एंट्री नहीं",
    kn: "ಸಮಯವನ್ನು ಉಳಿಸುತ್ತದೆ - ಯಾವುದೇ ಹಸ್ತಚಾಲಿತ ಡೇಟಾ ಎಂಟ್ರಿ ಇಲ್ಲ"
  },
  precise_location_data: {
    en: "Precise location-based data",
    hi: "सटीक स्थान-आधारित डेटा",
    kn: "ನಿಖರವಾದ ಸ್ಥಳ-ಆಧಾರಿತ ಡೇಟಾ"
  },
  use_automatic_detection: {
    en: "Use Automatic Detection",
    hi: "स्वचालित खोज का उपयोग करें",
    kn: "ಸ್ವಯಂಚಾಲಿತ ಪತ್ತೆಯನ್ನು ಬಳಸಿ"
  },
  full_control: {
    en: "Full control over input data",
    hi: "इनपुट डेटा पर पूर्ण नियंत्रण",
    kn: "ಇನ್‌ಪುಟ್ ಡೇಟಾದ ಮೇಲೆ ಸಂಪೂರ್ಣ ನಿಯಂತ್ರಣ"
  },
  no_location_needed: {
    en: "No location access needed",
    hi: "स्थान पहुंच की आवश्यकता नहीं",
    kn: "ಯಾವುದೇ ಸ್ಥಳ ಪ್ರವೇಶದ ಅಗತ್ಯವಿಲ್ಲ"
  },
  custom_parameters: {
    en: "Custom soil & climate parameters",
    hi: "कस्टम मिट्टी और जलवायु पैरामीटर",
    kn: "ಕಸ್ಟಮ್ ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು"
  },
  use_manual_input: {
    en: "Use Manual Input",
    hi: "मैन्युअल इनपुट का उपयोग करें",
    kn: "ಹಸ್ತಚಾಲಿತ ಇನ್‌ಪುಟ್ ಬಳಸಿ"
  },
  nitrogen: {
    en: "Nitrogen",
    hi: "नाइट्रोजन",
    kn: "ಸಾರಜನಕ"
  },
  phosphorus: {
    en: "Phosphorus",
    hi: "फास्फोरस",
    kn: "ರಂಜಕ"
  },
  potassium: {
    en: "Potassium",
    hi: "पोटैशियम",
    kn: "ಪೊಟ್ಯಾಸಿಯಮ್"
  },
  temperature: {
    en: "Temperature",
    hi: "तापमान",
    kn: "ತಾಪಮಾನ"
  }
};

// Chatbot strings (added at module end so existing imports continue to work)
export const chatbotTranslations = {
  chat_title: {
    en: 'Assistant',
    hi: 'सहायक',
    kn: 'ಸಹಾಯಕ'
  },
  chat_subtitle: {
    en: 'Ask in English, Hindi, or Kannada',
    hi: 'अंग्रेज़ी, हिंदी या कन्नड़ में पूछें',
    kn: 'ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ ಅಥವಾ ಕನ್ನಡದಲ್ಲಿ ಕೇಳಿ'
  },
  welcome: {
    en: 'Hello! How can I assist you today?',
    hi: 'नमस्ते! मैं आपकी किस प्रकार सहायता कर सकता हूँ?',
    kn: 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?'
  },
  ask_question: {
    en: 'Please type or say your question.',
    hi: 'कृपया अपना सवाल टाइप करें या बोलें।',
    kn: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಹೇಳಿ.'
  },
  bye: {
    en: 'Goodbye!',
    hi: 'अलविदा!',
    kn: 'ವಿದಾಯ!'
  },
  default_answer: {
    en: "I can help with crops, soil pH, and fertility. Try asking about 'ideal pH for tomatoes' or 'best crops for monsoon'.",
    hi: "मैं फसलों, मिट्टी के pH और उर्वरता में मदद कर सकता हूँ। जैसे 'टमाटर के लिए आदर्श pH' या 'मानसून के लिए सर्वोत्तम फसलें' पूछें।",
    kn: "ನಾನು ಬೆಳೆಗಳು, ಮಣ್ಣಿನ pH ಮತ್ತು ಫಲವತ್ತತೆಯಲ್ಲಿ ಸಹಾಯ ಮಾಡಬಹುದು. 'ಟೊಮೇಟೊಗಳ ಆದರ್ಶ pH' ಅಥವಾ 'ಮಳೆಗಾಲಕ್ಕೆ ಉತ್ತಮ ಬೆಳೆಗಳು' ಬಗ್ಗೆ ಕೇಳಿ."
  },
  chat_suggestion_1: {
    en: 'Best crops for monsoon?',
    hi: 'मानसून में सर्वोत्तम फसलें?',
    kn: 'ಮಳೆಗಾಲಕ್ಕೆ ಉತ್ತಮ ಬೆಳೆಗಳು?'
  },
  chat_suggestion_2: {
    en: 'Ideal soil pH for tomatoes?',
    hi: 'टमाटर के लिए आदर्श मिट्टी pH?',
    kn: 'ಟೊಮೇಟೊಗೆ ಆದರ್ಶ ಮಣ್ಣಿನ pH?'
  },
  crops_monsoon: {
    en: 'Monsoon-friendly crops include rice, maize, millets, pulses (tur/urad), and groundnut depending on your region and soil drainage.',
    hi: 'मानसून में चावल, मक्का, बाजरा, दालें (तूर/उड़द) और मूंगफली जैसी फसलें उपयुक्त रहती हैं—क्षेत्र और मिट्टी के जलनिकास पर निर्भर.',
    kn: 'ಮಾನ್ಸೂನ್ ಕಾಲಕ್ಕೆ ಅಕ್ಕಿ, ಜೋಳ, ಸಜ್ಜೆ, ಪಲ್ಸೆಗಳು (ತೂರ್/ಉದ್ದಿನ) ಮತ್ತು ಕಡಲೆ ಉತ್ತಮ—ನಿಮ್ಮ ಪ್ರದೇಶ ಮತ್ತು ಮಣ್ಣಿನ ನೀರಿನ ಹರಿವಿನ ಮೇಲೆ ಅವಲಂಬಿತ.'
  },
  ideal_ph_tomatoes: {
    en: 'Ideal soil pH for tomatoes is 6.0–6.8. Add lime if too acidic (<6) or sulfur if too alkaline (>7.5).',
    hi: 'टमाटर के लिए आदर्श pH 6.0–6.8 होता है। pH < 6 हो तो चूना, > 7.5 हो तो सल्फर मिलाएँ.',
    kn: 'ಟೊಮೇಟೊಗಳಿಗೆ ಆದರ್ಶ ಮಣ್ಣಿನ pH 6.0–6.8. pH < 6 ಇದ್ದರೆ ಚುನ್ನ, > 7.5 ಇದ್ದರೆ ಗಂಧಕ ಬಳಸಿ.'
  },
  improve_fertility: {
    en: 'Improve soil fertility with organic compost, green manures, crop rotation, and balanced NPK as per a soil test.',
    hi: 'जैविक कंपोस्ट, ग्रीन मैन्योर, फसल चक्र और मिट्टी परीक्षण के अनुसार संतुलित NPK से उर्वरता बढ़ाएँ.',
    kn: 'ಜೈವಿಕ ಕಂಪೋಸ್ಟ್, ಹಸಿರು ಮಾನ್ಯುರ್, ಬೆಳೆ ಪರಿವರ್ತನೆ ಮತ್ತು ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯ ಪ್ರಕಾರ ಸಮತೋಲನ NPK ಬಳಸಿ ಫಲವತ್ತತೆಯನ್ನು ಹೆಚ್ಚಿಸಿ.'
  },
  chat_suggestion_3: {
    en: 'How to improve soil fertility?',
    hi: 'मिट्टी की उर्वरता कैसे बढ़ाएँ?',
    kn: 'ಮಣ್ಣಿನ ಫಲವತ್ತತೆಯನ್ನು ಹೇಗೆ ಹೆಚ್ಚಿಸಬೇಕು?'
  },
  listening: {
    en: 'Listening…',
    hi: 'सुन रहा है…',
    kn: 'ಕೆಳೆಯುತ್ತಿದೆ…'
  },
  ready: {
    en: 'Ready',
    hi: 'तैयार',
    kn: 'ಸಿದ್ಧ'
  },
  speak: {
    en: 'Speak',
    hi: 'बोलें',
    kn: 'ಮಾತನಾಡಿ'
  },
  stop: {
    en: 'Stop',
    hi: 'रोकें',
    kn: 'ನಿಲ್ಲಿಸಿ'
  },
  type_message: {
    en: 'Type a message…',
    hi: 'संदेश टाइप करें…',
    kn: 'ಸಂದೇಶವನ್ನು ಬರೆಯಿರಿ…'
  },
  send: {
    en: 'Send',
    hi: 'भेजें',
    kn: 'ಕಳುಹಿಸಿ'
  },
  clear_chat: {
    en: 'Clear chat',
    hi: 'चैट साफ़ करें',
    kn: 'ಚಾಟ್ ತೆರವುಗೊಳಿಸಿ'
  },
  voice_on: {
    en: 'Voice on',
    hi: 'आवाज़ चालू',
    kn: 'ವಾಯ್ಸ್ ಆನ್'
  },
  voice_off: {
    en: 'Voice off',
    hi: 'आवाज़ बंद',
    kn: 'ವಾಯ್ಸ್ ಆಫ್'
  },
  speech_not_supported: {
    en: 'Speech recognition not supported in this browser.',
    hi: 'इस ब्राउज़र में वॉइस रिकग्निशन समर्थित नहीं है।',
    kn: 'ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ವಾಯ್ಸ್ ಗುರುತಿಸುವಿಕೆ ಬೆಂಬಲಿತವಲ್ಲ.'
  },
  mic_permission_denied: {
    en: 'Microphone permission denied. Please allow mic access.',
    hi: 'माइक्रोफ़ोन की अनुमति अस्वीकृत। कृपया माइक की अनुमति दें।',
    kn: 'ಮೈಕ್ರೋಫೋನ್ ಅನುಮತಿ ನಿರಾಕರಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಮೈಕ್ ಪ್ರವೇಶಕ್ಕೆ ಅನುಮತಿ ನೀಡಿ.'
  },

  // Enhanced FAQ Questions and Answers
  q1_crop_selection: {
    en: 'What crops should I plant in my region?',
    hi: 'मेरे क्षेत्र में कौन सी फसलें लगानी चाहिए?',
    kn: 'ನನ್ನ ಪ್ರದೇಶದಲ್ಲಿ ಯಾವ ಬೆಳೆಗಳನ್ನು ನೆಡಬೇಕು?'
  },
  a1_crop_selection: {
    en: 'Choose crops based on your soil type, climate, and market demand. For clay soil: rice, wheat, sugarcane. For sandy soil: groundnut, millets, cotton. For loamy soil: most vegetables, pulses, and cereals work well.',
    hi: 'अपनी मिट्टी, जलवायु और बाजार की मांग के आधार पर फसलें चुनें। चिकनी मिट्टी के लिए: चावल, गेहूं, गन्ना। रेतीली मिट्टी के लिए: मूंगफली, बाजरा, कपास। दोमट मिट्टी के लिए: अधिकांश सब्जियां, दालें और अनाज अच्छे से उगते हैं।',
    kn: 'ನಿಮ್ಮ ಮಣ್ಣಿನ ಪ್ರಕಾರ, ಹವಾಮಾನ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೇಡಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ಬೆಳೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಕೆಸರು ಮಣ್ಣಿಗೆ: ಅಕ್ಕಿ, ಗೋಧಿ, ಕಬ್ಬು. ಮರಳು ಮಣ್ಣಿಗೆ: ಕಡಲೆ, ಸಜ್ಜೆ, ಹತ್ತಿ. ಮಿಶ್ರ ಮಣ್ಣಿಗೆ: ಹೆಚ್ಚಿನ ತರಕಾರಿಗಳು, ಪಲ್ಸೆಗಳು ಮತ್ತು ಧಾನ್ಯಗಳು ಚೆನ್ನಾಗಿ ಬೆಳೆಯುತ್ತವೆ.'
  },

  q2_pest_control: {
    en: 'How to control pests naturally?',
    hi: 'कीटों को प्राकृतिक रूप से कैसे नियंत्रित करें?',
    kn: 'ಕೀಟಗಳನ್ನು ನೈಸರ್ಗಿಕವಾಗಿ ಹೇಗೆ ನಿಯಂತ್ರಿಸಬೇಕು?'
  },
  a2_pest_control: {
    en: 'Use neem oil spray, garlic-chili solution, or companion planting. Plant marigold, basil, or mint around crops. Remove infected plants immediately. Use biological controls like ladybugs for aphids.',
    hi: 'नीम तेल स्प्रे, लहसुन-मिर्च का घोल, या साथी पौधे लगाएं। फसलों के आसपास गेंदा, तुलसी या पुदीना लगाएं। संक्रमित पौधों को तुरंत हटाएं। एफिड्स के लिए लेडीबग जैसे जैविक नियंत्रण का उपयोग करें।',
    kn: 'ನೀಂ ಎಣ್ಣೆ ಸ್ಪ್ರೇ, ಬೆಳ್ಳುಳ್ಳಿ-ಮೆಣಸಿನಕಾಯಿ ದ್ರಾವಣ, ಅಥವಾ ಸಹವಾಸಿ ಬೆಳೆಗಳನ್ನು ಬಳಸಿ. ಬೆಳೆಗಳ ಸುತ್ತ ಚೆಂಡುಹೂವು, ತುಳಸಿ, ಅಥವಾ ಪುದೀನ ಬೆಳೆಯಿರಿ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತಕ್ಷಣ ತೆಗೆದುಹಾಕಿ. ಏಫಿಡ್ಗಳಿಗೆ ಲೇಡಿಬಗ್‌ಗಳಂತಹ ಜೈವಿಕ ನಿಯಂತ್ರಣಗಳನ್ನು ಬಳಸಿ.'
  },

  q3_irrigation_methods: {
    en: 'What are the best irrigation methods?',
    hi: 'सबसे अच्छी सिंचाई विधियां कौन सी हैं?',
    kn: 'ಉತ್ತಮ ನೀರಾವರಿ ವಿಧಾನಗಳು ಯಾವುವು?'
  },
  a3_irrigation_methods: {
    en: 'Drip irrigation saves 30-50% water and is best for vegetables. Sprinkler irrigation is good for cereals. Flood irrigation for rice. Use mulching to retain soil moisture. Water early morning or evening to reduce evaporation.',
    hi: 'ड्रिप सिंचाई 30-50% पानी बचाती है और सब्जियों के लिए सबसे अच्छी है। अनाज के लिए स्प्रिंकलर सिंचाई अच्छी है। चावल के लिए बाढ़ सिंचाई। मिट्टी की नमी बनाए रखने के लिए मल्चिंग का उपयोग करें। वाष्पीकरण कम करने के लिए सुबह या शाम को पानी दें।',
    kn: 'ಡ್ರಿಪ್ ನೀರಾವರಿ 30-50% ನೀರನ್ನು ಉಳಿಸುತ್ತದೆ ಮತ್ತು ತರಕಾರಿಗಳಿಗೆ ಉತ್ತಮ. ಧಾನ್ಯಗಳಿಗೆ ಸ್ಪ್ರಿಂಕ್ಲರ್ ನೀರಾವರಿ ಒಳ್ಳೆಯದು. ಅಕ್ಕಿಗೆ ಪ್ರವಾಹ ನೀರಾವರಿ. ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಉಳಿಸಲು ಮಲ್ಚಿಂಗ್ ಬಳಸಿ. ಆವಿಯಾಗುವಿಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಬೆಳಿಗ್ಗೆ ಅಥವಾ ಸಂಜೆ ನೀರು ಹಾಕಿ.'
  },

  q4_harvesting_time: {
    en: 'When is the best time to harvest crops?',
    hi: 'फसलों की कटाई का सबसे अच्छा समय कब है?',
    kn: 'ಬೆಳೆಗಳನ್ನು ಕೊಯ್ಯುವ ಉತ್ತಮ ಸಮಯ ಯಾವಾಗ?'
  },
  a4_harvesting_time: {
    en: 'Harvest in the morning when plants are fresh. For grains: when 80% of grains are mature. For vegetables: when they reach optimal size and color. For fruits: when they are firm but yield to gentle pressure.',
    hi: 'सुबह के समय कटाई करें जब पौधे ताजे हों। अनाज के लिए: जब 80% अनाज पके हों। सब्जियों के लिए: जब वे इष्टतम आकार और रंग तक पहुंच जाएं। फलों के लिए: जब वे दृढ़ हों लेकिन हल्के दबाव में नरम हों।',
    kn: 'ಸಸ್ಯಗಳು ತಾಜಾ ಇರುವಾಗ ಬೆಳಿಗ್ಗೆ ಕೊಯ್ಯಿರಿ. ಧಾನ್ಯಗಳಿಗೆ: 80% ಧಾನ್ಯಗಳು ಪಕ್ವವಾದಾಗ. ತರಕಾರಿಗಳಿಗೆ: ಅವು ಸೂಕ್ತ ಗಾತ್ರ ಮತ್ತು ಬಣ್ಣವನ್ನು ತಲುಪಿದಾಗ. ಹಣ್ಣುಗಳಿಗೆ: ಅವು ಗಟ್ಟಿಯಾಗಿದ್ದರೂ ಸೌಮ್ಯ ಒತ್ತಡಕ್ಕೆ ಬಾಗುವಾಗ.'
  },

  q5_soil_preparation: {
    en: 'How to prepare soil for planting?',
    hi: 'रोपण के लिए मिट्टी कैसे तैयार करें?',
    kn: 'ನೆಡುವಿಕೆಗೆ ಮಣ್ಣನ್ನು ಹೇಗೆ ಸಿದ್ಧಪಡಿಸಬೇಕು?'
  },
  a5_soil_preparation: {
    en: 'Plow the field 2-3 times, remove weeds and stones. Add organic compost or farmyard manure. Level the field for uniform water distribution. Test soil pH and add lime if acidic, sulfur if alkaline.',
    hi: 'खेत को 2-3 बार जोतें, खरपतवार और पत्थर हटाएं। जैविक कंपोस्ट या गोबर की खाद डालें। समान पानी वितरण के लिए खेत को समतल करें। मिट्टी का pH परीक्षण करें और अम्लीय हो तो चूना, क्षारीय हो तो सल्फर मिलाएं।',
    kn: 'ನೆಲವನ್ನು 2-3 ಬಾರಿ ಉಳುಮೆ ಮಾಡಿ, ಕಳೆ ಮತ್ತು ಕಲ್ಲುಗಳನ್ನು ತೆಗೆದುಹಾಕಿ. ಜೈವಿಕ ಕಂಪೋಸ್ಟ್ ಅಥವಾ ಗೊಬ್ಬರದ ಗೊಬ್ಬರ ಸೇರಿಸಿ. ಏಕರೂಪದ ನೀರು ವಿತರಣೆಗೆ ನೆಲವನ್ನು ಸಮತಟ್ಟು ಮಾಡಿ. ಮಣ್ಣಿನ pH ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಆಮ್ಲೀಯವಾಗಿದ್ದರೆ ಚುನ್ನ, ಕ್ಷಾರೀಯವಾಗಿದ್ದರೆ ಗಂಧಕ ಸೇರಿಸಿ.'
  },

  q6_fertilizer_usage: {
    en: 'How much fertilizer should I use?',
    hi: 'मुझे कितनी खाद का उपयोग करना चाहिए?',
    kn: 'ನಾನು ಎಷ್ಟು ಗೊಬ್ಬರ ಬಳಸಬೇಕು?'
  },
  a6_fertilizer_usage: {
    en: 'Conduct a soil test first. Generally: 80-120 kg N, 40-60 kg P2O5, 40-60 kg K2O per hectare for cereals. For vegetables: 100-150 kg N, 50-80 kg P2O5, 80-120 kg K2O. Split application is better than single dose.',
    hi: 'पहले मिट्टी का परीक्षण करें। सामान्यतः: अनाज के लिए प्रति हेक्टेयर 80-120 किग्रा N, 40-60 किग्रा P2O5, 40-60 किग್ರा K2O। सब्जियों के लिए: 100-150 किग्रा N, 50-80 किग्रा P2O5, 80-120 किग्रा K2O। एक बार में देने से बेहतर है विभाजित अनुप्रयोग।',
    kn: 'ಮೊದಲು ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ ಮಾಡಿ. ಸಾಮಾನ್ಯವಾಗಿ: ಧಾನ್ಯಗಳಿಗೆ ಹೆಕ್ಟೇರಿಗೆ 80-120 ಕೆಜಿ N, 40-60 ಕೆಜಿ P2O5, 40-60 ಕೆಜಿ K2O. ತರಕಾರಿಗಳಿಗೆ: 100-150 ಕೆಜಿ N, 50-80 ಕೆಜಿ P2O5, 80-120 ಕೆಜಿ K2O. ಏಕೈಕ ಡೋಸ್‌ಗಿಂತ ವಿಭಜಿತ ಅನ್ವಯ ಉತ್ತಮ.'
  },

  q7_crop_rotation: {
    en: 'What is crop rotation and why is it important?',
    hi: 'फसल चक्र क्या है और यह क्यों महत्वपूर्ण है?',
    kn: 'ಬೆಳೆ ಪರಿವರ್ತನೆ ಎಂದರೇನು ಮತ್ತು ಅದು ಏಕೆ ಮುಖ್ಯ?'
  },
  a7_crop_rotation: {
    en: 'Crop rotation means growing different crops in sequence on the same land. It prevents soil depletion, reduces pests and diseases, improves soil structure, and maintains fertility. Example: Rice-Wheat-Pulses or Maize-Soybean-Wheat.',
    hi: 'फसल चक्र का मतलब है एक ही जमीन पर अलग-अलग फसलें क्रम से उगाना। यह मिट्टी की कमी को रोकता है, कीटों और बीमारियों को कम करता है, मिट्टी की संरचना में सुधार करता है और उर्वरता बनाए रखता है। उदाहरण: चावल-गेहूं-दालें या मक्का-सोयाबीन-गेहूं।',
    kn: 'ಬೆಳೆ ಪರಿವರ್ತನೆ ಎಂದರೆ ಅದೇ ಭೂಮಿಯಲ್ಲಿ ವಿಭಿನ್ನ ಬೆಳೆಗಳನ್ನು ಅನುಕ್ರಮವಾಗಿ ಬೆಳೆಯುವುದು. ಇದು ಮಣ್ಣಿನ ಕೊರತೆಯನ್ನು ತಡೆಯುತ್ತದೆ, ಕೀಟಗಳು ಮತ್ತು ರೋಗಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಮಣ್ಣಿನ ರಚನೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ ಮತ್ತು ಫಲವತ್ತತೆಯನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ. ಉದಾಹರಣೆ: ಅಕ್ಕಿ-ಗೋಧಿ-ಪಲ್ಸೆಗಳು ಅಥವಾ ಜೋಳ-ಸೋಯಾಬೀನ್-ಗೋಧಿ.'
  },

  q8_weed_control: {
    en: 'How to control weeds effectively?',
    hi: 'खरपतवार को प्रभावी ढंग से कैसे नियंत्रित करें?',
    kn: 'ಕಳೆಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಹೇಗೆ ನಿಯಂತ್ರಿಸಬೇಕು?'
  },
  a8_weed_control: {
    en: 'Use pre-emergence herbicides before weeds appear. Hand weeding is most effective but labor-intensive. Mulching prevents weed growth. Use stale seedbed technique: prepare soil, let weeds grow, then kill them before planting.',
    hi: 'खरपतवार दिखने से पहले प्री-इमर्जेंस हर्बिसाइड्स का उपयोग करें। हाथ से निराई सबसे प्रभावी है लेकिन श्रम-गहन है। मल्चिंग खरपतवार के विकास को रोकती है। स्टेल सीडबेड तकनीक का उपयोग करें: मिट्टी तैयार करें, खरपतवार उगने दें, फिर रोपण से पहले उन्हें मारें।',
    kn: 'ಕಳೆಗಳು ಕಾಣಿಸಿಕೊಳ್ಳುವ ಮೊದಲು ಪ್ರೀ-ಎಮರ್ಜೆನ್ಸ್ ಕಳೆನಾಶಕಗಳನ್ನು ಬಳಸಿ. ಕೈಯಿಂದ ಕಳೆ ತೆಗೆಯುವುದು ಅತ್ಯಂತ ಪರಿಣಾಮಕಾರಿ ಆದರೆ ಕಾರ್ಮಿಕ-ತೀವ್ರ. ಮಲ್ಚಿಂಗ್ ಕಳೆ ಬೆಳವಣಿಗೆಯನ್ನು ತಡೆಯುತ್ತದೆ. ಸ್ಟೇಲ್ ಸೀಡ್‌ಬೆಡ್ ತಂತ್ರವನ್ನು ಬಳಸಿ: ಮಣ್ಣನ್ನು ಸಿದ್ಧಪಡಿಸಿ, ಕಳೆಗಳು ಬೆಳೆಯಲು ಬಿಡಿ, ನಂತರ ನೆಡುವಿಕೆಗೆ ಮೊದಲು ಅವುಗಳನ್ನು ಕೊಲ್ಲಿ.'
  },

  q9_water_management: {
    en: 'How to manage water efficiently in farming?',
    hi: 'खेती में पानी का कुशल प्रबंधन कैसे करें?',
    kn: 'ಕೃಷಿಯಲ್ಲಿ ನೀರನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಹೇಗೆ ನಿರ್ವಹಿಸಬೇಕು?'
  },
  a9_water_management: {
    en: 'Use drip or sprinkler irrigation. Collect rainwater in ponds or tanks. Practice mulching to reduce evaporation. Choose drought-resistant crop varieties. Schedule irrigation based on crop needs, not fixed timings.',
    hi: 'ड्रिप या स्प्रिंकलर सिंचाई का उपयोग करें। तालाबों या टैंकों में वर्षा जल एकत्र करें। वाष्पीकरण कम करने के लिए मल्चिंग का अभ्यास करें। सूखा-प्रतिरोधी फसल किस्में चुनें। निश्चित समय के बजाय फसल की जरूरतों के आधार पर सिंचाई का समय निर्धारित करें।',
    kn: 'ಡ್ರಿಪ್ ಅಥವಾ ಸ್ಪ್ರಿಂಕ್ಲರ್ ನೀರಾವರಿ ಬಳಸಿ. ಕೊಳಗಳು ಅಥವಾ ಟ್ಯಾಂಕ್‌ಗಳಲ್ಲಿ ಮಳೆನೀರು ಸಂಗ್ರಹಿಸಿ. ಆವಿಯಾಗುವಿಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಮಲ್ಚಿಂಗ್ ಅಭ್ಯಾಸ ಮಾಡಿ. ಬರ-ನಿರೋಧಕ ಬೆಳೆ ವಿಧಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ನಿಗದಿತ ಸಮಯಕ್ಕೆ ಬದಲಾಗಿ ಬೆಳೆಯ ಅಗತ್ಯಗಳ ಆಧಾರದ ಮೇಲೆ ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿ ಮಾಡಿ.'
  },

  q10_seed_selection: {
    en: 'How to choose the right seeds?',
    hi: 'सही बीज कैसे चुनें?',
    kn: 'ಸರಿಯಾದ ಬೀಜಗಳನ್ನು ಹೇಗೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?'
  },
  a10_seed_selection: {
    en: 'Choose certified seeds from reliable sources. Select varieties suitable for your climate and soil. Check seed purity, germination rate, and disease resistance. Buy from government agencies or reputed private companies.',
    hi: 'विश्वसनीय स्रोतों से प्रमाणित बीज चुनें। अपनी जलवायु और मिट्टी के लिए उपयुक्त किस्में चुनें। बीज की शुद्धता, अंकुरण दर और रोग प्रतिरोधक क्षमता की जांच करें। सरकारी एजेंसियों या प्रतिष्ठित निजी कंपनियों से खरीदें।',
    kn: 'ವಿಶ್ವಾಸಾರ್ಹ ಮೂಲಗಳಿಂದ ಪ್ರಮಾಣೀಕೃತ ಬೀಜಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ನಿಮ್ಮ ಹವಾಮಾನ ಮತ್ತು ಮಣ್ಣಿಗೆ ಸೂಕ್ತವಾದ ವಿಧಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಬೀಜದ ಶುದ್ಧತೆ, ಮೊಳಕೆಯ ದರ ಮತ್ತು ರೋಗ ನಿರೋಧಕತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ. ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಗಳು ಅಥವಾ ಪ್ರತಿಷ್ಠಿತ ಖಾಸಗಿ ಕಂಪನಿಗಳಿಂದ ಖರೀದಿಸಿ.'
  },

  q11_organic_farming: {
    en: 'How to start organic farming?',
    hi: 'जैविक खेती कैसे शुरू करें?',
    kn: 'ಜೈವಿಕ ಕೃಷಿಯನ್ನು ಹೇಗೆ ಪ್ರಾರಂಭಿಸಬೇಕು?'
  },
  a11_organic_farming: {
    en: 'Start with soil health: add compost, green manure, and organic matter. Use organic pesticides like neem oil. Practice crop rotation and intercropping. Avoid synthetic fertilizers and pesticides. Get organic certification for better market prices.',
    hi: 'मिट्टी के स्वास्थ्य से शुरुआत करें: कंपोस्ट, हरी खाद और जैविक पदार्थ डालें। नीम तेल जैसे जैविक कीटनाशकों का उपयोग करें। फसल चक्र और अंतर-फसल का अभ्यास करें। सिंथेटिक उर्वरकों और कीटनाशकों से बचें। बेहतर बाजार मूल्य के लिए जैविक प्रमाणन प्राप्त करें।',
    kn: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯದಿಂದ ಪ್ರಾರಂಭಿಸಿ: ಕಂಪೋಸ್ಟ್, ಹಸಿರು ಗೊಬ್ಬರ ಮತ್ತು ಜೈವಿಕ ವಸ್ತುಗಳನ್ನು ಸೇರಿಸಿ. ನೀಂ ಎಣ್ಣೆಯಂತಹ ಜೈವಿಕ ಕೀಟನಾಶಕಗಳನ್ನು ಬಳಸಿ. ಬೆಳೆ ಪರಿವರ್ತನೆ ಮತ್ತು ಅಂತರ-ಬೆಳೆ ಅಭ್ಯಾಸ ಮಾಡಿ. ಸಂಶ್ಲೇಷಿತ ಗೊಬ್ಬರಗಳು ಮತ್ತು ಕೀಟನಾಶಕಗಳನ್ನು ತಪ್ಪಿಸಿ. ಉತ್ತಮ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳಿಗೆ ಜೈವಿಕ ಪ್ರಮಾಣೀಕರಣ ಪಡೆಯಿರಿ.'
  },

  q12_storage_methods: {
    en: 'How to store harvested crops properly?',
    hi: 'कटी हुई फसलों को ठीक से कैसे स्टोर करें?',
    kn: 'ಕೊಯ್ದ ಬೆಳೆಗಳನ್ನು ಸರಿಯಾಗಿ ಹೇಗೆ ಸಂಗ್ರಹಿಸಬೇಕು?'
  },
  a12_storage_methods: {
    en: 'Clean and dry crops before storage. Use airtight containers or bags. Store in cool, dry, and well-ventilated areas. Check regularly for pests and moisture. Use natural preservatives like neem leaves for grains.',
    hi: 'भंडारण से पहले फसलों को साफ और सुखाएं। हवा-रोधी कंटेनर या बैग का उपयोग करें। ठंडी, सूखी और अच्छी तरह हवादार जगहों में स्टोर करें। कीटों और नमी के लिए नियमित रूप से जांच करें। अनाज के लिए नीम के पत्ते जैसे प्राकृतिक परिरक्षकों का उपयोग करें।',
    kn: 'ಸಂಗ್ರಹಣೆಗೆ ಮೊದಲು ಬೆಳೆಗಳನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ ಮತ್ತು ಒಣಗಿಸಿ. ಗಾಳಿ-ನಿರೋಧಕ ಕಂಟೇನರ್‌ಗಳು ಅಥವಾ ಚೀಲಗಳನ್ನು ಬಳಸಿ. ತಂಪಾದ, ಒಣ ಮತ್ತು ಚೆನ್ನಾಗಿ ಗಾಳಿ ಬೀಸುವ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ. ಕೀಟಗಳು ಮತ್ತು ತೇವಾಂಶಕ್ಕಾಗಿ ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ. ಧಾನ್ಯಗಳಿಗೆ ನೀಂ ಎಲೆಗಳಂತಹ ನೈಸರ್ಗಿಕ ಸಂರಕ್ಷಕಗಳನ್ನು ಬಳಸಿ.'
  },

  q13_market_timing: {
    en: 'When is the best time to sell crops?',
    hi: 'फसलें बेचने का सबसे अच्छा समय कब है?',
    kn: 'ಬೆಳೆಗಳನ್ನು ಮಾರಾಟ ಮಾಡುವ ಉತ್ತಮ ಸಮಯ ಯಾವಾಗ?'
  },
  a13_market_timing: {
    en: 'Sell when prices are high, usually during off-season or when supply is low. Monitor market prices regularly. Store crops if prices are low and sell when they rise. Consider government procurement schemes for guaranteed prices.',
    hi: 'जब कीमतें अधिक हों तब बेचें, आमतौर पर ऑफ-सीजन के दौरान या जब आपूर्ति कम हो। बाजार की कीमतों की नियमित रूप से निगरानी करें। कीमतें कम हों तो फसलें स्टोर करें और बढ़ने पर बेचें। गारंटीकृत कीमतों के लिए सरकारी खरीद योजनाओं पर विचार करें।',
    kn: 'ಬೆಲೆಗಳು ಹೆಚ್ಚಾಗಿರುವಾಗ ಮಾರಾಟ ಮಾಡಿ, ಸಾಮಾನ್ಯವಾಗಿ ಆಫ್-ಸೀಸನ್ ಸಮಯದಲ್ಲಿ ಅಥವಾ ಪೂರೈಕೆ ಕಡಿಮೆಯಿರುವಾಗ. ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ. ಬೆಲೆಗಳು ಕಡಿಮೆಯಾಗಿದ್ದರೆ ಬೆಳೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ ಮತ್ತು ಅವು ಏರಿದಾಗ ಮಾರಾಟ ಮಾಡಿ. ಖಾತರಿ ಬೆಲೆಗಳಿಗೆ ಸರ್ಕಾರಿ ಖರೀದಿ ಯೋಜನೆಗಳನ್ನು ಪರಿಗಣಿಸಿ.'
  },

  q14_disease_prevention: {
    en: 'How to prevent crop diseases?',
    hi: 'फसल की बीमारियों को कैसे रोकें?',
    kn: 'ಬೆಳೆ ರೋಗಗಳನ್ನು ಹೇಗೆ ತಡೆಯಬೇಕು?'
  },
  a14_disease_prevention: {
    en: 'Use disease-resistant varieties. Practice crop rotation. Maintain proper spacing between plants. Remove infected plants immediately. Use clean seeds and tools. Avoid overhead watering to prevent fungal diseases.',
    hi: 'रोग-प्रतिरोधी किस्मों का उपयोग करें। फसल चक्र का अभ्यास करें। पौधों के बीच उचित दूरी बनाए रखें। संक्रमित पौधों को तुरंत हटाएं। साफ बीज और उपकरणों का उपयोग करें। फंगल रोगों को रोकने के लिए ओवरहेड वाटरिंग से बचें।',
    kn: 'ರೋಗ-ನಿರೋಧಕ ವಿಧಗಳನ್ನು ಬಳಸಿ. ಬೆಳೆ ಪರಿವರ್ತನೆ ಅಭ್ಯಾಸ ಮಾಡಿ. ಸಸ್ಯಗಳ ನಡುವೆ ಸರಿಯಾದ ಅಂತರವನ್ನು ನಿರ್ವಹಿಸಿ. ಸೋಂಕಿತ ಸಸ್ಯಗಳನ್ನು ತಕ್ಷಣ ತೆಗೆದುಹಾಕಿ. ಸ್ವಚ್ಛ ಬೀಜಗಳು ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ಬಳಸಿ. ಫಂಗಲ್ ರೋಗಗಳನ್ನು ತಡೆಯಲು ಓವರ್‌ಹೆಡ್ ನೀರುಹಾಕುವಿಕೆಯನ್ನು ತಪ್ಪಿಸಿ.'
  },

  q15_profit_maximization: {
    en: 'How to maximize farming profits?',
    hi: 'खेती के मुनाफे को कैसे बढ़ाएं?',
    kn: 'ಕೃಷಿ ಲಾಭವನ್ನು ಹೇಗೆ ಗರಿಷ್ಠಗೊಳಿಸಬೇಕು?'
  },
  a15_profit_maximization: {
    en: 'Choose high-value crops with good market demand. Reduce input costs through efficient resource use. Practice mixed farming (crops + livestock). Use modern technology and techniques. Build direct market connections to avoid middlemen.',
    hi: 'अच्छी बाजार मांग वाली उच्च-मूल्य वाली फसलें चुनें। कुशल संसाधन उपयोग के माध्यम से इनपुट लागत कम करें। मिश्रित खेती (फसलें + पशुपालन) का अभ्यास करें। आधुनिक तकनीक और तरीकों का उपयोग करें। बिचौलियों से बचने के लिए सीधे बाजार कनेक्शन बनाएं।',
    kn: 'ಉತ್ತಮ ಮಾರುಕಟ್ಟೆ ಬೇಡಿಕೆಯಿರುವ ಹೆಚ್ಚಿನ-ಮೌಲ್ಯದ ಬೆಳೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಪರಿಣಾಮಕಾರಿ ಸಂಪನ್ಮೂಲ ಬಳಕೆಯ ಮೂಲಕ ಇನ್ಪುಟ್ ವೆಚ್ಚಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಿ. ಮಿಶ್ರ ಕೃಷಿ (ಬೆಳೆಗಳು + ಪಶುಪಾಲನೆ) ಅಭ್ಯಾಸ ಮಾಡಿ. ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ತಂತ್ರಗಳನ್ನು ಬಳಸಿ. ಮಧ್ಯಸ್ಥರನ್ನು ತಪ್ಪಿಸಲು ನೇರ ಮಾರುಕಟ್ಟೆ ಸಂಪರ್ಕಗಳನ್ನು ನಿರ್ಮಿಸಿ.'
  }
};