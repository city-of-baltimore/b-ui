import { fn } from 'storybook/test';
import './b-box.js';

export default {
  title: 'Layout/b-box',
  tags: ['autodocs'],
};

export const Default = {
  render: () => {
    return (
      `<b-box>
       </b-box>`
    );
  },
};

export const Nested = {
  render: () => {
    return (
      `<b-box>
        <b-box>
          <b-box></b-box>
          <b-box></b-box>
          <b-box></b-box>
        </b-box>
        <b-box>
          <b-box></b-box>
          <b-box></b-box>
          <b-box></b-box>
        </b-box>
       </b-box>`
    );
  },
};

