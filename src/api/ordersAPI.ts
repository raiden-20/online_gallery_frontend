import {instance, PathsAPI} from "@/api/api_main";

export const OrdersAPI =  {
    async GetOrderAPI(orderId: string) {
        try {
            const response = await instance.get(
                PathsAPI.ORDER + `/${orderId}`,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetAllOrdersAPI(userId: string) {
        try {
            const response = await instance.get(
                PathsAPI.ORDER + `s/${userId}`,
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async SendOrderAPI(id: string, comment: string) {
        try {
            const response = await instance.post(
                PathsAPI.ORDER + PathsAPI.SEND,
                {
                    id,
                    comment
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async EditOrderAPI(id: string, comment: string) {
        try {
            const response = await instance.put(
                PathsAPI.ORDER + PathsAPI.EDIT,
                {
                    id,
                    comment
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async ReceiveOrderAPI(id: string) {
        try {
            const response = await instance.post(
                PathsAPI.ORDER + PathsAPI.RECEIVE,
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

    async ChangeOrderAPI(orderId: string, cardId: string, addressId: string) {
        try {
            const response = await instance.put(
                PathsAPI.ORDER + PathsAPI.CHANGE,
                {
                    orderId: Number.parseInt(orderId),
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