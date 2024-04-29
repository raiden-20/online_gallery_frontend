import {connect} from "react-redux";
import {OneAddressInterface} from "@/interfaces/credentials";
import {getAddresses} from "@/store/thunks/credentialsThunk";
import {AddressEditComponent} from "@/components/create_order/edit/address/AddressEditComponent";

interface containerState {
    credentials: {
        address: OneAddressInterface[]
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        address: state.credentials.address
    }
}

const mapDispatchToProps = {
    getAddresses
}

export const AddressEditContainer = connect(mapStateToProps, mapDispatchToProps)(AddressEditComponent)