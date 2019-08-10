// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"OIDi":[function(require,module,exports) {
'use strict'

module.exports = measure

measure.canvas = document.createElement('canvas')
measure.cache = {}

function measure (font, o) {
	if (!o) o = {}

	if (typeof font === 'string' || Array.isArray(font)) {
		o.family = font
	}

	var family = Array.isArray(o.family) ? o.family.join(', ') : o.family
	if (!family) throw Error('`family` must be defined')

	var fs = o.size || o.fontSize || o.em || 48
	var weight = o.weight || o.fontWeight || ''
	var style = o.style || o.fontStyle || ''
	var font = [style, weight, fs].join(' ') + 'px ' + family
	var origin = o.origin || 'top'

	if (measure.cache[family]) {
		// return more precise values if cache has them
		if (fs <= measure.cache[family].em) {
			return applyOrigin(measure.cache[family], origin)
		}
	}

	var canvas = o.canvas || measure.canvas
	var ctx = canvas.getContext('2d')
	var chars = {
		upper: o.upper !== undefined ? o.upper : 'H',
		lower: o.lower !== undefined ? o.lower : 'x',
		descent: o.descent !== undefined ? o.descent : 'p',
		ascent: o.ascent !== undefined ? o.ascent : 'h',
		tittle: o.tittle !== undefined ? o.tittle : 'i',
		overshoot: o.overshoot !== undefined ? o.overshoot : 'O'
	}
	var l = Math.ceil(fs * 1.5)
	canvas.height = l
	canvas.width = l * .5
	ctx.font = font

	var char = 'H'
	var result = {
		top: 0
	}

	// measure line-height
	ctx.clearRect(0, 0, l, l)
	ctx.textBaseline = 'top'
	ctx.fillStyle = 'black'
	ctx.fillText(char, 0, 0)
	var topPx = firstTop(ctx.getImageData(0, 0, l, l))
	ctx.clearRect(0, 0, l, l)
	ctx.textBaseline = 'bottom'
	ctx.fillText(char, 0, l)
	var bottomPx = firstTop(ctx.getImageData(0, 0, l, l))
	result.lineHeight =
	result.bottom = l - bottomPx + topPx

	// measure baseline
	ctx.clearRect(0, 0, l, l)
	ctx.textBaseline = 'alphabetic'
	ctx.fillText(char, 0, l)
	var baselinePx = firstTop(ctx.getImageData(0, 0, l, l))
	var baseline = l - baselinePx - 1 + topPx
	result.baseline =
	result.alphabetic = baseline

	// measure median
	ctx.clearRect(0, 0, l, l)
	ctx.textBaseline = 'middle'
	ctx.fillText(char, 0, l * .5)
	var medianPx = firstTop(ctx.getImageData(0, 0, l, l))
	result.median =
	result.middle = l - medianPx - 1 + topPx - l * .5

	// measure hanging
	ctx.clearRect(0, 0, l, l)
	ctx.textBaseline = 'hanging'
	ctx.fillText(char, 0, l * .5)
	var hangingPx = firstTop(ctx.getImageData(0, 0, l, l))
	result.hanging = l - hangingPx - 1 + topPx - l * .5

	// measure ideographic
	ctx.clearRect(0, 0, l, l)
	ctx.textBaseline = 'ideographic'
	ctx.fillText(char, 0, l)
	var ideographicPx = firstTop(ctx.getImageData(0, 0, l, l))
	result.ideographic = l - ideographicPx - 1 + topPx

	// measure cap
	if (chars.upper) {
		ctx.clearRect(0, 0, l, l)
		ctx.textBaseline = 'top'
		ctx.fillText(chars.upper, 0, 0)
		result.upper = firstTop(ctx.getImageData(0, 0, l, l))
		result.capHeight = (result.baseline - result.upper)
	}

	// measure x
	if (chars.lower) {
		ctx.clearRect(0, 0, l, l)
		ctx.textBaseline = 'top'
		ctx.fillText(chars.lower, 0, 0)
		result.lower = firstTop(ctx.getImageData(0, 0, l, l))
		result.xHeight = (result.baseline - result.lower)
	}

	// measure tittle
	if (chars.tittle) {
		ctx.clearRect(0, 0, l, l)
		ctx.textBaseline = 'top'
		ctx.fillText(chars.tittle, 0, 0)
		result.tittle = firstTop(ctx.getImageData(0, 0, l, l))
	}

	// measure ascent
	if (chars.ascent) {
		ctx.clearRect(0, 0, l, l)
		ctx.textBaseline = 'top'
		ctx.fillText(chars.ascent, 0, 0)
		result.ascent = firstTop(ctx.getImageData(0, 0, l, l))
	}

	// measure descent
	if (chars.descent) {
		ctx.clearRect(0, 0, l, l)
		ctx.textBaseline = 'top'
		ctx.fillText(chars.descent, 0, 0)
		result.descent = firstBottom(ctx.getImageData(0, 0, l, l))
	}

	// measure overshoot
	if (chars.overshoot) {
		ctx.clearRect(0, 0, l, l)
		ctx.textBaseline = 'top'
		ctx.fillText(chars.overshoot, 0, 0)
		var overshootPx = firstBottom(ctx.getImageData(0, 0, l, l))
		result.overshoot = overshootPx - baseline
	}

	// normalize result
	for (var name in result) {
		result[name] /= fs
	}

	result.em = fs
	measure.cache[family] = result

	return applyOrigin(result, origin)
}

