import {ProfileAPI} from "@/api/profileAPI";
import {Dispatch} from "redux";
import {setArtists, setSearch} from "@/store/reducers/categoriesReducer";
import {CategoriesAPI} from "@/api/categoriesAPI";

export const getAllCustomers = () =>
    (dispatch: Dispatch) => {
        CategoriesAPI.GetAllCustomersAPI()
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

export const getAllArtists = () =>
    (dispatch: Dispatch) => {
        CategoriesAPI.GetAllArtistsAPI()
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
export const getArtistsByName = (input_name: string) =>
    (dispatch: Dispatch) => {
        CategoriesAPI.GetArtistsByNameAPI(input_name)
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

export const getCustomersByName = (input_name: string) =>
    (dispatch: Dispatch) => {
        CategoriesAPI.GetCustomersByNameAPI(input_name)
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