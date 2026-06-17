import { Elena } from "@elenajs/core";
import { BORDER } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BBox extends Elena(HTMLElement) {
    static tagName = "b-box";
    static props = [BORDER];

    [BORDER] = 'var(--box-border-thin)';

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id, attribute_vals) {
        return (`
      [data-i=${style_id}] {
          display: block;
          padding: var(--s-1);
          border: ${attribute_vals[BORDER]};
          background-color: var(--color-background);
          border-radius: var(--s-1);
          transition: background-color .1s ease-in, box-shadow .1s ease-in;
          margin: var(--s0);
      }
    `)
    }
}

BBox.define();
