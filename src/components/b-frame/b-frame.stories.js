import { fn } from 'storybook/test';
import './b-frame.js';
import city_ship from '../../stories/assets/city-ship.png.webp';

export default {
    title: 'Atoms/b-frame',
    parameters: {
        docs: {
            description: {
                component: 'A component to wrap content such as images and video.',
            },
        },
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        return (`
            <b-frame>
                <img src="${city_ship}"/>
            </b-frame>
        `);
    },
};

export const custom_aspect_ratio = {
    render: () => {
        return (`
            <div>
                <style>
                    me {
                        display: flex;
                        height: 15rem;
                        gap: var(--s0);
                    }
                </style>
                <b-frame border ratio="1:1">
                </b-frame>

                <b-frame border ratio="9:16">
                </b-frame>

                <b-frame border ratio="21:9">
                </b-frame>
            </div>
        `);
    },
};

export const custom_aspect_ratio_with_image = {
    render: () => {
        return (`
            <div>
                <style>
                    me {
                        display: flex;
                        height: 15rem;
                        gap: var(--s0);
                    }
                </style>
                <b-frame ratio="1:1">
                    <img src="${city_ship}"/>
                </b-frame>
                <b-frame ratio="9:16">
                    <img src="${city_ship}"/>
                </b-frame>

                <b-frame ratio="21:9">
                    <img src="${city_ship}"/>
                </b-frame>
            </div>
        `);
    },
};


export const rounded = {
    render: () => {
        return (`
            <b-frame border rounded>
            </b-frame>
        `);
    },
};

export const override_radius = {
    render: () => {
        return (`
            <b-frame border rounded style="--s1: 10px;">
            </b-frame>
        `);
    },
};
