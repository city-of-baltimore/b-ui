import './b-cluster.js';
import '../b-box/b-box.js';
import '../b-stack/b-stack.js';

export default {
    title: 'Atoms/b-cluster',
    parameters: {
        docs: {
            description: {
                component: 'Wrapper for clustered elements with variable size.',
            },
        },
    },
    tags: ['autodocs'],
};


const elements = () => {
    return new Array(3).fill(0).map(() => {
        const width = Math.random();
        return `
            <div>
                <style>
                    me {
                        width: calc(var(--s0) * ${width}); 
                        height: 1rem;
                        border: var(--box-border-thin);
                    }
                </style>
            </div>`
    }).join('')
}

export const Default = {
    render: () => {
        return (`
            <b-cluster>
                ${elements()}
            </b-cluster>
        `);
    },
};

export const custom_spacing = {
    render: () => {
        return (`
            <b-cluster space="var(--s-2)">
                ${elements()}
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
                        ${elements()}
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
                        ${elements()}
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
                        ${elements()}
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
                        ${elements()}
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
                        ${elements()}
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
                        ${elements()}
                    </b-cluster>
                </div>
            </b-stack>
        `);
    },
};
