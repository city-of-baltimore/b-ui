import { Elena } from "@elenajs/core";
import { SPACE } from "../../../attributes.js";
import { SPACE_VARIANTS } from "../../../variants.js";
import { generate_styles } from "../../../helpers.js";

export default class BIcon extends Elena(HTMLElement) {
    static tagName = "b-icon";
    static props = [SPACE];

    [SPACE] = SPACE_VARIANTS.xs;

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
              width: 0.75em;
              width: 1cap;
              height: 0.75em;
              height: 1cap;

              margin-inline-end: var(--bromo-space-${this[SPACE]});
            }
    `)
    }
}

BIcon.define();
