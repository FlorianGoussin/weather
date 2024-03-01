import React from 'react'
import { Background, BackButton } from '@/components'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/types/navigation'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
    </Background>
  )
}
