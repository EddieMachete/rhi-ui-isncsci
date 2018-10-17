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

import { html } from '@rhi-ui/html';

export const template: string = html`
    <!-- shadow DOM for your element -->
    <style>
        :host {
            display: block;
        }

        .secondary-text {
            color: var(--isncsci-secondary-text-color, #666);
        }

        .small-text {
            font-size: 9px;
        }

        .text-align-right {
            text-align: right;
        }

        .grid {
            margin-bottom: 32px;
        }

        .row {
            display: flex;
            margin-top: 8px;
        }

        .row.header div {
            margin-left: 8px;
            text-align: center;
            width: 48px;
        }

        .row.header div:first-child {
            margin-left: 128px;
        }

        .row .label {
            align-items: center;
            display: flex;
            height: 40px;
            text-align: right;
            width: 120px;
        }

        /**
        * The label is to be aligned center-right.
        * For the text align right, we need the content to expand to fill the entire label width.
        */
        .row .label .text-align-right {
            flex: 1;
        }

        .cell {
            background-color: var(--isncsci-cell-color, #F2F2F2);
            height: 40px;
            line-height: 40px;
            margin-left: 8px;
            text-align: center;
            width: 48px;
        }

        /* The interactive cells can be tapped.  They need to express that affordance to the user.object */
        .cell.interactive {
            background-color: var(--isncsci-interactive-cell-color, #DCDCDC);
            cursor: pointer;
        }

        .cell-select {
            background-color: var(--isncsci-interactive-cell-color, #DCDCDC);
            border: none;
            font-family: 'Roboto', 'Noto', sans-serif;
            font-size: 16px;
            height: 40px;
            margin-left: 8px;
            width: 104px;
        }

        .comments-component {
            border-bottom: solid 2px #CCC;
            width: 221px;
        }

        .comments-component::after {
            background-color: var(--isncsci-primary-color, #999);
            content: '';
            display: block;
            height: 2px;
            margin: 0 auto -1px auto;
            width: 0;

            transition: width 200ms ease;
        }

        .comments-component.active::after {
            width: 100%;
        }

        .comments-component .label {
            margin-bottom: 8px;
        }

        .comments-component textarea {
            border: none;
            background-color: transparent;
            color: var(--isncsci-primary-text-color, #000);
            font-family: 'Roboto', 'Noto', sans-serif;
            font-size: 14px;
            height: 120px;
            outline: none;
            overflow: auto;
            padding: 0;
            resize: none;
            width: 100%;
        }
    </style>
    <div class="grid">
        <div class="row header secondary-text">
            <div bind-to="text-right"></div>
            <div bind-to="text-left"></div>
        </div>
        <div class="row">
            <div class="label">
                <span class="text-align-right secondary-text" bind-to="text-upper-motor"></span>
            </div>
            <div class="cell interactive" bind-to="right-upper-motor"></div>
            <div class="cell interactive" bind-to="left-upper-motor"></div>
        </div>
        <div class="row">
            <div class="label">
                <span class="text-align-right secondary-text" bind-to="text-lower-motor"></span>
            </div>
            <div class="cell interactive" bind-to="right-lower-motor"></div>
            <div class="cell interactive" bind-to="left-lower-motor"></div>
        </div>
        <div class="row">
            <div class="label">
                <span class="text-align-right secondary-text" bind-to="text-light-touch"></span>
            </div>
            <div class="cell interactive" bind-to="right-touch"></div>
            <div class="cell interactive" bind-to="left-touch"></div>
        </div>
        <div class="row">
            <div class="label">
                <span class="text-align-right secondary-text" bind-to="text-pin-prick"></span>
            </div>
            <div class="cell interactive" bind-to="right-prick"></div>
            <div class="cell interactive" bind-to="left-prick"></div>
        </div>
    </div>
    <div class="grid">
        <div class="row">
            <div class="label">
                <div class="text-align-right secondary-text">
                    <div bind-to="text-vac"></div>
                    <div class="small-text" bind-to="text-vac-description"></div>
                </div>
            </div>
            <div>
                <select bind-to="anal-contraction"
                        class="cell-select">
                    <option value="None"></option>
                    <option value="Yes" bind-to="text-option-yes"></option>
                    <option value="No" bind-to="text-option-no"></option>
                    <option value="NT" bind-to="text-option-nt"></option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="label">
                <div class="text-align-right secondary-text">
                    <div bind-to="text-dap"></div>
                    <div class="small-text" bind-to="text-dap-description"></div>
                </div>
            </div>
            <div>
                <select bind-to="anal-sensation"
                        class="cell-select">
                    <option value="None"></option>
                    <option value="Yes" bind-to="text-option-yes"></option>
                    <option value="No" bind-to="text-option-no"></option>
                    <option value="NT" bind-to="text-option-nt"></option>
                </select>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="row header secondary-text">
            <div bind-to="text-right"></div>
            <div bind-to="text-left"></div>
        </div>
        <div class="row">
            <div class="label">
                <span class="text-align-right secondary-text" bind-to="text-sensory-nl"></span>
            </div>
            <div class="cell interactive"  bind-to="right-sensory-nl"></div>
            <div class="cell interactive" bind-to="left-sensory-nl"></div>
        </div>
        <div class="row">
            <div class="label">
                <span class="text-align-right secondary-text" bind-to="text-motor-nl"></span>
            </div>
            <div class="cell interactive" bind-to="right-motor-nl"></div>
            <div class="cell interactive" bind-to="left-motor-nl"></div>
        </div>
    </div>
    <div class="grid">
        <div class="row">
            <div class="label"><span class="text-align-right secondary-text" bind-to="text-nli"></span></div>
            <div class="cell" bind-to="nli"></div>
        </div>
        <div class="row">
            <div class="label">
                <span class="text-align-right secondary-text" bind-to="text-complete-incomplete"></span>
            </div>
            <div class="cell" bind-to="complete-incomplete"></div>
        </div>
        <div class="row">
            <div class="label"><span class="text-align-right secondary-text" bind-to="text-ais"></span></div>
            <div class="cell" bind-to="ais"></div>
        </div>
    </div>
    <div class="grid">
        <div class="row header secondary-text">
            <div bind-to="text-right"></div>
            <div bind-to="text-left"></div>
        </div>
        <div class="row">
            <div class="label">
                <span class="text-align-right secondary-text" bind-to="text-sensory-nl-zpp"></span>
            </div>
            <div class="cell" bind-to="right-sensory-nl-zpp"></div>
            <div class="cell" bind-to="left-sensory-nl-zpp"></div>
        </div>
        <div class="row">
            <div class="label">
                <span class="text-align-right secondary-text" bind-to="text-motor-nl-zpp"></span>
            </div>
            <div class="cell" bind-to="right-motor-nl-zpp"></div>
            <div class="cell" bind-to="left-motor-nl-zpp"></div>
        </div>
    </div>
    <div class="comments-component" bind-to="comments-component">
        <div class="label secondary-text" bind-to="text-comments"></div>
        <textarea rows="1" bind-to="comments"></textarea>
    </div>
`;