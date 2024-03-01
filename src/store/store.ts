import { configureStore } from '@reduxjs/toolkit'
import locationsReducer from './locationsSlice'
// import { currentWeatherApi } from '@/api/weather'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { useDispatch } from 'react-redux'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    auth: authReducer
    // [currentWeatherApi.reducerPath]: currentWeatherApi.reducer
  }
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(currentWeatherApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch // { posts: PostsState, comments: CommentsState, users: UsersState }

// setupListeners(store.dispatch)
export const useAppDispatch = () => useDispatch<AppDispatch>()
