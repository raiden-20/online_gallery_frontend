import {connect} from "react-redux";
import {PrivateDeletePostPlace} from "@/store/thunks/postsThunk";
import {
    DeletePostsComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/delete_posts/DeletePostsComponent";

interface state {
    profile: {
        artistName: string
    }
}

const mapStateToProps = (state: state) => {
    return {
        artistName: state.profile.artistName
    }
}

const mapDispatchToProps = {
    PrivateDeletePostPlace
}

export const DeletePrivateContainer = connect(mapStateToProps, mapDispatchToProps)(DeletePostsComponent)