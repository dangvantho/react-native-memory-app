import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Home from "./src/components/Home"
import MemoryName from "./src/pages/MemoryName"
import MemoryNumber from "./src/pages/MemoryNumber"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          option={{ title: "Wellcome" }}
        />
        <Stack.Screen
          name="MemoryName"
          component={MemoryName}
          option={{ title: "Memory name" }}
        />
        <Stack.Screen
          name="MemoryNumber"
          component={MemoryNumber}
          options={{ title: "Memory number" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 18,
    color: "white",
  },
})
