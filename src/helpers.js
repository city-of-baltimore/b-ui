import short_hash from './deps/shorthash2@1.0.5.js'

export function selectors_create(tag, identifier) {
    return {
        nor: `[data-i=${identifier}]`,
        ce: `${tag}::part(${identifier})`
    }
}

/** GENERATE STYLE_ID
    * Create a hash from component's prop values
    *
    * @param {HTMLElement} component - a custom element component
    */
export function identifier_create(component) {
    const tag = component.constructor.tagName;
    const attributes = component.constructor.props.map((name) => component[name]);

    let stringified_vals = attributes.join('-');
    let hash = short_hash(stringified_vals);
    return `${tag}-${hash}`;
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
    const style_id = identifier_create(component);

    component.dataset.i = style_id;
    const existing_style_node = document.querySelector(`style#${style_id}`);

    if (!existing_style_node) {
        const style_node = document.createElement("style");
        style_node.innerText = `
            ${component.styles(style_id)}
        `.replace(/\s\s+/g, ' ').trim();

        style_node.setAttribute("id", style_id);
        document.head.appendChild(style_node);
    }
}
