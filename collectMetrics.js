const puppeteer = require('puppeteer')
const fs = require('fs')
const go = require('golangify')
const JsonDB = require('node-json-db').JsonDB
let db = new JsonDB('metrics', false, false, '/')

const getFontCatalog = require('./download/getFontCatalog')

try {
  ;(async () => {
    fontCatalog = await getFontCatalog('./download/all-fonts.json')
    let localFonts = []
    if (fs.existsSync('./download/local-fonts.json')) {
      localFonts = JSON.parse(fs.readFileSync('./download/local-fonts.json'))
    }

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const queueOne = localFonts.map((fontName) => {
      // has this already been calculated?
      try {
        db.getData(`/${fontName}/metrics`)
      } catch (e) {
        return async () => {}
      }

      return async () => {
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
      }
    })

    const queueTwo = fontCatalog.map((fontItem) => {
      // has this already been calculated?
      try {
        db.getData(`/${fontName}/metrics`)
      } catch (e) {
        return async () => {}
      }

      return async () => {
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
      }
    })

    async function measurePage(name) {
      try {
        const url = 'http://localhost:3000/' + encodeURIComponent(name)
        await page.goto(url, { waitUntil: 'networkidle0' })
      } catch (e) {
        console.log('Could not initialize page', e)
        return Promise.reject(new Error(e))
      }
      try {
        const metrics = await page.evaluate(runMeasure, name)
        return metrics
      } catch (e) {
        console.log('Failed to measure page', name, e)
        return Promise.reject(new Error(e))
      }
    }

    // Run the calculations
    seq(queueOne)
    seq(queueTwo)
  })()
} catch (e) {
  throw new Error(e)
}

function runMeasure(name) {
  const variants = JSON.parse(window.variants)
  let data = {}
  /** @type string[] */
  const styles = variants.map((variant) => variant.style)
  const uniqueStyles = new Set(styles)
  uniqueStyles.forEach((style) => {
    data[style] = {}
    variants
      .filter((variant) => variant.style === style)
      .forEach((variant) => {
        data[style][variant.weight] = {}
        data[style][variant.weight].measure1 = window.measure(name, {
          fontSize: 200,
          fontWeight: variant.weight,
          fontStyle: variant.style,
        })
        data[style][variant.weight].measure2 = window.measure2(name, {
          fontSize: 200,
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
