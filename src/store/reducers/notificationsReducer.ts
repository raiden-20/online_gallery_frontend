import {NotificationsInterface, PopUpNotificationInterface} from "@/interfaces/notificationsInterface";


const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS'
const SET_POP_UP_NOTIFICATION = 'SET_POP_UP_NOTIFICATION'
const CLEAR_POP_UP_NOTIFICATION = 'CLEAR_POP_UP_NOTIFICATION'

interface ordersInterface {
    notifications: NotificationsInterface[]
    popup_notification: PopUpNotificationInterface
}


const initialState: ordersInterface = {
    notifications: [],
    popup_notification: {
        avatarUrl: '',
        message: ''
    }
}

export const notificationsReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_NOTIFICATIONS: {
            stateCopy.notifications = action.notifications

            return stateCopy
        }

        case SET_POP_UP_NOTIFICATION: {
            stateCopy.popup_notification = action.popup_notification

            return stateCopy
        }

        case CLEAR_POP_UP_NOTIFICATION: {
            stateCopy.popup_notification = {
                avatarUrl: '',
                message: ''
            }

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setNotifications = (notifications: NotificationsInterface[]) => {
    return {
        type: SET_NOTIFICATIONS, notifications
    }
}

export const setPopUpNotification = (popup_notification: PopUpNotificationInterface) => {
    return {
        type: SET_POP_UP_NOTIFICATION, popup_notification
    }
}
export const clearPopUpNotification = () => {
    return {
        type: CLEAR_POP_UP_NOTIFICATION,
    }
}