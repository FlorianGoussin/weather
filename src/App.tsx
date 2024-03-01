import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  StartScreen,
  HomeScreen,
  RegisterScreen,
  LoginScreen,
  ResetPasswordScreen
} from '@/screens'

const Stack = createStackNavigator()

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
})

export default function App() {
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={styles.view}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
