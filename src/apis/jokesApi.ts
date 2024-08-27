import { IJokeItem } from "@/types/jokeItem";
import { apiProviderHelpers } from "@/utils/apiProviderHelper";

// Unprotected api calls
const postJoke = (data: IJokeItem): Promise<IJokeItem> => {
    return apiProviderHelpers.postItem(1, 'jokes', data);
}

// Protected api calls
const getAllJokes = (): Promise<IJokeItem[]> => {
    return apiProviderHelpers.getItems(3, `jokes`);
}

const getAllModeratedJokes = (): Promise<IJokeItem[]> => {
    return apiProviderHelpers.getItems(2, `jokes`);
}

const getJoke = (id: string): Promise<IJokeItem> => {
    return apiProviderHelpers.getItem(3, `jokes/${id}`);
}

const updateJoke = (id: string, data: IJokeItem): Promise<IJokeItem> => {
    return apiProviderHelpers.putItem(3, `jokes/${id}`, data);
}

const deleteJoke = (id: string): Promise<IJokeItem> => {
    return apiProviderHelpers.deleteItem(3, `jokes/${id}`);
}

const transferJoke = (data: IJokeItem): Promise<IJokeItem> => {
    return apiProviderHelpers.postItem(2, 'jokes', data);
}



export {
    postJoke,
    getAllJokes,
    getAllModeratedJokes,
    getJoke,
    updateJoke,
    deleteJoke,
    transferJoke
}
