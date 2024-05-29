import {Customer} from "@/interfaces/customerInterface";
import {Artist} from "@/interfaces/artistInterface";
import {isEqualObject} from "../../../utils/tests";

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
        customerName: "Пользователь",
        birthDate: new Date('1970-01-01'),
        gender: "",
        avatarUrl: "",
        coverUrl: "",
        description: " ",
        artistId: ""
    },
    artist_data: {
        artistName: "Пользователь",
        avatarUrl: "",
        coverUrl: "",
        customerId: "",
        description: " ",
        countSoldArts: "",
        salesAmount: "",
        countSubscribers: "",
        isPublicSubscribe: false,
        isPrivateSubscribe: false,
    },

    my_customer_data: {
        customerName: "",
        birthDate:  new Date('1970-01-01'),
        gender: "",
        avatarUrl: "",
        coverUrl: "",
        description: " ",
        artistId: ""
    },
    my_artist_data: {
        artistName: "",
        avatarUrl: "",
        coverUrl: "",
        customerId: "",
        description: " ",
        countSoldArts: "",
        salesAmount: "",
        countSubscribers: "",
        isPublicSubscribe: false,
        isPrivateSubscribe: false,
    }
}

export const profileReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_CUSTOMER_DATA: {


            if (!isEqualObject(stateCopy.customer_data, action.customer_data)) {
                stateCopy.customer_data = {
                    customerName: action.customer_data.customerName,
                    birthDate: new Date(action.customer_data.birthDate),
                    gender: action.customer_data.gender,
                    avatarUrl: action.customer_data.avatarUrl,
                    coverUrl: action.customer_data.coverUrl,
                    description: action.customer_data.description,
                    artistId: action.customer_data.artistId
                }
            }


            return stateCopy
        }

        case SET_ARTIST_DATA: {
            if (!isEqualObject(stateCopy.artist_data, action.artist_data)) {
                stateCopy.artist_data = {
                    artistName: action.artist_data.artistName,
                    avatarUrl: action.artist_data.avatarUrl,
                    coverUrl: action.artist_data.coverUrl,
                    customerId: action.artist_data.customerId,
                    description: action.artist_data.description === ' ' ? '' : action.artist_data.description,

                    countSoldArts: action.artist_data.countSoldArts,
                    salesAmount: action.artist_data.salesAmount,
                    countSubscribers: action.artist_data.countSubscribers,
                    isPublicSubscribe: action.artist_data.isPublicSubscribe,
                    isPrivateSubscribe: action.artist_data.isPrivateSubscribe,
                }
            }

            return stateCopy
        }

        case SET_MY_CUSTOMER_DATA: {


            const time = new Date(action.customer_data.birthDate)

            if (!isEqualObject(stateCopy.my_customer_data, action.customer_data)) {
                stateCopy.my_customer_data = {
                    customerName: action.customer_data.customerName,
                    birthDate: time,
                    gender: action.customer_data.gender,
                    avatarUrl: action.customer_data.avatarUrl,
                    coverUrl: action.customer_data.coverUrl,
                    description: action.customer_data.description === ' ' ? '' : action.customer_data.description,
                    artistId: action.customer_data.artistId
                }
            }

            return stateCopy
        }

        case SET_MY_ARTIST_DATA: {
            if (!isEqualObject(stateCopy.my_artist_data, action.artist_data)) {
                stateCopy.my_artist_data = {
                    artistName: action.artist_data.artistName,
                    avatarUrl: action.artist_data.avatarUrl,
                    coverUrl: action.artist_data.coverUrl,
                    customerId: action.artist_data.customerId,
                    description: action.artist_data.description === ' ' ? '' : action.artist_data.description,

                    countSoldArts: action.artist_data.countSoldArts,
                    salesAmount: action.artist_data.salesAmount,
                    countSubscribers: action.artist_data.countSubscribers,
                    isPublicSubscribe: action.artist_data.isPublicSubscribe,
                    isPrivateSubscribe: action.artist_data.isPrivateSubscribe,
                }
            }

            return stateCopy
        }

        case CLEAR_PROFILE_DATA: {
            stateCopy.artist_data = {
                artistName: "",
                avatarUrl: "",
                coverUrl: "",
                customerId: "",
                description: "",
                countSoldArts: "",
                salesAmount: "",
                countSubscribers: "",
                isPublicSubscribe: false,
                isPrivateSubscribe: false,
            }
            state.customer_data = {
                artistId: "",
                avatarUrl: "",
                coverUrl: "",
                customerName: "",
                birthDate:  new Date('1970-01-01'),
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
