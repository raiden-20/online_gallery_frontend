import {Dispatch} from "redux";
import {CredentialsAndAddressAPI} from "@/api/credentialsAndAddressAPI";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {setAddresses, setCards} from "@/store/reducers/credentialsReducer";
import {rotate} from "next/dist/server/lib/squoosh/impl";

export const AddAddress = (name: string, country: string, region: string, city: string,
                           index: string, location: string, isDefault: boolean,
                           router: AppRouterInstance) =>
    () => {
        CredentialsAndAddressAPI.AddAddressAPI(name, country, region, city, index, location, isDefault)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }
export const EditAddress = (addressId: string, name: string, country: string, region: string, city: string,
                           index: string, location: string, isDefault: boolean,
                            router: AppRouterInstance) =>
    () => {
        CredentialsAndAddressAPI.EditAddressAPI(addressId, name, country, region, city, index, location, isDefault)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const getAddresses = (router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        CredentialsAndAddressAPI.GetAddressesAPI()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setAddresses(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const DeleteAddress = (id: string, router: AppRouterInstance) =>
    () => {
        CredentialsAndAddressAPI.DeleteAddressAPI(id)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const AddCard = (number: string, date: string, cvv: string, isDefault: boolean,
                        router: AppRouterInstance) =>
    () => {
        CredentialsAndAddressAPI.AddCardAPI(number, date, cvv, isDefault)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }
export const EditCard = (cardId: string, type: string, number: string, date: string, cvv: string, isDefault: boolean,
                         router: AppRouterInstance) =>
    () => {
        CredentialsAndAddressAPI.EditCardAPI(cardId, type, number, date, cvv, isDefault)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const getCards = (router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        CredentialsAndAddressAPI.GetCardsAPI()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setCards(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const DeleteCard = (id: string, router: AppRouterInstance) =>
    () => {
        CredentialsAndAddressAPI.DeleteCardAPI(id)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }