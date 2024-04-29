import {connect} from "react-redux";
import {GetArtsCustomer} from "@/store/thunks/artThunk";
import {ArtCustomerInterface} from "@/interfaces/artInterface";
import {
    WorksCustomerComponent
} from "@/components/profile/profile_elemets/categories/customer/customer_works/WorksCustomerComponent";

interface state {
    art : {
        arts: ArtCustomerInterface[]
    }
    profile: {
        customerName: string
        avatarUrl: string
    }
}

const mapStateToProps = (state: state) => {
    return {
        arts: state.art.arts,
        customerName: state.profile.customerName,
        avatarUrl: state.profile.avatarUrl
    }
}

const mapDispatchToProps = {
    GetArtsCustomer
}

export const CustomerWorksContainer = connect(mapStateToProps, mapDispatchToProps)(WorksCustomerComponent)