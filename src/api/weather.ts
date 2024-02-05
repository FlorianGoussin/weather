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

export async function current(q: string): Promise<CurrentWeather | null> {
  try {
    const { data } = await axios.get<CurrentWeather>(`${WEATHER_API_URL}`, {
      params: {
        key: WEATHER_API_KEY,
        q,
        aqi: 'no'
      }
    })
    return data
  } catch (e) {
    console.error(e)
    return null
  }
}
