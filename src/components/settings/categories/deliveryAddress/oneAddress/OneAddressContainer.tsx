import {connect} from "react-redux";
import {DeleteAddress, EditAddress} from "@/store/thunks/credentialsThunk";
import {
    OneAddressSettingsComponent
} from "@/components/settings/categories/deliveryAddress/oneAddress/OneAddressSettingsComponent";
const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    EditAddress,
    DeleteAddress
}

export const OneAddressContainer = connect(mapStateToProps, mapDispatchToProps)(OneAddressSettingsComponent)