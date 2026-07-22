import { fn } from 'storybook/test';
import './b-data-map.js';

export default {
    title: 'Wip/Experimental/b-data-map',
    parameters: {
        docs: {
            description: {
                component: 'A map with data filters.',
            },
        },
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        return (`
        <b-data-map></b-data-map>

        <script>
            (async () => {
                const lat = 39.299236;
                const lon = -76.609383;

                const make_points = (count) => {
                    let points = []
                    for (let i = 0; i < count; i ++) {
                        const sign = () => Math.random() > .5 ? 1 : -1
                        const lat_rand = Math.random() * .3 * sign()
                        const lon_rand = Math.random() * .3 * sign()
                        points.push([lat + lat_rand, lon + lon_rand])
                    }

                    return points;
                }

                await customElements.whenDefined('b-data-map');

                const map = document.getElementsByTagName('b-data-map')[0]

                const count = 30
                map.setPoints({
                    "red": make_points(count),
                    "blue": make_points(count),
                    "orange": make_points(count),
                })

            })()
        </script>
       `);
    },
};
