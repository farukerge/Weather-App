import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let api = "d4d21c73db57739b6a2f6561dbf6e104"
export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (city, rejectedWihValue,) => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error
            }
            return rejectedWihValue(error?.response.data)
         }
     }
)

const initialState = {

}
export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers:{
        [fetchWeatherAction.pending]: (state, action) => {
            state.loading =true
        },
        [fetchWeatherAction.fulfilled]: (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        },
        [fetchWeatherAction.rejected]: (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.action = action?.payload;
        }
    }
})


export default weatherSlice.reducer