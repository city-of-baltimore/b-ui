import { Elena } from "@elenajs/core";
import { BORDER } from "../../attributes.js";
import { generate_styles } from "../../helpers.js";

export default class BBox extends Elena(HTMLElement) {
    static tagName = "b-box";
    static props = [BORDER];

    border = 'var(--box-border-thin)';

    willUpdate() {
        generate_styles(this)
    }

    styles(style_id) {
        return (`
      [data-i=${style_id}] {
          display: block;
          padding: var(--s-1);
          border: ${this.border};
          background-color: var(--color-background);
          border-radius: var(--s-1);
          transition: background-color .1s ease-in, box-shadow .1s ease-in;
          overflow: hidden;
          margin: var(--s0);
      }
    `)
    }
}

BBox.define();
