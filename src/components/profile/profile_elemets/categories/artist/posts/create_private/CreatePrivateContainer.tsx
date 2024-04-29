import {connect} from "react-redux";
import {
    CreatePrivateModalWindow
} from "@/components/profile/profile_elemets/categories/artist/posts/create_private/CreatePrivateModalWindow";
import {PrivateCreatePostPlace} from "@/store/thunks/postsThunk";

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    PrivateCreatePostPlace
}

export const CreatePrivateContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePrivateModalWindow)