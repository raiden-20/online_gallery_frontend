import {connect} from "react-redux";
import {PopUpNotificationInterface} from "@/interfaces/notificationsInterface";
import {clearOnePopUpNotification, setOnePopUpNotification} from "@/store/thunks/notificationsThunk";
import {
    OnePopUpNotificationComponent
} from "@/components/notifications/one_popup_notification/OnePopUpNotificationComponent";

interface state {
    notifications: {
        popup_notification: PopUpNotificationInterface
    }
}

const mapStateToProps = (state: state) => {
    return {
        popup_notification: state.notifications.popup_notification
    }
}

const mapDispatchToProps = {
    setOnePopUpNotification,
    clearOnePopUpNotification
}

export const OnePopUpNotificationContainer = connect(mapStateToProps, mapDispatchToProps)(OnePopUpNotificationComponent)