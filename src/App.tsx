import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text } from 'react-native'
import Search from './components/Search'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

export default function App() {
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView
      style={{
        flex: 1
        // paddingTop: insets.top,
        // paddingBottom: insets.bottom
      }}
    >
      <Search />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({})
