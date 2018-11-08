/**
 * @license
 * Copyright (c) 2017 FoodStack. All rights reserved.
 * This code should no be modified and/or distributed without explicit permission from FoodStack.
 * Author: FoodStack <technology@foodstack.mx>
 */
'use strict';

import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

function config({ input = '', output = {} }) {
    return {
        input,
        output: {
            ...output,
        },
        plugins: [
            resolve(),
            typescript()
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
