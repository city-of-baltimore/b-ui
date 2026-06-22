import './b-cluster.js';
import '../b-box/b-box.js';
import '../b-stack/b-stack.js';
import { make_elements } from '../../../stories/utils.js';

export default {
    title: 'Layout/b-cluster',
    parameters: {
        docs: {
            description: {
                component: 'Wrapper for clustered elements with variable size.',
            },
        },
    },
    tags: ['autodocs'],
};


function gen(factor) {
    return `
        <div>
            <style>
                me {
                    width: calc(var(--s0) * ${factor}); 
                    height: 1rem;
                    border: var(--box-border-thin);
                }
            </style>
        </div>`
}

export const Default = {
    render: () => {
        return (`
            <b-cluster>
                ${make_elements({ min: 3, gen })}
            </b-cluster>
        `);
    },
};

export const custom_spacing = {
    render: () => {
        return (`
            <b-cluster space="var(--s-2)">
                ${make_elements({ min: 3, gen })}
            </b-cluster>
        `);
    },
};

export const justify = {
    parameters: {
        docs: {
            description: {
                story: '`justify` accepts values of `justify-content` for flex-box justification.',
            },
        },
    },
    render: () => {
        return (`
            <b-stack>
                <div>
                    <style>
                        me {
                            height: 10rem;
                            border: var(--box-border-thin);
                        }
                    </style>
                    <b-cluster>
                        ${make_elements({ min: 3, gen })}
                    </b-cluster>
                </div>
                <div>
                    <style>
                        me {
                            height: 10rem;
                            border: var(--box-border-thin);
                        }
                    </style>
                    <b-cluster justify="center">
                        ${make_elements({ min: 3, gen })}
                    </b-cluster>
                </div>
                <div>
                    <style>
                        me {
                            height: 10rem;
                            border: var(--box-border-thin);
                        }
                    </style>
                    <b-cluster justify="flex-end">
                        ${make_elements({ min: 3, gen })}
                    </b-cluster>
                </div>
            </b-stack>
        `);
    },
};

export const align = {
    parameters: {
        docs: {
            description: {
                story: '`align` accepts values of `align-items` for flex-box justification.',
            },
        },
    },
    render: () => {
        return (`
            <b-stack>
                <div>
                    <style>
                        me {
                            height: 10rem;
                            border: var(--box-border-thin);
                        }
                    </style>
                    <b-cluster align="flex-start">
                        ${make_elements({ min: 3, gen })}
                    </b-cluster>
                </div>

                <div>
                    <style>
                        me {
                            height: 10rem;
                            border: var(--box-border-thin);
                        }
                    </style>
                    <b-cluster>
                        ${make_elements({ min: 3, gen })}
                    </b-cluster>
                </div>

                <div>
                    <style>
                        me {
                            height: 10rem;
                            border: var(--box-border-thin);
                        }
                    </style>
                    <b-cluster align="flex-end">
                        ${make_elements({ min: 3, gen })}
                    </b-cluster>
                </div>
            </b-stack>
        `);
    },
};
