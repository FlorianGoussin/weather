import App from './App'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
import { store } from './store/store'
import { Provider as StoreProvider } from 'react-redux'
import { theme } from './Theme'

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  )
}
