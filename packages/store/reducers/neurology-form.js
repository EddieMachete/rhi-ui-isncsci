import * as Actions from '../actions/neurology-form';
const initialState = {
    c2RightTouch: '5'
};
export const neurologyForm = (state = initialState, action) => {
    // ... ES6 Rest operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    let newState = Object.assign({}, state);
    switch (action.type) {
        case Actions.SET_DERMATOME_VALUE:
            newState[action.dermatomeName] = action.value;
            return newState;
        case Actions.UPDATE_DERMATOMES_IN_RANGE:
            action.dermatomeNames.forEach((name) => newState[name] = action.value);
            return newState;
        default:
            return state;
    }
};
export default neurologyForm;
