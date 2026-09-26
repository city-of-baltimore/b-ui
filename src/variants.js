/** ATTRIBUTE VARIANTS
    * Each custom element could support the same attributes. List their variants
    * here.
    */
export const BORDER_VARIANTS = {
    hairline : 'hairline',
    thin     : 'thin',
    thick    : 'thick',
    thicker  : 'thicker',
};

export const RADIUS_VARIANTS = {
    sm       : "sm",
    md       : "md",
    lg       : "lg",
    xl       : "xl",
    "2xl"    : "2xl",
    "3xl"    : "3xl",
    "4xl"    : "4xl",
    "full"   : "full"
};

export const STATUS_VARIANTS = {
    neutral  : "neutral",
    info     : "info",
    positive : "positive",
    warning  : "warning",
    critical : "critical"
}

export const LEVEL_VARIANTS = {
    raised   : { key: "raised", val : { light: 1.5, dark: 1.5 } },
    default  : { key: "default", val: { light: 2, dark  : 2.4 } },
    lowered  : { key: "lowered", val: { light: 2.4, dark: 3.5 } }
}

export const SPACE_VARIANTS = {
    "0"      : "0",
    "3xs"    : "3xs",
    "2xs"    : "2xs",
    "xs"     : "xs",
    "sm"     : "sm",
    "md"     : "md",
    "lg"     : "lg",
    "xl"     : "xl",
    "2xl"    : "2xl",
    "3xl"    : "3xl",
    "3xs-2xs": "3xs-2xs",
    "2xs-xs" : "2xs-xs",
    "xs-sm"  : "xs-sm",
    "sm-md"  : "sm-md",
    "md-lg"  : "md-lg",
    "lg-xl"  : "lg-xl",
    "xl-2xl" : "xl-2xl",
    "2xl-3xl": "2xl-3xl",
}

export const CONTAINER_VARIANTS = {
    "xs"     : "xs",
    "sm"     : "sm",
    "md"     : "md",
    "lg"     : "lg",
    "xl"     : "xl",
    "2xl"    : "2xl",
    "3xl"    : "3xl",
    "4xl"    : "4xl",
    "5xl"    : "5xl",
    "6xl"    : "6xl",
    "7xl"    : "7xl",
    "8xl"    : "8xl",
    "9xl"    : "9xl",
}

export const SIDE_WIDTH_VARIANTS = CONTAINER_VARIANTS

export const THRESHOLD_VARIANT = CONTAINER_VARIANTS

export const ITEM_MIN_VARIANTS = SPACE_VARIANTS

export const JUSTIFY_VARIANTS = {
    start    : 'flex-start',
    center   : 'center',
    end      : 'flex-end',
}

export const ALIGN_VARIANTS = JUSTIFY_VARIANTS

export const SIDE_VARIANTS = {
    left     : "left",
    right    : "right"
}
