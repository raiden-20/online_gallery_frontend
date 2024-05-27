import {connect} from "react-redux";
import {changeCustomerProfileData, getCustomerProfileData} from "@/store/thunks/profileThunk";
import {Customer} from "@/interfaces/customerInterface";
import {AccountSettingsComponent} from "@/components/settings/categories/account/AccountSettingsComponent";
import {changeEmail, changePassword, deleteAccount} from "@/store/thunks/authThunk";

interface containerState {
    profile: {
        my_customer_data: Customer
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        customer_data: state.profile.my_customer_data
    }
}

const mapDispatchToProps = {
    getCustomerProfileData,
    changeCustomerProfileData,
    changeEmail,
    changePassword,
    deleteAccount,
}

export const AccountSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(AccountSettingsComponent)