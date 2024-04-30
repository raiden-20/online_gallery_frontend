import {connect} from "react-redux";
import {GetArtsCustomer} from "@/store/thunks/artThunk";
import {ArtCustomerInterface} from "@/interfaces/artInterface";
import {
    WorksCustomerComponent
} from "@/components/profile/profile_elemets/categories/customer/customer_works/WorksCustomerComponent";

interface state {
    art : {
        arts_customer: ArtCustomerInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        arts_customer: state.art.arts_customer,
    }
}

const mapDispatchToProps = {
    GetArtsCustomer
}

export const CustomerWorksContainer = connect(mapStateToProps, mapDispatchToProps)(WorksCustomerComponent)