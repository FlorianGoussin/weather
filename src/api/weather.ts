// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { WEATHER_API_URL, WEATHER_API_KEY } from '@env'
// import { type CurrentResponse } from '@/types/weather'

// export const currentWeatherApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: WEATHER_API_URL
//   }),
//   tagTypes: [],
//   endpoints: (builder) => ({
//     getCurrentWeather: builder.query({
//       query: (name: string) =>
//         `current.json/key=${WEATHER_API_KEY}&q=${name}&qi=no`,
//       transformResponse: (response: { data: CurrentResponse }, _meta, _arg) => {

//         return response.data
//       }
//     })
//   })
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetCurrentWeatherQuery } = currentWeatherApi

import axios from 'axios'
import { type CurrentWeather } from '@/types/weather.d'
import { WEATHER_API_URL, WEATHER_API_KEY } from '@env'

type WeatherError = {
  code: number
  message: string
}

export async function getCurrentWeather(
  searchQuery: string
): Promise<CurrentWeather | null> {
  try {
    const url = `${WEATHER_API_URL}/current.json`
    const options = {
      method: 'get',
      params: {
        key: WEATHER_API_KEY,
        q: searchQuery,
        aqi: 'no'
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const { data } = await axios<CurrentWeather>(url, options)
    return data
  } catch (error: unknown) {
    console.error((error as WeatherError).message)
    return null
  }
}
