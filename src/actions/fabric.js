import * as Types from './../constants/ActionTypes';
import callApi from '../utils/apiCaller';

/**END:edit product */

export const actFetchFabricRequest = () => {

    return dispatch => {
        return callApi('parts?skip=0&limit=50', 'GET', null).then(result => {
            dispatch(actFetchFabric(result.data))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const actFetchFabric = fabric => {
    return {
        type: Types.FETCH_FABRICS,
        fabric
    }
}
