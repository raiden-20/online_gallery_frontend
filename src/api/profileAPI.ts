import {
    instance,
    instanceFile,
    instanceWithoutToken,
    PathsAPI,
} from "@/api/api_main";

export const ProfileAPI = {
    async CustomerDataAPI(id: string) {
        try {
            const response = await instanceWithoutToken.get(
                PathsAPI.CUSTOMER + '/' + id,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async ArtistDataAPI(artistId: string, currentId: string) {
        try {
            const id = currentId === undefined ? null : currentId
            const response = await instanceWithoutToken.get(
                PathsAPI.ARTIST + `/artistId=${artistId}&currentId=${id}`,
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
                PathsAPI.CUSTOMER + '/first-entry',
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async ChangeCustomerDataAPI(customerName: string, birthDate: string, gender: string, description: string,
                                avatarUrl: string, coverUrl: string, avatar: File | string, cover: File | string) {
        const formData = new FormData()

        formData.append('customerName', customerName)
        formData.append('birthDate', birthDate)
        formData.append('gender', gender)
        formData.append('description', description === '' ? ' ' : description)
        formData.append('avatarUrl', avatarUrl=== '' ? ' ' : avatarUrl)
        formData.append('coverUrl', coverUrl=== '' ? ' ' : coverUrl)
        formData.append('avatar', avatar === ' ' ? new File([], 'empty.txt', {type: 'text/plain'}) : avatar)
        formData.append('cover', cover === ' ' ? new File([], 'empty.txt', {type: 'text/plain'}) : cover)
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
                              avatar: File | string, cover: File | string, description: string) {
        const formData = new FormData()

        formData.append('artistName', artistName)
        formData.append('avatarUrl', avatarUrl)
        formData.append('coverUrl', coverUrl)
        formData.append('description', description)
        formData.append('avatar', avatar === ' ' ? new File([], 'empty.txt', {type: 'text/plain'}) : avatar)
        formData.append('cover', cover === ' ' ? new File([], 'empty.txt', {type: 'text/plain'}) : cover)
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
    },
}