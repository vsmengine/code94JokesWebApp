import { AxiosError, AxiosResponse } from "axios";
import { removeSessionItem, setSessionItem } from "./sessionStoreHelper";


// Handle response data here
export const handleData = (res: AxiosResponse) => {
    if (!res.data) {
        return res;
    }
    return res.data;
}

// Handle response eroor here
export const handleError = (err: AxiosError) => {
    switch(err.response?.status) {
        case 400:
            console.error("Bad Request: ", err.response?.status);
            // Do anything
            break;
        case 401:
            console.error("Unauthorized: ", err.response?.status);
            removeSessionItem('token');
            window.location.href = '/login';
            break;
        case 403:
            console.error("Forbidden: ", err.response?.status);
            // Do anything
            break;
        case 404:
            console.error("Not Found: ", err.response?.status);
            // Do anything
            break;
        case 500:
            console.error("Internal Server Error: ", err.response?.status);
            // Do anything
            break;
        default:
            console.error("Unhandled Error: ", err.response?.status);
            // Do anything
            break;
    }
    throw(err);
}

export const responseHelper = {
    handleData,
    handleError
}
