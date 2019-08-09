const fs = require('fs')
const m = fs.readFileSync('./metrics.json')
const metrics = JSON.parse(m)

let keys = Object.keys(metrics)
console.log(keys.length)
