import axios from 'axios';
import * as Config from '../constants/Config';
export default function callApi(endpoint, method, body) {
    return axios({
        method: method,
        url: `${Config.API_URL}${endpoint}`,
        headers: {
            'x-request-id': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ0ZXN0LmQiLCJkaXNwbGF5X25hbWUiOiLEkOG7mWkgVGVzdCIsInVzZXJuYW1lIjoidGVzdDAwMSIsImVtYWlsIjoidGVzdDAwMUBnbWFpbC5jb20iLCJwaG9uZSI6IjA5ODc2Nzg5NzYiLCJpYXQiOjE1NTA0NjU1MjQsImV4cCI6MTU1MzA1NzUyNH0.ERZGGO8NuoQEZNxRhUYWU2IAdH3xepRe2z4qEOEUsxs',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: body
    }).catch(error => {
        console.log(error);
    })
}