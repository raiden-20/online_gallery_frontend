import {connect} from "react-redux";
import {AddCard} from "@/store/thunks/credentialsThunk";
import {AddCardComponent} from "@/components/settings/categories/pay/addCard/AddCardComponent";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    AddCard
}

export const AddCardContainer = connect(mapStateToProps, mapDispatchToProps)(AddCardComponent)