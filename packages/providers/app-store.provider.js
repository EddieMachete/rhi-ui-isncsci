/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';
import { store } from '../store/store';
import * as NeurologyFormActions from '../store/actions/neurology-form';
import * as UiStateActions from '../store/actions/ui-state';
export class AppStoreProvider {
    clearDermatomeSelection() {
        console.log('clearDermatomeSelection');
        return Promise.resolve();
    }
    selectDermatome(dermatomeName) {
        store.dispatch(UiStateActions.selectDermatome(dermatomeName));
        return Promise.resolve();
    }
    setDermatomeValue(dermatomeName, value) {
        store.dispatch(NeurologyFormActions.setDermatomeValue(dermatomeName, value));
        return Promise.resolve();
    }
    setTotals(totals) {
        console.log('setTotals');
        return Promise.resolve();
    }
    updateDermatomesInRange(dermatomeNames, value) {
        store.dispatch(NeurologyFormActions.updateDermatomesInRange(dermatomeNames, value));
        return Promise.resolve();
    }
}
