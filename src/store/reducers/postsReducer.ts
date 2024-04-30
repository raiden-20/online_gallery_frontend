import {OnePostInterface} from "@/interfaces/PostsInterface";

const SET_POSTS = 'SET_POSTS'
const CLEAR_POSTS = 'CLEAR_POSTS'

interface PostReducerInterface {
    posts: OnePostInterface[]
}


const initialState: PostReducerInterface = {
    posts: []
}

export const postsReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_POSTS: {
            for (let i = 0; i < action.posts.length; i++) {
                action.posts[i].date = action.posts[i].date.substring(0, 10);
            }
            stateCopy.posts = action.posts

            return stateCopy
        }

        case CLEAR_POSTS: {
            stateCopy.posts = []

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setPosts = (posts: OnePostInterface[]) => {
    return {
        type: SET_POSTS, posts
    }
}
export const clearPosts = () => {
    return {
        type: CLEAR_POSTS
    }
}
