import { Elena } from "@elenajs/core";
import { SIDE, SIDE_WIDTH, CONTENT_MIN, SPACE, NO_STRETCH } from "../../../attributes.js";
import { generate_styles } from "../../../helpers.js";

const MIN_CONTENT = "50%";

export default class BSidebar extends Elena(HTMLElement) {
    static tagName = "b-sidebar";
    static props = [
        SIDE,
        SIDE_WIDTH,
        CONTENT_MIN,
        SPACE,
        NO_STRETCH
    ];

    [SIDE] = "right";
    [SIDE_WIDTH] = "var(--s1)";
    [CONTENT_MIN] = MIN_CONTENT;
    [SPACE] = "var(--s-1)";
    [NO_STRETCH] = false;


    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
                [data-i="${style_id}"] {
                    display: flex;
                    flex-wrap: wrap;
                    gap: ${this[SPACE]};
                    ${this[NO_STRETCH] ? 'align-items: flex-start;' : ''}
                }

                [data-i="${style_id}"] > * {
                    flex-grow: 1;
                    ${this[SIDE_WIDTH] ? `flex-basis: ${this[SIDE_WIDTH]};` : ''}
                }

                [data-i="${style_id}"] > ${this[SIDE] !== 'left' ? `:first-child` : `:last-child`} {
                    flex-basis: 0;
                    flex-grow: 999;
                    min-inline-size: ${this[CONTENT_MIN] >= MIN_CONTENT ? this[CONTENT_MIN] : MIN_CONTENT };
                }
    `)
    }
}

BSidebar.define();
