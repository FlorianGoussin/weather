import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '@/types/navigation'
// import { Background, Button, TextInput, BackButton } from '@/components'
import Search from '@/components/Search'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <div>
      <Search />
    </div>
  )
}
