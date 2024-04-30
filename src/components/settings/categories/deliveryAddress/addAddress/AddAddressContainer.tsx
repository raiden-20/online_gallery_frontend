import {connect} from "react-redux";
import {AddAddress} from "@/store/thunks/credentialsThunk";
import {AddAddressComponent} from "@/components/settings/categories/deliveryAddress/addAddress/AddAddressComponent";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    AddAddress
}

export const AddAddressContainer = connect(mapStateToProps, mapDispatchToProps)(AddAddressComponent)