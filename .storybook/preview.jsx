import { withThemeByDataAttribute } from '@storybook/addon-themes';
import 'eyedropper-polyfill';
import {
    Title,
    Subtitle,
    Description,
    Primary,
    Controls,
    Stories,
} from '@storybook/addon-docs/blocks';

import '../src/tokens.css';
import '../src/deps/css-scope-inline@1.0.0';
import '../src/deps/alpine@3.15.8.min';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
    parameters: {
        options: {
            storySort: {
                order: ["Overview", "Usage", "Design System", "Principles", "Web Components", "*"]
            }
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <Controls />
                    <Stories includePrimary={false} />
                </>
            ),
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
