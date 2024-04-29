import {connect} from "react-redux";
import {CreateOrderComponent} from "@/components/create_order/CreateOrderComponent";
import {OneAddressInterface, OneCardInterface} from "@/interfaces/credentials";
import {getAddresses, getCards} from "@/store/thunks/credentialsThunk";
import {BuyCart} from "@/store/thunks/cartThunk";

interface state {
    cart: {
        totalCount: number
        selectedArts: {[key: string]: boolean }
    }
    credentials: {
        addresses: OneAddressInterface[]
        cards: OneCardInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        totalCount: state.cart.totalCount,
        selectedArts: state.cart.selectedArts,
        addresses: state.credentials.addresses,
        cards: state.credentials.cards
    }
}

const mapDispatchToProps = {
    BuyCart,
    getAddresses,
    getCards
}

export const CreateOrderContainer = connect(mapStateToProps, mapDispatchToProps)(CreateOrderComponent)