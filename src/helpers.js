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
            //TODO: all html attributes are strings, string check might be unnecessary
            const is_empty_string = typeof value === "string" && value.length === 0
            acc[name] = is_empty_string || value
        } else if (el[name]) {
            acc[name] = el[name]
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

export function generate_styles(component) {
    const attribute_vals = get_attribute_vals(component.constructor.props, component);
    const style_id = identifier_create(component.constructor.tagName, attribute_vals);

    component.dataset.i = style_id;
    const existing_style_node = document.querySelector(`style#${style_id}`);

    if (!existing_style_node) {
        const style_node = document.createElement("style");
        style_node.innerText = `
            ${component.styles(style_id, attribute_vals)}
        `.replace(/\s\s+/g, ' ').trim();

        style_node.setAttribute("id", style_id);
        document.head.appendChild(style_node);
    }
}
