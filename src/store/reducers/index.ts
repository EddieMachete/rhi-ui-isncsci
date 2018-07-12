/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

import { combineReducers } from 'redux';
import { neurologyForm } from './neurology-form';
import { uiState } from './ui-state';

export const rootReducer = combineReducers({
  neurologyForm,
  uiState
});

export default rootReducer;