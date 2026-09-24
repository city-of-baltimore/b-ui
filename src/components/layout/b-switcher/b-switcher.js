import { Elena } from "@elenajs/core";
import { SPACE, THRESHOLD, LIMIT } from "../../../attributes.js";
import { SPACE_VARIANTS, THRESHOLD_VARIANT } from "../../../variants.js";
import { generate_styles } from "../../../helpers.js";

export default class BSwitcher extends Elena(HTMLElement) {
    static tagName = "b-switcher";
    static props = [SPACE, THRESHOLD, LIMIT];

    [SPACE] = SPACE_VARIANTS.sm;
    [THRESHOLD] = THRESHOLD_VARIANT.lg; //TODO: fix aliases in design system and set `measure`
    [LIMIT] = 4;

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        const limit = this[LIMIT] + 1;

        return (`
            [data-i="${style_id}"] {
                --gap: var(--bromo-space-${this[SPACE]});
                display: flex;
                flex-wrap: wrap;
                gap: var(--gap);
            }

            [data-i="${style_id}"] > * {
                flex-grow: 1;
                flex-basis: calc(( var(--bromo-container-${this[THRESHOLD]}) - 100%) * 999);
            }

            [data-i="${style_id}"] > :nth-last-child(n+ ${limit}),
            [data-i="${style_id}"] > :nth-last-child(n+ ${limit}) ~ * {
                flex-basis: 100%;
            }
    `)
    }
}

BSwitcher.define();
