import {SubscriptionsArtistsPrivate, SubscriptionsUsers} from "@/interfaces/subscriptions";

const SET_SUBSCRIPTION_ARTISTS_PRIVATE = 'SET_SUBSCRIPTION_ARTISTS_PRIVATE'
const SET_SUBSCRIPTION_ARTISTS_PUBLIC = 'SET_SUBSCRIPTION_ARTISTS_PUBLIC'
const SET_SUBSCRIPTION_CUSTOMER_PRIVATE = 'SET_SUBSCRIPTION_CUSTOMER_PRIVATE'
const SET_SUBSCRIPTION_CUSTOMER_PUBLIC   = 'SET_SUBSCRIPTION_CUSTOMER_PUBLIC'

interface PrivateReducerInterface {
    subscriptionsArtistsPrivate: SubscriptionsArtistsPrivate[]
    subscriptionsArtistsPublic: SubscriptionsUsers[]
    subscriptionsCustomersPrivate: SubscriptionsUsers[]
    subscriptionsCustomersPublic: SubscriptionsUsers[]
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
            action.subscriptionsArtistsPrivate.payDate = action.customer_data.birthDate.substring(0, 10)

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

export const setSubscriptionsArtistsPublic = (subscriptionsArtistsPublic: SubscriptionsUsers[]) => {
    return {
        type: SET_SUBSCRIPTION_ARTISTS_PUBLIC, subscriptionsArtistsPublic
    }
}

export const setSubscriptionsCustomersPrivate = (subscriptionsCustomersPrivate: SubscriptionsUsers[]) => {
    return {
        type: SET_SUBSCRIPTION_CUSTOMER_PRIVATE, subscriptionsCustomersPrivate
    }
}

export const setSubscriptionsCustomersPublic = (subscriptionsCustomersPublic: SubscriptionsUsers[]) => {
    return {
        type: SET_SUBSCRIPTION_CUSTOMER_PUBLIC, subscriptionsCustomersPublic
    }
}