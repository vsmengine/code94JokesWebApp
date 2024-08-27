import { isEmpty, isNil } from 'lodash';
import { getSessionItem } from './sessionStoreHelper';

const token = getSessionItem('token');
const BASE_URL_1 = `http://localhost:4100/api/1.0/`; // Jokes Submit API
const BASE_URL_2 = `http://localhost:4200/api/1.0/`; // Jokes Delivery API
const BASE_URL_3 = `http://localhost:4300/api/1.0/`; // Jokes Moderate API
const defaultHeaders = {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
    'Authorization': `Bearer ${token}`
};

// Get Url
export const getFullURL = (baseUrlType: number, url: string) => {
    switch(baseUrlType) {
        case 3:
            return `${BASE_URL_3}${url}`;
        case 2:
            return `${BASE_URL_2}${url}`;
        case 1:
            return `${BASE_URL_1}${url}`;
        default:
            return `${BASE_URL_1}${url}`;
    }
}

// Get Headers
export const getHeaders = (headers?: {[key: string]: string}) => {
    console.log(defaultHeaders)
    return !isEmpty(headers) && !isNil(headers) ? {...defaultHeaders, ...headers} : defaultHeaders;
}

export const apiSupportHelpers = {
    getFullURL,
    getHeaders
}
