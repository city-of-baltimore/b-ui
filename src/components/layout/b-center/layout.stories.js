import './b-center.js';
import '../b-box/b-box.js';
import '../b-stack/b-stack.js';

export default {
    title: 'Layout/b-center',
    parameters: {
        docs: {
            description: {
                component: 'Wrapper to center elements horizontally.',
            },
        },
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        return (`
            <b-center>
                <b-box>
                    <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </b-box>
            </b-center>
        `);
    },
};

export const multiple_elements = {
    render: () => {
        return (`
            <b-center>
                <b-stack>
                    <b-box>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </b-box>
                    <b-box>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </b-box>
                </b-stack>
            </b-center>
        `);
    },
};

export const custom_content_max_width = {
    parameters: {
        docs: {
            description: {
                story: '`content-max` sets the `max-width` of the centered content ',
            },
        },
    },
    render: () => {
        return (`
            <b-center content-max="calc(var(--s2))">
                <b-box>
                    <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </b-box>
            </b-center>
        `);
    },
};

export const custom_gutters = {
    parameters: {
        docs: {
            description: {
                story: '`gutters` sets the minimum space on the sides, acting like a x-padding',
            },
        },
    },
    render: () => {
        return (`
            <b-stack>
                <b-center content-max="unset" gutters="var(--s-5)">
                    <b-box>
                        <style>
                            me {
                                width: -moz-available;
                                width: -webkit-fill-available;
                            }
                        </style>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </b-box>
                </b-center>

                <b-center content-max="unset" gutters="var(--s0)">
                    <b-box>
                        <style>
                            me {
                                width: -moz-available;
                                width: -webkit-fill-available;
                            }
                        </style>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </b-box>
                </b-center>
            </b-stack>
        `);
    },
};

export const center_text = {
    parameters: {
        docs: {
            description: {
                story: '`text-center` center\'s text content',
            },
        },
    },
    render: () => {
        return (`
            <b-box>
                <b-center id="hello" text-center content-max="unset" gutters="var(--s-5)">
                        <style>
                            me {
                                width: -moz-available;
                                width: -webkit-fill-available;
                            }
                        </style>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                </b-center>
            </b-box>
        `);
    },
};

