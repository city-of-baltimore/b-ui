import './b-switcher.js';
import '../b-box/b-box.js';
import { make_elements } from '../../../stories/utils.js';

export default {
    title: 'Layout/b-switcher',
    parameters: {
        docs: {
            description: {
                component: 'A wrapper that lays out elements horizontally or \
                vertically based on available space and number of elements.',
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
            <b-switcher>
                ${make_elements({ min: 4, gen })}
            </b-switcher>
        `);
    },
};

export const threshold = {
    parameters: {
        docs: {
            description: {
                story: '`threshold` sets the minimum width before switching to\
                the vertical layout.',
            },
        },
    },
    render: () => {
        return (`
            <b-switcher threshold="calc(var(--s0) * 50)">
                ${make_elements({ min: 4, gen })}
            </b-switcher>
        `);
    },
};

export const spacing = {
    render: () => {
        return (`
            <b-switcher space="var(--s-2)">
                ${make_elements({ min: 4, gen })}
            </b-switcher>
        `);
    },
};

export const limit = {
    parameters: {
        docs: {
            description: {
                story: '`limit` determines the maximum number of elements allowed\
                in the horizontal layout. If the number of elements exceeds, it \
                switches to the vertical layout.',
            },
        },
    },
    render: () => {
        return (`
            <b-switcher limit="5">
                ${make_elements({ min: 6, max: 10, gen })}
            </b-switcher>
        `);
    },
};


