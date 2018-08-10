/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';
export const SELECT_DERMATOME = 'UI_STATE_SELECT_DERMATOME';
export const selectDermatome = (dermatomeName) => {
    return {
        type: SELECT_DERMATOME,
        dermatomeName
    };
};
