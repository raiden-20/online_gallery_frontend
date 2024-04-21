import {Customer} from "@/interfaces/customerInterface";
import {Artist} from "@/interfaces/artistInterface";

const SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA'
const SET_ARTIST_DATA = 'SET_ARTIST_DATA'
const SET_MY_CUSTOMER_DATA = 'SET_MY_CUSTOMER_DATA'
const SET_MY_ARTIST_DATA = 'SET_MY_ARTIST_DATA'

const CLEAR_PROFILE_DATA = 'CLEAR_PROFILE_DATA'


interface ProfileReducerInterface {
    customer_data: Customer
    artist_data: Artist
    my_customer_data: Customer
    my_artist_data: Artist
}


const initialState: ProfileReducerInterface = {
    customer_data: {
        customerName: "",
        birthDate: "",
        gender: "",
        avatarUrl: "",
        coverUrl: "",
        description: "",
        artistId: ""
    },
    artist_data: {
        artistName: "",
        avatarUrl: "",
        coverUrl: "",
        customerId: "",
        description: ""
    },

    my_customer_data: {
        customerName: "",
        birthDate: "",
        gender: "",
        avatarUrl: "",
        coverUrl: "",
        description: "",
        artistId: ""
    },
    my_artist_data: {
        artistName: "",
        avatarUrl: "",
        coverUrl: "",
        customerId: "",
        description: ""
    }
}

export const profileReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_CUSTOMER_DATA: {
            const time = action.customer_data.birthDate.substring(0, 10);

            stateCopy.customer_data = {
                customerName: action.customer_data.customerName,
                birthDate: time,
                gender: action.customer_data.gender,
                avatarUrl: action.customer_data.avatarUrl,
                coverUrl: action.customer_data.coverUrl,
                description: action.customer_data.description === ' ' || action.customer_data.description === null ? ''
                                                                    : action.customer_data.description,
                artistId: action.customer_data.artistId
            }

            return stateCopy
        }

        case SET_ARTIST_DATA: {
            stateCopy.artist_data = {
                artistName: action.artist_data.artistName,
                avatarUrl: action.artist_data.avatarUrl,
                coverUrl: action.artist_data.coverUrl,
                customerId: action.artist_data.customerId,
                description: action.artist_data.description === ' ' ? '' : action.artist_data.description
            }

            return stateCopy
        }

        case SET_MY_CUSTOMER_DATA: {
            const time = action.customer_data.birthDate.substring(0, 10);

            stateCopy.my_customer_data = {
                customerName: action.customer_data.customerName,
                birthDate: time,
                gender: action.customer_data.gender,
                avatarUrl: action.customer_data.avatarUrl,
                coverUrl: action.customer_data.coverUrl,
                description: action.customer_data.description === ' ' ? '' : action.customer_data.description,
                artistId: action.customer_data.artistId
            }

            return stateCopy
        }

        case SET_MY_ARTIST_DATA: {
            stateCopy.my_artist_data = {
                artistName: action.artist_data.artistName,
                avatarUrl: action.artist_data.avatarUrl,
                coverUrl: action.artist_data.coverUrl,
                customerId: action.artist_data.customerId,
                description: action.artist_data.description === ' ' ? '' : action.artist_data.description
            }

            return stateCopy
        }

        case CLEAR_PROFILE_DATA: {
            stateCopy.artist_data = {
                artistName: "",
                avatarUrl: "",
                coverUrl: "",
                customerId: "",
                description: ""
            }
            state.customer_data = {
                artistId: "",
                avatarUrl: "",
                coverUrl: "",
                customerName: "",
                birthDate: "",
                description: "",
                gender: ""
            }

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setCustomerData = (customer_data: Customer) => {
    return {
        type: SET_CUSTOMER_DATA, customer_data
    }
}

export const setArtistData = (artist_data: Artist) => {
    return {
        type: SET_ARTIST_DATA, artist_data
    }
}

export const setMyCustomerData = (customer_data: Customer) => {
    return {
        type: SET_MY_CUSTOMER_DATA, customer_data
    }
}

export const setMyArtistData = (artist_data: Artist) => {
    return {
        type: SET_MY_ARTIST_DATA, artist_data
    }
}

export const clearProfileReducer = () => {
    return {
        type: CLEAR_PROFILE_DATA
    }
}
