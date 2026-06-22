import { Elena } from "@elenajs/core";
import { BORDER, RADIUS } from "../../../attributes.js";
import { generate_styles } from "../../../helpers.js";

export default class BBox extends Elena(HTMLElement) {
    static tagName = "b-box";
    static props = [BORDER, RADIUS];

    [BORDER] = 'var(--box-border-thin)';
    [RADIUS] = 'var(--s-1)';

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
            [data-i=${style_id}] {
                display: block;
                padding: var(--s-1);
                border: ${this[BORDER]};
                background-color: var(--color-background);
                border-radius: ${this[RADIUS]};
                transition: background-color .1s ease-in, box-shadow .1s ease-in;
            }
    `)
    }
}

BBox.define();
