import { fn } from 'storybook/test';
import './b-box.js';

export default {
    title: 'Atoms/b-box',
    parameters: {
        docs: {
            description: {
                component: 'A themed box.',
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

export const Custom_Border = {
    render: () => {
        return (`
        <b-box border="var(--s-4) solid var(--color-purple-medium)">
        </b-box>
   `);
    },
};

export const Nested = {
    render: () => {
        return (`
    <b-box>
        <b-box>
          <b-box></b-box>
          <b-box></b-box>
          <b-box></b-box>
        </b-box>
        <b-box>
          <b-box></b-box>
          <b-box></b-box>
          <b-box></b-box>
        </b-box>
   </b-box>
   `);
    },
};

