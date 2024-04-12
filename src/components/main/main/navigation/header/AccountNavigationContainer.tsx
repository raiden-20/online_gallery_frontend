import {connect} from "react-redux";
import {getArtistProfileData, getCustomerProfileData} from "@/store/thunks/profileThunk";
import {Customer} from "@/interfaces/customerInterface";
import {Artist} from "@/interfaces/artistInterface";
import {AccountNavigation} from "@/components/main/main/navigation/header/nav/AccountNavigation";

interface containerState {
    profile: {
        my_customer_data: Customer,
        my_artist_data: Artist
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        my_customer_data: state.profile.my_customer_data,
        my_artist_data: state.profile.my_artist_data
    }
}

const mapDispatchToProps = {
    getCustomerProfileData,
    getArtistProfileData
}

export const AccountNavigationContainer = connect(mapStateToProps, mapDispatchToProps)(AccountNavigation)