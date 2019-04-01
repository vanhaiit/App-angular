import * as Types from '../constants/ActionTypes';
var initialState = {
    design: {},
    order_design: {}
};
const design = (state = initialState, action) => {
    switch (action.type) {
        case Types.CUSTOM_DESIGN:
            return {
                ...state,
                design: action.design
            }
        case Types.ORDER_CUSTOM_DESIGN:
            return {
                ...state,
                order_design: action.order_design
            }
        default:
            return state;
    }
}
export default design;