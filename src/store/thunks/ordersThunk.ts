import {Dispatch} from "redux";
import {OrdersAPI} from "@/api/ordersAPI";
import {setOneOrder, setOrders} from "@/store/reducers/orderReducer";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const GetOrders = (currentId: string) =>
    (dispatch: Dispatch) => {
        OrdersAPI.GetAllOrdersAPI(currentId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setOrders(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const GetOneOrder = (currentId: string) =>
    (dispatch: Dispatch) => {
        OrdersAPI.GetOrderAPI(currentId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setOneOrder(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const SetOrder = (orderId: string, comment: string, router: AppRouterInstance) =>
    () => {
        OrdersAPI.SendOrderAPI(orderId, comment)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const EditOrder = (orderId: string, comment: string, router: AppRouterInstance) =>
    () => {
        OrdersAPI.EditOrderAPI(orderId, comment)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }


export const ReceiveOrder = (orderId: string, router: AppRouterInstance) =>
    () => {
        OrdersAPI.ReceiveOrderAPI(orderId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }