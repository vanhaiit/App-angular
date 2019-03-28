import * as Types from '../constants/ActionTypes';
var initialState = {};
const design = (state = initialState, action) => {
    switch (action.type) {
        case Types.CUSTOM_DESIGN:
            return action.design
        default:
            return state;
    }
}
export default design;