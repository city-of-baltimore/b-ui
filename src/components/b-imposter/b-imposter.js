import { Elena } from "@elenajs/core";
import { FIXED, MARGIN } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BImposter extends Elena(HTMLElement) {
    static tagName = "b-imposter";
    static props = [FIXED, MARGIN];

    [FIXED] = false;
    [MARGIN] = "0px";

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
            [data-i="${style_id}"] {
                position: ${this[FIXED] ? 'fixed' : 'absolute'};
                inset-block-start: 50%;
                inset-inline-start: 50%;
                transform: translate(-50%, -50%);
            }

            [data-i="${style_id}"] {
                overflow: auto;
                max-inline-size: calc(100% - (${this[MARGIN]} * 2));
                max-block-size: calc(100% - (${this[MARGIN]} * 2));
            }
    `)
    }
}

BImposter.define();
