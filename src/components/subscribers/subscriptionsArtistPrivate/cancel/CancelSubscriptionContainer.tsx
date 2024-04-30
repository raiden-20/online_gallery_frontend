import {connect} from "react-redux";
import {PrivateUnsubscribe} from "@/store/thunks/actionsThunk";
import {
    CancelSubscriptionComponent
} from "@/components/subscribers/subscriptionsArtistPrivate/cancel/CancelSubscriptionComponent";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    PrivateUnsubscribe
}

export const CancelSubscriptionsContainer = connect(mapStateToProps, mapDispatchToProps)(CancelSubscriptionComponent)