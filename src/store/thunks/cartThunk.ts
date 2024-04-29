import {Dispatch} from "redux";
import {CartAPI} from "@/api/cartAPI";
import {setArts, setSelectedArts} from "@/store/reducers/cartReducer";
import {MAIN_PATHS} from "@/paths/main";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const GetCart = () =>
    (dispatch: Dispatch) => {
        CartAPI.GetCartAPI()
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

export const AddArtToCart = (artId: string) =>
    () => {
        CartAPI.AddArtToCartAPI(artId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const DeleteArtFromCart = (artId: string) =>
    () => {
        CartAPI.DeleteArtFromCartAPI(artId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const BuyCart = (arts: {[key: string]: boolean }, cardId: string, addressId: string, router: AppRouterInstance) =>
    () => {
        CartAPI.BuyCartAPI(arts, cardId, addressId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.push(MAIN_PATHS.SUCCESS_ORDER)
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const SetSelectedArts = (arts: {[key: string]: boolean }) =>
    (dispatch: Dispatch) => {
        dispatch(setSelectedArts(arts))
    }
