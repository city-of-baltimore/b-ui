import { Elena } from "@elenajs/core";
import { SIDE, SIDE_WIDTH, CONTENT_MIN, SPACE, NO_STRETCH } from "../../../attributes.js";
import { SIDE_VARIANTS, SIDE_WIDTH_VARIANTS, SPACE_VARIANTS } from "../../../variants.js";
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

    [SIDE] = SIDE_VARIANTS.right;
    [SIDE_WIDTH] = SIDE_WIDTH_VARIANTS.xs;
    [CONTENT_MIN] = MIN_CONTENT;
    [SPACE] = SPACE_VARIANTS.sm;
    [NO_STRETCH] = false;


    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
                [data-i="${style_id}"] {
                    --gap: var(--bromo-space-${this[SPACE]});
                    --side-width: var(--bromo-container-${this[SIDE_WIDTH]});
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--gap);
                    ${this[NO_STRETCH] ? 'align-items: flex-start;' : ''}
                }

                [data-i="${style_id}"] > * {
                    flex-grow: 1;
                    flex-basis: var(--side-width);
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
