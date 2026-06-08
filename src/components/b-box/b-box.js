import { Elena, html } from "@elenajs/core";
import { BORDER } from "../../attributes.js";
import { get_attribute_vals, identifier_create } from "../../helpers.js";

export default class BBox extends Elena(HTMLElement) {
  static tagName = "b-box";
  static props = [BORDER];

  border = 'var(--box-border-thin)';

  willUpdate() {
    this.generate_styles()
  }

  generate_styles() {
    const attr = get_attribute_vals(this.constructor.props, this);
    const style_id = identifier_create(this.constructor.tagName, attr);

    this.dataset.i = style_id;
    const existing_style_node = document.querySelector(`style#${style_id}`);

    if (!existing_style_node) {
      const style_node = document.createElement("style");
      style_node.innerText = `
        [data-i=${style_id}] {
          display: block;
          padding: var(--s-1);
          border: ${this.border};
          background-color: var(--color-background);
          border-radius: var(--s0);
          transition: background-color .1s ease-in, box-shadow .1s ease-in;
          overflow: hidden;
          margin: var(--s0);
        }
      `;

      style_node.setAttribute("id", style_id);
      document.head.appendChild(style_node);
    }
  }
}

BBox.define();
