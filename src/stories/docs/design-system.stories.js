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
                component: "Design System Tokens",
            },
        },
    },
    tags: ['autodocs'],
};

export const Default = {
    parameters: {
        docs: {
            description: {
                story: "'Raw' colors. The middle values (`*-300` in this case) are based on the\
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
                    <b-reel>
                            <div></div>
                            <div>plum</div>
                            <div>gold</div>
                            <div>blue</div>
                            <div>green</div>
                            <div>red</div>
                            <div>slate</div>
                            <div>teal</div>
                    </b-reel>

                    <b-reel>
                        <b-stack>
                            <div>50</div>
                            <div>100</div>
                            <div>200</div>
                            <div>300</div>
                            <div>400</div>
                            <div>500</div>
                            <div>550</div>
                        </b-stack>
                        <b-stack>
                            <div style="--box-color: var(--bromo-color-plum-50)"></div>
                            <div style="--box-color: var(--bromo-color-plum-100)"></div>
                            <div style="--box-color: var(--bromo-color-plum-200)"></div>
                            <div style="--box-color: var(--bromo-color-plum-300)"></div>
                            <div style="--box-color: var(--bromo-color-plum-400)"></div>
                            <div style="--box-color: var(--bromo-color-plum-500)"></div>
                            <div style="--box-color: var(--bromo-color-plum-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div style="--box-color: var(--bromo-color-gold-50)"></div>
                            <div style="--box-color: var(--bromo-color-gold-100)"></div>
                            <div style="--box-color: var(--bromo-color-gold-200)"></div>
                            <div style="--box-color: var(--bromo-color-gold-300)"></div>
                            <div style="--box-color: var(--bromo-color-gold-400)"></div>
                            <div style="--box-color: var(--bromo-color-gold-500)"></div>
                            <div style="--box-color: var(--bromo-color-gold-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div style="--box-color: var(--bromo-color-blue-50)"></div>
                            <div style="--box-color: var(--bromo-color-blue-100)"></div>
                            <div style="--box-color: var(--bromo-color-blue-200)"></div>
                            <div style="--box-color: var(--bromo-color-blue-300)"></div>
                            <div style="--box-color: var(--bromo-color-blue-400)"></div>
                            <div style="--box-color: var(--bromo-color-blue-500)"></div>
                            <div style="--box-color: var(--bromo-color-blue-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div style="--box-color: var(--bromo-color-green-50)"></div>
                            <div style="--box-color: var(--bromo-color-green-100)"></div>
                            <div style="--box-color: var(--bromo-color-green-200)"></div>
                            <div style="--box-color: var(--bromo-color-green-300)"></div>
                            <div style="--box-color: var(--bromo-color-green-400)"></div>
                            <div style="--box-color: var(--bromo-color-green-500)"></div>
                            <div style="--box-color: var(--bromo-color-green-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div style="--box-color: var(--bromo-color-red-50)"></div>
                            <div style="--box-color: var(--bromo-color-red-100)"></div>
                            <div style="--box-color: var(--bromo-color-red-200)"></div>
                            <div style="--box-color: var(--bromo-color-red-300)"></div>
                            <div style="--box-color: var(--bromo-color-red-400)"></div>
                            <div style="--box-color: var(--bromo-color-red-500)"></div>
                            <div style="--box-color: var(--bromo-color-red-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div style="--box-color: var(--bromo-color-slate-50)"></div>
                            <div style="--box-color: var(--bromo-color-slate-100)"></div>
                            <div style="--box-color: var(--bromo-color-slate-200)"></div>
                            <div style="--box-color: var(--bromo-color-slate-300)"></div>
                            <div style="--box-color: var(--bromo-color-slate-400)"></div>
                            <div style="--box-color: var(--bromo-color-slate-500)"></div>
                            <div style="--box-color: var(--bromo-color-slate-550)"></div>
                        </b-stack>

                        <b-stack>
                            <div style="--box-color: var(--bromo-color-teal-50)"></div>
                            <div style="--box-color: var(--bromo-color-teal-100)"></div>
                            <div style="--box-color: var(--bromo-color-teal-200)"></div>
                            <div style="--box-color: var(--bromo-color-teal-300)"></div>
                            <div style="--box-color: var(--bromo-color-teal-400)"></div>
                            <div style="--box-color: var(--bromo-color-teal-500)"></div>
                            <div style="--box-color: var(--bromo-color-teal-550)"></div>
                        </b-stack>
                    </b-reel>
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
                </b-stack>

                <b-stack>
                    <b-reel>
                        <b-stack>
                            <span>--bromo-padding-inline</span>
                            <span>--bromo-padding-block</span>
                            <span>--bromo-padding-margin</span>
                            <span>--bromo-gap</span>
                        </b-stack>
                        <b-stack>
                            <div></div>
                            <div></div>
                            <div></div>
                        </b-stack>
                    </b-reel>
                </b-stack>
            </b-center>
        </b-box>
       `)
    }
}

export const corners = {
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


