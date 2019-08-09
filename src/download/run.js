const fs = require('fs')
const JsonDB = require('node-json-db').JsonDB
const getFontCatalog = require('./getFontCatalog')

const downloadFont = require('./downloadFont')

let db = new JsonDB('database', true, false, '/')

const now = () => new Date().toISOString()

function seq(fns) {
  return fns.reduce((prev, task) => prev.then(() => task()), Promise.resolve())
}

;(async () => {
  let fontData = await getFontCatalog()

  const queue = fontData.map((meta) => {
    return async () => {
      let downloaded = fs.existsSync(`../fonts/${meta.id}/${meta.id}.css`)
      if (!downloaded) {
        if (db.getData(`/${meta.id}`).downloaded) {
          db.push(`/${meta.id}`, {
            lastUpdate: now(),
            downloaded: true,
            failed: true,
          })
        } else {
          db.push(`/${meta.id}`, {
            lastUpdate: now(),
            downloaded: false,
          })
          try {
            await downloadFont(meta.family, meta.id)
            db.push(`/${meta.id}`, {
              lastUpdate: now(),
              downloaded: true,
            })
          } catch (e) {
            console.log(e)
          }
        }
      }
    }
  })
  // Run all queued items in sequence
  seq(queue)
})()
