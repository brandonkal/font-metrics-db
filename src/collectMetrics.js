const puppeteer = require('puppeteer')
const fs = require('fs')
const go = require('golangify')
const JsonDB = require('node-json-db').JsonDB
let db = new JsonDB('../data/metrics', false, false, '/')

const getFontCatalog = require('./download/getFontCatalog')

try {
  ;(async () => {
    fontCatalog = await getFontCatalog('./download/google-fonts.json')
    let localFonts = []
    if (fs.existsSync('./download/local-fonts.json')) {
      localFonts = JSON.parse(fs.readFileSync('./download/local-fonts.json'))
    }

    let additionalFonts = []
    if (fs.existsSync('./download/additional-fonts.json')) {
      additionalFonts = JSON.parse(
        fs.readFileSync('./download/additional-fonts.json')
      )
    }

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    let queue = []

    localFonts.forEach(fontName => {
      // has this already been calculated?
      let exists = false
      try {
        exists = db.getData(`/${fontName}/metrics`)
      } catch (e) {
        exists = false
      }
      if (exists) return

      queue.push(async () => {
        const [fontMetrics, err] = await go(measurePage)(fontName)
        if (err != null) {
          console.log('Error measuring font', fontName)
          return
        }
        console.log('Metrics Gathered for', fontName)
        db.push(`/${fontName}/metrics`, fontMetrics)
        db.push(`/${fontName}/stats`, {
          source: 'local',
        })
        db.save()
      })
    })

    additionalFonts.forEach(font => {
      // has this already been calculated?
      let exists = false
      try {
        exists = db.getData(`/${font.name}/metrics`)
      } catch (e) {
        exists = false
      }
      if (exists) return

      queue.push(async () => {
        const [fontMetrics, err] = await go(measurePage)(font['font-family'])
        if (err != null) {
          console.log('Error measuring font', font.name)
          return
        }
        console.log('Metrics Gathered for', font.name)
        db.push(`/${font.name}/metrics`, fontMetrics)
        db.push(`/${font.name}/stats`, {
          source: 'local',
        })
        db.save()
      })
    })

    fontCatalog.forEach(fontItem => {
      // has this already been calculated?
      let exists = false
      try {
        exists = db.getData(`/${fontItem.family}/metrics`)
      } catch (e) {
        exists = false
      }
      if (exists) return

      queue.push(async () => {
        const fontName = fontItem.family
        const [fontMetrics, err] = await go(measurePage)(fontName)
        if (err != null) {
          console.log('Error measuring font', fontName)
          return
        }
        console.log('Metrics Gathered for', fontName)
        db.push(`/${fontName}/metrics`, fontMetrics)
        db.push(`/${fontName}/stats`, {
          source: 'google',
          category: fontItem.category || '',
          version: fontItem.version || '',
          lastModified: fontItem.lastModified || '',
          popularity: fontItem.popularity || '',
        })
        db.save()
      })
    })

    async function measurePage(name) {
      try {
        console.log('Navigating:', name)
        const url = 'http://localhost:3000/' + encodeURIComponent(name)
        await page.goto(url, { waitUntil: 'networkidle0' })
      } catch (e) {
        console.log('Could not initialize page', e)
        return Promise.reject(new Error(e))
      }
      try {
        console.log('Evaluating:', name)
        const metrics = await page.evaluate(runMeasure, name)
        console.log('Evaluated:', name)
        return metrics
      } catch (e) {
        console.log('Failed to measure page', name, e)
        return Promise.reject(new Error(e))
      }
    }

    // Run the calculations
    console.log('Queue built', queue.length, 'font families to measure')
    seq(queue)
  })()
} catch (e) {
  throw new Error(e)
}

function runMeasure(name) {
  const variants = JSON.parse(window.variants)
  let data = {}
  /** @type string[] */
  const styles = variants.map(variant => variant.style)
  const uniqueStyles = new Set(styles)
  uniqueStyles.forEach(style => {
    data[style] = {}
    variants
      .filter(variant => variant.style === style)
      .forEach(variant => {
        data[style][variant.weight] = {}
        data[style][variant.weight].measure1 = window.measure(name, {
          fontSize: 200,
          fontWeight: variant.weight,
          fontStyle: variant.style,
        })
        data[style][variant.weight].measure2 = window.measure2(name, {
          fontSize: 64,
          fontWeight: variant.weight,
          fontStyle: variant.style,
        })
      })
  })
  return data
}

function seq(fns) {
  return fns.reduce((prev, task) => prev.then(() => task()), Promise.resolve())
}
