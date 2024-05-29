import {instance, instanceFile, instanceWithoutToken, PathsAPI} from "@/api/api_main";

export const AuctionsAPI = {
    async CreateAuctionAPI(name: string, type: string, photos: File[], startPrice: string,
                       createDate: string, description: string, size: string,
                       tags: string[], materials: string[], startDate: string,
                       endDate: string, frame: boolean) {
        try {
            const formData = new FormData()

            let start = new Date(startDate)
            let end = new Date(endDate)


            const dto_object = new Blob([JSON.stringify({
                name,
                type,
                startDate : start,
                endDate : end,
                startPrice,
                description,
                createDate,
                size,
                tags,
                materials,
                frame
            })], {
                type: 'application/json'
            })

            formData.append('AuctionCreateDTO', dto_object);

            photos.forEach(img => {
                formData.append("photos", img)
            })

            return await instanceFile.post(
                PathsAPI.AUCTION,
                formData
            );
        } catch (error: any) {
            console.error(error)
            return error;
        }
    },

    async GetAllAuctionsAPI() {
        try {
            return await instanceWithoutToken.get(
                PathsAPI.AUCTIONS,
            );
        } catch (error: any) {
            console.error(error)
            return error;
        }
    },

    async EditAuctionAPI(auctionId: string, name: string, type: string, changeMainPhoto: boolean, newPhotos: File[],
                     deletePhotoUrls: string[], startPrice: string, createDate: string, description: string, size: string,
                     tags: string[], materials: string[], frame: boolean, startDate: string, endDate: string) {
        try {
            const formData = new FormData()

            let start = new Date(startDate)
            let end = new Date(endDate)

            const dto_object = new Blob([JSON.stringify({
                auctionId,
                name,
                type,
                changeMainPhoto,
                deletePhotoUrls,
                startDate : start,
                endDate : end,
                startPrice,
                description,
                createDate,
                size,
                tags,
                materials,
                frame
            })], {
                type: 'application/json'
            })

            formData.append('AuctionChangeDTO', dto_object);

            newPhotos.forEach(img => {
                formData.append("newPhotos", img)
            })

            if (newPhotos.length  === 0) {
                formData.append("newPhotos", new File([], 'empty.txt', {type: 'text/plain'}))
            }

            return await instanceFile.put(
                PathsAPI.AUCTION,
                formData
            );
        } catch (error: any) {
            console.error(error)
            return error;
        }
    },

    async DeleteAuctionAPI(id: string) {
        try {
            return  await instance.delete(
                PathsAPI.AUCTION,
                {
                    data: {
                        id
                    }
                }
            );
        } catch (error: any) {
            console.error(error)
            return error;
        }
    },

    async GetOneAuctionAPI(auctionId: string, currentId: string) {
        try {
            return  await instanceWithoutToken.get(
                PathsAPI.AUCTION + `/auctionId=${auctionId}&currentId=${currentId}`,
            );
        } catch (error: any) {
            console.error(error)
            return error;
        }
    },

    async GetAllArtistAuctionAPI(artistId: string) {
        try {
            return  await instanceWithoutToken.get(
                PathsAPI.AUCTION + PathsAPI.ARTIST +`/${artistId}`,
            );
        } catch (error: any) {
            console.error(error)
            return error;
        }
    },

    async SetNewRateAuctionAPI(auctionId: string, isAnonymous: boolean) {
        try {
            return  await instance.post(
                PathsAPI.AUCTION + PathsAPI.RATE,
                {
                    auctionId,
                    isAnonymous
                }
            );
        } catch (error: any) {
            console.error(error)
            return error;
        }
    },

    async SetMaxRateAuctionAPI(auctionId: string, isAnonymous: boolean, maxRate: number) {
        try {
            return  await instance.post(
                PathsAPI.AUCTION + PathsAPI.MAX_RATE,
                {
                    auctionId,
                    maxRate,
                    isAnonymous
                }
            );
        } catch (error: any) {
            console.error(error)
            return error;
        }
    }
}