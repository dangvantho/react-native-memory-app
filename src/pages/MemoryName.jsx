import React from "react"
import MemoName from "../components/MemoName/Memo"

export default function MemoryName({ navigation, route }) {
  return (
      <MemoName limit={route.params.limit} />
  )
}
