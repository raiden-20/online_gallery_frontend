import {instance, instanceFile, instanceWithoutToken, PathsAPI} from "@/api/api_main";

export const ArtsAPI = {
    async CreateArtAPI(name: string, type: string, photos: File[], price: string,
                       createDate: string, description: string, size: string,
                       tags: string[], materials: string[], isPrivate: boolean, frame: boolean) {
        try {
            const formData = new FormData()

            const dto_object = new Blob([JSON.stringify({
                name,
                type,
                isPrivate,
                price,
                description,
                createDate,
                size,
                tags,
                materials,
                frame
            })], {
                type: 'application/json'
            })


            formData.append('ArtCreateDTO', dto_object);

            photos.forEach(img => {
                formData.append("photos", img)
            })
            const response = await instanceFile.post(
                PathsAPI.ART,
                formData
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetArtAPI(artId: string, currentId: string) {
        try {
            const id = currentId === undefined ? null : currentId
            const response = await instanceWithoutToken.get(
                PathsAPI.ART + `/artId=${artId}&currentId=${id}`,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async EditArtAPI(artId: string, name: string, type: string, changeMainPhoto: boolean, newPhotos: File[],
                     deletePhotoUrls: string[], price: string, createDate: string, description: string, size: string,
                     tags: string[], materials: string[], isPrivate: boolean, frame: boolean) {
        try {
            const formData = new FormData()
            const dto_object = new Blob([JSON.stringify({
                artId,
                name,
                type,
                changeMainPhoto,
                deletePhotoUrls,
                isPrivate,
                price,
                description,
                createDate,
                size,
                tags,
                materials,
                frame: frame
            })], {
                type: 'application/json'
            })

            formData.append('ArtChangeDTO', dto_object);

            newPhotos.forEach(img => {
                formData.append("newPhotos", img)
            })

            if (newPhotos.length  === 0) {
                formData.append("newPhotos", new File([], 'empty.txt', {type: 'text/plain'}))
            }

            const response = await instanceFile.put(
                PathsAPI.ART,
                formData
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async DeleteArtAPI(id: string) {
        try {

            const response = await instance.delete(
                PathsAPI.ART,
                {
                    data: {
                        id
                    }
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetAllArtAPI(type: string) {
        try {
            const response = await instanceWithoutToken.get(
                `/${type}`,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetAllArtistArtsAPI(artistId: string, currentId: string) {
        try {
            const id = currentId === undefined ? null : currentId
            const response = await instanceWithoutToken.get(
                PathsAPI.ART + PathsAPI.ARTIST + `/artistId=${artistId}&currentId=${id}`,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetAllCustomerArtsAPI(customerId: string) {
        try {
            const response = await instanceWithoutToken.get(
                PathsAPI.ART + PathsAPI.CUSTOMER + `/${customerId}`,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },
}