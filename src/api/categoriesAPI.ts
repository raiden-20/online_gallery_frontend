import {instance, PathsAPI} from "@/api/api_main";

export const CategoriesAPI = {

    async GetAllCustomersAPI() {
        try {
            const response = await instance.get(
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
            const response = await instance.get(
                PathsAPI.ARTIST + 's',
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetArtistsByNameAPI(input_name: string) {
        try {
            const response = await instance.get(
                PathsAPI.SEARCH + PathsAPI.ARTIST + PathsAPI.OBJECT + '=' + input_name,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetCustomersByNameAPI(input_name: string) {
        try {
            const response = await instance.get(
                PathsAPI.SEARCH + PathsAPI.CUSTOMER + PathsAPI.OBJECT + '=' + input_name,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },
}