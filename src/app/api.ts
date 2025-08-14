import { WeatherData } from './types';

const API_KEY = 'api-key';

export const getWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Hava durumu alınamadı');
  }

  const data: WeatherData = await response.json();
  return data;
};
