export const SET_DERMATOME_VALUE = 'NEUROLOGY_FORM_SET_DERMATOME_VALUE';

export const setDermatomeValue = (dermatomeName: string, value: string) => {
  return {
    type: SET_DERMATOME_VALUE,
    dermatomeName,
    value
  };
};