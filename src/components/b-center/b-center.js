import { Elena } from "@elenajs/core";
import { CONTENT_MAX, CENTER_TEXT, GUTTERS, INTRINSIC } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BCenter extends Elena(HTMLElement) {
    static tagName = "b-center";
    static props = [
        CONTENT_MAX,
        CENTER_TEXT,
        GUTTERS,
        INTRINSIC
    ];

    [CONTENT_MAX] = "var(--measure)";
    [CENTER_TEXT] = false;
    [GUTTERS] = "var(--s1)";
    [INTRINSIC] = true;

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
            [data-i="${style_id}"] {
                display: block;
                box-sizing: content-box;
                margin-inline: auto;
                ${this[CENTER_TEXT] ? "text-align: center;" : ""}
                max-inline-size: ${this[CONTENT_MAX]};
                padding-inline-start: ${this[GUTTERS]};
                padding-inline-end: ${this[GUTTERS]};

                ${this[INTRINSIC] ? `
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    ` : ""}
                }
    `)
    }
}

BCenter.define();
