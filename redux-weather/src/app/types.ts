export interface Weather {
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  humidity: number;
}

export interface Wind {
  speed: number;
}

export interface WeatherData {
  name: string;
  main: Main;
  weather: Weather[];
  wind: Wind;
}

export interface WeatherState {
  data: WeatherData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
