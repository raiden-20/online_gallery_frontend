import {connect} from "react-redux";
import {OneCardInterface} from "@/interfaces/credentials";
import {getCards} from "@/store/thunks/credentialsThunk";
import {PaySettingsComponent} from "@/components/settings/categories/pay/PaySettingsComponent";

interface containerState {
    credentials: {
        cards: OneCardInterface[]
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        cards: state.credentials.cards
    }
}

const mapDispatchToProps = {
    getCards
}

export const PaySettingsContainer = connect(mapStateToProps, mapDispatchToProps)(PaySettingsComponent)