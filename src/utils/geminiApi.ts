// Gemini API integration for chatbot

/**
 * Sends a query to the Gemini API and returns the response
 * @param query The user's query text
 * @param language The language code (en, hi, kn)
 * @returns The response text from Gemini or null if there's an error
 */
export async function askGemini(query: string, language: string): Promise<string | null> {
  try {
    // Get API key from environment variables
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    // If no API key is provided, throw an error
    if (!apiKey) {
      console.error('No Gemini API key found. Set VITE_GEMINI_API_KEY in your environment variables.');
      return null;
    }

    // Prepare the request to Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${query}\n\nRespond in ${language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : 'Kannada'} language. Keep your answer brief and focused on agricultural topics.`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    // Check if the response is successful
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      return null;
    }

    // Parse the response
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    return text || null;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return null;
  }
}