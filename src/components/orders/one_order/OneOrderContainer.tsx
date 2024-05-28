import {connect} from "react-redux";
import {OrderInterface} from "@/interfaces/cartInterface";
import {EditOrder, GetOneOrder, ReceiveOrder, SetOrder} from "@/store/thunks/ordersThunk";
import {OneOrderComponent} from "@/components/orders/one_order/OneOrderComponent";
import {SetTotalCount} from "@/store/thunks/cartThunk";

interface state {
    order: {
        oneOrder: OrderInterface
    }
}

const mapStateToProps = (state: state) => {
    return {
        oneOrder: state.order.oneOrder
    }
}

const mapDispatchToProps = {
    GetOneOrder,
    SetOrder,
    EditOrder,
    ReceiveOrder,
    SetTotalCount
}

export const OneOrderContainer = connect(mapStateToProps, mapDispatchToProps)(OneOrderComponent)