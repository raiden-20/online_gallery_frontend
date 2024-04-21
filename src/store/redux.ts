import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import {profileReducer} from "@/store/reducers/profileReducer";
import {categoriesReducer} from "@/store/reducers/categoriesReducer";

let reducers = combineReducers({
    profile: profileReducer,
    categories: categoriesReducer
})

export const reduxStore = createStore(reducers, applyMiddleware(thunk))