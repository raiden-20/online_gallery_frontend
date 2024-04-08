import {ProfileAPI} from "@/api/profileAPI";
import {Dispatch} from "redux";
import {clearCategoriesReducer, setSmth, setSearch} from "@/store/reducers/categoriesReducer";
import {CategoriesAPI} from "@/api/categoriesAPI";

export const getAllCustomers = () =>
    (dispatch: Dispatch) => {
        CategoriesAPI.GetAllCustomersAPI()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(clearCategoriesReducer())
                        dispatch(setSmth(response[1]))
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
                        dispatch(clearCategoriesReducer())
                        dispatch(setSearch(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const getSmthByName = (input_name: string, type: string) =>
    (dispatch: Dispatch) => {
        CategoriesAPI.GetSmthByNameAPI(input_name, type)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(clearCategoriesReducer())
                        dispatch(setSearch(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }