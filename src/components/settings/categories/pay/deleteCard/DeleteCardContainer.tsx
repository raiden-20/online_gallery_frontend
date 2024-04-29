import {connect} from "react-redux";
import {DeleteCard} from "@/store/thunks/credentialsThunk";
import {DeleteCardModalWindow} from "@/components/settings/categories/pay/deleteCard/DeleteCardModalWindow";

interface state {
    profile: {
        customerName: string
    }
}


const mapStateToProps = (state: state) => {
    return {
        customerName: state.profile.customerName
    }
}

const mapDispatchToProps = {
    DeleteCard
}

export const DeleteCardContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteCardModalWindow)