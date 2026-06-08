import { Elena, html } from "@elenajs/core";
import { BORDER } from "../../attributes";
import { identifier_create } from "../../helpers.js";


export default class BBox extends Elena(HTMLElement) {
  static tagName = "b-box";
  static props = [BORDER];

  /** @property @type {"default" | "primary" | "danger"} */
  border = 'var(--box-border-thin)';


  constructor() {
    super()

    const parts = {
      main: "main"
    }

    const attr = [border];
    const style_id = identifier_create(this.constructor.tagName, attr);

    this.dataset.i = style_id;
    const existing_style_node = document.querySelector(`style#${style_id}`);

    if (!existing_style_node) {
      const style_node = document.createElement("style");
      style_node.innerText = `
        [data-i=${style_id}] {
          display: block;
          padding: var(--s-1);
          border: ${border};
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

  connectedCallback() {
    const shadow_root = this.attachShadow({
      mode: 'open'
    });

    htmx?.process(this.template(shadow_root));
  }

  render() {
    return html`
      <div class="b-box">${this.text}</div>
    `;
  }
}
BBox.define();
