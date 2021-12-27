import { View, Image, Text, StyleSheet } from 'react-native-web'
export default function ({ item }) {
  console.log(item)  
  return (<View key={item.img}><Text>{JSON.stringify(item)}</Text></View>)
}
