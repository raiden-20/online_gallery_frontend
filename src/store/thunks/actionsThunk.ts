import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {ActionsAPI} from "@/api/actionsAPI";
import {Dispatch} from "redux";
import {setPrice} from "@/store/reducers/privateReducer";

export const PublicAction = (id: string, router: AppRouterInstance) =>
    () => {
        ActionsAPI.PublicAction(id)
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

export const PrivateSubscribe = (artistId: string, cardId: string, router: AppRouterInstance, setSubscribe:(flag: boolean) => void) =>
    () => {
        ActionsAPI.PrivateSubscribe(artistId, cardId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        setSubscribe(false)
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const PrivateUnsubscribe = (artistId: string, router: AppRouterInstance) =>
    () => {
        ActionsAPI.PrivateUnsubscribe(artistId)
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
export const PrivateGetData = (artistId: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ActionsAPI.PrivatePostsPlaceData(artistId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setPrice(response[1].price))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }