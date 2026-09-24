import { fn } from 'storybook/test';
import { __BOX_COLOR, __BOX_L_FACTOR, __BOX_L_FACTOR_DARK } from '../../../css_var_params.js'
import { BORDER, LEVEL, RADIUS } from '../../../attributes.js';
import { BORDER_VARIANTS, RADIUS_VARIANTS, LEVEL_VARIANTS } from "../../../variants.js";
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
    argTypes: {
        [__BOX_COLOR]: {
            control: {
                type: "text"
            }
        },
        [__BOX_L_FACTOR]: {
            description: "sets the lightness value of the `--box-color`",
            control: {
                type: "number"
            }
        },
        [BORDER]: {
            options: Object.keys(BORDER_VARIANTS),
            control: { type: "select" }
        },
        [RADIUS]: {
            options: Object.keys(RADIUS_VARIANTS),
            control: { type: "select" }
        },
        [LEVEL]: {
            options: Object.keys(LEVEL_VARIANTS),
            control: { type: "select" }
        }
    },
    args: {
        [__BOX_COLOR]: "--bromo-color-slate-50",
        [__BOX_L_FACTOR]: 0.98,
        [__BOX_L_FACTOR_DARK]: 0.18,
        [BORDER]: BORDER_VARIANTS.thin,
        [RADIUS]: RADIUS_VARIANTS.lg,
        [LEVEL]: LEVEL_VARIANTS.default.key
    },
    tags: ['autodocs'],
};

export const Default = {
    render: ({
        [__BOX_COLOR]: __box_color,
        [__BOX_L_FACTOR]: __box_l_factor,
        [__BOX_L_FACTOR_DARK]: __box_l_factor_dark,
        border,
        radius,
        level
    }) => {
        return (`
        <b-box border radius>
            <style>
                me {
                    --box-color: var(${__box_color});
                    padding: var(--bromo-space-lg);
                    background: color-mix(in oklch, contrast-color(var(--bg-color-resolved)) 20%, transparent);
                }
                [data-theme="dark"] {
                    me {
                        background: var(--bg-color-resolved);
                    }
                }
            </style>
            <b-box 
                style="
                    ${__BOX_COLOR}: var(${__box_color});
                    ${__BOX_L_FACTOR}: ${__box_l_factor};
                    ${__BOX_L_FACTOR_DARK}: ${__box_l_factor_dark};
                "
                border=${border ? border : ''}
                radius=${radius ? radius : ''}
                level=${level ? level : ''}
            >
            </b-box>
        </b-box>
       `);
    }
};

export const levels = {
    parameters: {
        docs: {
            description: {
                story: '`level` has 3 possible values: `raised | default | lowered`. if `level` is unset or doesn\'t exist, its value is `default`. ',
            },
        },
        controls: {
            exclude: [BORDER, RADIUS]
        }
    },
    render: ({
        [__BOX_COLOR]: __box_color,
        [__BOX_L_FACTOR]: __box_l_factor,
        level
    }) => {
        return (`
        <b-box border radius>
            <style>
                me {
                    --box-color: var(${__box_color});
                    padding: var(--bromo-space-lg);
                    background: color-mix(in oklch, contrast-color(var(--bg-color-resolved)) 20%, transparent);
                }
                [data-theme="dark"] {
                    me {
                        background: var(--bg-color-resolved);
                    }
                }
            </style>
            <b-stack style="
                    ${__BOX_COLOR}: var(${__box_color});
                    ${__BOX_L_FACTOR}: ${__box_l_factor};
                "
            >
                <b-box border="thicker" level="raised"></b-box>
                <b-box border="thicker" level="${level}"></b-box>
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
        controls: {
            exclude: [BORDER, RADIUS, LEVEL]
        }
    },
    args: {
        [__BOX_COLOR]: '--bromo-color-green-500',
        [__BOX_L_FACTOR_DARK]: 0.18,
    },
    render: ({
        [__BOX_COLOR]: __box_color,
        [__BOX_L_FACTOR]: __box_l_factor,
        [__BOX_L_FACTOR_DARK]: __box_l_factor_dark,
    }) => {
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

            <b-stack style="
                    ${__BOX_COLOR}: var(${__box_color});
                    ${__BOX_L_FACTOR}: ${__box_l_factor};
                    ${__BOX_L_FACTOR_DARK}: ${__box_l_factor_dark};
            ">
                <b-stack>
                    <b-box border="thicker" level="raised"></b-box>
                    <b-box border="thicker" level></b-box>
                    <b-box border="thicker" level="lowered"></b-box>
                </b-stack>
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
        controls: {
            exclude: [BORDER, LEVEL, __BOX_COLOR, __BOX_L_FACTOR, __BOX_L_FACTOR_DARK]
        }
    },
    render: ({ radius }) => {
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
                <b-box radius border="thick"></b-box>
                <b-box radius="${radius}" border="thick"></b-box>
            </b-stack>
        </b-box border radius>
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
