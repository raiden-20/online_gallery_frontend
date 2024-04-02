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
        customer_name: "",
        date_birth: "",
        gender: "",
        avatar_url: "",
        cover_url: "",
        artist_id: ""
    },
    artist_data: {
        artist_name: "",
        avatar_url: "",
        cover_url: "",
        customer_id: ""
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
                artist_name: "",
                avatar_url: "",
                cover_url: "",
                customer_id: ""
            }
            state.customer_data = {
                artist_id: "",
                avatar_url: "",
                cover_url: "",
                customer_name: "",
                date_birth: "",
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
