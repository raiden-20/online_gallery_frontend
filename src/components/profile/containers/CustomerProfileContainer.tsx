import {connect} from "react-redux";
import {changeCustomerProfileData, getCustomerProfileData} from "@/store/thunks/profileThunk";
import {Customer} from "@/interfaces/customerInterface";
import {CustomerProfileComponent} from "@/components/profile/components/CustomerProfileComponent";

interface containerState {
    profile: {
        customer_data: Customer
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        customer_data: state.profile.customer_data
    }
}

const mapDispatchToProps = {
    getCustomerProfileData,
    changeCustomerProfileData
}

export const CustomerProfileContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerProfileComponent)