import { fn } from 'storybook/test';
import '../../components/layout/b-box/b-box.js';
import '../../components/layout/b-stack/b-stack.js';
import '../../components/layout/b-reel/b-reel.js';
import '../../components/layout/b-center/b-center.js';
import '../../components/layout/b-cluster/b-cluster.js';

export default {
    title: 'Design System/Tokens',
    parameters: {
        docs: {
            description: {
                component: "Design System Tokens prefixed with: `--bromo-`. These are just a subset of the available tokens, see <a href='/docs/design-system-tokens-css--docs'>tokens.css</a>\
                for the exhaustive list.",
            },
        },
    },
    tags: ['autodocs'],
};

export const raw_colors = {
    parameters: {
        docs: {
            description: {
                story: "'Raw' colors. The middle values (`--bromo-color-*-300` in this case) are based on the\
                official Baltimore city colors. The lighter/darker steps are generated.\
                The naming convention for the variants: The postfix are in `100` increments\
                except for the start/end where the increment is `50`.",
            },
        },
    },
    render: () => {
        return (`
        <b-box border radius>
            <style>
                me {
                    & span {
                        display: flex;
                    }

                    & div {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        background: var(--box-color);
                        width: var(--bromo-space-2xl);
                        height: var(--bromo-space-2xl);
                    }
                }
            </style>

            <b-center>
                <b-stack>
                    <b-cluster>
                        <b-stack>
                            <div></div>
                            <div>50</div>
                            <div>100</div>
                            <div>200</div>
                            <div>300</div>
                            <div>400</div>
                            <div>500</div>
                            <div>550</div>
                        </b-stack>
                        <b-stack>
                            <div>plum</div>
                            <div style="--box-color: var(--bromo-color-plum-50)"></div>
                            <div style="--box-color: var(--bromo-color-plum-100)"></div>
                            <div style="--box-color: var(--bromo-color-plum-200)"></div>
                            <div style="--box-color: var(--bromo-color-plum-300)"></div>
                            <div style="--box-color: var(--bromo-color-plum-400)"></div>
                            <div style="--box-color: var(--bromo-color-plum-500)"></div>
                            <div style="--box-color: var(--bromo-color-plum-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div>gold</div>
                            <div style="--box-color: var(--bromo-color-gold-50)"></div>
                            <div style="--box-color: var(--bromo-color-gold-100)"></div>
                            <div style="--box-color: var(--bromo-color-gold-200)"></div>
                            <div style="--box-color: var(--bromo-color-gold-300)"></div>
                            <div style="--box-color: var(--bromo-color-gold-400)"></div>
                            <div style="--box-color: var(--bromo-color-gold-500)"></div>
                            <div style="--box-color: var(--bromo-color-gold-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div>blue</div>
                            <div style="--box-color: var(--bromo-color-blue-50)"></div>
                            <div style="--box-color: var(--bromo-color-blue-100)"></div>
                            <div style="--box-color: var(--bromo-color-blue-200)"></div>
                            <div style="--box-color: var(--bromo-color-blue-300)"></div>
                            <div style="--box-color: var(--bromo-color-blue-400)"></div>
                            <div style="--box-color: var(--bromo-color-blue-500)"></div>
                            <div style="--box-color: var(--bromo-color-blue-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div>green</div>
                            <div style="--box-color: var(--bromo-color-green-50)"></div>
                            <div style="--box-color: var(--bromo-color-green-100)"></div>
                            <div style="--box-color: var(--bromo-color-green-200)"></div>
                            <div style="--box-color: var(--bromo-color-green-300)"></div>
                            <div style="--box-color: var(--bromo-color-green-400)"></div>
                            <div style="--box-color: var(--bromo-color-green-500)"></div>
                            <div style="--box-color: var(--bromo-color-green-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div>red</div>
                            <div style="--box-color: var(--bromo-color-red-50)"></div>
                            <div style="--box-color: var(--bromo-color-red-100)"></div>
                            <div style="--box-color: var(--bromo-color-red-200)"></div>
                            <div style="--box-color: var(--bromo-color-red-300)"></div>
                            <div style="--box-color: var(--bromo-color-red-400)"></div>
                            <div style="--box-color: var(--bromo-color-red-500)"></div>
                            <div style="--box-color: var(--bromo-color-red-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div>slate</div>
                            <div style="--box-color: var(--bromo-color-slate-50)"></div>
                            <div style="--box-color: var(--bromo-color-slate-100)"></div>
                            <div style="--box-color: var(--bromo-color-slate-200)"></div>
                            <div style="--box-color: var(--bromo-color-slate-300)"></div>
                            <div style="--box-color: var(--bromo-color-slate-400)"></div>
                            <div style="--box-color: var(--bromo-color-slate-500)"></div>
                            <div style="--box-color: var(--bromo-color-slate-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div>teal</div>
                            <div style="--box-color: var(--bromo-color-teal-50)"></div>
                            <div style="--box-color: var(--bromo-color-teal-100)"></div>
                            <div style="--box-color: var(--bromo-color-teal-200)"></div>
                            <div style="--box-color: var(--bromo-color-teal-300)"></div>
                            <div style="--box-color: var(--bromo-color-teal-400)"></div>
                            <div style="--box-color: var(--bromo-color-teal-500)"></div>
                            <div style="--box-color: var(--bromo-color-teal-550)"></div>
                        </b-stack>
                    </b-cluster>
                </b-stack>
            </b-center>
        </b-box>
       `);
    },
};


