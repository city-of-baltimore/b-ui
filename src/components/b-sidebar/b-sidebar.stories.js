import './b-sidebar.js';
import '../b-box/b-box.js';

export default {
    title: 'Atoms/b-sidebar',
    parameters: {
        docs: {
            description: {
                component: "Use for layout with 2 elements where 1 takes more space than the other. TODO: support customization via attributes, append a new style tag in head for each combination of attribute values.",
            },
        },
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        return (`
            <b-sidebar>
                <b-box></b-box>
                <b-box></b-box>
            </b-sidebar>
        `);
    },
};

export const left_side = {
    render: () => {
        return (`
            <b-sidebar side="left">
                <b-box></b-box>
                <b-box></b-box>
            </b-sidebar>
        `);
    },
};

export const custom_side_width = {
    render: () => {
        return (`
            <b-sidebar side-width="calc(var(--s1) * 5)">
                <b-box></b-box>
                <b-box></b-box>
            </b-sidebar>
        `);
    },
};

export const content_min = {
    parameters: {
        docs: {
            description: {
                story: 'The minimum % width of the parent the main content occupies\
                before wrapping. Minimum is 50%. Make the viewport smaller and this\
                story should wrap first.',
            },
        },
    },
    render: () => {
        return (`
            <b-sidebar content-min="80%">
                <b-box></b-box>
                <b-box></b-box>
            </b-sidebar>
        `);
    },
};
