import { Elena, html } from "@elenajs/core";
import { BORDER, RADIUS, NAME, AREA, PLACEHOLDER, TYPE } from "../../../attributes.js";
import { generate_styles } from "../../../helpers.js";

import "../../layout/b-box/b-box.js";
import '../../layout/b-stack/b-stack.js';
import '../../layout/b-cluster/b-cluster.js';
import '../../atoms/b-button/b-button.js';

export default class BData_Map extends Elena(HTMLElement) {
    static tagName = "b-data-map";

    static props = [];
    static parts = {
        data_map: 'data-map',
    };

    count = 0;
    filter = 'all'

    //# TODO: add arktype/zod for schema validation at runtime
    points = {}

    add_point(point) {
        let key = this.filter
        if (this.filter === 'all') {
            const keys = Object.keys(this.points)
            key = keys[Math.floor(Math.random() * keys.length)]

            this.points[key].push(point)
        } else {
            this.points[this.filter].push(point)
        }

        this.count++;
        this.querySelector('#points-count').innerHTML = html`${this.count}`

        const marker = L.marker(point).bindPopup(key);
        this.markerGroup.addLayer(marker)
    }

    async setPoints(points) {
        await this.updateComplete

        Object.assign(this.points, points)

        const keys = Object.keys(this.points)

        const select = this.querySelector('select')
        for (let key of keys) {
            const option = document.createElement('option')
            option.innerText = key
            select.appendChild(option)
        }
    }

    willUpdate() {
        generate_styles(this);
    }

    connectedCallback() {
        super.connectedCallback()

        let L = window.L;
        if (!L) {
            document.head.append(Object.assign(document.createElement("script"), {
                src: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
                integrity: "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=",
                crossOrigin: "",
                onload: () => {
                    this.render_map();
                }
            }));
        } else {
            this.render_map();
        }

    }

    async render_map() {
        await this.updateComplete;
        let L = window.L;

        this.map = L.map(this.querySelector('#map')).setView([39.299236, -76.609383], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 13,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);


        const keys = Object.keys(this.points)

        this.markerGroup = L.layerGroup().addTo(this.map)

        this.count = 0;
        for (let key of keys) {
            for (let point of this.points[key]) {
                const marker = L.marker(point).bindPopup(key);
                this.markerGroup.addLayer(marker)
                this.count++;
            }
        }

        this.querySelector('#points-count').innerHTML = html`${this.count}`

        const button_add_point = this.querySelector('b-button')
        button_add_point.addEventListener('click', () => {
            const lat = 39.299236;
            const lon = -76.609383;

            const sign = () => Math.random() > .5 ? 1 : -1
            const lat_rand = Math.random() * .5 * sign()
            const lon_rand = Math.random() * .5 * sign()

            const point = [lat + lat_rand, lon + lon_rand]

            this.add_point(point)
            this.map.flyTo(point, 17, {
                duration: .20,
            });
        })

        const select = this.querySelector('select')
        select.addEventListener('change', (e) => {
            this.markerGroup.clearLayers()

            this.filter = select.value

            if (select.value != "all") {
                for (let point of this.points[select.value]) {
                    const marker = L.marker(point).bindPopup(select.value);
                    this.markerGroup.addLayer(marker)
                }
            } else {
                const keys = Object.keys(this.points)
                for (let key of keys) {
                    for (let point of this.points[key]) {
                        const marker = L.marker(point).bindPopup(key);
                        this.markerGroup.addLayer(marker)
                    }
                }
            }
        })
    }

    styles(style_id) {
        return (`
            [data-i=${style_id}]::part(${this.constructor.parts.data_map}) {
            }
    `)
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">

            <b-stack>
                <b-cluster>
                    <b-button>add point</b-button>
                    <h2>points: <span id="points-count"></span></h2>
                    <select>
                        <option selected>all</option>
                    </select>
                </b-cluster>
                <div id="map" part=${this.constructor.parts.data_map} style="height: 1000px">
                </div>
            </b-stack>
        `;
    }
}

BData_Map.define();

