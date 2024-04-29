import {connect} from "react-redux";
import {OneCardInterface} from "@/interfaces/credentials";
import {getCards} from "@/store/thunks/credentialsThunk";
import {CardEditComponent} from "@/components/create_order/edit/cart/CardEditComponent";

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

export const CardEditContainer = connect(mapStateToProps, mapDispatchToProps)(CardEditComponent)