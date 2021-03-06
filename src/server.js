const express = require('express')
const path = require('path')
const es6Renderer = require('express-es6-template-engine')
const app = express()

const getFontCatalog = require('./download/getFontCatalog')

;(async () => {
  fontCatalog = await getFontCatalog('./download/google-fonts.json')

  app.engine('html', es6Renderer)
  app.set('views', 'views')
  app.set('view engine', 'html')

  app.use('/static', express.static(path.resolve(__dirname, 'fonts')))
  app.use('/assets', express.static(path.resolve(__dirname, 'assets')))

  app.get('/:font', function(req, res) {
    /** @type string */
    const font = req.params.font

    const { variants, id, inCatalog } = getFontData(font)

    const cssLink = inCatalog
      ? `<link rel="stylesheet" href="static/${id}/${id}.css" />`
      : ''

    res.render('template', {
      locals: {
        font,
        id,
        variantsJSON: JSON.stringify(variants),
        variants,
        inCatalog,
        cssLink,
      },
    })
  })

  app.get('/', (req, res) => res.send('server running'))

  app.listen(3000)
  console.log('Listening on: http://localhost:3000')
  console.log('')
  console.log('Append URL with any locally installed or Google Hosted font')
})()

function getFontData(font) {
  /** @type string */
  let id = font.toLowerCase().replace(' ', '-')
  let inCatalog = false

  const fontMeta = fontCatalog.find(fontMeta => fontMeta.family === font)
  let variants = [
    {
      style: 'normal',
      weight: 400,
    },
  ]
  if (fontMeta && fontMeta.id) {
    id = fontMeta.id
    variants = fontMeta.variants.map(calcVariants)
    inCatalog = true
  }
  return { variants, id, fontMeta, inCatalog }
}

function calcVariants(variant = '') {
  let weight, style
  let num = variant.match(/(\d+)/)
  if (num) {
    weight = Number(num[0])
    variant = variant.replace(weight, '')
  } else {
    weight = 400
  }
  if (variant === 'regular' || !variant) {
    style = 'normal'
  } else {
    style = variant
  }
  return {
    style,
    weight,
  }
}
