import './b-switcher.js';
import '../b-box/b-box.js';

export default {
    title: 'Atoms/b-switcher',
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

const elements = (min = 3, max = 20) => {
    return new Array((Math.floor(Math.random() * (max - min)) + min)).fill(0).map(() => {
        const factor = Math.random();

        return `
            <div>
                <style>
                    me {
                        min-height: calc(var(--s2) * ${factor});
                        border: var(--box-border-thin);
                    }
                </style>
            </div>`
    }).join('')
}

export const Default = {
    render: () => {
        return (`
            <b-switcher>
                ${elements(4, 4)}
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
                ${elements(4, 4)}
            </b-switcher>
        `);
    },
};

export const spacing = {
    render: () => {
        return (`
            <b-switcher space="var(--s-2)">
                ${elements(4, 4)}
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
                ${elements(6, 10)}
            </b-switcher>
        `);
    },
};


