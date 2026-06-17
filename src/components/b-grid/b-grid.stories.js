import './b-grid.js';
import '../b-box/b-box.js';

export default {
    title: 'Atoms/b-grid',
    parameters: {
        docs: {
            description: {
                component: 'Wrapper to create a simple grid layout.',
            },
        },
    },
    tags: ['autodocs'],
};

const elements = () => {
    return new Array((Math.floor(Math.random() * (20 - 3)) + 3)).fill(0).map(() => {
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
            <b-grid>
                ${elements()}
            </b-grid>
        `);
    },
};

export const custom_spacing = {
    render: () => {
        return (`
            <b-grid space="var(--s-5)">
                ${elements()}
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
                ${elements()}
            </b-grid>
        `);
    },
};
