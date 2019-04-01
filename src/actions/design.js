import * as Types from './../constants/ActionTypes';

/**END:edit product */

export const actDesignCustom = (design) => {
    return {
        type: Types.CUSTOM_DESIGN,
        design
    }
}

export const actOrderDesignCustom = (order_design) => {
    return {
        type: Types.ORDER_CUSTOM_DESIGN,
        order_design
    }
}


