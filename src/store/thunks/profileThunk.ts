import {Dispatch} from "redux";
import {ProfileAPI} from "@/api/profileAPI";
import {clearProfileReducer, setArtistData, setCustomerData} from "@/store/reducers/profileReducer";

export const setCustomerProfileData = (id: string) =>
    (dispatch: Dispatch) => {
        ProfileAPI.CustomerDataAPI(id)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(clearProfileReducer())
                        dispatch(setCustomerData(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const setArtistProfileData = (id: string) =>
    (dispatch: Dispatch) => {
        ProfileAPI.ArtistDataAPI(id)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(clearProfileReducer())
                        dispatch(setArtistData(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const changeCustomerProfileData = (customer_name: string, date_birth: string, gender: string, avatar_url: string, cover_url: string) =>
    () => {
        ProfileAPI.ChangeCustomerDataAPI(customer_name, date_birth, gender, avatar_url, cover_url)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const changeArtistProfileData = (artist_name: string, avatar_url: string, cover_url: string) =>
    () => {
        ProfileAPI.ChangeArtistDataAPI(artist_name, avatar_url, cover_url)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const createArtistProfile = (artist_name: string) =>
    () => {
        ProfileAPI.CreateArtistAPI(artist_name)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const createCustomerProfile = (customer_name: string, date_birth: string, gender: string, avatar_url: string, cover_url: string) =>
    () => {
        ProfileAPI.CreateCustomerAPI(customer_name, date_birth, gender, avatar_url, cover_url)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }