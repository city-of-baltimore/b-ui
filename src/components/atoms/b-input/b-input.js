import { Elena, html } from "@elenajs/core";
import { BORDER, RADIUS, NAME, AREA, PLACEHOLDER, TYPE } from "../../../attributes.js";
import { generate_styles } from "../../../helpers.js";

export default class BInput extends Elena(HTMLElement) {
    static tagName = "b-input";

    static shadow = "open";
    static props = [BORDER, RADIUS, NAME, AREA, PLACEHOLDER, TYPE];
    static parts = {
        input: 'input',
    };

    [BORDER] = 'var(--box-border-thin)';
    [RADIUS] = 'var(--s-1)';
    [NAME] = '';
    [AREA] = false;
    [PLACEHOLDER] = 'placeholder';
    [TYPE] = 'text';

    willUpdate() {
        generate_styles(this);
    }

    firstUpdated() {
        if (this[AREA]) {
            let text_area = this.shadowRoot.querySelector(`[part=${this.constructor.parts.input}]`);

            text_area.addEventListener('input', () => this._resize());
            this._resize();
        }
    }

    styles(style_id) {
        let variant_style = ``;

        if (this[AREA]) {
            variant_style = `
                white-space: wrap;
            `;
        }

        return (`
            [data-i=${style_id}]::part(${this.constructor.parts.input}) {
                border-radius: var(--s-1);
                background: var(--color-background);
                color: var(--color-foreground);
                white-space: nowrap;
                text-decoration: none;
                padding-block: var(--s-1); 
                padding-inline: var(--s0);

                width: 100%;
                max-width: var(--measure);

                outline: none;
                box-shadow: none;
                border: ${this[BORDER].length > 0 ? this[BORDER] : '0'};

                ${variant_style}
            }

            [data-i=${style_id}]::part(${this.constructor.parts.input}):focus {
                outline: var(--box-border-thin);
                outline-offset: var(--s-5);
            }
    `)
    }

    render() {
        if (this[AREA]) {
            return html`
                <textarea
                    type='text'
                    name='${this[NAME]}'
                    placeholder='${this[PLACEHOLDER]}'
                    part='${this.constructor.parts.input}'
                >
                </textarea>
            `;
        }

        return html`
            <input 
                name='${this[NAME]}'
                placeholder='${this[PLACEHOLDER]}'
                type='${this[TYPE]}'
                part='${this.constructor.parts.input}'
            >
            </input>
        `;
    }

    _resize() {
        const text_area = this.shadowRoot.querySelector(`[part=${this.constructor.parts.input}]`);

        console.log(text_area)
        text_area.style.height = '0px';
        text_area.style.height = text_area.scrollHeight + 'px';
    }
}

BInput.define();

