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