function applyOrigin(obj, origin) {
	var res = {}
	if (typeof origin === 'string') origin = obj[origin]
	for (var name in obj) {
		if (name === 'em') continue
		res[name] = obj[name] - origin
	}
	return res
}

function firstTop(iData) {
	var l = iData.height
	var data = iData.data
	for (var i = 3; i < data.length; i+=4) {
		if (data[i] !== 0) {
			return Math.floor((i - 3) *.25 / l)
		}
	}
}

function firstBottom(iData) {
	var l = iData.height
	var data = iData.data
	for (var i = data.length - 1; i > 0; i -= 4) {
		if (data[i] !== 0) {
			return Math.floor((i - 3) *.25 / l)
		}
	}
}

},{}],"+uDs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = measure2;
var testText = 'Sixty Handgloves ABC';

function measure2(fontName) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? '200px' : _ref$fontSize,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === void 0 ? 400 : _ref$fontWeight,
      _ref$fontStyle = _ref.fontStyle,
      fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle;

  if (typeof fontSize === 'number') {
    fontSize = fontSize + 'px';
  } // if there is no getComputedStyle, this library won't work.


  if (!document.defaultView.getComputedStyle) {
    throw "ERROR: 'document.defaultView.getComputedStyle' not found. This library only works in browsers that can report computed CSS values.";
  } // store the old text metrics function on the Canvas2D prototype


  CanvasRenderingContext2D.prototype.measureTextWidth = CanvasRenderingContext2D.prototype.measureText;
  /**
   *  shortcut function for getting computed CSS values
   */

  var getCSSValue = function getCSSValue(element, property) {
    return document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
  };
  /**
   * The new text metrics function
   */


  CanvasRenderingContext2D.prototype.measureText = function (textstring) {
    var metrics = this.measureTextWidth(textstring),
        fontFamily = getCSSValue(this.canvas, 'font-family'),
        fontSize = getCSSValue(this.canvas, 'font-size').replace('px', ''),
        isSpace = !/\S/.test(textstring);
    metrics.fontSize = fontSize; // for text lead values, we meaure a multiline text container.

    var leadDiv = document.createElement('div');
    leadDiv.style.position = 'absolute';
    leadDiv.style.margin = 0;
    leadDiv.style.padding = 0;
    leadDiv.style.opacity = 0;
    leadDiv.style.fontSize = fontSize + 'px ';
    leadDiv.style.fontFamily = fontFamily;
    leadDiv.style.fontWeight = fontWeight;
    leadDiv.innerHTML = textstring + '<br/>' + textstring;
    document.body.appendChild(leadDiv); // make some initial guess at the text leading (using the standard TeX ratio)

    metrics.leading = 1.2 * fontSize; // then we try to get the real value from the browser

    var leadDivHeight = getCSSValue(leadDiv, 'height');
    leadDivHeight = leadDivHeight.replace('px', '');

    if (leadDivHeight >= fontSize * 2) {
      metrics.leading = leadDivHeight / 2 | 0;
    }

    document.body.removeChild(leadDiv); // if we're not dealing with white space, we can compute metrics

    if (!isSpace) {
      // Have characters, so measure the text
      var canvas = document.createElement('canvas');
      var padding = 100;
      canvas.width = metrics.width + padding;
      canvas.height = 3 * fontSize;
      canvas.style.opacity = 1;
      canvas.style.fontFamily = fontFamily;
      canvas.style.fontSize = fontSize;
      var ctx = canvas.getContext('2d');
      ctx.font = fontSize + 'px ' + fontFamily;
      var w = canvas.width,
          h = canvas.height,
          baseline = h / 2; // Set all canvas pixeldata values to 255, with all the content
      // data being 0. This lets us scan for data[i] != 255.

      ctx.fillStyle = 'white';
      ctx.fillRect(-1, -1, w + 2, h + 2);
      ctx.fillStyle = 'black';
      ctx.fillText(textstring, padding / 2, baseline);
      var pixelData = ctx.getImageData(0, 0, w, h).data; // canvas pixel data is w*4 by h*4, because R, G, B and A are separate,
      // consecutive values in the array, rather than stored as 32 bit ints.

      var i = 0,
          w4 = w * 4,
          len = pixelData.length; // Finding the ascent uses a normal, forward scanline

      while (++i < len && pixelData[i] === 255) {}

      var ascent = i / w4 | 0; // Finding the descent uses a reverse scanline

      i = len - 1;

      while (--i > 0 && pixelData[i] === 255) {}

      var descent = i / w4 | 0; // find the min-x coordinate

      for (i = 0; i < len && pixelData[i] === 255;) {
        i += w4;

        if (i >= len) {
          i = i - len + 4;
        }
      }

      var minx = i % w4 / 4 | 0; // find the max-x coordinate

      var step = 1;

      for (i = len - 3; i >= 0 && pixelData[i] === 255;) {
        i -= w4;

        if (i < 0) {
          i = len - 3 - step++ * 4;
        }
      }

      var maxx = i % w4 / 4 + 1 | 0; // set font metrics

      metrics.ascent = baseline - ascent;
      metrics.descent = descent - baseline;
      metrics.bounds = {
        minx: minx - padding / 2,
        maxx: maxx - padding / 2,
        miny: 0,
        maxy: descent - ascent
      };
      metrics.height = 1 + (descent - ascent);
    } // if we ARE dealing with whitespace, most values will just be zero.
    else {
        // Only whitespace, so we can't measure the text
        metrics.ascent = 0;
        metrics.descent = 0;
        metrics.bounds = {
          minx: 0,
          maxx: metrics.width,
          // Best guess
          miny: 0,
          maxy: 0
        };
        metrics.height = 0;
      }

    return metrics;
  };

  var canvas = document.getElementById('cvs'),
      context = canvas.getContext('2d');
  var w = 220,
      h = 220;
  canvas.style.font = [fontStyle, fontWeight, fontSize, "'".concat(fontName, "'")].join(' ');
  context.font = [fontStyle, fontWeight, fontSize, fontName].join(' ');
  context.clearRect(0, 0, canvas.width, canvas.height); // draw bounding box and text

  var xHeight = context.measureText('x').height;
  var capHeight = context.measureText('H').height;
  var metrics = context.measureText('Hxy');
  var xStart = (w - metrics.width) / 2;
  context.fontFamily = fontName;
  context.fillStyle = '#FFAF00';
  context.fillRect(xStart, h / 2 - metrics.ascent, metrics.bounds.maxx - metrics.bounds.minx, 1 + metrics.bounds.maxy - metrics.bounds.miny);
  context.fillStyle = '#333333';
  context.fillText(testText, xStart, h / 2);
  metrics.fontSize = parseInt(metrics.fontSize);
  metrics.offset = Math.ceil((metrics.leading - metrics.height) / 2);
  metrics.capHeight = capHeight;
  metrics.xHeight = xHeight - 1;
  metrics.ascender = metrics.capHeight - metrics.xHeight;
  metrics.descender = metrics.descent;
  var myMetrics = {
    px: JSON.parse(JSON.stringify(metrics)),
    relative: {
      fontsize: 1,
      offset: metrics.offset / metrics.fontSize,
      height: metrics.height / metrics.fontSize,
      capHeight: metrics.capHeight / metrics.fontSize,
      ascender: metrics.ascender / metrics.fontSize,
      xHeight: metrics.xHeight / metrics.fontSize,
      descender: metrics.descender / metrics.fontSize
    }
  };
  Array.prototype.slice.call(document.getElementsByTagName('canvas'), 0).forEach(function (c, i) {
    if (i > 0) document.body.removeChild(c);
  }); // Restore CanvasRenderingContext2D, needed for reusing this function ...

  CanvasRenderingContext2D.prototype.measureText = CanvasRenderingContext2D.prototype.measureTextWidth;
  return myMetrics;
}
},{}],"uH8Z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = displayMetrics;

