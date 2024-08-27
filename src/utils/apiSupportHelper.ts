import { isEmpty, isNil } from 'lodash';
import { getSessionItem } from './sessionStoreHelper';

const BASE_URL_1 = `http://localhost:4100/api/1.0/`; // Jokes Submit API
const BASE_URL_2 = `http://localhost:4200/api/1.0/`; // Jokes Delivery API
const BASE_URL_3 = `http://localhost:4300/api/1.0/`; // Jokes Moderate API

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
export const getHeaders = async (headers?: {[key: string]: string}) => {
    const token = await getToken();
    const defaultHeaders = {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Authorization': `Bearer ${token}`
    };
    console.log(defaultHeaders, token)
    return !isEmpty(headers) && !isNil(headers) ? {...defaultHeaders, ...headers} : defaultHeaders;
}

// Get token
const getToken = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve(getSessionItem('token')?.token);
    });
}

export const apiSupportHelpers = {
    getFullURL,
    getHeaders
}
