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
