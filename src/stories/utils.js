export function make_elements({ min = 3, max, gen }) {
    if (max === undefined) {
        max = min;
    }

    const elements = new Array((Math.floor(Math.random() * (max - min)) + min)).fill(0).map(() => {
        const factor = Math.random();

        return gen(factor);
    }).join('').trim();

    return `
    <!-- -- -->
        ${elements}
    <!-- -- -->
    `
}

export const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
