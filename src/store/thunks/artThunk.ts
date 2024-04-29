import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {ArtsAPI} from "@/api/artsAPI";
import {Dispatch} from "redux";
import {setArts, setArtsArtist, setArtsCustomer, setOneArt} from "@/store/reducers/artReducer";

export const CreateArt = (name: string, type: string, photos: File[], price: string,
                          createDate: string, description: string, size: string,
                          tags: string[], materials: string[], isPrivate: boolean, frame: boolean, router: AppRouterInstance) =>
    () => {
        ArtsAPI.CreateArtAPI(name, type, photos, price, createDate, description, size, tags, materials, isPrivate, frame)
            .then((response) => {
                switch (response[0]) {
                    case 200 : {
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const GetArt = (artId: string, currentId: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ArtsAPI.GetArtAPI(artId, currentId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        response[1].artId = artId
                        dispatch(setOneArt(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const EditArt = (artId: string, name: string, type: string, changeMainPhoto: boolean, newPhotos: File[],
                        deletePhotoUrls: string[], price: string, createDate: string, description: string, size: string,
                        tags: string[], materials: string[], isPrivate: boolean, frame: boolean, router: AppRouterInstance) =>
    () => {
        ArtsAPI.EditArtAPI(artId, name, type, changeMainPhoto, newPhotos, deletePhotoUrls, price,
            createDate, description, size, tags, materials, isPrivate, frame)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const DeleteArt = (artId: string, router: AppRouterInstance) =>
    () => {
        ArtsAPI.DeleteArtAPI(artId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
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
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }
export const GetArtsArtist = (artistId: string, currentId: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ArtsAPI.GetAllArtistArtsAPI(artistId, currentId)
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