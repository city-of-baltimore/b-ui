import { Elena } from "@elenajs/core";
import { SPACE, THRESHOLD, LIMIT } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BSwitcher extends Elena(HTMLElement) {
    static tagName = "b-switcher";
    static props = [SPACE, THRESHOLD, LIMIT];

    [SPACE] = "var(--s-1)";
    [THRESHOLD] = "var(--measure)";
    [LIMIT] = 4;

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        const limit = this[LIMIT] + 1;

        return (`
            [data-i="${style_id}"] {
                display: flex;
                flex-wrap: wrap;
                gap: ${this[SPACE]};
            }

            [data-i="${style_id}"] > * {
                flex-grow: 1;
                flex-basis: calc(( ${this[THRESHOLD]} - 100%) * 999);
            }

            [data-i="${style_id}"] > :nth-last-child(n+ ${limit}),
            [data-i="${style_id}"] > :nth-last-child(n+ ${limit}) ~ * {
                flex-basis: 100%;
            }
    `)
    }
}

BSwitcher.define();
