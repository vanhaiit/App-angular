import * as Types from './../constants/ActionTypes';
import callApi from '../utils/apiCaller';

/**END:edit product */

export const getListFabricRequest = param => {

    return dispatch => {
        var request_url = `/parts?skip=${param.skip}&limit=${param.limit}`;
        if (param.type) request_url += `&type=${param.type}`;
        if (param.keyword) request_url += `&keyword=${param.keyword}`;
        return callApi(request_url, 'GET', null).then(result => {
            if (result.data.success) dispatch(getListFabric(result.data.data))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const getListFabric = fabrics => {
    return {
        type: Types.FETCH_FABRICS,
        fabrics
    }
}

