/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

import { iIsncsciAppStoreProvider } from 'rhi-core-isncsci-algorithm/boundaries/src/iIsncsciAppStore.provider';
import { IsncsciTotals } from 'rhi-core-isncsci-algorithm/domain/src/isncsciTotals';
import { store } from '../store/store';
import * as Actions from '../store/actions/neurology-form';

export class AppStoreProvider implements iIsncsciAppStoreProvider {
    public setDermatomeValue(dermatomeName: string, value: string): Promise<void> {
        store.dispatch(Actions.setDermatomeValue(dermatomeName, value));
        return Promise.resolve();
    }

    public setTotals(totals: IsncsciTotals): Promise<void> {
        return Promise.resolve();
    }
}