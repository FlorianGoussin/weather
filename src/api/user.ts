import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User, UserData } from '@/types/user'
import { WEATHER_API_URL } from '@env'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: WEATHER_API_URL }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, UserData>({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData
      })
    }),
    loginUser: builder.mutation<User, UserData>({
      query: (userData) => ({
        url: '/login',
        method: 'POST',
        body: userData
      })
    })
  })
})

export const { useRegisterUserMutation, useLoginUserMutation } = authApi
