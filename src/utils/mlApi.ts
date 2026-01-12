/**
 * ML API client for crop prediction
 * Interfaces with the Python TensorFlow API
 */

interface CropFeatures {
  soil_ph: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  organic_carbon: number;
  soil_texture: string;
  rainfall: number;
  temperature: number;
  humidity: number;
}

interface PredictionResponse {
  recommended_crop: string;
  probabilities: Record<string, number>;
}

/**
 * Predicts the most suitable crop based on soil and weather features
 * @param features Soil and weather features for prediction
 * @returns Promise with prediction results
 */
export async function predictCrop(features: CropFeatures): Promise<PredictionResponse> {
  const apiUrl = import.meta.env.VITE_ML_API_URL || 'http://localhost:5000';
  
  try {
    if (!navigator.onLine) {
      throw new Error('Offline');
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const response = await fetch(`${apiUrl}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(features),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data as PredictionResponse;
  } catch (error) {
    console.error('Error predicting crop:', error);
    // Fallback: simple heuristic from existing util if offline or API fails
    // We avoid importing heavy logic here to keep coupling low; the UI already
    // falls back to generateCropRecommendations.
    throw error;
  }
}

export async function isMlAvailable(): Promise<boolean> {
  const apiUrl = import.meta.env.VITE_ML_API_URL || 'http://localhost:5000';
  try {
    if (!navigator.onLine) return false;
    const cached = sessionStorage.getItem('mlHealthOkAt');
    if (cached && Date.now() - Number(cached) < 60_000) return true;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(`${apiUrl}/health`, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) return false;
    sessionStorage.setItem('mlHealthOkAt', String(Date.now()));
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if the ML API is available
 * @returns Promise with health status
 */
export async function checkMlApiHealth(): Promise<{status: string; classes?: string[]}> {
  const apiUrl = import.meta.env.VITE_ML_API_URL || 'http://localhost:5000';
  
  try {
    const response = await fetch(`${apiUrl}/health`);
    
    if (!response.ok) {
      throw new Error(`Health check failed with status ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('ML API health check failed:', error);
    throw error;
  }
}