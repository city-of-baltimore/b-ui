import './b-imposter.js';
import '../b-box/b-box.js';

export default {
    title: 'Atoms/b-imposter',
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


export const Default = {
    render: () => {
        return (`
            <b-imposter>
                ${elements(4, 4)}
            </b-imposter>
        `);
    },
};
