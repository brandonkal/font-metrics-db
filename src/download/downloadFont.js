const got = require('got')
const { promisify } = require('util')
const stream = require('stream')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')

const pipeline = promisify(stream.pipeline)

const ua =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'

const fetchOptions = {
  headers: {
    'User-Agent': ua,
  },
}

const qs =
  ':100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'

module.exports = async function downloadFont(name, id) {
  const dir = path.join('../fonts/', id)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  const url =
    'https://fonts.googleapis.com/css?' +
    querystring.stringify({
      family: name + qs,
    })
  const css = await got(url, fetchOptions)
    .then((response) => {
      return response.body
    })
    .catch((e) => {
      throw new Error(e)
    })

  /** @type string[] */
  const lines = css.split('\n')
  let currentVariant = ''
  let fontWeight = 'normal'
  let linesToInclude = []

  lines.forEach((line) => {
    let match = line.match(/^\/\* (.*) \*\/$/)
    if (match) {
      currentVariant = match[1]
    }
    if (currentVariant !== 'latin') {
      return
    }
    // We can continue

    let cwm = line.match(/^  font-weight: (\d{3}).*$/)
    if (cwm) {
      fontWeight = cwm[1]
    }

    let urlMatches = line.match(
      /^  src: local\(.*\), local\('(.*)'\), url\((.*)\) .*$/
    )
    if (urlMatches) {
      let localFilename = `${urlMatches[1]}_latin_${fontWeight}.woff2`
      let downloadUrl = urlMatches[2]
      line = line.replace(downloadUrl, localFilename)
      console.log(
        `Downloading font file for ${
          urlMatches[1]
        }, ${fontWeight}, ${downloadUrl}`
      )
      ;(async () => {
        try {
          await pipeline(
            got.stream(downloadUrl, fetchOptions),
            fs.createWriteStream(path.join(dir, localFilename))
          )
        } catch (e) {
          console.log(e)
          console.log(
            `Skipping ${localFilename}. Unable to download font from ${downloadUrl}.`
          )
        }
      })()
    }
    linesToInclude.push(line)
  })

  const cssFilename = path.join(dir, id + '.css')
  fs.writeFileSync(cssFilename, linesToInclude.join('\n'))
}
