/** ATTRIBUTE VARIANTS
    * Each custom element could support the same attributes. List their variants
    * here.
    */
export const BORDER_VARIANTS = {
    hairline: 'hairline',
    thin    : 'thin',
    thick   : 'thick',
    thicker : 'thicker',
};

export const RADIUS_VARIANTS = {
    sm      : "sm",
    md      : "md",
    lg      : "lg",
    xl      : "xl",
    "2xl"   : "2xl",
    "3xl"   : "3xl",
    "4xl"   : "4xl",
    "full"  : "full"
};

export const LEVEL_VARIANTS = {
    raised  : { key: "raised", val : {light : 1.5, dark    : 1.5 }},
    default : { key: "default", val: {light : 2, dark      : 3 }},
    lowered : { key: "lowered", val: {light : 2.4, dark    : 3.5 }}
}

