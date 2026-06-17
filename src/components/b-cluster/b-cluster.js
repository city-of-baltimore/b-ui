import { Elena } from "@elenajs/core";
import { SPACE, JUSTIFY, ALIGN } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BCluster extends Elena(HTMLElement) {
    static tagName = "b-cluster";
    static props = [SPACE, JUSTIFY, ALIGN];

    [SPACE] = "var(--s0, 1rem)";
    [JUSTIFY] = "flex-start";
    [ALIGN] = "center";

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id, attribute_vals) {
        return (`
            [data-i="${style_id}"] {
                display: flex;
                flex-wrap: wrap;
                gap: ${attribute_vals[SPACE]};
                justify-content: ${attribute_vals[JUSTIFY]};
                align-items: ${attribute_vals[ALIGN]};
                height: 100%;
            }
    `)
    }
}

BCluster.define();
