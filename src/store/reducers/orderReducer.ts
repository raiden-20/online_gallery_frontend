import {OrderInterface} from "@/interfaces/cartInterface";
import {ORDER_STATUS} from "@/paths/elements";

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
            for (let i = 0; i < action.orders.length; i++) {
                switch (action.orders[i].status) {
                    case ORDER_STATUS.CREATED : {
                        action.orders[i].status = 'Оформлен'
                        break
                    }
                    case ORDER_STATUS.PROGRESS : {
                        action.orders[i].status = 'В пути'
                        break
                    }
                    case ORDER_STATUS.FINISHED : {
                        action.orders[i].status = 'Завершен'
                        break
                    }
                }

            }
            stateCopy.orders = action.orders

            return stateCopy
        }

        case SET_ONE_ORDER: {
            switch (action.oneOrder.status) {
                case ORDER_STATUS.CREATED : {
                    action.oneOrder.status = 'Оформлен'
                    break
                }
                case ORDER_STATUS.PROGRESS : {
                    action.oneOrder.status = 'В пути'
                    break
                }
                case ORDER_STATUS.FINISHED : {
                    action.oneOrder.status = 'Завершен'
                    break
                }
            }
            stateCopy.oneOrder = action.oneOrder

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
        type: SET_ONE_ORDER, oneOrder
    }
}