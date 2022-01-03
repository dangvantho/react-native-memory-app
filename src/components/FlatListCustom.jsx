import React, { useEffect, useState } from "react"
import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native"

const WIDTH = Dimensions.get("window").width
const DefaultItem = ({ item, height = WIDTH / 3, color = '#fff', bg = "blue" }) => {    
  return (
    <View
      style={{
        ...styles.items,
        height,
        backgroundColor: item.transparent ? "transparent" : bg,
      }}
    >
      <Text style={{...styles.text, color}}>{item.title}</Text>
    </View>
  )
}
export default (props) => {
  const { items, renderItem, numColumns  = 3 } = props
  const [data, setData] = useState([])
  useEffect(() => {
    const rest =
      items.length - Math.floor(items.length / numColumns) * numColumns
    for (let i = 0; i <= rest; i++) {
      const item = { ...items[0] }
      const emptyItem = {
        transparent: true,
      }
      Object.keys(item).forEach((key) => {
        emptyItem[key] = null
      })
      items.push(emptyItem)
    }
    setData(items)
  }, [items])
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) =>
          renderItem ? (
            renderItem({ item, ...props})
          ) : (
            <DefaultItem {...props} item={item} />
          )
        }
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    flex: 1
  },
  text: {
    fontSize: 16,
  },
})
