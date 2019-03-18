import * as Types from './../constants/ActionTypes';
import callApi from '../utils/apiCaller';

/**END:edit product */

export const actFetchFabricRequest = () => {

    return dispatch => {
        return callApi('/parts?skip=0&limit=50&type=38', 'GET', null).then(result => {
            if (result.data.success) dispatch(actFetchFabric(result.data.data))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const actFetchFabric = fabrics => {
    return {
        type: Types.FETCH_FABRICS,
        fabrics
    }
}
