/**
 * @license
 * Copyright (c) 2018 Rick Hansen Institute. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import path from 'path';

const defaults = { compilerOptions: { declaration: true } };
const override = { compilerOptions: { declaration: false } };

/**
* https://rollupjs.org/guide/en
* View: external -e/--external
* 
* When marking external files that are consumed using relative paths (e.g. ./my-component),
* the globals will require the local path to the file.
* This happens with ./rhi-isncsci-ui-logo.
* Rollup, on my machine, is mapping the file using E:\rhi\ui\src\@rhi-isncsci-ui\logo\rhi-isncsci-ui-logo.js
* We need to use path.resolve to generate the correct mapping.
*/
const logoPath =
   path.resolve('src/@rhi-isncsci-ui/logo/rhi-isncsci-ui-logo.js')
       .replace('.js', '');

const logoSmallPath =
   path.resolve('src/@rhi-isncsci-ui/logo/rhi-isncsci-ui-logo-small.js')
       .replace('.js', '');

function config({ input = '', context = undefined, output = {}, external = [], globals = {} }) {
    return {
        input,
        context,
        external: [
            ...external
        ],
        output: {
            ...output
        },
        plugins: [
            resolve(),
            typescript({
                tsconfigDefaults: defaults,
                declaration: true,
                removeComments: true,
                tsconfig: "build-configs/logo/tsconfig.json"
            })
        ]
    }
}

export default [
    // INDEX
    config({
        external: ['./rhi-isncsci-ui-logo', './rhi-isncsci-ui-logo-small'],
        input: 'src/@rhi-isncsci-ui/logo/index.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/logo/umd/index.js',
            format: 'umd',
            globals: {
                [logoPath]: 'RHI_ISNCSCI_UI_LOGO',
                [logoSmallPath]: "RHI_ISNCSCI_UI_LOGO_SMALL"
            },
            name: 'RHI_ISNCSCI_UI_LOGO',
        }
    }),
    config({
        external: ['./rhi-isncsci-ui-logo', './rhi-isncsci-ui-logo-small'],
        input: 'src/@rhi-isncsci-ui/logo/index.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/logo/esm/index.js',
            format: 'esm'
        }
    }),
    config({
        external: ['@rhi-isncsci-ui/html'],
        input: 'src/@rhi-isncsci-ui/logo/rhi-isncsci-ui-logo.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/logo/umd/rhi-isncsci-ui-logo.js',
            format: 'umd',
            globals: { '@rhi-isncsci-ui/html': 'RHI_ISNCSCI_UI_HTML' },
            name: 'RHI_ISNCSCI_UI_LOGO'
        }
    }),
    config({
        external: ['@rhi-isncsci-ui/html'],
        input: 'src/@rhi-isncsci-ui/logo/rhi-isncsci-ui-logo.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/logo/esm/rhi-isncsci-ui-logo.js',
            format: 'esm'
        }
    }),
    config({
        external: ['@rhi-isncsci-ui/html'],
        input: 'src/@rhi-isncsci-ui/logo/rhi-isncsci-ui-logo-small.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/logo/umd/rhi-isncsci-ui-logo-small.js',
            format: 'umd',
            globals: { '@rhi-isncsci-ui/html': 'RHI_ISNCSCI_UI_HTML' },
            name: 'RHI_ISNCSCI_UI_LOGO_SMALL'
        }
    }),
    config({
        external: ['@rhi-isncsci-ui/html'],
        input: 'src/@rhi-isncsci-ui/logo/rhi-isncsci-ui-logo-small.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/logo/esm/rhi-isncsci-ui-logo-small.js',
            format: 'esm'
        }
    })
];
