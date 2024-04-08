import {Customer} from "@/interfaces/customerInterface";
import {Artist} from "@/interfaces/artistInterface";

const SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA'
const SET_ARTIST_DATA = 'SET_ARTIST_DATA'

const CLEAR_PROFILE_DATA = 'CLEAR_PROFILE_DATA'


interface ProfileReducerInterface {
    customer_data: Customer
    artist_data: Artist
}


const initialState: ProfileReducerInterface = {
    customer_data: {
        customerName: "я",
        birthDate: "",
        gender: "",
        avatarUrl: "",
        coverUrl: "",
        artistId: ""
    },
    artist_data: {
        artistName: "я",
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
            stateCopy.customer_data = action.customer_data

            return stateCopy
        }

        case SET_ARTIST_DATA: {
            stateCopy.artist_data = action.artist_data

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

export const clearProfileReducer = () => {
    return {
        type: CLEAR_PROFILE_DATA
    }
}
