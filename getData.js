const JsonDB = require('node-json-db').JsonDB
let db = new JsonDB('metrics', false, false, '/')

const fake = false
const fontName = fake ? 'fake' : 'Abadi MT Condensed Extra Bold'
try {
  const data = db.getData(`/${fontName}/metrics`)
} catch (e) {}

console.log(data)
