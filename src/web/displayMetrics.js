export default function displayMetrics(
  myMetrics,
  containerId = 'illustrationContainer',
  logId = 'log'
) {
  document.getElementById(containerId).innerHTML = [
    '<div style="margin:0; padding:0; position: relative; font-size:',
    fontSize,
    ';font-style:',
    fontStyle,
    ';font-weight:',
    fontWeight,
    ';line-height: 1em; outline:1px solid black;">',
    testText,
    '<div class="__ascender" style="position: absolute; width:100%; top:',
    myMetrics.relative.offset,
    'em; height:',
    myMetrics.relative.ascender,
    'em; background:rgba(220,0,5,.5);"></div>',
    '<div class="__xHeight" style="position: absolute; width:100%; top:',
    myMetrics.relative.offset + myMetrics.relative.ascender,
    'em; height:',
    myMetrics.relative.xHeight,
    'em; background:rgba(149,204,13,.5);"></div>',
    '<div class="__xHeight" style="position: absolute; width:100%; top:',
    myMetrics.relative.offset +
      myMetrics.relative.ascender +
      myMetrics.relative.xHeight,
    'em; height:',
    myMetrics.relative.descender,
    'em; background:rgba(13,126,204,.5);"></div>',
    '</div>',
  ].join('')

  document
    .getElementById(containerId)
    .setAttribute('style', 'font-family:' + fontName)

  var logstring = ['var metrics =', JSON.stringify(myMetrics, null, '  ')].join(
    ' '
  )
  document.getElementById(logId).textContent = logstring
}
