/*
@license
Copyright (c) 2017 Rick Hansen Institute. All rights reserved.
This code should not be modified and/or distributed without explicit permission from the Rick Hansen Institute.
Author: RhiTech <tech@rickhanseninstitute.org>
*/
'use strict';

export const SET_DERMATOME_VALUE = 'NEUROLOGY_FORM_SET_DERMATOME_VALUE';

export const setDermatomeValue = (dermatomeName: string, value: string) => {
  return {
    type: SET_DERMATOME_VALUE,
    dermatomeName,
    value
  };
};

export const UPDATE_DERMATOMES_IN_RANGE = 'NEUROLOGY_FORM_UPDATE_DERMATOMES_IN_RANGE';

export const updateDermatomesInRange = (dermatomeNames: string[], value: string) => {
  return {
    type: UPDATE_DERMATOMES_IN_RANGE,
    dermatomeNames,
    value
  };
};