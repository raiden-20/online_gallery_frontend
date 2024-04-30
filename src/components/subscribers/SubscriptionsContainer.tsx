import {connect} from "react-redux";

import {
    PrivateSubscribersCustomers,
    PrivateSubscriptionsArtists, PublicSubscribersCustomers,
    PublicSubscriptionsArtists, SearchSubscriptions
} from "@/store/thunks/subscriptionsThunk";
import {SubscriptionsComponent} from "@/components/subscribers/SubscriptionsComponent";
import {
    SubscriptionsArtistsPrivate,
    SubscriptionsCustomers,
    SubscriptionsPublicArtists
} from "@/interfaces/subscriptions";

interface containerState {
    subscriptions: {
        subscriptionsArtistsPrivate: SubscriptionsArtistsPrivate[]
        subscriptionsArtistsPublic: SubscriptionsPublicArtists[]
        subscriptionsCustomersPrivate: SubscriptionsCustomers[]
        subscriptionsCustomersPublic: SubscriptionsCustomers[]
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        subscriptionsArtistsPrivate: state.subscriptions.subscriptionsArtistsPrivate,
        subscriptionsArtistsPublic: state.subscriptions.subscriptionsArtistsPublic,
        subscriptionsCustomersPrivate: state.subscriptions.subscriptionsCustomersPrivate,
        subscriptionsCustomersPublic: state.subscriptions.subscriptionsCustomersPublic
    }
}

const mapDispatchToProps = {
    PrivateSubscriptionsArtists,
    PublicSubscriptionsArtists,
    PrivateSubscribersCustomers,
    PublicSubscribersCustomers,
    SearchSubscriptions
}

export const SubscriptionsContainer = connect(mapStateToProps, mapDispatchToProps)(SubscriptionsComponent)