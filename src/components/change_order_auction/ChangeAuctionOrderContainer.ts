import {connect} from "react-redux";
import {OneAddressInterface, OneCardInterface} from "@/interfaces/credentials";
import {getAddresses, getCards} from "@/store/thunks/credentialsThunk";
import {ChangeAuctionOrderAwait} from "@/store/thunks/ordersThunk";
import {ChangeAuctionOrderComponent} from "@/components/change_order_auction/CreateOrderComponent";

interface state {
    cart: {
        totalCount: number
    }
    credentials: {
        addresses: OneAddressInterface[]
        cards: OneCardInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        totalCount: state.cart.totalCount,
        addresses: state.credentials.addresses,
        cards: state.credentials.cards
    }
}

const mapDispatchToProps = {
    ChangeAuctionOrderAwait,
    getAddresses,
    getCards
}

export const ChangeAuctionOrderContainer = connect(mapStateToProps, mapDispatchToProps)(ChangeAuctionOrderComponent)