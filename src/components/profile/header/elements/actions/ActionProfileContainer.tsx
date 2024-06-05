import {connect} from "react-redux";
import {PrivateUnsubscribe, PublicAction} from "@/store/thunks/actionsThunk";
import {ActionButtonsHeaderProfile} from "@/components/profile/header/elements/actions/ActionButtonsHeaderProfile";
import {BlockUser, UnblockUser} from "@/store/thunks/adminThunk";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    PublicAction,
    PrivateUnsubscribe,
    DeleteUserByAdmin: BlockUser,
    UndeleteUserByAdmin: UnblockUser
}

export const ActionProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ActionButtonsHeaderProfile)