import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Home({ title, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Image source={require('../asset/a.jpg')} />
      <Text
        style={styles.button}
        onPress={() => navigation.navigate('MemoryName', { limit: 200 })}
      >
        Chuyển sang trang khác
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
    // flexDirection: 'column',
  },
})
