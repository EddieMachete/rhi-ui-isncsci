/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';
import * as Actions from '../actions/ui-state';
const initialState = {
    dermatomeSelected: null
};
export const uiState = (state = initialState, action) => {
    // ... ES6 Rest operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    switch (action.type) {
        case Actions.SELECT_DERMATOME:
            let newState = Object.assign({}, state);
            newState.dermatomeSelected = action.dermatomeName;
            return newState;
        default:
            return state;
    }
};
export default uiState;
