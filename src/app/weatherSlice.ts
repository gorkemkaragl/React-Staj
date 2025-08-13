import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
  data: null,
  status: 'idle', // idle | loading | succeeded | failed
};

const API_KEY = 'BURAYA_API_KEYİNİ_YAZ';

//AsyncThunk oluşturma
export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async(city)=>{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data =await response.json();
        return data;//slice a gönderir
    }
)

const weatherSlice = createSlice({
    name:"weather",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchWeather.pending , (state)=>{
            state.status = "loading";
        })
        .addCase(fetchWeather.fulfilled, (state, action)=>{
            state.status ="succeeded";
            state.data =action.payload;
        })
        .addCase(fetchWeather.rejected, (state) => {
        state.status = 'failed';
        })
    },

})

export default weatherSlice.reducer;
