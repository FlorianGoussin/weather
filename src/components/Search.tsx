import { useMemo, useCallback } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useState } from 'react'
import { getCurrentWeather } from '@/api/weather'
// import { useDispatch } from 'react-redux'
import { Searchbar, Button } from 'react-native-paper'
import { debounce } from 'lodash'
import { type CurrentWeather } from '@/types/weather.d'
import axios from 'axios'

type CatFact = { text: string }

export default function Search() {
  // const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [data, setData] = useState<CurrentWeather | null>(null)

  function sendRequest(newSearch: string) {
    console.log('newSearch:', newSearch)
    async function fetchCurrentWeather() {
      setData(await getCurrentWeather(searchQuery))
    }
    fetchCurrentWeather()
  }

  const debouncedSearch = useMemo(() => {
    return debounce(sendRequest, 1000)
  }, [sendRequest])

  function handleChangeText(newSearch: string) {
    setSearchQuery(newSearch)
    if (newSearch) debouncedSearch(newSearch)
  }

  return (
    <View
      style={{
        flexDirection: 'column'
      }}
    >
      <View style={styles.view}>
        <Searchbar
          value={searchQuery}
          onChangeText={handleChangeText}
          placeholder="Search for a city"
          style={styles.input}
        ></Searchbar>
      </View>

      <Text>{data?.location.country}</Text>
      <Text>{data?.location.name}</Text>
      <Text>{data?.location.localtime}</Text>
      <Text>{data?.location.lat}</Text>
      <Text>{data?.location.lon}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    borderRadius: 0
  }
})
