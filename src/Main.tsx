import App from './App'
import { PaperProvider } from 'react-native-paper'
import { store } from './store/store'
import { Provider as StoreProvider } from 'react-redux'

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  )
}
