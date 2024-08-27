import Axios from "axios";
import { handleData, handleError } from "./responseHelper";
import { getFullURL, getHeaders } from "./apiSupportHelper";

// Get Items
export const getItems = async <T>(baseUrlType: number, url: string): Promise<T> => {
    return Axios.get(getFullURL(baseUrlType, url), {
        headers: getHeaders()
    })
    .then(handleData)
    .catch(handleError);
}

// Get Item
export const getItem = async <T>(baseUrlType: number, url: string): Promise<T> => {
    return Axios.get(getFullURL(baseUrlType, url), {
        headers: getHeaders()
    })
    .then(handleData)
    .catch(handleError);
}

// Post Item
export const postItem = async <T>(baseUrlType: number, url: string, data?: any): Promise<T> => {
    return Axios.post(getFullURL(baseUrlType, url), data, {
        headers: getHeaders()
    })
    .then(handleData)
    .catch(handleError);
}

// Put Item
export const putItem = async <T>(baseUrlType: number, url: string, data?: any): Promise<T> => {
    return Axios.put(getFullURL(baseUrlType, url), data, {
        headers: getHeaders()
    })
    .then(handleData)
    .catch(handleError);
}

// Delete Item
export const deleteItem = async <T>(baseUrlType: number, url: string): Promise<T> => {
    return Axios.delete(getFullURL(baseUrlType, url), {
        headers: getHeaders()
    })
    .then(handleData)
    .catch(handleError);
}

// Helpers for custom requests
//
//
//
//
//

export const apiProviderHelpers = {
    getItems,
    getItem,
    postItem,
    putItem,
    deleteItem
}
