import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import Search from './components/Search'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
})

export default function App() {
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={styles.view}>
      <Search />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
