import React from 'react'
import { Text } from 'react-native-paper'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/types/navigation'

import { Background, Button, TextInput, BackButton } from '@/components'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <Background>
      {/* <Logo /> */}
      <Text>Weather app</Text>
      <Text>Please Login or signup if you are a new user.</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
