import { Elena } from "@elenajs/core";
import { COMPACT, SPACE } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BReel extends Elena(HTMLElement) {
    static tagName = "b-reel";
    static props = [COMPACT, SPACE];

    [COMPACT] = false;
    [SPACE] = "var(--s0)";

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id, attribute_vals) {
        return (`
                [data-i="${style_id}"] {
                    --track-color: var(--color-background);
                    --thumb-color: var(--color-foreground);
                    --space: ${attribute_vals[COMPACT] ? "var(--s-4)" : attribute_vals[SPACE]};
                    --item-width: calc(var(--s3)*5);
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
