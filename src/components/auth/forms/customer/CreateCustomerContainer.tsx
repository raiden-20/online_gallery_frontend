import {connect} from "react-redux";
import {createCustomerProfile} from "@/store/thunks/profileThunk";
import {CreateCustomerComponent} from "@/components/auth/forms/customer/CreateCustomerComponent";

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    createCustomerProfile
}

export const CreateCustomerContainer = connect(mapStateToProps, mapDispatchToProps)(CreateCustomerComponent)