export const alias = {
    parameters: {
        docs: {
            description: {
                story: "Aliases are tokens with semantic meaning. Making the most common\
                values easy to remember.",
            },
        },
    },
    render: () => {
        return (`
        <b-box border radius>
            <style>
                me {
                    & span {
                        display: flex;
                    }

                    & div {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        background: var(--box-color);
                        width: var(--bromo-space-2xl);
                        height: var(--bromo-space-2xl);
                    }

                    & b-stack {
                        padding: var(--bromo-padding-inline);
                    }

                    & b-reel > b-reel {
                        border: var(--bromo-border-width-thin) solid var(--bromo-color-slate-50);
                    }

                    &  b-stack > span {
                        display: flex;
                        justify-content: end;
                        align-items: center;

                        height: var(--bromo-space-2xl);
                        padding-inline: var(--bromo-space-lg);
                    }
                }
            </style>

            <b-center>
            <b-reel>
                <b-reel>
                    <b-reel>
                        <b-stack>
                            <span>--bromo-color-brand-primary-default</span>
                            <span>--bromo-color-brand-primary-dark</span>
                            <span>--bromo-color-brand-accent</span>
                            <span>--bromo-color-neutral</span>
                            <span>--bromo-color-informative</span>
                            <span>--bromo-color-positive</span>
                            <span>--bromo-color-warning</span>
                            <span>--bromo-color-critical</span>

                            <span>--bromo-color-shadow</span>
                            <span>--bromo-color-transparent</span>
                            <span>--bromo-color-white</span>
                            <span>--bromo-color-black</span>
                            <span>--bromo-color-selection-bg</span>
                        </b-stack>
                        <b-stack>
                            <div style="--box-color: var(--bromo-color-brand-primary-default)"></div>
                            <div style="--box-color: var(--bromo-color-brand-primary-dark)"></div>
                            <div style="--box-color: var(--bromo-color-brand-accent)"></div>
                            <div style="--box-color: var(--bromo-color-neutral)"></div>
                            <div style="--box-color: var(--bromo-color-informative)"></div>
                            <div style="--box-color: var(--bromo-color-positive)"></div>
                            <div style="--box-color: var(--bromo-color-warning)"></div>
                            <div style="--box-color: var(--bromo-color-critical)"></div>

                            <div style="--box-color: var(--bromo-color-shadow)"></div>
                            <div style="--box-color: var(--bromo-color-transparent)"></div>
                            <div style="--box-color: var(--bromo-color-white)"></div>
                            <div style="--box-color: var(--bromo-color-black)"></div>
                            <div style="--box-color: var(--bromo-color-selection-bg)"></div>
                        </b-stack>
                    </b-reel>
                </b-reel>

                <b-reel>
                    <b-reel>
                        <b-stack>
                            <span>--bromo-padding-inline</span>
                            <span>--bromo-padding-block</span>
                            <span>--bromo-margin</span>
                            <span>--bromo-gap</span>
                        </b-stack>
                        <b-stack>
                            <div></div>
                            <div></div>
                            <div></div>
                        </b-stack>
                    </b-reel>
                </b-reel>
                <b-reel>
                    <b-reel>
                        <b-stack>
                            <span>--bromo-body-small</span>
                            <span>--bromo-body-default</span>
                            <span>--bromo-body-large</span>
                            <span>--bromo-body-large</span>
                        </b-stack>
                        <b-stack>
                            <span style="font-size: var(--bromo-body-small);">lorem ipsum</span>
                            <span style="font-size: var(--bromo-body-default);">lorem ipsum</span>
                            <span style="font-size: var(--bromo-body-large);">lorem ipsum</span>
                        </b-stack>
                    </b-reel>
                </b-reel>
            </b-reel>
            </b-center>
        </b-box>
       `)
    }
}

