import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {ActionsAPI} from "@/api/actionsAPI";
import {Dispatch} from "redux";
import {
    setSubscriptionsArtistsPrivate,
    setSubscriptionsArtistsPublic,
    setSubscriptionsCustomersPrivate, setSubscriptionsCustomersPublic
} from "@/store/reducers/subscriptionsReducer";
import {ROLES} from "@/paths/main";

export const PrivateSubscriptionsArtists  = (router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ActionsAPI.PrivateSubscriptions()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setSubscriptionsArtistsPrivate(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const PublicSubscriptionsArtists  = (router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ActionsAPI.PublicSubscriptions()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setSubscriptionsArtistsPublic(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const PrivateSubscribersCustomers  = (router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ActionsAPI.PrivateSubscribers()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setSubscriptionsCustomersPrivate(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const PublicSubscribersCustomers  = (router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ActionsAPI.PublicSubscribers()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setSubscriptionsCustomersPublic(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const SearchSubscriptions  = (role: string, subscription: string, input: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ActionsAPI.GetInputSubscriptions(subscription, role, input)
            .then(response => {
                switch (response[0]) {
                    case 200 : {

                        switch (subscription) {
                            case 'private' : {
                                if (role === ROLES.CUSTOMER) {
                                    dispatch(setSubscriptionsArtistsPrivate(response[1]))
                                } else {
                                    dispatch(setSubscriptionsCustomersPrivate(response[1]))
                                }
                                break
                            }
                            case 'public' : {
                                if (role === ROLES.CUSTOMER) {
                                    dispatch(setSubscriptionsArtistsPublic(response[1]))
                                } else {
                                    dispatch(setSubscriptionsCustomersPublic(response[1]))
                                }
                                break
                            }
                        }

                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }