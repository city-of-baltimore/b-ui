import { Elena, html } from "@elenajs/core";
import { BORDER, RADIUS, HREF, TYPE } from "../../../attributes.js";
import { generate_styles } from "../../../helpers.js";

export default class BInput extends Elena(HTMLElement) {
    static tagName = "b-input";

    static shadow = "open";
    static props = [BORDER, RADIUS, HREF, TYPE];
    static parts = {
        input: 'input',
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
            [data-i=${style_id}]::part(${this.constructor.parts.input}) {
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
                    part=${this.constructor.parts.input}
                    href=${this[HREF]}
                >
                    <slot></slot> 
                </a>
            `;
        }

        if (this[TYPE].length > 0) {
            return html`
                <input
                    part=${this.constructor.parts.input}
                    type=${this[TYPE]}
                >
                    <slot></slot> 
                </input>
            `;
        }

        return html`
            <input part='${this.constructor.parts.input}'>
                <slot></slot> 
            </input>
        `;
    }
}

BInput.define();

