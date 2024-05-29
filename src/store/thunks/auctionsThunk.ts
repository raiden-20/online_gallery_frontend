import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Dispatch} from "redux";
import {setSearch} from "@/store/reducers/categoriesReducer";
import {MAIN_PATHS} from "@/paths/main";
import {ART_TYPES} from "@/paths/elements";
import {AuctionsAPI} from "@/api/auctionsAPI";
import {
    clearOneAuction,
    setAuctions,
    setAuctionsArtist,
    setCustomerRate, setMaxRate,
    setOneAuction
} from "@/store/reducers/auctionReducer";
import {CustomerRate} from "@/interfaces/auctionInterface";

export const CreateAuction = (name: string, type: string, photos: File[], startPrice: string,
                              createDate: string, description: string, size: string,
                              tags: string[], materials: string[], startDate: string,
                              endDate: string, frame: boolean, router: AppRouterInstance,
                              setMessage: (message: string) => void) =>
    () => {
        AuctionsAPI.CreateAuctionAPI(name, type, photos, startPrice, createDate, description, size,
            tags, materials, startDate, endDate, frame)
            .then((response) => {
                switch (response.status) {
                    case 200 : {
                        router.push(MAIN_PATHS.AUCTION + `/${response.data}`)
                        break
                    }
                }
            })
    }

export const GetAuction = (auctionId: string, currentId: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        AuctionsAPI.GetOneAuctionAPI(auctionId, currentId)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        dispatch(clearOneAuction())
                        dispatch(setOneAuction(response.data))
                    }
                }
            })
    }

export const SetNewCustomerRate = (customerRate: CustomerRate, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        dispatch(setCustomerRate(customerRate))
    }

export const EditAuctionThunk = (auctionId: string, name: string, type: string, changeMainPhoto: boolean, newPhotos: File[],
                                 deletePhotoUrls: string[], startPrice: string, createDate: string, description: string, size: string,
                                 tags: string[], materials: string[], frame: boolean, startDate: string, endDate: string, router: AppRouterInstance,
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
        AuctionsAPI.EditAuctionAPI(auctionId, name, typeEnum, changeMainPhoto, newPhotos, deletePhotoUrls,
            startPrice, createDate, description, size, tags, materials, frame,
            startDate, endDate)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        router.push(MAIN_PATHS.AUCTION + `/${auctionId}`)
                        break
                    }
                }
            })
    }

export const DeleteAuction = (id: string, router: AppRouterInstance) =>
    () => {
        AuctionsAPI.DeleteAuctionAPI(id)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        router.push(MAIN_PATHS.AUCTIONS)
                    }
                }
            })
    }

export const GetAuctionsCategories = (router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        AuctionsAPI.GetAllAuctionsAPI()
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        dispatch(clearOneAuction())
                        dispatch(setAuctions(response.data))
                        dispatch(setSearch(response.data))
                    }
                }
            })
    }
export const GetArtistAuctions = (artistId: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        AuctionsAPI.GetAllArtistAuctionAPI(artistId)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        dispatch(setAuctionsArtist(response.data))
                    }
                }
            })
    }

export const SetMaxRate = (auctionId: string, isAnonymous: boolean, maxRate: number,
                           setSetRate: (setMaxRate: boolean) => void) =>
    (dispatch: Dispatch) => {
        AuctionsAPI.SetMaxRateAuctionAPI(auctionId, isAnonymous, maxRate)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        dispatch(setMaxRate(maxRate.toString()))
                        setSetRate(false)
                    }
                }
            })
    }

export const SetNewRate = (auctionId: string, isAnonymous: boolean, setSetRate: (setMaxRate: boolean) => void,
    setMessage: (message: string) => void) =>
    () => {
        AuctionsAPI.SetNewRateAuctionAPI(auctionId, isAnonymous)
            .then(response => {
                switch (response.status) {
                    case 200 : {
                        setSetRate(false)
                    }
                }
            })
    }