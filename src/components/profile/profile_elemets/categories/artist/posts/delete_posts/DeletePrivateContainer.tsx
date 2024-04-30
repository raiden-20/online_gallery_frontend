import {connect} from "react-redux";
import {PrivateDeletePostPlace} from "@/store/thunks/postsThunk";
import {
    DeletePostsComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/delete_posts/DeletePostsComponent";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    PrivateDeletePostPlace
}

export const DeletePrivateContainer = connect(mapStateToProps, mapDispatchToProps)(DeletePostsComponent)