import { createSlice } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type CurrentWeather } from '@/types/weather'

export interface CurrentWeatherListState {
  value: CurrentWeather[]
}

const initialState: CurrentWeatherListState = {
  value: []
}

export const currentWeatherListSlice = createSlice({
  name: 'currentWeatherList',
  initialState,
  reducers: {
    addCurrentWeather: (state, action: PayloadAction<CurrentWeather>) => {
      state.value = state.value.concat(action.payload)
    },
    removeCurrentWeather: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (currentWeather: CurrentWeather) =>
          currentWeather.location.name !== action.payload
      )
    }
  }
})

export const { addCurrentWeather, removeCurrentWeather } =
  currentWeatherListSlice.actions
export default currentWeatherListSlice.reducer
