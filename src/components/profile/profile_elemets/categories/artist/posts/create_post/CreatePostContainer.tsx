import {connect} from "react-redux";
import {CreatePrivatePost} from "@/store/thunks/postsThunk";
import {CreatePost} from "@/components/profile/profile_elemets/categories/artist/posts/create_post/CreatePost";

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    CreatePrivatePost
}

export const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)