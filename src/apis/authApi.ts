import { apiProviderHelpers } from "@/utils/apiProviderHelper";

const login = (data: any): Promise<any> => {
    return apiProviderHelpers.postItem(3, 'auth/login', data);
}

export {
    login
}
