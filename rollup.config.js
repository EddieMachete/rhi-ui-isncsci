/**
 * @license
 * Copyright (c) 2017 FoodStack. All rights reserved.
 * This code should no be modified and/or distributed without explicit permission from FoodStack.
 * Author: FoodStack <technology@foodstack.mx>
 */
'use strict';

import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const defaults = { compilerOptions: { declaration: true } };
const override = { compilerOptions: { declaration: false } };

function config({ input = '', context = undefined, output = {}, external = [] }) {
    return {
        input,
        context,
        output: {
            ...output,
        },
        external: [
            ...external,
        ],
        plugins: [
            resolve(),
            typescript({
                tsconfigDefaults: defaults,
                declaration: false,
                removeComments: true,
                tsconfig: "./tsconfig.json"
            })
        ]
    }
}

export default [
    config({
        input: 'demo/index.ts',
        output: {
            file: 'demo/scripts/bundle.js',
            format: 'umd'
        }
    })
];
