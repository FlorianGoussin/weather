import { StyleSheet, View, Text, Button } from 'react-native'
import { useState } from 'react'
import { getCurrentWeather } from '@/api/weather'
// import { useDispatch } from 'react-redux'
import { Searchbar } from 'react-native-paper'

export default function Search() {
  // const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState<string>('')

  // function handleButtonPress() {
  //   async function fetchCurrentWeather() {
  //     const response = await getCurrentWeather(searchQuery)
  //   }
  //   fetchCurrentWeather()
  // }

  return (
    <View style={styles.view}>
      <Searchbar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search for a city"
        style={styles.input}
      ></Searchbar>
      <Button
        onPress={() => {}}
        title="Add "
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
    flex: 1,
    borderRadius: 0
  }
})
