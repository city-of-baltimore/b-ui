import { fn } from 'storybook/test';
import { __BOX_COLOR, __BOX_L_FACTOR, __BOX_L_FACTOR_DARK } from '../../../css_var_params.js'
import { BORDER, LEVEL, RADIUS, STATUS } from '../../../attributes.js';
import { BORDER_VARIANTS, RADIUS_VARIANTS, LEVEL_VARIANTS, STATUS_VARIANTS } from "../../../variants.js";
import './b-box.js';
import '../b-stack/b-stack.js';
import '../../atoms/b-button/b-button.js';

export default {
    title: 'web components/status overrides',
    parameters: {
        docs: {
            description: {
                component: '`status` prop can be set to override colors with semantic meaning.',
            },
        },
    },
    argTypes: {
        [STATUS]: {
            options: Object.keys(STATUS_VARIANTS),
            control: {
                type: "select"
            }
        }
    },
    args: {
        [STATUS]: STATUS_VARIANTS.neutral,
    },
    tags: ['autodocs'],
};

export const Default = {
    render: ({
        status
    }) => {
        if (!status) {
            status = ''
        }

        return (`
        <b-box border radius>
            <b-stack>
                <b-stack>
                    <b-box status="${status}" border="thick" level="raised"></b-box>
                    <b-box status="${status}" border="thick"></b-box>
                    <b-box status="${status}" border="thick" level="lowered"></b-box>
                </b-stack>
                <b-stack>
                    <b-button status="${status}">click</b-button>
                </b-stack>
            </b-stack>
        </b-box>
       `);
    }
};

