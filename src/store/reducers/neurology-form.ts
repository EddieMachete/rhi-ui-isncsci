import * as Actions from '../actions/neurology-form';

const initialState =
  {
    c2RightTouch: '5'
  };

export const neurologyForm = (state = initialState, action) => {
  // ... ES6 Rest operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  switch (action.type) {
    case Actions.UPDATE_C2:
      return {
        ...state,
        c2RightTouch: action.rightTouch
      };
    default:
      return state;
  }
};

export default neurologyForm;