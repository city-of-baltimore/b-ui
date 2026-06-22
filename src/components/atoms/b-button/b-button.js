import { Elena, html } from "@elenajs/core";
import { BORDER, RADIUS, HREF, TYPE } from "../../../attributes.js";
import { generate_styles } from "../../../helpers.js";

export default class BButton extends Elena(HTMLElement) {
    static tagName = "b-button";

    static shadow = "open";
    static props = [BORDER, RADIUS, HREF, TYPE];
    static parts = {
        button: 'button',
    };

    [BORDER] = 'var(--box-border-thin)';
    [RADIUS] = 'var(--s-1)';
    [HREF] = '';
    [TYPE] = '';

    willUpdate() {
        generate_styles(this);
    }

    styles(style_id) {
        return (`
            [data-i=${style_id}]::part(${this.constructor.parts.button}) {
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
                border: ${this[BORDER].length > 0 ? this[BORDER] : '0'};
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

