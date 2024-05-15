import {Dispatch} from "redux";
import {NotificationsAPI} from "@/api/notificationsAPI";
import {clearPopUpNotification, setNotifications, setPopUpNotification} from "@/store/reducers/notificationsReducer";
import {PopUpNotificationInterface} from "@/interfaces/notificationsInterface";

export const setAllArtistNotifications = () =>
    (dispatch: Dispatch) => {
        NotificationsAPI.GetNotificationsArtistAPI()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setNotifications(response[1]))
                    }
                }
            })
    }

export const setAllCustomerNotifications = () =>
    (dispatch: Dispatch) => {
        NotificationsAPI.GetNotificationsCustomerAPI()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setNotifications(response[1]))
                    }
                }
            })
    }

export const setOnePopUpNotification = (avatarUrl: string, message: string) =>
    (dispatch: Dispatch) => {
        const popup_notification: PopUpNotificationInterface = {
            avatarUrl: avatarUrl,
            message: message
        }

        dispatch(setPopUpNotification(popup_notification))
    }

export const clearOnePopUpNotification = () =>
    (dispatch: Dispatch) => {
        dispatch(clearPopUpNotification())
    }