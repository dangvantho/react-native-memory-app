import React from 'react'
import { View, Text, StyleSheet, Image, Button  } from 'react-native'
// import peoples from '../asset/mapImages'

export default function Home({ title, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {/* <Image source={peoples['000001']} /> */}
      <Button
        title={'Ghi nhớ tên và khuôn mặt'}
        style={{}}
        onPress={() => navigation.navigate('MemoryName', { limit: 100 })}
      />
      <Button
        title={'Ghi nhớ số'}
        style={styles.button}
        onPress={() => navigation.navigate('MemoryNumber', { limit: 100 })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 14,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'red'
  },
})
