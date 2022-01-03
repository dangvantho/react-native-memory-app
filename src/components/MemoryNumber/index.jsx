import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import FlatListCustom from "../FlatListCustom"

export default ({ limit, group }) => {
  const [data, setData] = useState([])
  function randomNumber(group = 2) {
    let str = ""
    for (let i = 0; i < group; i++) {
      str += Math.floor(Math.random() * 10)
    }
    return str
  }
  useEffect(() => {
    const numbers = []
    for (let i = 0; i < limit; i++) {
      numbers.push({
        title: randomNumber(group),
      })
    }
    setData(numbers)
  }, [])
  return (
      <FlatListCustom
        items={data}
        keyExtractor={(item, index) => item + index}
        numColumns={5}
        bg={'green'}
        height={60}
      />
  )
}

const styles = StyleSheet.create({
  container: {},
})
