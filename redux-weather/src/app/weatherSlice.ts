import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherData, WeatherState } from './types';
import { getWeather } from './api';

const initialState: WeatherState = {
  data: null,
  status: 'idle',
};

export const fetchWeather = createAsyncThunk<WeatherData, string>(
  'weather/fetchWeather',
  async (city: string) => {
    return await getWeather(city);  // API çağrısı burada
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherData>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => { state.status = 'failed'; });
  },
});

export default weatherSlice.reducer;
