import { Elena } from "@elenajs/core";
import { ITEM_MIN, SPACE } from "../../../attributes.js";
import { generate_styles } from "../../../helpers.js";

export default class BGrid extends Elena(HTMLElement) {
    static tagName = "b-grid";
    static props = [ITEM_MIN, SPACE];

    [ITEM_MIN] = "calc(var(--s3))";
    [SPACE] = "var(--s-0)";

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        let min_width = this[ITEM_MIN];

        return (`
            [data-i="${style_id}"] {
                display: grid;
                grid-gap: ${this[SPACE]};
            }

            @supports (width: min(${min_width}, 100%)) {
                [data-i="${style_id}"] {
                    grid-template-columns: repeat(auto-fit, minmax(min(${min_width}, 100%), 1fr));
                }
            }
    `)
    }
}

BGrid.define();
