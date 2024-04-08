import {instance, instanceFile, instanceWithoutToken, PathsAPI} from "@/api/api_main";
import Cookies from "js-cookie";

export const ProfileAPI = {
    async CustomerDataAPI(id: string) {
        try {
            const response = await instanceWithoutToken.get(
                PathsAPI.CUSTOMER + PathsAPI.DATA + '/' + id,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async ArtistDataAPI(id: string) {
        try {
            const response = await instanceWithoutToken.get(
                PathsAPI.ARTIST + PathsAPI.DATA + '/' + id,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async IsCustomerAPI() {
        try {
            const response = await instance.get(
                PathsAPI.ARTIST + '/' + Cookies.get('customerId') as string + '/first-entry',
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async ChangeCustomerDataAPI(customerName: string, birthDate: string, gender: string,
                                avatarUrl: string, coverUrl: string, avatar: File | string, cover: File | string) {
        const formData = new FormData()

        formData.append('customerId', Cookies.get('customerId') as string)
        formData.append('customerName', customerName)
        formData.append('birthDate', birthDate)
        formData.append('gender', gender)
        formData.append('avatarUrl', avatarUrl)
        formData.append('coverUrl', coverUrl)
        formData.append('avatar', avatar === null ? 'null' : avatar)
        formData.append('cover', cover === null ? 'null' : cover)

        try {
            const response = await instanceFile.put(
                PathsAPI.CUSTOMER + PathsAPI.DATA,
                formData
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async ChangeArtistDataAPI(artistName: string, avatarUrl: string, coverUrl: string,
                              avatar: File | string, cover: File | string ,description: string) {
        const formData = new FormData()

        formData.append('artistId', Cookies.get('artistId') as string)
        formData.append('artistName', artistName)
        formData.append('avatarUrl', avatarUrl)
        formData.append('coverUrl', coverUrl)
        formData.append('description', description)
        formData.append('avatar', avatar)
        formData.append('cover', cover)

        try {
            const response = await instanceFile.put(
                PathsAPI.ARTIST + PathsAPI.DATA,
                formData
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async CreateArtistAPI(artistName: string) {
        try {
            const response = await instance.post(
                PathsAPI.ARTIST + PathsAPI.CREATE,
                {
                    customerId: Cookies.get('customerId') as string,
                    artistName
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async CreateCustomerAPI(customerName: string, birthDate: string, gender: string) {
        try {
            const response = await instance.post(
                PathsAPI.CUSTOMER + PathsAPI.CREATE,
                {
                    customerId: Cookies.get('customerId') as string,
                    customerName,
                    birthDate,
                    gender
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    }

}