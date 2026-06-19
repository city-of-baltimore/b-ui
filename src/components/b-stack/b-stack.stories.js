import './b-stack.js';
import '../b-box/b-box.js';
import { make_elements } from '../../stories/utils.js';

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

function gen(_) {
    return `
        <b-box></b-box>
    `
}

export const Default = {
    render: () => {
        return (`
            <b-stack>
                ${make_elements({ min: 3, gen })}
            </b-stack>
        `);
    },
};


export const custom_spacing = {
    render: () => {
        return (`
            <b-stack space="var(--s5)">
                ${make_elements({ min: 3, gen })}
            </b-stack>
        `);
    },
};

export const nested = {
    render: () => {
        return (`
            <b-stack>
                <b-box>
                    <b-stack>
                    ${make_elements({ min: 2, gen })}
                    </b-stack>
                </b-box>
                <b-box>
                    <b-stack>
                    ${make_elements({ min: 2, gen })}
                    </b-stack>
                </b-box>
                <b-box>
                    <b-stack>
                    ${make_elements({ min: 2, gen })}
                    </b-stack>
                </b-box>
            </b-stack>
        `);
    },
};

export const nested_recursive = {
    parameters: {
        docs: {
            description: {
                story: '`recursive` applies the vertical spacing to all elements recursively.\
                Notice how in this story, we only have one parent stack unlike the previous story\
                and it also affected text elements.',
            },
        },
    },
    render: () => {
        return (`
            <b-stack recursive>
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
                    ${make_elements({ min: 2, gen })}
                </b-box>
                <b-box>
                    ${make_elements({ min: 2, gen })}
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
                    ${make_elements({ min: 4, max: 7, gen })}
                </b-stack>
            </div>
        `);
    },
};
