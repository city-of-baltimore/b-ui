import short_hash from './deps/shorthash2@1.0.5.js'


export function selectors_create(tag, identifier) {
  return {
    nor: `[data-i=${identifier}]`,
    ce: `${tag}::part(${identifier})`
  }
}

/**
    * @param {string[]} attributes - list of attribute names
    * @param {HTMLElement} el - html source to extract attribute values
    * @returns {Record<string, undefined | null | boolean | string>} - record of {attribute: values}
    */
export function get_attribute_vals(attributes, el) {
  /** @type {Record<string, undefined | null | boolean | string>}*/
  let accumulator = {}
  return attributes.reduce((acc, name) => {
    if (el.hasAttribute(name)) {
      /**@type {any}*/
      const value = el.getAttribute(name)
      const is_empty_string = typeof value === "string" && value.length === 0
      acc[name] = is_empty_string ? true : value
    }

    return acc
  }, accumulator)
}


/** GENERATE STYLE_ID
    * Create a hash from given values
    *
    * @param {string} tag
    * @param {Record<string, any>} attributes
    */
export function identifier_create(tag, attributes) {
  let stringified_keys = "".concat(Object.entries(attributes).map(v => String(v[1])))
  let hash = short_hash(stringified_keys)
  return `${tag}-${hash}`
}

//@ts-ignore
//not sure what the type of custom_element is
export function htmx_integrate(custom_element) {
  const root = custom_element.shadowRoot?.host || custom_element;

  //@ts-ignore
  if (typeof htmx != 'undefined') {
    //@ts-ignore
    htmx.process(root);
  }
}

