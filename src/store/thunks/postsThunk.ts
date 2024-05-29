import {ActionsAPI} from "@/api/actionsAPI";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Dispatch} from "redux";
import {setPosts} from "@/store/reducers/postsReducer";

export const PrivateCreatePostPlace = (artistId: string, price: string, router: AppRouterInstance) =>
    () => {
        ActionsAPI.PrivateCreatePostPlace(artistId, price)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const PrivateDeletePostPlace = (router: AppRouterInstance) =>
    () => {
        ActionsAPI.PrivatePostsPlaceDelete()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const GetPrivatePosts = (artistId: string, router: AppRouterInstance) =>
    (dispatch: Dispatch) => {
        ActionsAPI.GetPrivatePost(artistId)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setPosts(response[1]))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const CreatePrivatePost = (title: string, text: string, photos: File[], router: AppRouterInstance, setIsCreatePost: (flag: boolean) => void ) =>
    () => {
        ActionsAPI.CreatePrivatePost(title, text, photos)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        setIsCreatePost(false)
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const EditPrivatePost = (postId: string, title: string, text: string, newPhotos: File[], deletePhotoUrls: string[],
                                router: AppRouterInstance, setIsEditPost: (flag: boolean) => void ) =>
    () => {
        ActionsAPI.EditPrivatePost(postId, title, text, newPhotos, deletePhotoUrls)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        setIsEditPost(false)
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }
export const DeletePrivatePost = (id: string, router: AppRouterInstance) =>
    () => {
        ActionsAPI.DeletePrivatePost(id)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        router.refresh()
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }