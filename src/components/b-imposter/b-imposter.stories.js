import './b-imposter.js';
import '../b-box/b-box.js';
import { make_elements, lorem_ipsum } from '../../stories/utils.js';

export default {
    title: 'Atoms/b-imposter',
    parameters: {
        docs: {
            description: {
                component: 'A component for floating content like overlays/dialogs.',
            },
        },
    },
    tags: ['autodocs'],
};


function gen(_) {
    return `
        <div>
            <p>${lorem_ipsum}</p>
        </div>`
}

export const Default = {
    parameters: {
        docs: {
            description: {
                story: 'The position is relative to the document by default.',
            },
        },
    },
    render: () => {
        return (`
<b-box>
    <div>
        <style>
            me {
                width: fit-content;
                margin: auto;
            }
        </style>
        ${make_elements({ min: 2, gen })}
    </div>

    <b-imposter>
        <b-box>
        <h1>Floating content</h1>
        </b-box>
    </b-imposter>
</b-box>
<b-box>
    <div>
        <style>
            me {
                width: fit-content;
                margin: auto;
            }
        </style>
        ${make_elements({ min: 2, gen })}
    </div>
</b-box>
        `);
    },
};

export const relative_to_parent = {
    parameters: {
        docs: {
            description: {
                story: 'Set `position: relative` for the parent of `b-imposter` to make the parent the positioning context.',
            },
        },
    },
    render: () => {
        return (`
<b-box>
    <style>
        me {
            position: relative;
        }
    </style>
    <div>
        <style>
            me {
                width: fit-content;
                margin: auto;
            }
        </style>
        ${make_elements({ min: 2, gen })}
    </div>

    <b-imposter>
        <b-box>
        <h1>Floating content</h1>
        </b-box>
    </b-imposter>
</b-box>
<b-box>
    <style>
        me {
            position: relative;
        }
    </style>
    <div>
        <style>
            me {
                width: fit-content;
                margin: auto;
            }
        </style>
        ${make_elements({ min: 2, gen })}
    </div>
</b-box>
        `);
    },
};

export const custom_margin = {
    render: () => {
        return (`
<b-box>
    <style>
        me {
            position: relative;
        }
    </style>
    <div>
        <style>
            me {
                width: fit-content;
                margin: auto;
            }
        </style>
        ${make_elements({ min: 2, gen })}
    </div>

    <b-imposter margin="var(--s3)">
        <b-box>
        <h1>Floating content</h1>
        </b-box>
    </b-imposter>
</b-box>
        `);
    },
};

export const fixed = {
    parameters: {
        docs: {
            description: {
                story: '`fixed` will make the position context the viewport.',
            },
        },
    },
    render: () => {
        return (`
<b-box>
    <div>
        <style>
            me {
                width: fit-content;
                margin: auto;
            }
        </style>
        ${make_elements({ min: 2, gen })}
    </div>

    <b-imposter fixed>
        <b-box>
        <h1>Floating content</h1>
        </b-box>
    </b-imposter>
</b-box>
<b-box>
    <div>
        <style>
            me {
                width: fit-content;
                margin: auto;
            }
        </style>
        ${make_elements({ min: 4, gen })}
    </div>
</b-box>
        `);
    },
};

