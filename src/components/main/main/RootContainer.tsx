'use client'

import {connect} from "react-redux";
import {getArtistProfileData, getCustomerProfileData, isCustomerCreate} from "@/store/thunks/profileThunk";
import {Root} from "@/components/main/main/Root";
import {Artist} from "@/interfaces/artistInterface";
import {Customer} from "@/interfaces/customerInterface";

interface containerState {
    profile: {
        my_customer_data: Customer,
        my_artist_data: Artist
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        artist_data: state.profile.my_artist_data,
        customer_data: state.profile.my_customer_data
    }
}

const mapDispatchToProps = {
    isCustomerCreate,
    getCustomerProfileData,
    getArtistProfileData
}

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root)