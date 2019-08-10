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
  readonly category: string
  readonly version: string
  readonly lastModified: string
  readonly popularity: number
}

declare interface StatsLocal {
  readonly source: string
}

declare const data: {
  ABeeZee: {
    metrics: {
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Abadi MT Condensed Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Adobe Caslon Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Caslon Pro Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Devanagari': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Fan Heiti Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Fan Heiti Std B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Fangsong Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Fangsong Std R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Garamond Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Garamond Pro Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Gothic Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Gothic Std B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Gurmukhi': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Hebrew': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Heiti Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Heiti Std R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Kaiti Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Kaiti Std R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Ming Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Ming Std L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Myungjo Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Myungjo Std M': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Naskh': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Naskh Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Song Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Adobe Song Std L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Al Bayan': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Al Bayan PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Al Nile': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Al Nile PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Al Tarikh': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Al Tarikh PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      italic: {
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
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      italic: {
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
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      italic: {
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
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Apple Braille': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Apple Chancery': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Apple Color Emoji': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Apple Color Emoji UI': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Apple SD Gothic Neo': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Apple SD Gothic NeoI': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Apple Symbols': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  AppleGothic: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  AppleMyungjo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Aqua Kana': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Aqua Kana Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Arapey: {
    metrics: {
      normal: {
        '400': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Arial Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Arial Hebrew': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Arial Hebrew Desk Interface': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Arial Hebrew Scholar': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Arial Narrow': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Arial Rounded MT Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Arial Unicode MS': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Avenir Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Black Oblique': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Book': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Heavy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Next': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Next Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Next Condensed Demi Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Next Condensed Heavy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Next Condensed Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Next Condensed Ultra Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Next Demi Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Next Heavy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Next Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Avenir Next Ultra Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Averia Sans Libre': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Averia Serif Libre': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  B612: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'B612 Mono': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Baghdad PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Bangla Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Barlow: {
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
    }
    stats: Stats
  }
  'Barlow Condensed': {
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
    }
    stats: Stats
  }
  'Barlow Semi Condensed': {
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
    stats: StatsLocal
  }
  'Baskerville Old Face': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Batang: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  Beirut: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Beirut PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Bodoni 72 Oldstyle': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Bodoni 72 Smallcaps': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Bodoni Ornaments': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Bookman Old Style': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Bookshelf Symbol 7': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  Braggadocio: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Brush Script MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Brush Script Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  Cabin: {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Calibri Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Calisto MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Cambria Math': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  Cantarell: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Century Gothic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Century Schoolbook': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Chalkboard SE': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Chalkduster: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Chaparral Pro Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Charlemagne Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Charter Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Charter ITC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
      }
      italic: {
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
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  Constantia: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Cooper Hewitt': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Cooper Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Cooper Std Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Copperplate: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Copperplate Gothic Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Copperplate Gothic Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Courier New': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Cousine: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
      }
      italic: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Crimson Pro': {
    metrics: {
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
    }
    stats: Stats
  }
  'Crimson Text': {
    metrics: {
      normal: {
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'DIN Alternate': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'DIN Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'DM Sans': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'DM Serif Display': {
    metrics: {
      normal: {
        '400': Measurements
      }
      italic: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'DM Serif Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  Damascus: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Damascus PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'DecoType Naskh PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Devanagari MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Devanagari Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Dharma Gothic E Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Diwan Kufi PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Diwan Thuluth': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Duke Fill': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Edmondsans Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Edmondsans Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Edmondsans Regular': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Edwardian Script ITC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Euphemia UCAS': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    }
    stats: Stats
  }
  'Exo 2': {
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
    }
    stats: Stats
  }
  'Expletus Sans': {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  Fahkwang: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Farah PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Farisi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Fira Code Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Fira Code Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Fira Code Retina': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    }
    stats: Stats
  }
  'Fira Sans Condensed': {
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
    }
    stats: Stats
  }
  'Fira Sans Extra Condensed': {
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
    stats: StatsLocal
  }
  Fondamento: {
    metrics: {
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Font di sistema': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Font sustava': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Footlight MT Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Franklin Gothic Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'GB18030 Bitmap': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Geeza Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Geeza Pro Interface': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Geeza Pro PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Geneva: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Gentium Basic': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Gentium Book Basic': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Geo: {
    metrics: {
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Gill Sans MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Gill Sans Ultra Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
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
    stats: StatsLocal
  }
  'Gujarati Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Gulim: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Gurmukhi MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Gurmukhi Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Heiti TC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Helvetica: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Helvetica LT MM': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Helvetica Neue': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Helvetica Neue DeskInterface': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Hiragino Kaku Gothic Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Kaku Gothic Pro W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Kaku Gothic Pro W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Kaku Gothic ProN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Kaku Gothic ProN W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Kaku Gothic ProN W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Kaku Gothic Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Kaku Gothic Std W8': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Kaku Gothic StdN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Kaku Gothic StdN W8': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Maru Gothic Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Maru Gothic Pro W4': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Maru Gothic ProN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Maru Gothic ProN W4': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Mincho Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Mincho Pro W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Mincho Pro W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Mincho ProN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Mincho ProN W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Mincho ProN W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans GB': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans GB Interface': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans GB W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans GB W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans W0': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans W1': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans W2': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans W3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans W4': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans W5': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans W6': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans W7': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans W8': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hiragino Sans W9': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hobo Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Hoefler Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '100': Measurements
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'ITF Devanagari Marathi': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  InaiMathi: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Iowan Old Style Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
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
    stats: StatsLocal
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
    }
    stats: Stats
  }
  'Kannada MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kannada Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  Keyboard: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Khmer Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Kohinoor Devanagari': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kohinoor Telugu': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kohinoor Telugu Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kohinoor Telugu Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kohinoor Telugu Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kohinoor Telugu Semibold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Kokonor: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Kozuka Gothic Pr6N B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pr6N EL': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pr6N H': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pr6N L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pr6N M': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pr6N R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pro B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pro EL': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pro H': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pro L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pro M': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Gothic Pro R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pr6N': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pr6N B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pr6N EL': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pr6N H': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pr6N L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pr6N M': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pr6N R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pro B': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pro EL': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pro H': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pro L': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pro M': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Kozuka Mincho Pro R': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  KufiStandardGK: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'KufiStandardGK PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Lao Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  LastResort: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  'Libre Franklin': {
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
    }
    stats: Stats
  }
  'Libre Franklin Black': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Libre Franklin ExtraBold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Libre Franklin ExtraLight': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Libre Franklin Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Libre Franklin Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Libre Franklin SemiBold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Libre Franklin Thin': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
      }
      italic: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Literata: {
    metrics: {
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Lithos Pro Regular': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Lucida Bright': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Lucida Calligraphy': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Lucida Console': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Lucida Fax': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Lucida Grande': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Lucida Grande UI': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Lucida Handwriting': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Lucida Sans': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Lucida Sans Typewriter': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Lucida Sans Unicode': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'MS Mincho': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'MS PGothic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'MS PMincho': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'MS Reference Sans Serif': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'MS Reference Specialty': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'MT Extra': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Malayalam Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Mali: {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Mate: {
    metrics: {
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  Menlo: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Merriweather Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Merriweather Sans': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Microsoft Sans Serif': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Microsoft Tai Le': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Microsoft Yi Baiti': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Minion Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Minion Pro Cond': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Minion Pro Med': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Minion Pro SmBd': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Mishafi Gold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Monotype Sorts': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  Montserrat: {
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
    }
    stats: Stats
  }
  'Montserrat Alternates': {
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
    stats: StatsLocal
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Muna PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Myanmar MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Myanmar Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Myriad Arabic': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Myriad Hebrew': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Myriad Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Myriad Pro Cond': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Myriad Pro Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Myriad Web Pro': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Nadeem PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '700': Measurements
        '800': Measurements
      }
      italic: {
        '400': Measurements
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
    stats: StatsLocal
  }
  'New Peninim MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'New Rocker': {
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
    stats: StatsLocal
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'Noto Sans': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Nueva Std Cond': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      italic: {
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
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
    stats: StatsLocal
  }
  'Open Sans': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      italic: {
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
      normal: {
        '300': Measurements
        '700': Measurements
      }
      italic: {
        '300': Measurements
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
    stats: StatsLocal
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Oriya Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  'PT Serif Caption': {
    metrics: {
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Palatino Linotype': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Perpetua Titling MT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'PingFang SC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'PingFang TC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Plantagenet Cherokee': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Playfair Display': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
    }
    stats: Stats
  }
  'Playfair Display SC': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  Poppins: {
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Roboto Condensed': {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Roboto Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Roboto Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Roboto Mono': {
    metrics: {
      normal: {
        '100': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Rockwell Extra Bold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
      }
      italic: {
        '400': Measurements
      }
    }
    stats: Stats
  }
  Rosario: {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Rosarivo: {
    metrics: {
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Rosewood Std Regular': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'SF Compact Rounded': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'SF Compact Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'SF Hollywood Hills': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'SF Hollywood Hills Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'SF Hollywood Hills Extended': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'SF Movie Poster': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'SF NS Display': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'SF NS Display Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'SF NS Text': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'SF NS Text Condensed': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  SKYfontThick: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXGeneral: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXIntegralsD: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXIntegralsSm: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXIntegralsUp: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXIntegralsUpD: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXIntegralsUpSm: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXNonUnicode: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXSizeFiveSym: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXSizeFourSym: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXSizeOneSym: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXSizeThreeSym: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXSizeTwoSym: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STIXVariants: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  STSong: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Sana PUA': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Sanchez: {
    metrics: {
      normal: {
        '400': Measurements
      }
      italic: {
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
      normal: {
        '400': Measurements
        '700': Measurements
        '800': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Savoye LET CC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Seravek ExtraLight': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Seravek Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Seravek Medium': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  SimHei: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  SimSun: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Simonetta: {
    metrics: {
      normal: {
        '400': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Sinhala Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Songti TC': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Source Code Pro ExtraLight': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Source Code Pro Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Source Code Pro Semibold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Source Sans Pro': {
    metrics: {
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Source Sans Pro ExtraLight': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Source Sans Pro Light': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Source Sans Pro Semibold': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      italic: {
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
        '800': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  Stencil: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Stencil Std': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Stone Sans Sem OS ITC TT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Stone Sans Sem OS ITCTT': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Synchro LET': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'System Font': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Systemschrift: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Systemskrift: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Systemtypsnitt: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'TI Uni': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Tahoma: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Tamil Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    }
    stats: Stats
  }
  TeamViewer13: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Tekton Pro Cond': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Tekton Pro Ext': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Telugu Sangam MN': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  'Times LT MM': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Times New Roman': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Tipo de letra do sistema': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Tipus de lletra del sistema': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
        '200': Measurements
        '300': Measurements
        '400': Measurements
        '600': Measurements
        '700': Measurements
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
    stats: StatsLocal
  }
  'Trajan Pro 3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Trattatello: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Trebuchet MS': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  Trirong: {
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
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
    stats: StatsLocal
  }
  Ubuntu: {
    metrics: {
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  'Ubuntu Mono': {
    metrics: {
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
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
    stats: StatsLocal
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
      normal: {
        '400': Measurements
        '700': Measurements
      }
      italic: {
        '400': Measurements
        '700': Measurements
      }
    }
    stats: Stats
  }
  Vollkorn: {
    metrics: {
      normal: {
        '400': Measurements
        '600': Measurements
        '700': Measurements
        '900': Measurements
      }
      italic: {
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
    stats: StatsLocal
  }
  Webdings: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
  }
  Wingdings: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Wingdings 2': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
  }
  'Wingdings 3': {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
    stats: StatsLocal
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
    stats: StatsLocal
  }
  Zapfino: {
    metrics: {
      normal: {
        '400': Measurements
      }
    }
    stats: StatsLocal
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
      normal: {
        '300': Measurements
        '400': Measurements
        '500': Measurements
        '600': Measurements
        '700': Measurements
      }
      italic: {
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
}
export default data
