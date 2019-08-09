var testText = 'Sixty Handgloves ABC'

export default function measure2(
  fontName,
  { fontSize = '200px', fontWeight = 400, fontStyle = 'normal' } = {}
) {
  if (typeof fontSize === 'number') {
    fontSize = fontSize + 'px'
  }
  // if there is no getComputedStyle, this library won't work.
  if (!document.defaultView.getComputedStyle) {
    throw "ERROR: 'document.defaultView.getComputedStyle' not found. This library only works in browsers that can report computed CSS values."
  }

  // store the old text metrics function on the Canvas2D prototype
  CanvasRenderingContext2D.prototype.measureTextWidth =
    CanvasRenderingContext2D.prototype.measureText

  /**
   *  shortcut function for getting computed CSS values
   */
  var getCSSValue = function(element, property) {
    return document.defaultView
      .getComputedStyle(element, null)
      .getPropertyValue(property)
  }

  /**
   * The new text metrics function
   */
  CanvasRenderingContext2D.prototype.measureText = function(textstring) {
    var metrics = this.measureTextWidth(textstring),
      fontFamily = getCSSValue(this.canvas, 'font-family'),
      fontSize = getCSSValue(this.canvas, 'font-size').replace('px', ''),
      isSpace = !/\S/.test(textstring)
    metrics.fontSize = fontSize

    // for text lead values, we meaure a multiline text container.
    var leadDiv = document.createElement('div')
    leadDiv.style.position = 'absolute'
    leadDiv.style.margin = 0
    leadDiv.style.padding = 0
    leadDiv.style.opacity = 0
    leadDiv.style.fontSize = fontSize + 'px '
    leadDiv.style.fontFamily = fontFamily
    leadDiv.style.fontWeight = fontWeight

    leadDiv.innerHTML = textstring + '<br/>' + textstring
    document.body.appendChild(leadDiv)

    // make some initial guess at the text leading (using the standard TeX ratio)
    metrics.leading = 1.2 * fontSize

    // then we try to get the real value from the browser
    var leadDivHeight = getCSSValue(leadDiv, 'height')
    leadDivHeight = leadDivHeight.replace('px', '')
    if (leadDivHeight >= fontSize * 2) {
      metrics.leading = (leadDivHeight / 2) | 0
    }
    document.body.removeChild(leadDiv)

    // if we're not dealing with white space, we can compute metrics
    if (!isSpace) {
      // Have characters, so measure the text
      var canvas = document.createElement('canvas')
      var padding = 100
      canvas.width = metrics.width + padding
      canvas.height = 3 * fontSize
      canvas.style.opacity = 1
      canvas.style.fontFamily = fontFamily
      canvas.style.fontSize = fontSize
      var ctx = canvas.getContext('2d')
      ctx.font = fontSize + 'px ' + fontFamily

      var w = canvas.width,
        h = canvas.height,
        baseline = h / 2

      // Set all canvas pixeldata values to 255, with all the content
      // data being 0. This lets us scan for data[i] != 255.
      ctx.fillStyle = 'white'
      ctx.fillRect(-1, -1, w + 2, h + 2)
      ctx.fillStyle = 'black'
      ctx.fillText(textstring, padding / 2, baseline)
      var pixelData = ctx.getImageData(0, 0, w, h).data

      // canvas pixel data is w*4 by h*4, because R, G, B and A are separate,
      // consecutive values in the array, rather than stored as 32 bit ints.
      var i = 0,
        w4 = w * 4,
        len = pixelData.length

      // Finding the ascent uses a normal, forward scanline
      while (++i < len && pixelData[i] === 255) {}
      var ascent = (i / w4) | 0

      // Finding the descent uses a reverse scanline
      i = len - 1
      while (--i > 0 && pixelData[i] === 255) {}
      var descent = (i / w4) | 0

      // find the min-x coordinate
      for (i = 0; i < len && pixelData[i] === 255; ) {
        i += w4
        if (i >= len) {
          i = i - len + 4
        }
      }
      var minx = ((i % w4) / 4) | 0

      // find the max-x coordinate
      var step = 1
      for (i = len - 3; i >= 0 && pixelData[i] === 255; ) {
        i -= w4
        if (i < 0) {
          i = len - 3 - step++ * 4
        }
      }
      var maxx = ((i % w4) / 4 + 1) | 0

      // set font metrics
      metrics.ascent = baseline - ascent
      metrics.descent = descent - baseline
      metrics.bounds = {
        minx: minx - padding / 2,
        maxx: maxx - padding / 2,
        miny: 0,
        maxy: descent - ascent,
      }
      metrics.height = 1 + (descent - ascent)
    }

    // if we ARE dealing with whitespace, most values will just be zero.
    else {
      // Only whitespace, so we can't measure the text
      metrics.ascent = 0
      metrics.descent = 0
      metrics.bounds = {
        minx: 0,
        maxx: metrics.width, // Best guess
        miny: 0,
        maxy: 0,
      }
      metrics.height = 0
    }
    return metrics
  }

  var canvas = document.getElementById('cvs'),
    context = canvas.getContext('2d')

  var w = 220,
    h = 220

  canvas.style.font = [fontStyle, fontWeight, fontSize, `'${fontName}'`].join(
    ' '
  )
  context.font = [fontStyle, fontWeight, fontSize, fontName].join(' ')
  context.clearRect(0, 0, canvas.width, canvas.height)
  // draw bounding box and text
  var xHeight = context.measureText('x').height
  var capHeight = context.measureText('H').height
  var metrics = context.measureText('Hxy')
  var xStart = (w - metrics.width) / 2
  context.fontFamily = fontName
  context.fillStyle = '#FFAF00'
  context.fillRect(
    xStart,
    h / 2 - metrics.ascent,
    metrics.bounds.maxx - metrics.bounds.minx,
    1 + metrics.bounds.maxy - metrics.bounds.miny
  )
  context.fillStyle = '#333333'
  context.fillText(testText, xStart, h / 2)
  metrics.fontSize = parseInt(metrics.fontSize)
  metrics.offset = Math.ceil((metrics.leading - metrics.height) / 2)
  metrics.capHeight = capHeight
  metrics.xHeight = xHeight - 1
  metrics.ascender = metrics.capHeight - metrics.xHeight
  metrics.descender = metrics.descent

  var myMetrics = {
    px: JSON.parse(JSON.stringify(metrics)),
    relative: {
      fontsize: 1,
      offset: metrics.offset / metrics.fontSize,
      height: metrics.height / metrics.fontSize,
      capHeight: metrics.capHeight / metrics.fontSize,
      ascender: metrics.ascender / metrics.fontSize,
      xHeight: metrics.xHeight / metrics.fontSize,
      descender: metrics.descender / metrics.fontSize,
    },
  }

  Array.prototype.slice
    .call(document.getElementsByTagName('canvas'), 0)
    .forEach(function(c, i) {
      if (i > 0) document.body.removeChild(c)
    })

  // Restore CanvasRenderingContext2D, needed for reusing this function ...
  CanvasRenderingContext2D.prototype.measureText =
    CanvasRenderingContext2D.prototype.measureTextWidth
  return myMetrics
}
