import { Elena } from "@elenajs/core";
import { RATIO, ROUNDED, BORDER } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BFrame extends Elena(HTMLElement) {
    static tagName = "b-frame";
    static props = [RATIO, ROUNDED, BORDER];

    [RATIO] = '16:9';
    [ROUNDED] = false;
    [BORDER] = false;

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        let [n, d] = this.ratio.split(":")?.map(n => Number(n))

        return (`
            [data-i="${style_id}"] {
                --n: ${n};
                --d: ${d};
                --radius: var(--s1);

                aspect-ratio: var(--n) / var(--d);
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                border: ${this[BORDER] ?
                (typeof (this[BORDER]) === 'string' ? this[BORDER] : 'var(--box-border-thin)')
                : 'unset'};
                border-radius: ${this[ROUNDED] ? 'var(--radius)' : 'unset'};
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
