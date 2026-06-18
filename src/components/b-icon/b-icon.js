import { Elena } from "@elenajs/core";
import { SPACE } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BIcon extends Elena(HTMLElement) {
    static tagName = "b-icon";
    static props = [SPACE];

    [SPACE] = "";

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
            [data-i="${style_id}"] {
              display: inline-flex;
              align-items: baseline;
            }

            [data-i="${style_id}"] > svg {
              margin-inline-end: ${this[SPACE]};
            }
    `)
    }
}

BIcon.define();
