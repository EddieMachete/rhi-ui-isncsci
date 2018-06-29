import * as Actions from '../actions/neurology-form';

const initialState =
  {
    c2RightTouch: '5'
  };

export const neurologyForm = (state = initialState, action) => {
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