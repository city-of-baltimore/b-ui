import { Elena, html } from "@elenajs/core";
import { RADIUS, HREF, TYPE, VARIANT } from "../../../attributes.js";
import { generate_styles } from "../../../helpers.js";

export default class BButton extends Elena(HTMLElement) {
    static tagName = "b-button";

    static shadow = "open";
    static props = [RADIUS, HREF, TYPE, VARIANT];
    static parts = {
        button: 'button',
    };

    [RADIUS] = 'var(--s-1)';
    [HREF] = '';
    [TYPE] = '';
    [VARIANT] = '';

    willUpdate() {
        generate_styles(this);
    }

    styles(style_id) {
        let variant_style = `
            --color-background-hover: var(--color-purple-dark);

            border: var(--box-border-thin);
            background: var(--color-purple-dark);
            color: var(--color-white-off);
        `;

        switch (this[VARIANT]) {
            case 'secondary':
                variant_style = `
                    --color-background-hover: none;

                    background: none;
                    border: var(--box-border-thin);
                    color: var(--color-black);
                `;
                break;
            case 'subtle':
                variant_style = `
                    --color-background-hover: var(--color-neutral-light);

                    background: none;
                    color: var(--color-black);
                    border: none;
                    transition: background-color var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1);
                `;
                break;
            case 'danger':
                variant_style = `
                    --color-background-hover: var(--color-warning);

                    border: none;
                    background: var(--color-warning);
                    color: var(--color-white-off);
                `;
                break;
        }

        return (`
            [data-i=${style_id}]::part(${this.constructor.parts.button}) {
                --color-background-hover: unset;

                width: fit-content;
                border-radius: var(--s-1);
                background: var(--color-foreground);
                color: var(--color-background);
                white-space: nowrap;
                text-decoration: none;
                padding: var(--s-1) var(--s0);
                margin: var(--s-1);
                cursor: pointer;

                outline: none;
                box-shadow: none;

                ${variant_style}
            }

            [data-i=${style_id}]::part(${this.constructor.parts.button}):hover {
                background: var(--color-background-hover);
            }

    `)
    }


    render() {
        if (this[HREF].length > 0) {
            return html`
                <a 
                    part=${this.constructor.parts.button}
                    href=${this[HREF]}
                >
                    <slot></slot> 
                </a>
            `;
        }

        if (this[TYPE].length > 0) {
            return html`
                <button
                    part=${this.constructor.parts.button}
                    type=${this[TYPE]}
                >
                    <slot></slot> 
                </button>
            `;
        }

        return html`
            <button part='${this.constructor.parts.button}'>
                <slot></slot> 
            </button>
        `;
    }
}

BButton.define();

