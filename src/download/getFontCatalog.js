const got = require('got')
const fs = require('fs')

module.exports = async function getFonts(path = './all-fonts.json') {
  let fontData
  if (fs.existsSync(path)) {
    fontData = JSON.parse(fs.readFileSync(path))
  } else {
    const { allFonts } = await got(
      'https://google-webfonts-helper.herokuapp.com/api/fonts/'
    ).json()
    formData = allFonts
    fs.writeFileSync(path, JSON.stringify(allFonts, null, 2))
  }
  return fontData
}
