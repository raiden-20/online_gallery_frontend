import {connect} from "react-redux";
import {MainPostsComponent} from "@/components/profile/profile_elemets/categories/artist/posts/MainPostsComponent";
import {DeletePrivatePost, GetPrivatePosts} from "@/store/thunks/postsThunk";
import {OnePostInterface} from "@/interfaces/PostsInterface";

interface containerState {
    profile: {
        countSubscribers: string
    }
    posts: {
        posts: OnePostInterface[]
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        countSubscribers: state.profile.countSubscribers,
        posts: state.posts.posts
    }
}

const mapDispatchToProps = {
    GetPrivatePosts,
    DeletePrivatePost
}

export const MainPostContainer = connect(mapStateToProps, mapDispatchToProps)(MainPostsComponent)