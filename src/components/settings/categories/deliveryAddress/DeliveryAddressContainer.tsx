import {connect} from "react-redux";
import {OneAddressInterface} from "@/interfaces/credentials";
import {
    DeliveryAddressSettingsComponent
} from "@/components/settings/categories/deliveryAddress/DeliveryAddressSettingsComponent";
import {getAddresses} from "@/store/thunks/credentialsThunk";

interface containerState {
    credentials: {
        addresses: OneAddressInterface[]
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        addresses: state.credentials.addresses
    }
}

const mapDispatchToProps = {
    getAddresses
}

export const DeliveryAddressesContainer = connect(mapStateToProps, mapDispatchToProps)(DeliveryAddressSettingsComponent)