import { Elena } from "@elenajs/core";
import { BORDER, RADIUS, LEVEL } from "../../../attributes.js";
import { BORDER_VARIANTS, RADIUS_VARIANTS, LEVEL_VARIANTS } from "../../../variants.js";
import { generate_styles } from "../../../helpers.js";

export default class BBox extends Elena(HTMLElement) {
    static tagName = "b-box";
    static props = [BORDER, RADIUS, LEVEL];

    [BORDER] = BORDER_VARIANTS.thin;
    [RADIUS] = RADIUS_VARIANTS.lg;
    [LEVEL] = LEVEL_VARIANTS.default.key;

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        let border_style = `
                    --box-border-width: var(--border-width, var(--bromo-border-width-${BORDER_VARIANTS[this[BORDER]]}));
                    --l-base: var(--bromo-factor-border-l_base);

                    border-width: var(--box-border-width) !important;
                `;

        return (`
                    [data-i=${style_id}] {
                        --bg-color: var(--box-color, var(--bromo-color-slate-50));
                        --bg-color-resolved: oklch( from var(--bg-color) var(--box-l-factor, var(--bromo-factor-surface-l-default)) var(--surface-c-factor, var(--bromo-factor-surface-c-default)) h);
                        --contrast-color: contrast-color(var(--bg-color-resolved));
                        --border-l-factor: ${this[LEVEL] ? LEVEL_VARIANTS[this[LEVEL]].val.light : LEVEL_VARIANTS.default.val.light};
                        --border-color-resolved: oklch(from var(--border-color, var(--bg-color)) calc(var(--l-base) * exp(l - (l * var(--border-l-factor)))) c h);

                        display: block;
                        padding: var(--bromo-padding-block);
                        background-color: var(--bg-color-resolved);
                        color: var(--contrast-color);
                        border-radius: var(--bromo-radius-${this[RADIUS] });
                        transition: background-color .1s ease-in, box-shadow .1s ease-in;

                        border-width: 0;
                        border-style: var(--bromo-border-style);
                        border-color: var(--border-color-resolved);
                        ${this[BORDER] ? border_style : '' }
                    }

                    [data-theme="dark"] {
                        [data-i=${style_id}] {
                            --border-l-factor: ${this[LEVEL] ? LEVEL_VARIANTS[this[LEVEL]].val.dark : LEVEL_VARIANTS.default.val.dark};
                        }
                    }
        `)
    }
}

BBox.define();
