import { Elena } from "@elenajs/core";
import { SPACE, JUSTIFY, ALIGN } from "../../../attributes.js";
import { SPACE_VARIANTS, JUSTIFY_VARIANTS, ALIGN_VARIANTS } from "../../../variants.js";
import { generate_styles } from "../../../helpers.js";

export default class BCluster extends Elena(HTMLElement) {
    static tagName = "b-cluster";
    static props = [SPACE, JUSTIFY, ALIGN];

    [SPACE] = SPACE_VARIANTS.sm;
    [JUSTIFY] = JUSTIFY_VARIANTS.start;
    [ALIGN] = ALIGN_VARIANTS.center;

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
            [data-i="${style_id}"] {
                --gap: var(--bromo-space-${this[SPACE]});
                display: flex;
                flex-wrap: wrap;
                gap: var(--gap);
                justify-content: ${this[JUSTIFY]};
                align-items: ${this[ALIGN]};
                height: 100%;
            }
    `)
    }
}

BCluster.define();
