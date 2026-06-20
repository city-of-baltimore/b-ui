import { withThemeByDataAttribute } from '@storybook/addon-themes';

import '../src/theme@0.0.1.css';
import '../src/deps/css-scope-inline@1.0.0';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
    parameters: {
        options: {
            storySort: {
                order: ["Overview", "Install", "CDN", "*"]
            }
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo"
        }
    },
    decorators: [
        withThemeByDataAttribute({
            themes: {
                light: 'light',
                dark: 'dark',
            },
            defaultTheme: 'light',
            attributeName: 'data-theme'
        }),
    ],
};

export default preview;
