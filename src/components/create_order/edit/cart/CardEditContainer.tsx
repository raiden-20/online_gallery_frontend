import {connect} from "react-redux";
import {getCards} from "@/store/thunks/credentialsThunk";
import {CardEditComponent} from "@/components/create_order/edit/cart/CardEditComponent";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    getCards
}

export const CardEditContainer = connect(mapStateToProps, mapDispatchToProps)(CardEditComponent)