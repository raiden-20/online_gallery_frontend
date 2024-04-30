import {connect} from "react-redux";
import {PrivateUnsubscribe, PublicAction} from "@/store/thunks/actionsThunk";
import {ActionButtonsHeaderProfile} from "@/components/profile/header/elements/actions/ActionButtonsHeaderProfile";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    PublicAction,
    PrivateUnsubscribe
}

export const ActionProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ActionButtonsHeaderProfile)