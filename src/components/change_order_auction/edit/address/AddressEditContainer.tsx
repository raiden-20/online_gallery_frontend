import {connect} from "react-redux";
import {getAddresses} from "@/store/thunks/credentialsThunk";
import {AddressEditComponent} from "@/components/create_order/edit/address/AddressEditComponent";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    getAddresses
}

export const AddressEditContainer = connect(mapStateToProps, mapDispatchToProps)(AddressEditComponent)