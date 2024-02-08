import { StyleSheet, View, Text } from 'react-native'
import { useState } from 'react'
import { getCurrentWeather } from '@/api/weather'
import { Searchbar } from 'react-native-paper'
import { type CurrentWeather } from '@/types/weather.d'
import { useDebounce } from '@/hooks/useDebounce'

export default function Search() {
  const [data, setData] = useState<CurrentWeather | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const debounced = useDebounce(() => {
    async function fetchCurrentWeather() {
      if (searchQuery) {
        console.log('debounced searchQuery:', searchQuery)
        setData(await getCurrentWeather(searchQuery))
      }
    }
    fetchCurrentWeather()
  }, 360)

  function handleChangeText(text: string) {
    setSearchQuery(text)
    debounced()
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
      <Text>searchQuery: {searchQuery}</Text>

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
