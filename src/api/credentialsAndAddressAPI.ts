import {instance, PathsAPI} from "@/api/api_main";

export const CredentialsAndAddressAPI = {
    async AddAddressAPI(name: string, country: string, region: string, city: string,
                        index: string, location: string, isDefault: boolean) {
        try {
            const response = await instance.post(
                PathsAPI.ADDRESS,
                {
                    name,
                    country,
                    region,
                    city,
                    index,
                    location,
                    isDefault,
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async EditAddressAPI(addressId: string, name: string, country: string, region: string, city: string,
                        index: string, location: string, isDefault: boolean) {
        try {
            const response = await instance.put(
                PathsAPI.ADDRESS,
                {
                    addressId,
                    name,
                    country,
                    region,
                    city,
                    index,
                    location,
                    isDefault,
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetAddressesAPI() {
        try {
            const response = await instance.get(
                PathsAPI.ADDRESS + 'es',
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async DeleteAddressAPI(id: string) {
        try {
            const response = await instance.delete(
                PathsAPI.ADDRESS,
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


    async AddCardAPI(number: string, date: string, cvv: string, isDefault: boolean) {
        try {
            const response = await instance.post(
                PathsAPI.CARD,
                {
                    number,
                    date,
                    cvv,
                    isDefault
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async EditCardAPI(cardId: string, type: string, number: string, date: string, cvv: string, isDefault: boolean) {
        try {
            const response = await instance.put(
                PathsAPI.CARD,
                {
                    cardId,
                    type,
                    number,
                    date,
                    cvv,
                    isDefault
                }
            );

            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async GetCardsAPI() {
        try {
            const response = await instance.get(
                PathsAPI.CARD + 's',
            );
            return [response.status, response.data];
        } catch (error: any) {
            console.error(error)
            return [error.response.status, error.response.data];
        }
    },

    async DeleteCardAPI(id: string) {
        try {
            const response = await instance.delete(
                PathsAPI.CARD,
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
}