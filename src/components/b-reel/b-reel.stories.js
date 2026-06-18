import './b-reel.js';
import '../b-box/b-box.js';
import { make_elements } from '../../stories/utils.js';

export default {
    title: 'Atoms/b-reel',
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
                    min-height: calc(var(--s2) * ${factor});
                    border: var(--box-border-thin);
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

export const compact = {
    render: () => {
        return (`
            <b-reel>
            ${make_elements({ min: 5, max: 20, gen })}
            </b-reel>
        `);
    },
};

export const custom_spacing = {
    render: () => {
        return (`
            <b-reel space="var(--s5)">
                ${make_elements({ min: 5, max: 20, gen })}
            </b-reel>
        `);
    },
};

export const custom_item_width = {
    render: () => {
        return (`
            <b-reel style="--item-width: calc(var(--s2) * 3)">
                ${make_elements({ min: 5, max: 20, gen })}
            </b-reel>
        `);
    },
};
