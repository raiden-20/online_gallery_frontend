import {OnePostInterface} from "@/interfaces/PostsInterface";

const SET_POSTS = 'SET_POSTS'

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
            action.posts.date = action.posts.date.substring(0, 10);
            stateCopy.posts = action.posts

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
