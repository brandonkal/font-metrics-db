# Font Metrics Database

This is a collection of metrics for ~1,500 fonts as measured in the browser. These fonts include 93% of the Google Fonts library.

The database includes measurements based on two separate algorithms. Both are included to give the user more flexibility as one calculation has a more accurate capHeight.

## Why

This library was created to build more accurate skeletons based on the font used on the page. In this way, we can take into account the extra spacing that exists above and below the characters in the glyph itself. The skeleton can then be sized and positioned within the font em-box using the offset and capHeight + overshoot.

It can also be used to provide more accurate results for [postcss-text-remove-gap](https://www.npmjs.com/package/postcss-text-remove-gap)

### Suggested Usage

The module is provided as both a JavaScript file (default) and a JSON file. Typescript definitions are included to make usage simpler. The database object has the following structure:

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

This repo contains the tooling to generate the database. The published module is located in the data directory.