function displayMetrics(myMetrics) {
  var containerId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'illustrationContainer';
  var logId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'log';
  document.getElementById(containerId).innerHTML = ['<div style="margin:0; padding:0; position: relative; font-size:', fontSize, ';font-style:', fontStyle, ';font-weight:', fontWeight, ';line-height: 1em; outline:1px solid black;">', testText, '<div class="__ascender" style="position: absolute; width:100%; top:', myMetrics.relative.offset, 'em; height:', myMetrics.relative.ascender, 'em; background:rgba(220,0,5,.5);"></div>', '<div class="__xHeight" style="position: absolute; width:100%; top:', myMetrics.relative.offset + myMetrics.relative.ascender, 'em; height:', myMetrics.relative.xHeight, 'em; background:rgba(149,204,13,.5);"></div>', '<div class="__xHeight" style="position: absolute; width:100%; top:', myMetrics.relative.offset + myMetrics.relative.ascender + myMetrics.relative.xHeight, 'em; height:', myMetrics.relative.descender, 'em; background:rgba(13,126,204,.5);"></div>', '</div>'].join('');
  document.getElementById(containerId).setAttribute('style', 'font-family:' + fontName);
  var logstring = ['var metrics =', JSON.stringify(myMetrics, null, '  ')].join(' ');
  document.getElementById(logId).textContent = logstring;
}
},{}],"C4Nx":[function(require,module,exports) {
"use strict";

var _fontMeasure = _interopRequireDefault(require("font-measure"));

var _measure = _interopRequireDefault(require("./measure2"));

var _displayMetrics = _interopRequireDefault(require("./displayMetrics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.measure = _fontMeasure.default;
window.measure2 = _measure.default;
window.displayMetrics = _displayMetrics.default;
},{"font-measure":"OIDi","./measure2":"+uDs","./displayMetrics":"uH8Z"}]},{},["C4Nx"], null)
//# sourceMappingURL=/bundle.js.map