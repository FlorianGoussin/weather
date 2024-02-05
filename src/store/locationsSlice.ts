import { createSlice } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type Location } from '@/types/weather'

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
    },
    removeLocation: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (location: Location) => location.name !== action.payload
      )
    }
  }
})

export const { addLocation, removeLocation } = locationsSlice.actions
export default locationsSlice.reducer
