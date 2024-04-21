'use client'

import {connect} from "react-redux";
import {getArtistProfileData, getCustomerProfileData, isCustomerCreate} from "@/store/thunks/profileThunk";
import {Root} from "@/components/main/main/Root";
import {Artist} from "@/interfaces/artistInterface";
import {Customer} from "@/interfaces/customerInterface";

interface containerState {
    profile: {
        artist_data: Artist
        customer_data: Customer
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        artist_data: state.profile.artist_data,
        customer_data: state.profile.customer_data
    }
}

const mapDispatchToProps = {
    isCustomerCreate,
    getCustomerProfileData,
    getArtistProfileData
}

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root)