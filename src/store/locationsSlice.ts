import { createSlice } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type CurrentResponse } from '@/types/weather'

interface Location {
  lat: number
  lon: number
}

export interface LocationListState {
  value: Location[]
}

const initialState: LocationListState = {
  value: []
}

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    addLocation: (state, action: PayloadAction<Location>) => {
      state.value = state.value.concat(action.payload)
    }
  }
})

export const { addLocation } = locationsSlice.actions
export default locationsSlice.reducer
