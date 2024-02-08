import App from './App'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
import { store } from './store/store'
import { Provider as StoreProvider } from 'react-redux'

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  )
}
