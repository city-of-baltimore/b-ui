import { Elena } from "@elenajs/core";
import { SIDE, SIDE_WIDTH, CONTENT_MIN, SPACE, NO_STRETCH } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

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
    [SPACE] = "var(--s0)";
    [NO_STRETCH] = false;


    willUpdate() {
        generate_styles(this)
    }

    styles(style_id, attribute_vals) {
        return (`
                [data-i="${style_id}"] {
                    display: flex;
                    flex-wrap: wrap;
                    gap: ${attribute_vals[SPACE]};
                    ${attribute_vals[NO_STRETCH] ? 'align-items: flex-start;' : ''}
                }

                [data-i="${style_id}"] > * {
                    flex-grow: 1;
                    ${attribute_vals[SIDE_WIDTH] ? `flex-basis: ${attribute_vals[SIDE_WIDTH]};` : ''}
                }

                [data-i="${style_id}"] > ${attribute_vals[SIDE] !== 'left' ? `:first-child` : `:last-child`} {
                    flex-basis: 0;
                    flex-grow: 999;
                    min-inline-size: ${attribute_vals[CONTENT_MIN] >= MIN_CONTENT ? attribute_vals[CONTENT_MIN] : MIN_CONTENT };
                }
    `)
    }
}

BSidebar.define();
