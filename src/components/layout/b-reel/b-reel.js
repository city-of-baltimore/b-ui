import { Elena } from "@elenajs/core";
import { /*COMPACT,*/ SPACE } from "../../../attributes.js";
import { SPACE_VARIANTS } from "../../../variants.js";
import { generate_styles } from "../../../helpers.js";

export default class BReel extends Elena(HTMLElement) {
    static tagName = "b-reel";
    static props = [/*COMPACT,*/ SPACE];

    // [COMPACT] = false;
    [SPACE] = SPACE_VARIANTS.sm;

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
                [data-i="${style_id}"] {
                    --track-color: var(--bromo-color-slate-50);
                    --thumb-color: oklch(from var(--track-color) .4 c h);
                    --space: var(--bromo-space-${this[SPACE]});
                    --item-width: calc(var(--bromo-size-step-4)*3);
                    --height: auto;

                    display: flex;
                    block-size: var(--height);
                    overflow-x: auto;
                    overflow-y: hidden;
                    scrollbar-color: var(--track-color) var(--thumb-color);

                    &:hover {
                        scrollbar-color: var(--thumb-color) var(--track-color);
                    }
                }

                [data-i="${style_id}"]::-webkit-scrollbar {
                    block-size: 1rem;
                }

                [data-i="${style_id}"]::-webkit-scrollbar {
                    background-color: var(--track-color);
                }

                [data-i="${style_id}"]::-webkit-scrollbar-thumb {
                    background-image: linear-gradient(var(--track-color) 0, var(--track-color) 0.25rem, var(--thumb-color) 0.25rem, var(--color-) 0.75rem, var(--track-color) 0.75rem);
                }

                [data-i="${style_id}"] > * {
                    flex: 0 0 var(--item-width);
                }

                [data-i="${style_id}"] > img {
                    block-size: 100%;
                    flex-basis: auto;
                    width: auto;
                }

                [data-i="${style_id}"] > * + * {
                    margin-inline-start: var(--space);
                }

                [data-i="${style_id}"].overflowing {
                    padding-block-end: var(--space);
                }
            `)
    }
}

BReel.define();
