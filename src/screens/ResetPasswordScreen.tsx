import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/types/navigation'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>
}

export default function HomeScreen({ navigation }: Props) {
  return <div>Reset Password Screen</div>
}
