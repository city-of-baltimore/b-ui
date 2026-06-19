import { fn } from 'storybook/test';
import './b-box.js';
import '../b-stack/b-stack.js';

export default {
    title: 'Atoms/b-box',
    parameters: {
        docs: {
            description: {
                component: 'A themed box. Without `margin`, applying margin\
                is delegated to other layout components.',
            },
        },
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        return (`
        <b-box>
        </b-box>
       `);
    },
};


export const custom_radius = {
    parameters: {
        docs: {
            description: {
                story: 'adding `radius` prop is equivalent to `radius=\'\'`',
            },
        },
    },
    render: () => {
        return (`
        <b-stack>
            <b-box radius>
            </b-box>

            <b-box radius="var(--s2)">
            </b-box>
        </b-stack>
   `);
    },
};

export const custom_border = {
    render: () => {
        return (`
        <b-stack>
            <b-box border>
            </b-box>

            <b-box border="var(--s-4) solid var(--color-purple-medium)">
            </b-box>
        </b-stack>
   `);
    },
};

export const nested = {
    render: () => {
        return (`
    <b-box rounded border>
        <b-stack>
            <b-box>
                <b-stack>
                  <b-box></b-box>
                  <b-box></b-box>
                  <b-box></b-box>
                </b-stack>
            </b-box>
            <b-box>
                <b-stack>
                  <b-box></b-box>
                  <b-box></b-box>
                  <b-box></b-box>
                </b-stack>
            </b-box>
        </b-stack>
   </b-box>
   `);
    },
};

