import { configureStore } from '@reduxjs/toolkit'
import locationsReducer from './locationsSlice'

export const store = configureStore({
  reducer: {
    locations: locationsReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch // { posts: PostsState, comments: CommentsState, users: UsersState }
