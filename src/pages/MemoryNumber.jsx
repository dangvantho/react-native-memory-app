import React from "react";
import MemoryNumber from '../components/MemoryNumber/index'

export default ({ route }) => {
    return <MemoryNumber limit={route.params.limit} />
}