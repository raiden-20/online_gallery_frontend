import {connect} from "react-redux";
import {PrivateGetData, PrivateSubscribe} from "@/store/thunks/actionsThunk";
import {PrivateSubscribeComponent} from "@/components/profile/private_subscribe/PrivateSubscribeComponent";
import {OneCardInterface} from "@/interfaces/credentials";
import {getCards} from "@/store/thunks/credentialsThunk";

interface containerState {
    private: {
        price: string
    }
    profile: {
        artistName: string
    },
    credentials: {
        cards: OneCardInterface[]
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        price: state.private.price,
        artistName: state.profile.artistName,
        cards: state.credentials.cards
    }
}

const mapDispatchToProps = {
    PrivateGetData,
    PrivateSubscribe,
    getCards
}

export const PrivateSubscribeContainer = connect(mapStateToProps, mapDispatchToProps)(PrivateSubscribeComponent)