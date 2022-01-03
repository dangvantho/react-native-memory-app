import { firstName, lastName } from "../../const"
import React, { useEffect, useState } from "react"
import { View, StyleSheet, Image, Dimensions, Text, ImageBackground } from "react-native"
import FlatListCustom from "../FlatListCustom"
import peoples from "../../asset/mapImages"
export default function MemoName({ limit }) {
  const [name, setName] = useState([])
  useEffect(() => {
    const random = []
    const names = []
    for (let i = 0; i < limit; i++) {
      names.push(randomName())
    }
    const images = randomImage(limit)
    for (let i = 0; i < limit; i++) {
      random.push({
        title: names[i],
        img: peoples[images[i]],
      })
    }
    setName(random)
  }, [])
  function randomName() {
    return (
      lastName[Math.floor(Math.random() * lastName.length)] +
      " " +
      firstName[Math.floor(Math.random() * firstName.length)]
    )
  }
  function randomImage(limit) {
    let images = []
    let result = []
    for (let i = 1; i <= 1000; i++) {
      const path = `00000${i}`
      images.push(`${path.slice(path.length - 6)}`)
    }
    for (let i = 1; i <= limit; i++) {
      const imgIndex = Math.floor(Math.random() * images.length)
      result.push(images[imgIndex])
      images = [...images.slice(0, imgIndex), ...images.slice(imgIndex + 1)]
    }
    return result
  }
  return (
    <View style={styles.container}>
      <FlatListCustom
        items={name}
        keyExtractor={(item) => item.img}
        numColumns={2}
        renderItem={DefaultItem}
      />
    </View>
  )
}
const DefaultItem = ({
  item,
  height = 'auto',
  color = "#fff",
  bg = "blue",
}) => {
  return (
    <View
      style={{
        ...styles.items,
        height,
        backgroundColor: item.transparent ? "transparent" : bg,
      }}
    >
      <View style={styles.img}>
        <ImageBackground style={{ width: '100%', height: '100%' }} source={item.img} />
        {/* <Image style={{}} resizeMode={"contain"} source={item.img} /> */}
      </View>
      <Text style={{ ...styles.text, color }}>{item.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  items: {
    justifyContent: 'space-between',
    alignItems: "center",
    margin: 1,
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginVertical: 10
  },
  img: {
    width: '100%',
    height: 200
  },
})
