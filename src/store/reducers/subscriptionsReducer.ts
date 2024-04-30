import {
    SubscriptionsArtistsPrivate,
    SubscriptionsCustomers,
    SubscriptionsPublicArtists
} from "@/interfaces/subscriptions";

const SET_SUBSCRIPTION_ARTISTS_PRIVATE = 'SET_SUBSCRIPTION_ARTISTS_PRIVATE'
const SET_SUBSCRIPTION_ARTISTS_PUBLIC = 'SET_SUBSCRIPTION_ARTISTS_PUBLIC'
const SET_SUBSCRIPTION_CUSTOMER_PRIVATE = 'SET_SUBSCRIPTION_CUSTOMER_PRIVATE'
const SET_SUBSCRIPTION_CUSTOMER_PUBLIC   = 'SET_SUBSCRIPTION_CUSTOMER_PUBLIC'

interface PrivateReducerInterface {
    subscriptionsArtistsPrivate: SubscriptionsArtistsPrivate[]
    subscriptionsArtistsPublic: SubscriptionsPublicArtists[]
    subscriptionsCustomersPrivate: SubscriptionsCustomers[]
    subscriptionsCustomersPublic: SubscriptionsCustomers[]
}


const initialState: PrivateReducerInterface = {
    subscriptionsArtistsPrivate: [],
    subscriptionsArtistsPublic: [],
    subscriptionsCustomersPrivate: [],
    subscriptionsCustomersPublic: []
}

export const subscriptionsReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_SUBSCRIPTION_ARTISTS_PRIVATE: {
            for (let i = 0; i < action.subscriptionsArtistsPrivate.length; i++) {
                action.subscriptionsArtistsPrivate[i].payDate = action.subscriptionsArtistsPrivate[i].payDate.substring(0, 10)
            }
            stateCopy.subscriptionsArtistsPrivate = action.subscriptionsArtistsPrivate

            return stateCopy
        }

        case SET_SUBSCRIPTION_ARTISTS_PUBLIC: {
            stateCopy.subscriptionsArtistsPublic = action.subscriptionsArtistsPublic

            return stateCopy
        }

        case SET_SUBSCRIPTION_CUSTOMER_PRIVATE: {
            stateCopy.subscriptionsCustomersPrivate = action.subscriptionsCustomersPrivate

            return stateCopy
        }

        case SET_SUBSCRIPTION_CUSTOMER_PUBLIC: {
            stateCopy.subscriptionsCustomersPublic = action.subscriptionsCustomersPublic

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setSubscriptionsArtistsPrivate = (subscriptionsArtistsPrivate: SubscriptionsArtistsPrivate[]) => {
    return {
        type: SET_SUBSCRIPTION_ARTISTS_PRIVATE, subscriptionsArtistsPrivate
    }
}

export const setSubscriptionsArtistsPublic = (subscriptionsArtistsPublic: SubscriptionsPublicArtists[]) => {
    return {
        type: SET_SUBSCRIPTION_ARTISTS_PUBLIC, subscriptionsArtistsPublic
    }
}

export const setSubscriptionsCustomersPrivate = (subscriptionsCustomersPrivate: SubscriptionsPublicArtists[]) => {
    return {
        type: SET_SUBSCRIPTION_CUSTOMER_PRIVATE, subscriptionsCustomersPrivate
    }
}

export const setSubscriptionsCustomersPublic = (subscriptionsCustomersPublic: SubscriptionsPublicArtists[]) => {
    return {
        type: SET_SUBSCRIPTION_CUSTOMER_PUBLIC, subscriptionsCustomersPublic
    }
}