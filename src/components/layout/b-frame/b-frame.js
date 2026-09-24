import { Elena } from "@elenajs/core";
import { RATIO, RADIUS, BORDER } from "../../../attributes.js";
import { BORDER_VARIANTS, RADIUS_VARIANTS } from "../../../variants.js";
import { generate_styles } from "../../../helpers.js";

export default class BFrame extends Elena(HTMLElement) {
    static tagName = "b-frame";
    static props = [RATIO, RADIUS, BORDER];

    [RATIO] = '16:9';
    [RADIUS] = RADIUS_VARIANTS.lg;
    [BORDER] = '';

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        let [n, d] = this.ratio.split(":")?.map(n => Number(n))

        //TODO: factor this out, duplicate code in b-box.js
        let border_style = `
                    --box-border-width: var(--border-width, var(--bromo-border-width-${BORDER_VARIANTS[this[BORDER]]}));
                    --l-base: var(--bromo-factor-border-l_base);

                    border-width: var(--box-border-width) !important;
                `;

        return (`
            [data-i="${style_id}"] {
                --n: ${n};
                --d: ${d};
                --box-radius: var(--bromo-radius-${this[RADIUS] });

                aspect-ratio: var(--n) / var(--d);
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: var(--box-radius);

                border-width: 0;
                border-style: var(--bromo-border-style);
                border-color: var(--border-color-resolved);
                ${this[BORDER] ? border_style : '' }
            }

            [data-i="${style_id}"] > img,
            [data-i="${style_id}"] > video {
                inline-size: 100%;
                block-size: 100%;
                object-fit: cover;
            }
    `)
    }
}

BFrame.define();
