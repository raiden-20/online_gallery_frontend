import {connect} from "react-redux";
import {OrderInterface} from "@/interfaces/cartInterface";
import {OrdersComponent} from "@/components/orders/OrdersComponent";
import {GetOrders} from "@/store/thunks/ordersThunk";

interface state {
    order: {
        orders: OrderInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        orders: state.order.orders
    }
}

const mapDispatchToProps = {
    GetOrders
}

export const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(OrdersComponent)