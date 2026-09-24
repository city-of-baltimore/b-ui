import { Elena } from "@elenajs/core";
import { ITEM_MIN, SPACE } from "../../../attributes.js";
import { ITEM_MIN_VARIANTS, SPACE_VARIANTS } from "../../../variants.js";
import { generate_styles } from "../../../helpers.js";

export default class BGrid extends Elena(HTMLElement) {
    static tagName = "b-grid";
    static props = [ITEM_MIN, SPACE];

    [ITEM_MIN] = ITEM_MIN_VARIANTS.sm;
    [SPACE] = SPACE_VARIANTS['3xs'];

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {

        return (`
            [data-i="${style_id}"] {
                --gap: var(--bromo-space-${this[SPACE]});
                --item-min-width: calc(var(--bromo-space-${this[ITEM_MIN]}));
                display: grid;
                grid-gap: var(--gap);
            }

            @supports (width: min(var(--item-min-width), 100%)) {
                [data-i="${style_id}"] {
                    grid-template-columns: repeat(auto-fit, minmax(min(var(--item-min-width), 100%), 1fr));
                }
            }
    `)
    }
}

BGrid.define();
