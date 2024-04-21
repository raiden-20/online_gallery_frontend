import {instanceWithoutToken, PathsAPI} from "@/api/api_main";

export const CategoriesAPI = {

    async GetAllCustomersAPI() {
        try {
            const response = await instanceWithoutToken.get(
                PathsAPI.CUSTOMER + 's',
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetAllArtistsAPI() {
        try {
            const response = await instanceWithoutToken.get(
                PathsAPI.ARTIST + 's',
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetSmthByNameAPI(input_name: string, type: string) {
        try {
            const response = await instanceWithoutToken.get(
                PathsAPI.SEARCH + `/${type}` + PathsAPI.OBJECT + '=' + input_name,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },
}