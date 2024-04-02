import {ProfileAPI} from "@/api/profileAPI";
import {Dispatch} from "redux";
import {setArtists, setSearch} from "@/store/reducers/categoriesReducer";

export const getAllCustomers = () =>
    (dispatch: Dispatch) => {
        ProfileAPI.GetAllCustomersAPI()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setArtists(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const getAllArtist = () =>
    (dispatch: Dispatch) => {
        ProfileAPI.GetAllArtistsAPI()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setSearch(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }