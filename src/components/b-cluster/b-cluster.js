import { Elena } from "@elenajs/core";
import { SPACE, JUSTIFY, ALIGN } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BCluster extends Elena(HTMLElement) {
    static tagName = "b-cluster";
    static props = [SPACE, JUSTIFY, ALIGN];

    [SPACE] = "var(--s-1)";
    [JUSTIFY] = "flex-start";
    [ALIGN] = "center";

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
            [data-i="${style_id}"] {
                display: flex;
                flex-wrap: wrap;
                gap: ${this[SPACE]};
                justify-content: ${this[JUSTIFY]};
                align-items: ${this[ALIGN]};
                height: 100%;
            }
    `)
    }
}

BCluster.define();
