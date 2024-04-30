import {instance, PathsAPI} from "@/api/api_main";

export const CartAPI = {
    async AddArtToCartAPI(id: string) {
        try {
            const response = await instance.post(
                PathsAPI.CART,
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

    async DeleteArtFromCartAPI(id: string) {
        try {
            const response = await instance.delete(
                PathsAPI.CART,
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

    async GetCartAPI() {
        try {
            const response = await instance.get(
                PathsAPI.CART,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async BuyCartAPI(arts: {[key: string]: boolean }, cardId: string, addressId: string) {
        try {
            const response = await instance.post(
                PathsAPI.CART + PathsAPI.BUY,
                {
                    arts,
                    cardId,
                    addressId
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },
}