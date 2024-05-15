import {connect} from "react-redux";
import {NotificationsInterface} from "@/interfaces/notificationsInterface";
import {NotificationsComponent} from "@/components/notifications/NotificationsComponent";
import {setAllArtistNotifications, setAllCustomerNotifications} from "@/store/thunks/notificationsThunk";

interface state {
    notifications: {
        notifications: NotificationsInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        notifications: state.notifications.notifications
    }
}

const mapDispatchToProps = {
    setAllArtistNotifications,
    setAllCustomerNotifications
}

export const NotificationsContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationsComponent)