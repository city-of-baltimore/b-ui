import './b-grid.js';
import '../b-box/b-box.js';
import { make_elements } from '../../stories/utils.js';

export default {
    title: 'Layout/b-grid',
    parameters: {
        docs: {
            description: {
                component: 'Wrapper to create a simple grid layout.',
            },
        },
    },
    tags: ['autodocs'],
};

function gen(factor) {
    return `
        <div>
            <style>
                me {
                    min-height: calc(var(--s2) * ${factor});
                    border: var(--box-border-thin);
                }
            </style>
        </div>`
}

export const Default = {
    render: () => {
        return (`
            <b-grid>
                ${make_elements({ min: 3, max: 20, gen })}
            </b-grid>
        `);
    },
};

export const custom_spacing = {
    render: () => {
        return (`
            <b-grid space="var(--s-5)">
                ${make_elements({ min: 3, max: 20, gen })}
            </b-grid>
        `);
    },
};

export const item_min_width = {
    parameters: {
        docs: {
            description: {
                story: '`item-min` sets item\'s minimum width',
            },
        },
    },
    render: () => {
        return (`
            <b-grid item-min="100px">
                ${make_elements({ min: 3, max: 20, gen })}
            </b-grid>
        `);
    },
};
