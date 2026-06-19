import './b-container.js';
import '../b-box/b-box.js';
import '../b-stack/b-stack.js';

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
    <b-stack>
    ${make_elements({ min: 3, gen })}
    </b-stack>
</b-container>
        `);
    },
};

export const with_name = {
    render: () => {
        return (`
<b-container name="container_1">
    <b-stack>
    ${make_elements({ min: 3, gen })}
    </b-stack>
</b-container>
        `);
    },
};
