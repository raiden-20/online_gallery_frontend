import {instance, PathsAPI} from "@/api/api_main";

export const NotificationsAPI = {
    async GetNotificationsArtistAPI() {
        try {
            const response = await instance.get(
                PathsAPI.NOTIFICATION + PathsAPI.ARTIST
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetNotificationsCustomerAPI() {
        try {
            const response = await instance.get(
                PathsAPI.NOTIFICATION + PathsAPI.CUSTOMER
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    }
}