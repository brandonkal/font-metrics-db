declare interface Measurements {
  readonly measure1: Measure1
  readonly measure2: Measure2
}

declare interface Measure1 {
  readonly top: number
  readonly bottom: number
  readonly lineHeight: number
  readonly alphabetic: number
  readonly baseline: number
  readonly middle: number
  readonly median: number
  readonly hanging: number
  readonly ideographic: number
  readonly upper: number
  readonly capHeight: number
  readonly lower: number
  readonly xHeight: number
  readonly tittle: number
  readonly ascent: number
  readonly descent: number
  readonly overshoot: number
}

declare interface Measure2 {
  px: {
    readonly fontSize: number
    readonly leading: number
    readonly ascent: number
    readonly descent: number
    bounds: {
      readonly minx: number
      readonly maxx: number
      readonly miny: number
      readonly maxy: number
    }
    readonly height: number
    readonly offset: number
    readonly capHeight: number
    readonly xHeight: number
    readonly ascender: number
    readonly descender: number
  }
  relative: {
    readonly fontsize: number
    readonly offset: number
    readonly height: number
    readonly capHeight: number
    readonly ascender: number
    readonly xHeight: number
    readonly descender: number
  }
}

declare interface Stats {
  readonly source: string
  readonly category?: string
  readonly version?: string
  readonly lastModified?: string
  readonly popularity?: number
}
declare const data: {
  ABeeZee: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Abadi MT Condensed Extra Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Abadi MT Condensed Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Abel: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Abhaya Libre': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Abril Fatface': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Aclonica: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Acme: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Actor: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Adamina: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Arabic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Caslon Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Caslon Pro Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Devanagari': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Fan Heiti Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Fan Heiti Std B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Fangsong Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Fangsong Std R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Garamond Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Garamond Pro Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Gothic Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Gothic Std B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Gurmukhi': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Hebrew': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Heiti Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Heiti Std R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Kaiti Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Kaiti Std R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Ming Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Ming Std L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Myungjo Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Myungjo Std M': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Naskh': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Naskh Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Song Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Adobe Song Std L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Advent Pro': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Aguafina Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Airplane: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Akronim: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Akura Popo': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Al Bayan': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Al Bayan PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Al Nile': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Al Nile PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Al Tarikh': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Al Tarikh PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Aladin: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Aldrich: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Alef: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Alegreya: {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Alegreya SC': {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Alegreya Sans': {
    metrics: {
      italic: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Alegreya Sans SC': {
    metrics: {
      italic: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Aleo: {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Alex Brush': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Alfa Slab One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Alice: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Alike: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Alike Angular': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Allan: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Allerta: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Allerta Stencil': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Allura: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Almendra: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Almendra Display': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Almendra SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Amarante: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Amaranth: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Amatic SC': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'American Typewriter': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Amethysta: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Amiko: {
    metrics: {
      normal: {
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Amiri: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Amita: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Anaheim: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Andada: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Andale Mono': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Andika: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Angkor: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Anna: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Annie Use Your Telescope': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Anonymous Pro': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Another Typewriter': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Antic: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Antic Didone': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Antic Slab': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Anton: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Apparatus SIL': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Apple Braille': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Apple Chancery': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Apple Color Emoji': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Apple Color Emoji UI': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Apple SD Gothic Neo': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Apple SD Gothic NeoI': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Apple Symbols': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  AppleGothic: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  AppleMyungjo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Aqua Kana': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Aqua Kana Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Arapey: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Arbutus: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Arbutus Slab': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Architects Daughter': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Archivo: {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Archivo Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Archivo Narrow': {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Aref Ruqaa': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Arial: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Arial Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Arial Hebrew': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Arial Hebrew Desk Interface': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Arial Hebrew Scholar': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Arial Narrow': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Arial Rounded MT Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Arial Unicode MS': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Arima Madurai': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Arimo: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Arizonia: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Armata: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Arsenal: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Artifika: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Arvo: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Arya: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Asap: {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Asap Condensed': {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Asar: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Asset: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Assistant: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  Astloch: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Asul: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Athelas: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Athiti: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Atma: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Atomic Age': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Aubrey: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Audiowide: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Autour One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Avenir: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Black Oblique': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Book': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Heavy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Next': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Next Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Next Condensed Demi Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Next Condensed Heavy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Next Condensed Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Next Condensed Ultra Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Next Demi Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Next Heavy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Next Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Avenir Next Ultra Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Average: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Average Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Averia Gruesa Libre': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Averia Libre': {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Averia Sans Libre': {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Averia Serif Libre': {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Ayuthaya: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  B612: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'B612 Mono': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Bad Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Baghdad: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baghdad PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Bahiana: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Bahianita: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bai Jamjuree': {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Baloo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baloo Bhai': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baloo Bhaijaan': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baloo Bhaina': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baloo Chettan': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baloo Da': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baloo Paaji': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baloo Tamma': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baloo Tammudu': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baloo Thambi': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Balthazar: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Bangers: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bangla MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bangla Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Barlow: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Barlow Condensed': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Barlow Semi Condensed': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Barriecito: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Barrio: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Basic: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Baskerville: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Baskerville Old Face': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Batang: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Battambang: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Bauhaus 93': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Baumans: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Bayon: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Bazar: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Beirut: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Beirut PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Belgrano: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bell MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Bellefair: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Belleza: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  BenchNine: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Bentham: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Berkshire Swash': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bernard MT Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Beth Ellen': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Bevan: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Big Caslon': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bigelow Rules': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bigshot One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Bilbo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bilbo Swash Caps': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  BioRhyme: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'BioRhyme Expanded': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Birch Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Biryani: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Bitter: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Black And White Picture': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Black Han Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Black Ops One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Blackoak Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Blinker: {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Bodoni 72': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bodoni 72 Oldstyle': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bodoni 72 Smallcaps': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bodoni Ornaments': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Bokor: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Bonbon: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Boogaloo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Book Antiqua': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bookman Old Style': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bookshelf Symbol 7': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bowlby One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bowlby One SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bradley Hand': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Braggadocio: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Brawler: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bree Serif': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Britannic Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Brush Script MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Brush Script Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bubblegum Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bubbler One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Buda: {
    metrics: {
      normal: {
        '300': Measurements
      }
    }
    stats: Stats
  }
  Buenard: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Bungee: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bungee Hairline': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bungee Inline': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bungee Outline': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Bungee Shade': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Butcherman: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Butterfly Kids': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  COURIERTXT: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cabin: {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Cabin Condensed': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Cabin Sketch': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Caesar Dressing': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cagliostro: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cairo: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Calibri: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Calibri Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Calisto MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Calligraffitti: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cambay: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Cambo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cambria: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cambria Math': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Candal: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Candara: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cantarell: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Cantata One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cantora One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Capriola: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cardo: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Carme: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Carrois Gothic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Carrois Gothic SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Carter One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Catamaran: {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Caudex: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Caveat: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Caveat Brush': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cedarville Cursive': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Century: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Century Gothic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Century Schoolbook': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Ceviche One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Chakra Petch': {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Chalkboard: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Chalkboard SE': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Chalkduster: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Changa: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Changa One': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Chango: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Chaparral Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Chaparral Pro Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Charlemagne Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Charm: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Charmonman: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Charter: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Charter Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Charter ITC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Chathura: {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Chau Philomene One': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Chela One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Chelsea Market': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Chenla: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cherry Cream Soda': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cherry Swash': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Chewy: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Chicle: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Chivo: {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Chonburi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cinzel: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Cinzel Decorative': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Claire Hand': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Clicker Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cochin: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Coda: {
    metrics: {
      normal: {
        '400': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Coda Caption': {
    metrics: {
      normal: {
        '800': Measurements
      }
    }
    stats: Stats
  }
  Codystar: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
      }
    }
    stats: Stats
  }
  Coiny: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Colonna MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Combo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Comfortaa: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Comic Sans MS': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Coming Soon': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Concert One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Condiment: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Consolas: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Constantia: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Content: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Contrail One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Convergence: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cookie: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cooper Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cooper Hewitt': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cooper Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cooper Std Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Copperplate: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Copperplate Gothic Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Copperplate Gothic Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Copse: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Corbel: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Corben: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Cormorant: {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Cormorant Garamond': {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Cormorant Infant': {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Cormorant SC': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Cormorant Unicase': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Cormorant Upright': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Corsiva Hebrew': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Courgette: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Courier: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Courier New': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cousine: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Coustard: {
    metrics: {
      normal: {
        '400': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Covered By Your Grace': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Crafty Girls': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Creepster: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Crete Round': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Crimson Pro': {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Crimson Text': {
    metrics: {
      italic: {
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Croissant One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Crushed: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cuprum: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Curlz MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cute Font': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Cutive: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Cutive Mono': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Czcionka systemowa': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'DIN Alternate': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'DIN Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'DM Sans': {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'DM Serif Display': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'DM Serif Text': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'DV EasyPrompter Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Damascus: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Damascus PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Damion: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Dancing Script': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Dangrek: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Darker Grotesque': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'David Libre': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Dawning of a New Day': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Days One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'DecoType Naskh': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'DecoType Naskh PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Dekko: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Delius: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Delius Swash Caps': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Delius Unicase': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Della Respira': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Denk One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Desdemona: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Devanagari MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Devanagari Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Devonshire: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Dharma Gothic E': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Dharma Gothic E Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Dhurjati: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Didact Gothic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Didot: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Diplomata: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Diplomata SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Diwan Kufi': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Diwan Kufi PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Diwan Thuluth': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Do Hyeon': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Dokdo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Domine: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Donegal One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Doppio One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Dorsa: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Dosis: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Dr Sugiyama': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Duke: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Duke Fill': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Duru Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Dynalight: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'EB Garamond': {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Eagle Lake': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'East Sea Dokdo': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Eater: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Economica: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Eczar: {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  Edmondsans: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Edmondsans Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Edmondsans Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Edmondsans Regular': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Edwardian Script ITC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'El Messiri': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Electrolize: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Elsie: {
    metrics: {
      normal: {
        '400': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Elsie Swash Caps': {
    metrics: {
      normal: {
        '400': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Emblema One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Emilys Candy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Encode Sans': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Encode Sans Condensed': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Encode Sans Expanded': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Encode Sans Semi Condensed': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Encode Sans Semi Expanded': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Engagement: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Englebert: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Engravers MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Enriqueta: {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Erica One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Esteban: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Etelka Text Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Euphemia UCAS': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Euphoria Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Eurostile: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ewert: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Exo: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Exo 2': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Expletus Sans': {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Facile Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Fahkwang: {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Fanwood Text': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Farah: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Farah PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Farisi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Farro: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Farsan: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Fascinate: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fascinate Inline': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Faster One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Fasthand: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fauna One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Faustina: {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Federant: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Federo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Felipa: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Fenix: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Finger Paint': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fira Code': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Fira Code Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fira Code Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fira Code Retina': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fira Mono': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Fira Sans': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Fira Sans Condensed': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Fira Sans Extra Condensed': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Fjalla One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fjord One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Flamenco: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
      }
    }
    stats: Stats
  }
  Flavors: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fon Sistem': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Fondamento: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Font de sistem': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Font di sistema': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Font sustava': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fontdiner Swanky': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fonte do Sistema': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Footlight MT Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Forum: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Francois One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Frank Ruhl Libre': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Franklin Gothic Book': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Franklin Gothic Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Freckle Face': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fredericka the Great': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fredoka One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Freehand: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Fresca: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Frijole: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Fruktur: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Fugaz One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Futura: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'GB18030 Bitmap': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'GFS Didot': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'GFS Neohellenic': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Gabriela: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Gabriola: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Gaegu: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Gafata: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Galada: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Galdeano: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Galindo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gamja Flower': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Garamond: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Geeza Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Geeza Pro Interface': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Geeza Pro PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Geneva: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gentium Basic': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Gentium Book Basic': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Geo: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Georgia: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Geostar: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Geostar Fill': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Germania One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Giddyup Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Gidugu: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gilda Display': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gill Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gill Sans MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gill Sans Ultra Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Give You Glory': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Glass Antiqua': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Glegoo: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Gloria Hallelujah': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gloucester MT Extra Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Goblin One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gochi Hand': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Gorditas: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Gothic A1': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Goudy Bookletter 1911': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Goudy Old Style': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Graduate: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Grand Hotel': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gravitas One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Great Vibes': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Grenze: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Griffy: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Gruppo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Gudea: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Gugi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gujarati MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gujarati Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Gulim: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Gurajada: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gurmukhi MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gurmukhi MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Gurmukhi Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Habibi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Haettenschweiler: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Halant: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Hammersmith One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Hanalei: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hanalei Fill': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Handlee: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Hanuman: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Happy Monkey': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Harmattan: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Harrington: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Headland One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Heebo: {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Heiti SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Heiti TC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Helvetica: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Helvetica LT MM': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Helvetica Neue': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Helvetica Neue DeskInterface': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Henny Penny': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Herculanum: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Herr Von Muellerhoff': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hi Melody': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Hind: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Hind Guntur': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Hind Madurai': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Hind Siliguri': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Hind Vadodara': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic Interface': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic Pro W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic Pro W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic ProN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic ProN W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic ProN W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic Std W8': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic StdN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Kaku Gothic StdN W8': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Maru Gothic Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Maru Gothic Pro W4': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Maru Gothic ProN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Maru Gothic ProN W4': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Mincho Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Mincho Pro W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Mincho Pro W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Mincho ProN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Mincho ProN W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Mincho ProN W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans GB': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans GB Interface': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans GB W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans GB W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans W0': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans W1': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans W2': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans W4': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans W5': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans W7': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans W8': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hiragino Sans W9': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hobo Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Hoefler Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Holtwood One SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Homemade Apple': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Homenaje: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'IBM Plex Mono': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'IBM Plex Sans': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'IBM Plex Sans Condensed': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'IBM Plex Serif': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'IM Fell DW Pica': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'IM Fell DW Pica SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'IM Fell Double Pica': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'IM Fell Double Pica SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'IM Fell English': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'IM Fell English SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'IM Fell French Canon': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'IM Fell French Canon SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'IM Fell Great Primer': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'IM Fell Great Primer SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'ITF Devanagari': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'ITF Devanagari Marathi': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Iceberg: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Iceland: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Impact: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Imprima: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Imprint MT Shadow': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  InaiMathi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Inconsolata: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Inder: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Indie Flower': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Inika: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Inknut Antiqua': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Iowan Old Style': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Iowan Old Style Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Irish Grover': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Istok Web': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Italiana: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Italianno: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Itim: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'JLR Waves': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Jacques Francois': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Jacques Francois Shadow': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Jaldi: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Jim Nightshade': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Jockey One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Jolly Lodger': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Jomhuria: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Josefin Sans': {
    metrics: {
      italic: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Josefin Slab': {
    metrics: {
      italic: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Joti One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Jua: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Judson: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Julee: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Julius Sans One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Junge: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Jura: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Just Another Hand': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Just Me Again Down Here': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  K2D: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  Kadwa: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Kailasa: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kalam: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Kameron: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Kanit: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Kannada MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kannada Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kantumruy: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Karla: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Karma: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Katibeh: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kaushan Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kavivanar: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kavoon: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kdam Thmor': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Keania One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kefa: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kelly Slab': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kenia: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kerberos Fang': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Keyboard: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Khand: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Khmer: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Khmer MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Khmer Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Khula: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Kino MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kirang Haerang': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kite One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Knewave: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  KoHo: {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Kodchasan: {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Kohinoor Bangla': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kohinoor Devanagari': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kohinoor Telugu': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kohinoor Telugu Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kohinoor Telugu Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kohinoor Telugu Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kohinoor Telugu Semibold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kokonor: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kosugi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kosugi Maru': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kotta One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Koulen: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pr6N': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pr6N B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pr6N EL': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pr6N H': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pr6N L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pr6N M': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pr6N R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pro B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pro EL': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pro H': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pro L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pro M': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Gothic Pro R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pr6N': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pr6N B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pr6N EL': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pr6N H': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pr6N L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pr6N M': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pr6N R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pro B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pro EL': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pro H': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pro L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pro M': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kozuka Mincho Pro R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kranky: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kreon: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Kristi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Krona One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Krub: {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Krungthep: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  KufiStandardGK: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'KufiStandardGK PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kumar One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Kumar One Outline': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Kurale: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'La Belle Aurore': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Lacquer: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Laila: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Lakki Reddy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Lalezar: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Lancelot: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lao MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lao Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  LastResort: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Lateef: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Lato: {
    metrics: {
      italic: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'League Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Leckerli One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ledger: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Lekton: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Lemon: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Lemonada: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Letter Gothic Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lexend Deca': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lexend Exa': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lexend Giga': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lexend Mega': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lexend Peta': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lexend Tera': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lexend Zetta': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Barcode 128': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Barcode 128 Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Barcode 39': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Barcode 39 Extended': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Barcode 39 Extended Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Barcode 39 Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Baskerville': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Libre Caslon Display': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Caslon Text': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Libre Franklin': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Libre Franklin Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Franklin ExtraBold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Franklin ExtraLight': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Franklin Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Franklin Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Franklin SemiBold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Franklin Thin': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Life Savers': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Liga Menlo': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lilita One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lily Script One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Limelight: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Linden Hill': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Literata: {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Lithos Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lithos Pro Regular': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Liu Jian Mao Cao': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Lobster: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lobster Two': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Londrina Outline': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Londrina Shadow': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Londrina Sketch': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Londrina Solid': {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Long Cang': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Lora: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Love Ya Like A Sister': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Loved by the King': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lovers Quarrel': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Blackletter': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Bright': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Calligraphy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Console': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Fax': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Grande': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Grande UI': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Handwriting': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Sans Typewriter': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Lucida Sans Unicode': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Luckiest Guy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Luminari: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Lusitana: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Lustria: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'M PLUS 1p': {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'M PLUS Rounded 1c': {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'MS Gothic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'MS Mincho': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'MS PGothic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'MS PMincho': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'MS Reference Sans Serif': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'MS Reference Specialty': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'MT Extra': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Ma Shan Zheng': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Macondo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Macondo Swash Caps': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Mada: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Magra: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Maiden Orange': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Maitree: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Major Mono Display': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Makhina: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Mako: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Malayalam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Malayalam Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Mali: {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Mallanna: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Mandali: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Manuale: {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Marcellus: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Marcellus SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Marck Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Margarine: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Marion: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Markazi Text': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Marker Felt': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Marko One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Marlett: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Marmelad: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Martel: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Martel Sans': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Marvel: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Mate: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Mate SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Matura MT Script Capitals': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Maven Pro': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  McLaren: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Meddon: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  MedievalSharp: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Medula One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Meera Inimai': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Megrim: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Meie Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Meiryo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Menlo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Merienda: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Merienda One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Merriweather: {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Merriweather Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Merriweather Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Merriweather Sans': {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Mesquite Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Metal: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Metal Mania': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Metamorphous: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Metrophobic: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Michroma: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Microsoft Himalaya': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Microsoft Sans Serif': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Microsoft Tai Le': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Microsoft Yi Baiti': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Milonga: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Miltonian: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Miltonian Tattoo': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Mina: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  MingLiU: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Minion Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Minion Pro Cond': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Minion Pro Med': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Minion Pro SmBd': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Miniver: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Miriam Libre': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Mirza: {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Mishafi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Mishafi Gold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Miss Fajardose': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Mistral: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Mitr: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Modak: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Modern Antiqua': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Modern No 20': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Mogra: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Molengo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Molle: {
    metrics: {
      italic: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Monaco: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Monda: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Mongolian Baiti': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Monofett: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Monoid: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Monoton: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Monotype Corsiva': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Monotype Sorts': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Monsieur La Doulaise': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Montaga: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Montez: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Montgomery: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Montserrat: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Montserrat Alternates': {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Montserrat Subrayada': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Moul: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Moulpali: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Mountains of Christmas': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Mouse Memoirs': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Mr Bedfort': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Mr Dafoe': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Mr De Haviland': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Mrs Saint Delafield': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Mrs Sheppards': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Mshtakan: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Mukta: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Mukta Mahee': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Mukta Malar': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Mukta Vaani': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  Muli: {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Muna: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Muna PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Myanmar MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Myanmar Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Myriad Arabic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Myriad Hebrew': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Myriad Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Myriad Pro Cond': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Myriad Pro Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Myriad Web Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Mystery Quest': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  NTR: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Nadeem: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nadeem PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nanum Brush Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nanum Gothic': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Nanum Gothic Coding': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Nanum Myeongjo': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Nanum Pen Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Neucha: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Neuton: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  New: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'New Peninim MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'New Rocker': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'New York Extra Large': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'New York Large': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'New York Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'New York Small': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'News Cycle': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'News Gothic MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Niconne: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Niramit: {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Nixie One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Nobile: {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Nokora: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Norican: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Nosifer: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Notable: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Noteworthy: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nothing You Could Do': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Noticia Text': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Noto Sans': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Noto Sans HK': {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Noto Sans JP': {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Noto Sans KR': {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Noto Sans SC': {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Noto Sans TC': {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Noto Serif': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Noto Serif JP': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Noto Serif KR': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Noto Serif SC': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Noto Serif TC': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Nova Cut': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nova Flat': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nova Mono': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nova Oval': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nova Round': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nova Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nova Slim': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nova Square': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nueva Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Nueva Std Cond': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Numans: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Nunito: {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Nunito Sans': {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'OCR A Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Odor Mean Chey': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Offside: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Old Standard TT': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Oldenburg: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Oleo Script': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Oleo Script Swash Caps': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Onyx: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Open Sans': {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Open Sans Condensed': {
    metrics: {
      italic: {
        '300': Measurements
      }
      normal: {
        '300': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Optima: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Oranienbaum: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Orator Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Orbitron: {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Oregano: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Orienta: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Original Surfer': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Oriya MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Oriya Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Oswald: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Over the Rainbow': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Overlock: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Overlock SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Overpass: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Overpass Mono': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Ovo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Oxygen: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Oxygen Mono': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  PMingLiU: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'PT Mono': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'PT Sans': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'PT Sans Caption': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'PT Sans Narrow': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'PT Serif': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'PT Serif Caption': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Pacifico: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Padauk: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Palanquin: {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Palanquin Dark': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Palatino: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Palatino Linotype': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Pangolin: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Paprika: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Papyrus: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Parisienne: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Passero One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Passion One': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Pathway Gothic One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Patrick Hand': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Patrick Hand SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Pattaya: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Patua One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Pavanam: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Paytone One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Peddana: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Peralta: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Permanent Marker': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Perpetua: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Perpetua Titling MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Petit Formal Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Petrona: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Philosopher: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Phosphate: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Piedra: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'PingFang HK': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'PingFang SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'PingFang TC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Pinyon Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Pirata One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  PixelSplitter: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Plantagenet Cherokee': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Plaster: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Play: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Playball: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Playbill: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Playfair Display': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Playfair Display SC': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Podkova: {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Poiret One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Poller One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Poly: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Pompiere: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Pontano Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Poor Story': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Poplar Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Poppins: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Port Lligat Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Port Lligat Slab': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Pragati Narrow': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Prata: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Preahvihear: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Press Start 2P': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Prestige Elite Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Pridi: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Princess Sofia': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Prociono: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Prompt: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Prosto One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Proza Libre': {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  Puritan: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Purple Purse': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Quando: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Quantico: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Quattrocento: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Quattrocento Sans': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Questrial: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Quicksand: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Quintessential: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Qwigley: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Raanana: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Racing Sans One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Radley: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Rajdhani: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Rakkas: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Raleway: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Raleway Dots': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ramabhadra: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ramaraja: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Rambla: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Rammetto One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ranchers: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Rancho: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ranga: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Rasa: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Rationale: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Ravi Prakash': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Red Hat Display': {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Red Hat Text': {
    metrics: {
      italic: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Redressed: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Reem Kufi': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Reenie Beanie': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Revalia: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Rhodium Libre': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ribeye: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Ribeye Marrow': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Righteous: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Risque: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Roboto: {
    metrics: {
      italic: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Roboto Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Roboto Condensed': {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Roboto Condensed Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Roboto Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Roboto Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Roboto Mono': {
    metrics: {
      italic: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Roboto Slab': {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Roboto Thin': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Rochester: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Rock Salt': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Rockwell: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Rockwell Extra Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Rokkitt: {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Romanesco: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Ropa Sans': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Rosario: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Rosarivo: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Rosewood Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Rosewood Std Regular': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Rouge Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Rozha One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Rubik: {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Rubik Mono One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ruda: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Rufina: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Ruge Boogie': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ruluko: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Rum Raisin': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Ruslan Display': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Russo One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ruthie: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Rye: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF Compact Display': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF Compact Rounded': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF Compact Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF Hollywood Hills': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF Hollywood Hills Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF Hollywood Hills Extended': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF Movie Poster': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF NS Display': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF NS Display Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF NS Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF NS Text Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'SF Pro Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  SKYfontThick: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXGeneral: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXIntegralsD: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXIntegralsSm: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXIntegralsUp: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXIntegralsUpD: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXIntegralsUpSm: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXNonUnicode: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXSizeFiveSym: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXSizeFourSym: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXSizeOneSym: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXSizeThreeSym: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXSizeTwoSym: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STIXVariants: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  STSong: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sacramento: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sahitya: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Sail: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Saira: {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Saira Condensed': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Saira Extra Condensed': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Saira Semi Condensed': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Saira Stencil One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Salsa: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sana: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sana PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sanchez: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sancreek: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sansita: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Sarabun: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  Sarala: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Sarina: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sarpanch: {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Sathu: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Satisfy: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Savoye LET': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Savoye LET CC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sawarabi Gothic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sawarabi Mincho': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Scada: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Scheherazade: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Schoolbell: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  SciFly: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Scope One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Seaweed Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Secular One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sedgwick Ave': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sedgwick Ave Display': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Seravek: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Seravek ExtraLight': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Seravek Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Seravek Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sevillana: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Seymour One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Shadows Into Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Shadows Into Light Two': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Shanti: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Share: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Share Tech': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Share Tech Mono': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Shojumaru: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Short Stack': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Shree Devanagari 714': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Shrikhand: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Siemreap: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sigmar One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  SignPainter: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Signika: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Signika Negative': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Silom: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  SimHei: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  SimSun: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Simonetta: {
    metrics: {
      italic: {
        '400': Measurements
        '900': Measurements
      }
      normal: {
        '400': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Single Day': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sinhala MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sinhala Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sintony: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Sirin Stencil': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sistem Fontu': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Six Caps': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Skia: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Skranji: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Slabo 13px': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Slabo 27px': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Slackey: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Smokum: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Smythe: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Snell Roundhand': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sniglet: {
    metrics: {
      normal: {
        '400': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  Snippet: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Snowburst One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sofadi One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sofia: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Song Myung': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Songti SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Songti TC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sonsie One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sorts Mill Goudy': {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Source Code Pro': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Source Code Pro Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Source Code Pro ExtraLight': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Source Code Pro Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Source Code Pro Semibold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Source Sans Pro': {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Source Sans Pro Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Source Sans Pro ExtraLight': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Source Sans Pro Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Source Sans Pro Semibold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Source Serif Pro': {
    metrics: {
      normal: {
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Space Mono': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Special Elite': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Spectral: {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Spectral SC': {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  'Spicy Rice': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Spinnaker: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Spirax: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Squada One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sree Krushnadevaraya': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sriracha: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Srisakdi: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Staatliches: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Stalemate: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Stalinist One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Stardos Stencil': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  SteelTongs: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Stencil: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Stencil Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Stint Ultra Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Stint Ultra Expanded': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Stoke: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Stone Sans OS ITC TT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Stone Sans Sem OS ITC TT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Stone Sans Sem OS ITCTT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Strait: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Strait Kcab': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Stylish: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sue Ellen Francisco': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Suez One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Sukhumvit Set': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sumana: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Sunflower: {
    metrics: {
      normal: {
        '300': Measurements
        '500': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Sunshiney: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Superclarendon: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Supermercado One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Sura: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Suranna: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Suravaram: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Suwannaphum: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Swanky and Moo Moo': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Symbol: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Synchro LET': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Syncopate: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Systeemlettertype: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'System Font': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Systemschrift: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Systemskrift: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Systemtypsnitt: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'TI Uni': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Tahoma: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Tajawal: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Tamil MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Tamil Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Tangerine: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Taprom: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Tauri: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Taviraj: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  TeamViewer13: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Teko: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Tekton Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Tekton Pro Cond': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Tekton Pro Ext': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Telex: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Telugu MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Telugu Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Tenali Ramakrishna': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Tenor Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Text Me One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Thasadith: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'The Girl Next Door': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Thonburi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Tienne: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Tillana: {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
    }
    stats: Stats
  }
  Times: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Times LT MM': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Times New Roman': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Timmana: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Tinos: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Tipo de letra del sistema': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Tipo de letra do sistema': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Tipus de lletra del sistema': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Titan One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Titillium Web': {
    metrics: {
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Trade Winds': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Trajan Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Trajan Pro 3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Trattatello: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Trebuchet MS': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Trirong: {
    metrics: {
      italic: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Trocchi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Trochut: {
    metrics: {
      italic: {
        '400': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Trykker: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Tulpen One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Tw Cen MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Ubuntu: {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Ubuntu Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Ubuntu Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Ubuntu Mono': {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Ultra: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Uncial Antiqua': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Underdog: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Unica One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  UnifrakturCook: {
    metrics: {
      normal: {
        '700': Measurements
      }
    }
    stats: Stats
  }
  UnifrakturMaguntia: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Unique: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Unkempt: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Unlock: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Unna: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  VT323: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Vampiro One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Varela: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Varela Round': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Vast Shadow': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Verdana: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Vesper Libre': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Vibur: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Vidaloka: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Viga: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Voces: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Volkhov: {
    metrics: {
      italic: {
        '400': Measurements
        '700': Measurements
      }
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Vollkorn: {
    metrics: {
      italic: {
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
      normal: {
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Vollkorn SC': {
    metrics: {
      normal: {
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  Voltaire: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Waiting for the Sunrise': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Wallpoet: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Walter Turncoat': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Warnes: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Waseem: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Webdings: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Wellfleet: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Wendy One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Wide Latin': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Wingdings: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Wingdings 2': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Wingdings 3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Wire One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Wisdom Script': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Work Sans': {
    metrics: {
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Yanone Kaffeesatz': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Yantramanav: {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Yatra One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Yellowtail: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Yeon Sung': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Yeseva One': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Yesteryear: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Yrsa: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'ZCOOL KuaiLe': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'ZCOOL QingKe HuangYou': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'ZCOOL XiaoWei': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Zapf Dingbats': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Zapfino: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Zeyada: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Zhi Mang Xing': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Zilla Slab': {
    metrics: {
      italic: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Zilla Slab Highlight': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'system-ui': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: Stats
  }
}
export default data
