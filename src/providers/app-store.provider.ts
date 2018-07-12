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
import * as NeurologyFormActions from '../store/actions/neurology-form';
import * as UiStateActions from '../store/actions/ui-state';

export class AppStoreProvider implements iIsncsciAppStoreProvider {
    public clearDermatomeSelection(): Promise<void> {
        console.log('clearDermatomeSelection');
        return Promise.resolve();
    }

    public selectDermatome(dermatomeName: string): Promise<void> {
        console.log('selectDermatome');
        store.dispatch(UiStateActions.selectDermatome(dermatomeName));
        return Promise.resolve();
    }

    public setDermatomeValue(dermatomeName: string, value: string): Promise<void> {
        store.dispatch(NeurologyFormActions.setDermatomeValue(dermatomeName, value));
        return Promise.resolve();
    }

    public setTotals(totals: IsncsciTotals): Promise<void> {
        console.log('setTotals');
        return Promise.resolve();
    }

    public updateDermatomesInRange(dermatomeNames: string[], value: string): Promise<void> {
        console.log('updateDermatomesInRange');
        return Promise.resolve();
    }
}