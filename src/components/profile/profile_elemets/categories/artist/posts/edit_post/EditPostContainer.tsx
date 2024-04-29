import {connect} from "react-redux";
import {CreatePrivatePost, EditPrivatePost} from "@/store/thunks/postsThunk";
import {CreatePost} from "@/components/profile/profile_elemets/categories/artist/posts/create_post/CreatePost";
import {EditPost} from "@/components/profile/profile_elemets/categories/artist/posts/edit_post/EditPost";

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    EditPrivatePost
}

export const EditPostContainer = connect(mapStateToProps, mapDispatchToProps)(EditPost)