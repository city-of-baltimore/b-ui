import './b-reel.js';
import '../b-box/b-box.js';
import { make_elements } from '../../../stories/utils.js';

export default {
    title: 'web components/layout/b-reel',
    parameters: {
        docs: {
            description: {
                component: 'Wrapper to create a simple reel layout. Horizontally scrollable items.',
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
                    min-height: calc(var(--bromo-space-sm) * ${factor});
                    border: var(--bromo-border-width-thin) solid var(--bromo-color-slate-50);
                }
            </style>
        </div>
    `
}

export const Default = {
    render: () => {
        return (`
            <b-reel>
                ${make_elements({ min: 5, max: 20, gen })}
            </b-reel>
        `);
    },
};

export const spacing = {
    render: () => {
        return (`
            <b-reel space="3xs">
                ${make_elements({ min: 5, max: 20, gen })}
            </b-reel>
        `);
    },
};

export const custom_item_width = {
    render: () => {
        return (`
            <b-reel style="--item-width: calc(var(--bromo-size-step-8) * 3)">
                ${make_elements({ min: 5, max: 20, gen })}
            </b-reel>
        `);
    },
};
