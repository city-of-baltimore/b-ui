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
    parameters: {
        docs: {
            description: {
                story: '`level` has 3 possible values: `raised | default | lowered`. if `level` is unset or doesn\'t exist, its value is `default`. ',
            },
        },
    },
    render: () => {
        return (`
        <b-box border radius>
            <style>
                me {
                    padding: var(--bromo-space-lg);
                    background: color-mix(in oklch, contrast-color(var(--bg-color-resolved)) 20%, transparent);
                }
                [data-theme="dark"] {
                    me {
                        background: var(--bg-color-resolved);
                    }
                }
            </style>
            <b-stack>
                <b-box border="thicker" level="raised"></b-box>
                <b-box border="thicker" level></b-box>
                <b-box border="thicker" level="lowered"></b-box>
            </b-stack>
        </b-box>
       `);
    },
};

export const custom_background_color = {
    parameters: {
        docs: {
            description: {
                story: 'the background color can be customized using the `--box-color`' +
                    ' CSS variable and the `--box-l-factor` modifies the lightness.'
                ,
            },
        },
    },
    render: () => {
        return (`
        <b-box border radius>
            <style>
                me {
                    padding: var(--bromo-space-lg);
                    background: color-mix(in oklch, contrast-color(var(--bg-color-resolved)) 20%, transparent);
                }
                [data-theme="dark"] {
                    me {
                        background: var(--bg-color-resolved);
                    }
                }
            </style>

            <b-stack style="--box-color: var(--bromo-color-plum-300);">
                <div>
                    <b-box border="thicker" level="raised"></b-box>
                    <b-box border="thicker" level></b-box>
                    <b-box border="thicker" level="lowered"></b-box>
                </div>
                <div>
                    <style>
                        [data-theme="dark"] {
                            me {
                                --box-l-factor: 0.35;
                            }
                        }
                    </style>
                    <b-box border="thicker" level="raised"></b-box>
                    <b-box border="thicker" level></b-box>
                    <b-box border="thicker" level="lowered"></b-box>
                </div>
                <div style="--box-color: var(--bromo-color-gold-300)">
                    <style>
                        [data-theme="dark"] {
                            me {
                                --box-l-factor: 0.35;
                            }
                        }
                    </style>
                    <b-box border="thicker" level="raised"></b-box>
                    <b-box border="thicker" level></b-box>
                    <b-box border="thicker" level="lowered"></b-box>
                </div>
            </b-stack>
        </b-box>
       `);
    },
};


export const radius = {
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
                    & b-box {
                        min-height: var(--bromo-space-md);
                    }
                }
            </style>
            <b-stack>
                <b-box radius>
                </b-box>
                <b-box radius="sm"></b-box>
                <b-box radius="md"></b-box>
                <b-box radius="lg"></b-box>
                <b-box radius="xl"></b-box>
                <b-box radius="2xl"></b-box>
                <b-box radius="3xl"></b-box>
                <b-box radius="4xl"></b-box>
                <b-box radius="full"></b-box>
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

