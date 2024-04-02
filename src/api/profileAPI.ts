import {instance, PathsAPI} from "@/api/api_main";
import {Customer} from "@/interfaces/customerInterface";
import {Artist} from "@/interfaces/artistInterface";

export const ProfileAPI = {
    async CustomerDataAPI(id: string) {
        try {
            const response = await instance.get(
                PathsAPI.CUSTOMER + '/data' + `${id}`,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async ArtistDataAPI(id: string) {
        try {
            const response = await instance.get(
                PathsAPI.ARTIST + PathsAPI.DATA + `${id}`,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async ChangeCustomerDataAPI(customer_name: string, date_birth: string, gender: string, avatar_url: string, cover_url: string) {
        const formData = new FormData()

        formData.append('customer_name', customer_name)
        formData.append('date_birth', date_birth)
        formData.append('gender', gender)
        formData.append('avatar_url', avatar_url)
        formData.append('cover_url', cover_url)

        try {
            const response = await instance.put(
                PathsAPI.CUSTOMER + PathsAPI.DATA,
                formData
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async ChangeArtistDataAPI(artist_name: string, avatar_url: string, cover_url: string) {
        const formData = new FormData()

        formData.append('artist_name', artist_name)
        formData.append('avatar_url', avatar_url)
        formData.append('cover_url', cover_url)

        try {
            const response = await instance.put(
                PathsAPI.ARTIST + PathsAPI.DATA,
                formData
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async CreateArtistAPI(artist_name: string) {
        try {
            const response = await instance.post(
                PathsAPI.CREATE + PathsAPI.ARTIST,
                {
                    artist_name
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async CreateCustomerAPI(customer_name: string, date_birth: string, gender: string, avatar_url: string, cover_url: string) {
        try {
            const response = await instance.post(
                PathsAPI.CREATE + PathsAPI.CUSTOMER,
                {
                    customer_name,
                    date_birth,
                    gender,
                    avatar_url,
                    cover_url
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    }

}