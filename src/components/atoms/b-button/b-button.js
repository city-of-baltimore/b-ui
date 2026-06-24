import { Elena, html } from "@elenajs/core";
import { RADIUS, HREF, TYPE, VARIANT, DISABLED } from "../../../attributes.js";
import { generate_styles } from "../../../helpers.js";

export default class BButton extends Elena(HTMLElement) {
    static tagName = "b-button";

    static shadow = "open";
    static props = [RADIUS, HREF, TYPE, VARIANT, DISABLED];
    static parts = {
        button: 'button',
    };

    [RADIUS] = 'var(--s-1)';
    [HREF] = '';
    [TYPE] = '';
    [VARIANT] = '';
    [DISABLED] = false;

    connectedCallback() {
        super.connectedCallback();

        this.addEventListener('click', this._ripple);
    }

    willUpdate() {
        generate_styles(this);
    }

    styles(style_id) {
        let variant_style = `
            --color-background-hover: var(--color-purple-dark);
            --color-text: var(--color-white-off);

            background: var(--color-purple-dark);
        `;

        switch (this[VARIANT]) {
            case 'secondary':
                variant_style = `
                    --color-background-hover: none;
                    --color-text: var(--color-foreground);

                    background: none;
                    border: var(--box-border-thin);
                `;
                break;
            case 'subtle':
                variant_style = `
                    --color-background-hover: var(--color-neutral-light);
                    --color-text: var(--color-foreground);

                    background: none;
                    transition: background-color var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1);
                `;
                break;
            case 'danger':
                variant_style = `
                    --color-background-hover: var(--color-warning);
                    --color-text: var(--color-white-off);

                    background: var(--color-warning);
                `;
                break;
        }

        return (`
            [data-i=${style_id}]::part(${this.constructor.parts.button}) {
                --color-background-hover: unset;
                --color-text: var(--color-background);

                width: fit-content;
                border-radius: var(--s-1);
                border: none;

                background: var(--color-foreground);
                color: var(--color-text);

                white-space: nowrap;
                text-decoration: none;
                padding-block: var(--s-1);
                padding-inline: var(--s0);
                cursor: pointer;

                outline: none;
                box-shadow: none;

                position: relative;
                overflow: hidden;

                ${variant_style}
            }

            [data-i=${style_id}]::part(${this.constructor.parts.button}):hover {
                background: var(--color-background-hover);
            }

            [data-i=${style_id}]::part(${this.constructor.parts.button}):focus {
                outline: var(--box-border-thin);
                outline-offset: var(--s-5);
            }

            [data-i=${style_id}]::part(${this.constructor.parts.button}):disabled {
                cursor: auto;
                opacity: 80%;
            }

            [data-i=${style_id}] span {
                position: absolute;
                background: var(--color-text);
                display: block;
                pointer-events: none;

                border-radius: 50%;

                transform: translate(-50%, -50%);
                animation: ripple 1s linear infinite;
            }

            @keyframes ripple {
                0% {
                    width: 0;
                    height: 0;
                    opacity: .25;
                }
                100% {
                    width: 350px;
                    height: 350px;
                    opacity: 0;
                }
            }
    `)
    }

    render() {
        if (this[HREF].length > 0) {
            return html`
                <a 
                    ${this[DISABLED] && DISABLED}
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
                    ${this[DISABLED] && DISABLED}
                    part=${this.constructor.parts.button}
                    type=${this[TYPE]}
                >
                    <slot></slot>
                </button>
            `;
        }

        return html`
            <button 
                    ${this[DISABLED] && DISABLED}
                    part=${this.constructor.parts.button}
            >
                    <slot></slot>
            </button>
        `;
    }

    _ripple(e) {
        const target_rect = e.currentTarget.getBoundingClientRect();
        const diameter = Math.max(target_rect.width, target_rect.height);

        const x = e.clientX - (target_rect.left);
        const y = e.clientY - (target_rect.top);

        let ripple = document.createElement('span');

        ripple.style.width = ripple.style.height = diameter + 'px';
        ripple.style.left = `calc(${x}px)`;
        ripple.style.top = `calc(${y}px + 15%)`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 1000)
    }
}

BButton.define();
