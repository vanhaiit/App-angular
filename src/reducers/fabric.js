import * as Type from './../constants/ActionTypes';
var initialState = [];
const fabrics = (state = initialState, action) => {
    switch (action.type) {

        case Type.FETCH_FABRICS:
            state = action.fabrics;
            return [...state];

        default:
            return [...state]

    }
};
export default fabrics;