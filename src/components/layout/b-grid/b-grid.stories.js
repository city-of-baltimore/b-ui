import './b-grid.js';
import '../b-box/b-box.js';
import { make_elements } from '../../../stories/utils.js';

export default {
    title: 'web components/layout/b-grid',
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
                    min-height: calc(var(--bromo-space-lg) * ${factor});
                    border: var(--bromo-border-width-thin) solid var(--bromo-color-slate-50);
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

export const spacing = {
    render: () => {
        return (`
            <b-grid space="sm">
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
            <b-grid style="--item-min-width: 500px">
                ${make_elements({ min: 3, max: 20, gen })}
            </b-grid>
        `);
    },
};
