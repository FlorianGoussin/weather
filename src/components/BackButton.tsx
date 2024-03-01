import React from 'react'
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  GestureResponderEvent
} from 'react-native'

type Props = {
  goBack: (event: GestureResponderEvent) => void
}

export default function BackButton({ goBack }: Props) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 4
  },
  image: {
    width: 24,
    height: 24
  }
})
