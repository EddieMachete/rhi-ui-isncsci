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
 * This happens with ./rhi-isncsci-ui-mobile-sensory.
 * Rollup, on my machine, is mapping the file using E:\rhi-isncsci\ui\src\@rhi-isncsci-ui\mobile-sensory\rhi-isncsci-ui-mobile-sensory.js
 * We need to use path.resolve to generate the correct mapping.
 */
const mobileSensoryPath =
    path.resolve('src/@rhi-isncsci-ui/mobile-sensory/rhi-isncsci-ui-mobile-sensory.js')
        .replace('.js', '');

const mobileSensoryTemplatePath =
    path.resolve('src/@rhi-isncsci-ui/mobile-sensory/rhi-isncsci-ui-mobile-sensory-template.js')
        .replace('.js', '');

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
                declaration: true,
                removeComments: true,
                tsconfig: "build-configs/mobile-sensory/tsconfig.json"
            })
        ]
    }
}

export default [
    // INDEX
    config({
        external: ['./rhi-isncsci-ui-mobile-sensory', './rhi-isncsci-ui-mobile-sensory-template'],
        input: 'src/@rhi-isncsci-ui/mobile-sensory/index.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/mobile-sensory/umd/index.js',
            format: 'umd',
            globals: {
                [mobileSensoryPath]: 'RHI_ISNCSCI_UI_MOBILE_SENSORY',
                [mobileSensoryTemplatePath]: 'RHI_ISNCSCI_UI_MOBILE_SENSORY_TEMPLATE'
            },
            name: 'RHI_ISNCSCI_UI_MOBILE_SENSORY_INDEX',
        }
    }),
    config({
        external: ['./rhi-isncsci-ui-mobile-sensory', './rhi-isncsci-ui-mobile-sensory-template'],
        input: 'src/@rhi-isncsci-ui/mobile-sensory/index.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/mobile-sensory/esm/index.js',
            format: 'esm'
        }
    }),
    // RHI_ISNCSCI_UI_MOBILE_SENSORY
    config({
        external: ['./rhi-isncsci-ui-mobile-sensory-template'],
        input: 'src/@rhi-isncsci-ui/mobile-sensory/rhi-isncsci-ui-mobile-sensory.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/mobile-sensory/umd/rhi-isncsci-ui-mobile-sensory.js',
            format: 'umd',
            globals: {
                [mobileSensoryTemplatePath]: 'RHI_ISNCSCI_UI_MOBILE_SENSORY_TEMPLATE'
            },
            name: 'RHI_ISNCSCI_UI_MOBILE_SENSORY',
        }
    }),
    config({
        external: ['./rhi-isncsci-ui-mobile-sensory-template'],
        input: 'src/@rhi-isncsci-ui/mobile-sensory/rhi-isncsci-ui-mobile-sensory.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/mobile-sensory/esm/rhi-isncsci-ui-mobile-sensory.js',
            format: 'esm'
        }
    }),
    // RHI_ISNCSCI_UI_MOBILE_SENSORY_TEMPLATE
    config({
        external: ['@rhi-ui/html', '@material/mwc-switch'],
        input: 'src/@rhi-isncsci-ui/mobile-sensory/rhi-isncsci-ui-mobile-sensory-template.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/mobile-sensory/umd/rhi-isncsci-ui-mobile-sensory-template.js',
            format: 'umd',
            globals: { '@rhi-ui/html': 'RHI_UI_HTML' },
            name: 'RHI_ISNCSCI_UI_MOBILE_SENSORY_TEMPLATE'
        }
    }),
    config({
        external: ['@rhi-ui/html', '@material/mwc-switch'],
        input: 'src/@rhi-isncsci-ui/mobile-sensory/rhi-isncsci-ui-mobile-sensory-template.ts',
        output: {
            file: 'packages/@rhi-isncsci-ui/mobile-sensory/esm/rhi-isncsci-ui-mobile-sensory-template.js',
            format: 'esm'
        }
    })
];
