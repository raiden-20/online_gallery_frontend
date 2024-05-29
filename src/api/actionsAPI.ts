import {instance, instanceFile, PathsAPI} from "@/api/api_main";

export const ActionsAPI = {
    async PublicAction(id: string) {
        try {
            const response = await instance.post(
                PathsAPI.PUBLIC + PathsAPI.ACTION,
                {
                    id
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async PrivateSubscribe(artistId: string, cardId: string) {
        try {
            const response = await instance.post(
                PathsAPI.PRIVATE + PathsAPI.SUBSCRIBE,
                {
                    artistId,
                    cardId
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async PrivateUnsubscribe(artistId: string) {
        try {
            const response = await instance.delete(
                PathsAPI.PRIVATE + PathsAPI.UNSUBSCRIBE,
                {
                    data: {
                        id: artistId
                    }
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async PrivateSubscriptions() {
        try {
            const response = await instance.get(
                PathsAPI.PRIVATE + PathsAPI.SUBSCRIPTIONS,
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async PublicSubscriptions() {
        try {
            const response = await instance.get(
                PathsAPI.PUBLIC + PathsAPI.SUBSCRIPTIONS,
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async PrivateCreatePostPlace(artistId: string, price: string) {
        try {
            const response = await instance.post(
                PathsAPI.PRIVATE + PathsAPI.CREATE,
                {
                    artistId, price
                }
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async PrivatePostsPlaceData(artistId: string) {
        try {
            const response = await instance.get(
                PathsAPI.PRIVATE + `/${artistId}`,
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async PrivatePostsPlaceDelete() {
        try {
            const response = await instance.delete(
                PathsAPI.PRIVATE + PathsAPI.DELETE,
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async PrivateSubscribers() {
        try {
            const response = await instance.get(
                PathsAPI.PRIVATE + PathsAPI.SUBSCRIBERS,
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async PublicSubscribers() {
        try {
            const response = await instance.get(
                PathsAPI.PUBLIC + PathsAPI.SUBSCRIBERS,
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetInputSubscriptions(subscription: string, role: string, input: string) {
        try {
            const response = await instance.get(
                `/${subscription}` + PathsAPI.SEARCH + `/${role}` + `/object=${input}`,
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetPrivatePost(artistId: string) {
        try {
            const response = await instance.get(
                PathsAPI.POST + `/${artistId}`,
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async CreatePrivatePost(title: string, text: string, photos: File[]) {
        try {
            const formData = new FormData()
            const dto_object = new Blob([JSON.stringify({
                title,
                text
            })], {
                type: 'application/json'
            })
            formData.append('PostCreateDTO', dto_object)
            photos.forEach(img => {
                formData.append("photos", img)
            })
            const response = await instanceFile.post(
                PathsAPI.POST,
                formData
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async EditPrivatePost(postId: string, title: string, text: string, newPhotos: File[], deletePhotoUrls: string[]) {
        try {
            const formData = new FormData()

            const dto_object = new Blob([JSON.stringify({
                postId,
                title,
                text,
                deletePhotoUrls
            })], {
                type: 'application/json'
            })
            formData.append('PostChangeDTO', dto_object)
            newPhotos.forEach(img => {
                formData.append("newPhotos", img)
            })
            if (newPhotos.length  === 0) {
                formData.append("newPhotos", new File([], 'empty.txt', {type: 'text/plain'}))
            }
            const response = await instanceFile.put(
                PathsAPI.POST,
                formData
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async DeletePrivatePost(id: string) {
        try {
            const response = await instance.delete(
                PathsAPI.POST,
                {
                    data: {
                        id
                    }
                }
            )
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

}