import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import {profileReducer} from "@/store/reducers/profileReducer";
import {categoriesReducer} from "@/store/reducers/categoriesReducer";
import {privateReducer} from "@/store/reducers/privateReducer";
import {subscriptionsReducer} from "@/store/reducers/subscriptionsReducer";
import {postsReducer} from "@/store/reducers/postsReducer";
import {credentialsReducer} from "@/store/reducers/credentialsReducer";
import {artReducer} from "@/store/reducers/artReducer";
import {cartReducer} from "@/store/reducers/cartReducer";
import {orderReducer} from "@/store/reducers/orderReducer";

let reducers = combineReducers({
    profile: profileReducer,
    categories: categoriesReducer,
    private: privateReducer,
    subscriptions: subscriptionsReducer,
    posts: postsReducer,
    credentials: credentialsReducer,
    art: artReducer,
    cart: cartReducer,
    order: orderReducer
})

export const reduxStore = createStore(reducers, applyMiddleware(thunk))