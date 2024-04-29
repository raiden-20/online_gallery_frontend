import {CartInterface} from "@/interfaces/cartInterface";

const SET_CART = 'SET_CART'
const SET_SELECTED = 'SET_SELECTED'

interface ArtReducerInterface {
    cart: CartInterface[]
    totalCount: number

    selectedArts: {[key: string]: boolean }
}


const initialState: ArtReducerInterface = {
    cart: [],
    totalCount: 0,
    selectedArts: {}
}

export const cartReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_CART: {
            stateCopy.cart = JSON.parse(action.cart)

            stateCopy.cart.forEach((one: CartInterface) => {
                stateCopy.totalCount += one.price
            })

            return stateCopy
        }

        case SET_SELECTED: {
            stateCopy.selectedArts = action.selectedArts
            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setArts = (arts: CartInterface[]) => {
    return {
        type: SET_CART, arts
    }
}
export const setSelectedArts = (selectedArts: {[key: string]: boolean }) => {
    return {
        type: SET_SELECTED, selectedArts
    }
}