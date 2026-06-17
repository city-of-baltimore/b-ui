import './b-reel.js';
import '../b-box/b-box.js';

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

const elements = () => {
    const min = 5
    return new Array((Math.floor(Math.random() * (20 - min)) + min)).fill(0).map(() => {
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
            <b-reel>
                ${elements()}
            </b-reel>
        `);
    },
};

export const compact = {
    render: () => {
        return (`
            <b-reel>
                ${elements()}
            </b-reel>
        `);
    },
};

export const custom_spacing = {
    render: () => {
        return (`
            <b-reel space="var(--s5)">
                ${elements()}
            </b-reel>
        `);
    },
};

export const custom_item_width = {
    render: () => {
        return (`
            <b-reel style="--item-width: calc(var(--s2) * 3)">
                ${elements()}
            </b-reel>
        `);
    },
};
