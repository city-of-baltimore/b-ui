import './b-container.js';
import '../b-box/b-box.js';
import { make_elements } from '../../stories/utils.js';

export default {
    title: 'Atoms/b-container',
    parameters: {
        docs: {
            description: {
                component: 'A wrapper with that can be used with container queries.',
            },
        },
    },
    tags: ['autodocs'],
};

function gen(_) {
    return `
        <b-box>
        </b-box>`
}

export const Default = {
    render: () => {
        return (`
<b-container>
    ${make_elements({ min: 3, gen })}
</b-container>
        `);
    },
};

export const with_name = {
    render: () => {
        return (`
<b-container name="container_1">
    ${make_elements({ min: 3, gen })}
</b-container>
        `);
    },
};