export const corners = {
    parameters: {
        docs: {
            description: {
            },
        },
    },
    render: () => {
        return (`
        <b-box border radius>
            <style>
                me {
                    & span, div {
                        display: flex;
                        margin: var(--bromo-margin);
                    }

                    & div {
                        justify-content: center;
                        align-items: center;

                        background: var(--box-color);
                        width: var(--bromo-space-2xl);
                        height: var(--bromo-space-2xl);
                    }

                    &  b-stack > span {
                        display: flex;
                        justify-content: end;
                        align-items: center;

                        height: var(--bromo-space-2xl);
                        padding-inline: var(--bromo-space-lg);
                    }
                }
            </style>
            <b-stack>
                <b-reel style="--box-color: var(--bromo-color-slate-50)">
                    <b-stack>
                        <span>--bromo-radius-none</span>
                        <span>--bromo-radius-sm</span>
                        <span>--bromo-radius-md</span>
                        <span>--bromo-radius-lg</span>
                        <span>--bromo-radius-xl</span>
                    </b-stack>
                    <b-stack>
                        <div style="border-radius: var(--bromo-radius-none)"></div>
                        <div style="border-radius: var(--bromo-radius-sm)"></div>
                        <div style="border-radius: var(--bromo-radius-md)"></div>
                        <div style="border-radius: var(--bromo-radius-lg)"></div>
                        <div style="border-radius: var(--bromo-radius-xl)"></div>
                    </b-stack>

                    <b-stack>
                        <span>--bromo-radius-2xl</span>
                        <span>--bromo-radius-3xl</span>
                        <span>--bromo-radius-4xl</span>
                        <span>--bromo-radius-full</span>
                    </b-stack>

                    <b-stack>
                        <div style="border-radius: var(--bromo-radius-2xl)"></div>
                        <div style="border-radius: var(--bromo-radius-3xl)"></div>
                        <div style="border-radius: var(--bromo-radius-4xl)"></div>
                        <div style="border-radius: var(--bromo-radius-full)"></div>
                    </b-stack>
                </b-reel>
            </b-stack>
</b-box>
`)
    }
}

export const borders = {
    parameters: {
        docs: {
            description: {
            },
        },
    },
    render: () => {
        return (`
        <b-box border radius>
            <style>
                me {
                    & span, div {
                        display: flex;
                        margin: var(--bromo-margin);
                    }

                    & b-box {
                        justify-content: center;
                        align-items: center;

                        background: var(--box-color);
                        width: var(--bromo-space-2xl);
                        height: var(--bromo-space-2xl);
                    }

                    &  b-stack > span {
                        display: flex;
                        justify-content: end;
                        align-items: center;

                        height: var(--bromo-space-2xl);
                        padding-inline: var(--bromo-space-lg);
                    }
                }
            </style>
            <b-reel>
                <b-stack>
                    <span>--bromo-border-width-hairline</span>
                    <span>--bromo-border-width-thin</span>
                    <span>--bromo-border-width-thick</span>
                    <span>--bromo-border-width-thicker</span>
                </b-stack>
                <b-stack>
                    <b-box border="hairline"></b-box>
                    <b-box border="thin"></b-box>
                    <b-box border="thick"></b-box>
                    <b-box border="thicker"></b-box>
                </b-stack>
            </b-reel>
        </b-box>
        `)
    }
}


export const shadow = {
    parameters: {
        docs: {
            description: {
            },
        },
    },
    render: () => {
        return (`
        <b-box border radius>
            <style>
                me {
                    & span, div {
                        display: flex;
                        margin: var(--bromo-margin);
                    }

                    & div {
                        justify-content: center;
                        align-items: center;

                        background: var(--box-color);
                        width: var(--bromo-space-2xl);
                        height: var(--bromo-space-2xl);
                    }

                    &  b-stack > span {
                        display: flex;
                        justify-content: end;
                        align-items: center;

                        height: var(--bromo-space-2xl);
                        padding-inline: var(--bromo-space-lg);
                    }
                }
            </style>
            <b-reel>
                <b-stack>
                    <span>--bromo-shadow-2xs</span>
                    <span>--bromo-shadow-xs</span>
                    <span>--bromo-shadow-sm</span>
                    <span>--bromo-shadow-md</span>
                    <span>--bromo-shadow-lg</span>
                    <span>--bromo-shadow-xl</span>
                    <span>--bromo-shadow-2xl</span>
                </b-stack>
                <b-stack>
                    <div style="box-shadow: var(--bromo-shadow-2xs)"></div>
                    <div style="box-shadow: var(--bromo-shadow-xs)"></div>
                    <div style="box-shadow: var(--bromo-shadow-sm)"></div>
                    <div style="box-shadow: var(--bromo-shadow-md)"></div>
                    <div style="box-shadow: var(--bromo-shadow-lg)"></div>
                    <div style="box-shadow: var(--bromo-shadow-xl)"></div>
                    <div style="box-shadow: var(--bromo-shadow-2xl)"></div>
                </b-stack>
            </b-reel>
        </b-box>
        `)
    }
}

