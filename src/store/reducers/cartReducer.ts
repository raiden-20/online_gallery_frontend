import {CartInterface} from "@/interfaces/cartInterface";

const SET_CART = 'SET_CART'
const SET_SELECTED = 'SET_SELECTED'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

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
            stateCopy.totalCount = 0
            stateCopy.cart = action.cart

            action.cart.forEach((one: CartInterface) => {
                stateCopy.totalCount += one.price
            })

            return stateCopy
        }

        case SET_SELECTED: {
            stateCopy.selectedArts = action.selectedArts
            return stateCopy
        }

        case SET_TOTAL_COUNT: {
            stateCopy.totalCount = action.count
            return stateCopy
        }

        case DELETE_FROM_CART: {
            const copy_cart: CartInterface[] = [...stateCopy.cart]
            for (let i = 0; i < copy_cart.length; i++) {
                if (copy_cart[i].artId  === action.artId) {
                    copy_cart.splice(i, 1)
                    break
                }
            }

            stateCopy.cart = copy_cart

            Object.keys(stateCopy.selectedArts).map((key: string) => {
                if (key === action.artId) {
                    delete stateCopy.selectedArts[key]
                }
            })
            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setCart = (cart: CartInterface[]) => {
    return {
        type: SET_CART, cart
    }
}
export const setSelectedArts = (selectedArts: {[key: string]: boolean }) => {
    return {
        type: SET_SELECTED, selectedArts
    }
}
export const deleteFromCart = (artId: string) => {
    return {
        type: DELETE_FROM_CART, artId
    }
}

export const setTotalCount = (count: string) => {
    return {
        type: SET_TOTAL_COUNT, count
    }
}