import {Dispatch} from "redux";
import {ProfileAPI} from "@/api/profileAPI";
import {
    clearProfileReducer,
    setArtistData,
    setCustomerData,
    setMyArtistData,
    setMyCustomerData
} from "@/store/reducers/profileReducer";
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {MAIN_PATHS, PATHS_CATEGORY} from "@/paths/main";


export const getCustomerProfileData = (id: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ProfileAPI.CustomerDataAPI(id)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        if (id === Cookies.get('customerId') && response[1].artistId !== null) {
                            Cookies.set('artistId', response[1].artistId)
                            Cookies.set('customerName', response[1].customerName)
                            Cookies.set('customerUrl', response[1].avatarUrl)
                        }
                        if (id === Cookies.get('customerId')) {
                            dispatch(setMyCustomerData(response[1]))
                        }
                        dispatch(clearProfileReducer())
                        dispatch(setCustomerData(response[1]))

                        break
                    }
                    case 404 : {
                        router.push(PATHS_CATEGORY.ERROR_404)
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const getArtistProfileData = (id: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ProfileAPI.ArtistDataAPI(id, Cookies.get('customerId') as string)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        if (id === Cookies.get('artistId')) {
                            dispatch(setMyArtistData(response[1]))
                            Cookies.set('artistName', response[1].artistName)
                        }
                        dispatch(clearProfileReducer())
                        dispatch(setArtistData(response[1]))
                        break
                    }
                    case 404 : {
                        router.push(PATHS_CATEGORY.ERROR_404)
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const changeCustomerProfileData = (customerName: string, birthDate: string, gender: string, description: string,
                                          avatarUrl: string, coverUrl: string, avatar: File | string, cover: File | string,
                                          router: AppRouterInstance, setMessage: (message: string) => void) =>
    () => {
        ProfileAPI.ChangeCustomerDataAPI(customerName, birthDate, gender, description, avatarUrl, coverUrl, avatar, cover)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                        break
                    }
                    case 404 : {
                        router.push(PATHS_CATEGORY.ERROR_404)
                        break
                    }
                    case 400 : {
                        setMessage('Файл слишком большой')
                        break
                    }
                    case 413 : {
                        setMessage('Файл слишком большой')
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const changeArtistProfileData = (artistName: string, avatarUrl: string, coverUrl: string,
                                        avatar: File | string, cover: File | string, description: string,
                                        router: AppRouterInstance, setMessage: (message: string) => void) =>
    () => {
        ProfileAPI.ChangeArtistDataAPI(artistName, avatarUrl, coverUrl, avatar, cover, description)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                        break
                    }
                    case 404 : {
                        router.push(PATHS_CATEGORY.ERROR_404)
                        break
                    }
                    case 400 : {
                        setMessage('Файл слишком большой')
                        break
                    }
                    case 413 : {
                        setMessage('Файл слишком большой')
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const createArtistProfile = (artistName: string, setMessage: (message: string) => void,
                                    router: AppRouterInstance) =>
    () => {
        ProfileAPI.CreateArtistAPI(artistName)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        Cookies.set('artistId', response[1])
                        router.push(MAIN_PATHS.MAIN)
                        break
                    }
                    case 409 : {
                        setMessage('У вас уже есть аккаунт художника')

                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const createCustomerProfile = (customerName: string, birthDate: string, gender: string,
                                      setMessage: (message: string) => void, router: AppRouterInstance) =>
    () => {
        ProfileAPI.CreateCustomerAPI(customerName, birthDate, gender)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        Cookies.set('registrationFlag', 'true')
                        router.push(MAIN_PATHS.CREATE_ARTIST)

                        break
                    }
                    case 409 : {
                        setMessage('У вас уже есть аккаунт покупателя')

                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }


export const isCustomerCreate = (router: AppRouterInstance) =>
    () => {
        if (Cookies.get('customerId') !== undefined) {
            ProfileAPI.IsCustomerAPI()
                .then(response => {
                    switch (response[0]) {
                        case 200 : {
                            if (response[1]) {
                                router.push(MAIN_PATHS.CREATE_CUSTOMER)
                                Cookies.set('registrationFlag', 'process')
                            } else {
                                Cookies.set('registrationFlag', 'true')
                                Cookies.set('currentId', Cookies.get('customerId') as string)
                            }
                            break
                        }
                    }
                }).catch(error => {
                console.error(error)
            })
        }
    }