import { StyleSheet, View, Button, TextInput } from 'react-native'
import { useEffect, useState, useMemo } from 'react'
import { getCurrentWeather } from '@/api/weather'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'

export default function Search() {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    async function fetchCurrentWeather() {
      const response = await getCurrentWeather('Albuquerque')
    }
    fetchCurrentWeather()

    return () => {
      debouncedResults.cancel()
    }
  }, [])

  const debouncedResults = useMemo(() => {
    return debounce(handleChangeText, 300)
  }, [])

  function handleChangeText(newSearchTerm: string) {
    setSearchTerm(newSearchTerm)
  }

  return (
    <View>
      <TextInput
        value={searchTerm}
        placeholder="Search for a city"
        onChangeText={debouncedResults}
        style={styles.input}
      ></TextInput>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})
