

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
    "stories": [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "staticDirs": ["../src/stories/assets/"],
    "addons": [
        "@chromatic-com/storybook",
        "@storybook/addon-vitest",
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
        "@storybook/addon-themes"
    ],
    "framework": "@storybook/html-vite"
};
export default config;
