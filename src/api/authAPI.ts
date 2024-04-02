import {instance, PathsAPI} from "@/api/api_main";

export const AuthAPI = {

    async ChangeEmailAPI(email: string) {
        try {
            const response = await instance.put(
                PathsAPI.CHANGE + PathsAPI.EMAIL,
                {
                    email
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async ChangePasswordAPI(password: string) {
        try {
            const response = await instance.put(
                PathsAPI.CHANGE + PathsAPI.PASSWORD,
                {
                    password
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async DeleteAccountAPI() {
        try {
            const response = await instance.delete(
                PathsAPI.DELETE + PathsAPI.ACCOUNT,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },
}