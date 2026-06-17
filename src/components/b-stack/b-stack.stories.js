import './b-stack.js';
import '../b-box/b-box.js';

export default {
    title: 'Atoms/b-stack',
    parameters: {
        docs: {
            description: {
                component: 'Wrapper for stacked elements.',
            },
        },
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        return (`
            <b-stack>
                <b-box></b-box>
                <b-box></b-box>
                <b-box></b-box>
            </b-stack>
        `);
    },
};


export const custom_spacing = {
    render: () => {
        return (`
            <b-stack space="var(--s5)">
                <b-box></b-box>
                <b-box></b-box>
                <b-box></b-box>
            </b-stack>
        `);
    },
};

export const nested = {
    render: () => {
        return (`
            <b-stack space="var(--s5)">
                <b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                </b-box>
                <b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                </b-box>
                <b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                </b-box>
            </b-stack>
        `);
    },
};

export const nested_recursive = {
    parameters: {
        docs: {
            description: {
                story: '`recursive` applies the vertical spacing to all elements recursively.',
            },
        },
    },
    render: () => {
        return (`
            <b-stack recursive space="var(--s5)">
                <b-box>
                    <b-box>
                        <h1>
                            re
                        </h1>
                        <p>
                            cursive
                        </p>
                    </b-box>
                    <b-box></b-box>
                </b-box>
                <b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                </b-box>
                <b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                </b-box>
            </b-stack>
        `);
    },
};


export const splitting = {
    parameters: {
        docs: {
            description: {
                story: "Split the stack at the `n'th` child if the parent element has enough space to allow it.",
            },
        },
    },
    render: () => {
        return (`
            <div>
                <style>
                    me {
                        height: 70vh;
                    }
                </style>
                <b-stack split-after='3' spacing='var(--s3)'>
                    <b-box></b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                    <b-box></b-box>
                </b-stack>
            </div>
        `);
    },
};
