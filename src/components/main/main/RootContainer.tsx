'use client'

import {connect} from "react-redux";
import {isCustomerCreate} from "@/store/thunks/profileThunk";
import {Root} from "@/components/main/main/Root";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    isCustomerCreate: isCustomerCreate
}

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root)