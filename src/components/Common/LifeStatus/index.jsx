import { View, StyleSheet } from 'react-native'
import React from 'react'

import LottieView from 'lottie-react-native'

export default function LifeStatus() {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay={true}
        Loop={true}
        source={require('../../../assets/education/education-100.json')}
        style={styles.educacaoAnimacao}
      />
      <LottieView
        autoPlay={true}
        Loop={true}
        source={require('../../../assets/money/money-100.json')}
        style={styles.financasAnimacao}
      />
      <LottieView
        autoPlay={true}
        Loop={true}
        source={require('../../../assets/robot/robot-100-100.json')}
        style={styles.roboAnimacao}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300
  },
  roboAnimacao: {
    width: 190,
    marginTop: 30,
    marginLeft: 25
  },
  educacaoAnimacao: {
    width: 100,
    marginTop: 50,
    marginLeft: 5,
    position: 'absolute'
  },
  financasAnimacao: {
    width: 100,
    position: 'absolute',
    marginTop: 50,
    marginLeft: 95
  }
})
