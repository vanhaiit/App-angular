import axios from 'axios';
import * as Config from '../constants/Config';
export default function callApi(endpoint, method, body) {
    return axios({
        method: method,
        url: `${Config.API_URL}${endpoint}`,
        headers: {
            'x-request-id': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ0ZXN0LmQiLCJkaXNwbGF5X25hbWUiOiLEkOG7mWkgVGVzdCIsInVzZXJuYW1lIjoidGVzdDAwMSIsImVtYWlsIjoidGVzdDAwMUBnbWFpbC5jb20iLCJwaG9uZSI6IjA5ODc2Nzg5NzYiLCJpYXQiOjE1NTMwNjI1MzksImV4cCI6MTU1NTY1NDUzOX0.4rDzq-pWb6mTw-2XkVvKYpcyV-oicT8vmwFACLjKscI',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: body
    }).catch(error => {
        console.log(error);
    })
}