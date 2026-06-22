import { Elena } from "@elenajs/core";
import { NAME } from "../../../attributes.js";
import { generate_styles } from "../../../helpers.js";

export default class Bcontainer extends Elena(HTMLElement) {
    static tagName = "b-container";
    static props = [NAME];

    [NAME] = "";

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
            [data-i="${style_id}"] {
                ${this[NAME].length > 0 ? `container-name: ${this[NAME]};` : ""}
                container-type: inline-size;
            }
    `)
    }
}

Bcontainer.define();
