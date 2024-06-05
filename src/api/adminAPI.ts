import {instance, instanceFile, PathsAPI} from "@/api/api_main";


export const AdminAPI = {
    async BlockUser(id: string) {
        try {
            return await instance.post(
                PathsAPI.ADMIN + PathsAPI.BLOCK,
                {
                    id
                }
            );
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },

    async UnblockUser(id: string) {
        try {
            return await instance.post(
                PathsAPI.ADMIN + PathsAPI.UNBLOCK,
                {
                    id
                }
            );
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },

    async DeleteArt(id: string) {
        try {
            return await instance.delete(
                PathsAPI.ADMIN + PathsAPI.ART,
                {
                    data: {
                        id
                    }
                }
            );
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },

    async DeleteAuction(id: string) {
        try {
            return await instance.delete(
                PathsAPI.ADMIN + PathsAPI.AUCTION,
                {
                    data: {
                        id
                    }
                }
            );
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },

    async CreateEvent(name: string, photo: File, banner: File, type: string,
                      description: string, startDate: Date, endDate: Date) {
        try {
            const formData = new FormData()

            const dto_object = new Blob([JSON.stringify({
                name,
                type,
                description,
                startDate,
                endDate
            })], {
                type: 'application/json'
            })

            formData.append('EventCreateDTO', dto_object);

            formData.append("photo", photo)
            formData.append("banner", banner)

            return await instanceFile.post(
                PathsAPI.ADMIN + PathsAPI.EVENT,
                formData
            );
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },

    async EditEvent(eventId: string, name: string, changeMainPhoto: boolean, newPhoto: File,
                    changeBanner: boolean, newBanner: File, description: string, startDate: Date, endDate: Date) {
        try {
            const formData = new FormData()

            const dto_object = new Blob([JSON.stringify({
                eventId,
                name,
                changeMainPhoto,
                changeBanner,
                description,
                startDate,
                endDate
            })], {
                type: 'application/json'
            })

            formData.append('EventChangeDTO', dto_object);

            formData.append("newPhoto", newPhoto === undefined ? new File([], 'empty.txt', {type: 'text/plain'}) : newPhoto)
            formData.append("newBanner", newBanner === undefined ? new File([], 'empty.txt', {type: 'text/plain'}) : newBanner)

            return await instanceFile.put(
                PathsAPI.ADMIN + PathsAPI.EVENT,
                formData
            );
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },

    async DeleteEvent(id: string) {
        try {
            return await instance.delete(
                PathsAPI.ADMIN + PathsAPI.EVENT,
                {
                    data: {
                        id
                    }
                }
            );
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },
}