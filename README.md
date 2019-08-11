# Font Metrics Database

This is a collection of metrics for ~1,500 fonts as measured in the browser. Among these fonts, 93% of the Google Fonts library is included.

The database includes measurements based on two separate algorithms. I include both to give the user more flexibility as one calculation has a more accurate capHeight.

## Why

I created this library to build more accurate skeletons based on the font used on the page. In this way, we can take into account the extra spacing that exists above and below the characters in the glyph itself. The skeleton can then be sized and positioned within the font em-box using the offset and capHeight + overshoot.

We can also use the data to provide more accurate results for [postcss-text-remove-gap](https://www.npmjs.com/package/postcss-text-remove-gap)

### Suggested Usage

The module is provided as both a JavaScript file (default) and a JSON file. It includes Typescript definitions to make usage simpler. The database object has the following structure:

```js
const data = {
  'Font Name': {
    metrics: {
      measure1: {},
      measure2: {},
    },
    stats: {},
  },
}
```

---

## Module

This repo also contains the tooling to generate the database. You will find the published module in the data directory.
