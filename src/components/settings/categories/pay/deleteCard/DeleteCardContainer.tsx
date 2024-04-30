import {connect} from "react-redux";
import {DeleteCard} from "@/store/thunks/credentialsThunk";
import {DeleteCardModalWindow} from "@/components/settings/categories/pay/deleteCard/DeleteCardModalWindow";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    DeleteCard
}

export const DeleteCardContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteCardModalWindow)