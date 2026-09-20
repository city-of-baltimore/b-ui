import { fn } from 'storybook/test';
import './b-box.js';
import '../b-stack/b-stack.js';

export default {
    title: 'web components/layout/b-box',
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
        <b-box border radius>
            <style>
                me {
                    padding: var(--bromo-space-lg);
                    background: color-mix(in oklch, contrast-color(var(--bg-color-resolved)) 20%, transparent);
                }
            </style>
            <b-box border>
            </b-box>
        </b-box>
       `);
    },
};

export const levels = {
    render: () => {
        return (`
            <b-box border="thicker" level="raised"></b-box>
            <b-box border="thicker" level></b-box>
            <b-box border="thicker" level="lowered"></b-box>
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
        <b-box border radius>
            <style>
                me {
                    padding: var(--bromo-space-lg);
                }
            </style>
            <b-stack>
                <b-box radius>
                </b-box>

                <b-box radius="2xl">
                </b-box>
            </b-stack>
        </b-box border radius>
   `);
    },
};

export const custom_border = {
    render: () => {
        return (`
        <b-box border radius>
            <style>
                me {
                    padding: var(--bromo-space-lg);
                }
            </style>
            <b-stack>
                <b-box border>
                </b-box>

                <b-box border="2xl">
                </b-box>
            </b-stack>
        </b-box>
   `);
    },
};

export const nested = {
    render: () => {
        return (`
    <b-box border radius>
        <style>
            me {
                padding: var(--bromo-space-lg);
            }
        </style>
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

