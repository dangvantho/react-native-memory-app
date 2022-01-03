const fs = require('fs')

function appendToFile(value) {
    fs.appendFileSync('mapImages.js', value, 'utf-8')
}
const STRING = '000000'
for (let i=1; i<=1000; i++) {
    let str = STRING + i
    str = str.slice(str.length - 6)
    const data = `'${str}': require('./people/${str}.jpg'),\n`
    appendToFile(data)
}