import {OrderInterface} from "@/interfaces/cartInterface";

const SET_ORDERS = 'SET_ORDERS'
const SET_ONE_ORDER = 'SET_ONE_ORDER'

interface ordersInterface {
    orders: OrderInterface[]
    oneOrder: OrderInterface
}


const initialState: ordersInterface = {
    orders: [],
    oneOrder: {
        orderId: "",
        name: "",
        country: "",
        region: "",
        city: "",
        index: 0,
        location: "",
        cardType: "",
        number: '',
        artistName: "",
        customerName: "",
        artUrl: "",
        artName: "",
        price: 0,
        status: "",
        artistComment: ""
    }
}

export const orderReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_ORDERS: {
            stateCopy.orders = JSON.parse(action.addresses)

            return stateCopy
        }

        case SET_ONE_ORDER: {
            stateCopy.oneOrder = JSON.parse(action.oneOrder)

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setOrders = (orders: OrderInterface[]) => {
    return {
        type: SET_ORDERS, orders
    }
}

export const setOneOrder = (oneOrder: OrderInterface) => {
    return {
        type: SET_ORDERS, oneOrder
    }
}