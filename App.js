import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './src/components/Home'
import MemoryName from './src/pages/MemoryName'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          option={{ title: 'Wellcome' }}
        />
        <Stack.Screen
          name="MemoryName"
          component={MemoryName}
          option={{ title: 'Memory name' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 18,
    color: 'white',
  },
})
