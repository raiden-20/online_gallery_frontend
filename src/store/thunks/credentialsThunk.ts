import {Dispatch} from "redux";
import {CredentialsAndAddressAPI} from "@/api/credentialsAndAddressAPI";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {
    setAddresses,
    setCards
} from "@/store/reducers/credentialsReducer";

export const AddAddress = (name: string, country: string, region: string, city: string,
                           index: string, location: string, isDefault: boolean,
                           router: AppRouterInstance) =>
    () => {
        CredentialsAndAddressAPI.AddAddressAPI(name, country, region, city, index, location, isDefault)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }
export const EditAddress = (addressId: string, name: string, country: string, region: string, city: string,
                           index: string, location: string, isDefault: boolean,
                            router: AppRouterInstance, setMessage: (message: string) => void) =>
    () => {
        CredentialsAndAddressAPI.EditAddressAPI(addressId, name, country, region, city, index, location, isDefault)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                        break
                    }

                    case 400 : {
                        setMessage('Адрес не найден')
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const getAddresses = () =>
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

export const DeleteAddress = (id: string, router: AppRouterInstance, setMessage: (message: string) => void) =>
    () => {
        CredentialsAndAddressAPI.DeleteAddressAPI(id)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                        break
                    }
                    case 400 : {
                        setMessage('Адрес не найден')
                        break
                    }
                    case 409 : {
                        setMessage('Ошибка удаления: адрес используется в активном заказе')
                        break
                    }

                    case 403 : {
                        setMessage('Нельзя удалить чужой адрес')
                        break
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
                         router: AppRouterInstance, setMessage: (message: string) => void) =>
    () => {
        CredentialsAndAddressAPI.EditCardAPI(cardId, type, number, date, cvv, isDefault)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                        break
                    }
                    case 400 : {
                        setMessage('Карта не найдена')
                        break
                    }
                    case 403 : {
                        setMessage('Нельзя изменить чужую карту')
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const getCards = () =>
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

export const DeleteCard = (id: string, router: AppRouterInstance, setMessage: (message: string) => void) =>
    () => {
        CredentialsAndAddressAPI.DeleteCardAPI(id)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                        break
                    }
                    case 400 : {
                        setMessage('Карта не найдена')
                        break
                    }
                    case 403 : {
                        setMessage('Нельзя удалить чужую карту')
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }