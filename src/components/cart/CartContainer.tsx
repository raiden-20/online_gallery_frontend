import {connect} from "react-redux";
import {CartComponent} from "@/components/cart/CartComponent";
import {CartInterface} from "@/interfaces/cartInterface";
import {DeleteArtFromCart, GetCart, SetSelectedArts} from "@/store/thunks/cartThunk";

interface containerState {
    cart: {
        totalCount: number
        cart: CartInterface[]
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        totalCount: state.cart.totalCount,
        cart: state.cart.cart
    }
}

const mapDispatchToProps = {
    GetCart,
    DeleteArtFromCart,
    SetSelectedArts
}

export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(CartComponent)