import * as Types from './../constants/ActionTypes';

/**END:edit product */

export const actDesignCustom = (design, order_design) => {
    return {
        type: Types.CUSTOM_DESIGN,
        design,
        order_design
    }
}

