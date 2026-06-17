import { Elena } from "@elenajs/core";
import { SPACE, RECURSIVE, SPLIT_AFTER } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BStack extends Elena(HTMLElement) {
    static tagName = "b-stack";
    static props = [SPACE, RECURSIVE, SPLIT_AFTER];

    [SPACE] = "var(--s0)";
    [RECURSIVE] = false;
    [SPLIT_AFTER] = 0;

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id, attribute_vals) {
        return (`
           [data-i="${style_id}"] {
             display: flex;
             flex-direction: column;
             justify-content: flex-start;
           }

           [data-i="${style_id}"]${attribute_vals[RECURSIVE] ? '' : ' >'} * + * {
               margin-block-start: ${attribute_vals[SPACE]};
           }

           ${attribute_vals[SPLIT_AFTER] ? `
               [data-i="${style_id}"]:only-of-type {
                   block-size: 100%;
               }

               [data-i="${style_id}"] > :nth-child(${attribute_vals[SPLIT_AFTER]}) {
                   margin-block-end: auto;
               }`
                : ''}
    `)
    }
}

BStack.define();