export const text_sizes = {
    parameters: {
        docs: {
            description: {
            },
        },
    },
    render: () => {
        return (`
        <b-box border radius>
            <style>
                me {
                    & span, div {
                        display: flex;
                        margin: var(--bromo-margin);
                    }

                    & div {
                        justify-content: start;
                        align-items: center;

                        background: var(--box-color);
                        height: var(--bromo-space-2xl);
                    }

                    &  b-stack > span {
                        display: flex;
                        justify-content: end;
                        align-items: center;

                        height: var(--bromo-space-2xl);
                        padding-inline: var(--bromo-space-lg);
                    }
                }
            </style>
            <b-reel>
                <b-stack>
                    <span>--bromo-text-xs</span>
                    <span>--bromo-text-sm</span>
                    <span>--bromo-text-base</span>
                    <span>--bromo-text-lg</span>
                    <span>--bromo-text-xl</span>
                    <span>--bromo-text-2xl</span>
                    <span>--bromo-text-3xl</span>
                    <span>--bromo-text-4xl</span>
                    <span>--bromo-text-5xl</span>
                    <span>--bromo-text-6xl</span>
                    <span>--bromo-text-7xl</span>
                    <span>--bromo-text-8xl</span>
                    <span>--bromo-text-9xl</span>
                </b-stack>
                <b-stack>
                    <div><h1 style="font-size: var(--bromo-text-xs)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-sm)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-base)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-lg)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-xl)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-2xl)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-3xl)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-4xl)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-5xl)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-6xl)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-7xl)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-8xl)">Text</h1></div>
                    <div><h1 style="font-size: var(--bromo-text-9xl)">Text</h1></div>
                </b-stack>
            </b-reel>
        </b-box>
        `)
    }
}


export const space = {
    parameters: {
        docs: {
            description: {
                story: "Values used for padding and margins."
            },
        },
    },
    render: () => {
        return (`
        <b-box border radius>
            <style>
                me {
                    & span, div {
                        display: flex;
                        margin: var(--bromo-margin);
                    }

                    & span {
                        & div {
                            justify-content: start;
                            align-items: center;

                            background: linear-gradient(90deg, var(--bromo-color-transparent) 0%, rgba(from var(--bromo-color-slate-50) r g b / 0.5) 70%, var(--bromo-color-slate-50) 100%);
                            border-right: var(--bromo-border-width-thick) solid var(--bromo-color-green-100);
                            height: var(--bromo-space-2xl);
                            width: var(--bromo-space-2xl);
                        }
                        & span {
                            background: linear-gradient(90deg, var(--bromo-color-slate-50) 0%, rgba(from var(--bromo-color-slate-50) r g b / 0.5) 30%, var(--bromo-color-transparent) 100%);
                            border-left: var(--bromo-border-width-thick) solid var(--bromo-color-green-100);
                            height: var(--bromo-space-2xl);
                            width: var(--bromo-space-2xl);
                        }
                    }

                    &  b-stack > span {
                        display: flex;
                        justify-content: end;
                        align-items: center;

                        height: var(--bromo-space-2xl);
                        padding-inline: var(--bromo-space-lg);
                    }
                }
            </style>
            <b-reel>
                <b-stack>
                    <span>--bromo-space-3xs</span>
                    <span>--bromo-space-2xs</span>
                    <span>--bromo-space-xs</span>
                    <span>--bromo-space-sm</span>
                    <span>--bromo-space-md</span>
                    <span>--bromo-space-lg</span>
                    <span>--bromo-space-xl</span>
                    <span>--bromo-space-2xl</span>
                    <span>--bromo-space-3xl</span>
                    <span>--bromo-space-3xs-2xs</span>
                    <span>--bromo-space-2xs-xs</span>
                    <span>--bromo-space-xs-sm</span>
                    <span>--bromo-space-sm-md</span>
                    <span>--bromo-space-md-lg</span>
                    <span>--bromo-space-lg-xl</span>
                    <span>--bromo-space-xl-2xl</span>
                    <span>--bromo-space-2xl-3xl</span>
                </b-stack>
                <b-stack>
                    <span><div style="margin-inline-end: var(--bromo-space-3xs);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-2xs);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-xs);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-sm);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-md);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-lg);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-xl);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-2xl);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-3xl);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-3xs-2xs);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-2xs-xs);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-xs-sm);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-sm-md);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-md-lg);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-lg-xl);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-xl-2xl);"></div> <span></span></span>
                    <span><div style="margin-inline-end: var(--bromo-space-2xl-3xl);"></div> <span></span></span>
                </b-stack>
            </b-reel>
        </b-box>
        `)
    }
}
