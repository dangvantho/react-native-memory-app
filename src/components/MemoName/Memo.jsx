import { firstName, lastName } from '../../const'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import Item from './Item.jsx'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-web'

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
        name: names[i],
        img: images[i],
      })
    }
    setName(random)
  }, [])
  function randomName() {
    return (
      lastName[Math.floor(Math.random() * lastName.length)] +
      ' ' +
      firstName[Math.floor(Math.random() * firstName.length)]
    )
  }
  function randomImage(limit) {
    let images = []
    let result = []
    for (let i = 1; i <= 1000; i++) {
      const path = `00000${i}`
      images.push(`${path.slice(path.length - 6)}.jpg`)
    }
    for (let i = 1; i <= limit; i++) {
      const imgIndex = Math.floor(Math.random() * images.length)
      result.push(images[imgIndex])
      images = [...images.slice(0, imgIndex), ...images.slice(imgIndex + 1)]
    }
    return result
  }
  return (
    <SafeAreaView>
      <FlatList
        data={name}
        renderItem={Item}
        keyExtractor={(item) => item.img}
      />
    </SafeAreaView>
  )
}
