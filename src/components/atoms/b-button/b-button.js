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

        if (!this[DISABLED]) {
            this.addEventListener('click', this._ripple);
        }
    }

    willUpdate() {
        generate_styles(this);
    }

    styles(style_id) {
        let variant_style = ``;
        let variant_style_hover = ``;
        let variant_style_active = ``;
        let variant_ripple_style = ``;

        switch (this[VARIANT]) {
            case 'secondary':
                variant_style = `
                    background-color: var(--bromo-color-transparent);
                    border-color: var(--box-color);
                    border-width: var(--bromo-border-width-thin);
                    color: var(--box-color);
                `;

                variant_style_hover = `
                    --_button-bg-color-resolved: color-mix(
                        in oklab,
                        var(--bromo-color-transparent),
                        var(--box-color) 10%
                    );
                    background-color: var(--_button-bg-color-resolved) !important;
                `

                variant_style_active = `
                    --_button-bg-color-resolved: color-mix(
                        in oklab,
                        var(--bromo-color-transparent),
                        var(--box-color) 15%
                    );
                `

                variant_ripple_style = `
                    --ripple-color: var(--box-color);
                `;

                break;
            case 'subtle':
                variant_style = `
                    --hover-color: oklch(from var(--box-color) .95 c h);
                    background-color: var(--bromo-color-transparent);
                    color: var(--box-color);
                `;

                variant_style_hover = `
                    --_button-bg-color-resolved: color-mix(
                        in oklab,
                        var(--bromo-color-transparent),
                        var(--box-color) 10%
                    );
                    background-color: var(--_button-bg-color-resolved);
                `

                variant_style_active = `
                    --_button-bg-color-resolved: color-mix(
                        in oklab,
                        var(--bromo-color-transparent),
                        var(--box-color) 15%
                    );

                    background-color: var(--_button-bg-color-resolved);
                `

                variant_ripple_style = `
                    --ripple-color: color-mix(
                        in oklab,
                        var(--bromo-color-transparent),
                        var(--box-color) 20%
                    );
                `;
                break;
        }

        return (`
            [data-i=${style_id}]::part(${this.constructor.parts.button}) {
                --_padding-block: var(--bromo-padding-block);
                --_padding-inline: var(--bromo-padding-inline);
                --_form-control-height: round(calc(2 * var(--_padding-block) + 1em * 1.25), 1px);
                --box-color: var(--bromo-color-brand-primary-default);
                --_button-bg-color-resolved: var(--box-color);
                --_color: contrast-color(var(--_button-bg-color-resolved));

                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                white-space: nowrap;
                font: inherit;
                font-size: var(--bromo-form-control-font-size, var(--text-base));
                border-color: transparent;
                padding-block: 0;
                background-color: var(--_button-bg-color-resolved);
                border-radius: var(--bromo-form-control-radius);
                border-style: var(--bromo-border-style);
                border-width: var(--bromo-form-control-border-width);
                box-shadow: none;
                color: var(--_color);
                font-weight: var(--bromo-font-weight-semibold);
                gap: var(--bromo-space-2xs);
                min-height: var(--_form-control-height);
                padding-inline: var(--_padding-inline);
                transition-property: color, background-color, border-color;
                transition-timing-function: var(--bromo-ease-out);
                transition-duration: var(--bromo-transition-normal);

                position: relative;
                overflow: hidden;

                ${variant_style}
            }

            [data-i=${style_id}]::part(${this.constructor.parts.button}):hover {
                --hover-color: var(--box-color);
                --_button-bg-color-resolved: color-mix(
                    in oklab,
                    var(--hover-color),
                    black 3%
                );

                ${variant_style_hover}
            }

            [data-i=${style_id}]::part(${this.constructor.parts.button}):focus {
                outline: var(--box-border-thin);
                outline-offset: var(--s-5);
            }

            [data-i=${style_id}]::part(${this.constructor.parts.button}):active {
                --_button-bg-color-resolved: color-mix(
                    in oklab,
                    var(--box-color),
                    white 15%
                );

                ${variant_style_active}
            }

            [data-i=${style_id}]::part(${this.constructor.parts.button}):disabled {
                pointer-events: none;
                cursor: auto;
                opacity: 80%;
            }

            [data-i=${style_id}] span {
                position: absolute;
                background: var(--ripple-color, var(--_color));
                display: block;
                pointer-events: none;

                border-radius: 50%;

                transform: translate(-50%, -50%);
                animation: ripple 1s linear infinite;

                ${variant_ripple_style}
            }

            [data-theme="dark"] {
                [data-i=${style_id}]::part(${this.constructor.parts.button}) {
                    --box-color: oklch(from var(--bromo-color-plum-50) calc( 1 - var(--bromo-factor-box-l-default)) c h );
                }
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

            @media (prefers-reduced-motion: reduce) {
              [data-i=${style_id}] span {
                display: none;
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
