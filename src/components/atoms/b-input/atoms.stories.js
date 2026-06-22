import { fn } from 'storybook/test';
import './b-input.js';
import '../../layout/b-icon/b-icon.js';
import '../../layout/b-box/b-box.js';

export default {
    title: 'Wip/Atom/b-input',
    parameters: {
        docs: {
            description: {
                component: 'A input field for form data entry.',
            },
        },
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        return (`
        <b-input></b-input>
       `);
    },
};
