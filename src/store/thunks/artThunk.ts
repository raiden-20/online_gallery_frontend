import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {ArtsAPI} from "@/api/artsAPI";
import {Dispatch} from "redux";
import {clearOneArt, setArts, setArtsArtist, setArtsCustomer, setOneArt} from "@/store/reducers/artReducer";
import {setSearch} from "@/store/reducers/categoriesReducer";
import {MAIN_PATHS} from "@/paths/main";
import Cookies from "js-cookie";
import {ART_TYPES} from "@/paths/elements";

export const CreateArt = (name: string, type: string, photos: File[], price: string,
                          createDate: string, description: string, size: string,
                          tags: string[], materials: string[], isPrivate: boolean, frame: boolean, router: AppRouterInstance,
                          setMessage: (message: string) => void) =>
    () => {
        ArtsAPI.CreateArtAPI(name, type, photos, price, createDate, description, size, tags, materials, isPrivate, frame)
            .then((response) => {
                switch (response[0]) {
                    case 200 : {
                        router.push(MAIN_PATHS.ONE_ART + `/${response[1].artId}`)
                        router.push(MAIN_PATHS.PROFILE_ARTIST + `/${Cookies.get('artistId')}`)
                        break
                    }
                    case 409 : {
                        setMessage('У вас нет доступа публиковать товар')
                        break
                    }
                }
            }).catch(error => {
            setMessage('У вас нет доступа публиковать товар')
            console.error(error)
        })
    }

export const GetArt = (artId: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ArtsAPI.GetArtAPI(artId, Cookies.get('customerId') as string)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        response[1].artId = artId
                        dispatch(clearOneArt())
                        dispatch(setOneArt(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const EditArt = (artId: string, name: string, type: string, changeMainPhoto: boolean, newPhotos: File[],
                        deletePhotoUrls: string[], price: string, createDate: string, description: string, size: string,
                        tags: string[], materials: string[], isPrivate: boolean, frame: boolean, router: AppRouterInstance,
                        setMessage: (message: string) => void) =>
    () => {
        let typeEnum = ''
        switch (type) {
            case 'Картина' : {
                typeEnum = ART_TYPES.PAINTING
                break
            }
            case 'Фото' : {
                typeEnum = ART_TYPES.PHOTO
                break
            }
            case 'Скульптура' : {
                typeEnum = ART_TYPES.SCULPTURE
                break
            }
        }
        ArtsAPI.EditArtAPI(artId, name, typeEnum, changeMainPhoto, newPhotos, deletePhotoUrls, price,
            createDate, description, size, tags, materials, isPrivate, frame)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.push(MAIN_PATHS.ONE_ART + `/${artId}`)
                        break
                    }
                    case 409 : {
                        setMessage('У вас нет доступа публиковать товар')
                        break
                    }
                }
            }).catch(error => {
            setMessage('У вас нет доступа публиковать товар')
            console.error(error)
        })
    }

export const DeleteArt = (artId: string, router: AppRouterInstance) =>
    () => {
        ArtsAPI.DeleteArtAPI(artId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.push(MAIN_PATHS.PAINTINGS)
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const GetArtsCategories = (type: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ArtsAPI.GetAllArtAPI(type)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setArts(response[1]))
                        dispatch(setSearch(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }
export const GetArtsArtist = (artistId: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ArtsAPI.GetAllArtistArtsAPI(artistId, Cookies.get('customerId') as string)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setArtsArtist(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const GetArtsCustomer = (customerId: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ArtsAPI.GetAllCustomerArtsAPI(customerId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setArtsCustomer(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }