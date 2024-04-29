import React from "react";
import {
    SuggestionSubscribeOnArtist
} from "@/components/profile/profile_elemets/categories/artist/posts/subscribe/SuggestionSubscribeOnArtist";
import main_posts_scss from '@/scss/components/profile/categories/MainPosts.module.scss'
import {
    PostsArtistComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/elements/PostsArtistComponent";
import {OnePostInterface} from "@/interfaces/PostsInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface mainPostInterface {
    countSubscribers: string
    posts: OnePostInterface[]
    GetPrivatePosts(artistId: string, router: AppRouterInstance): void
    DeletePrivatePost(id: string, router: AppRouterInstance): void
}

export const MainPostsComponent = (props: mainPostInterface) => {

    return (
        <section className={main_posts_scss.root}>
            {props.countSubscribers === '' ?
                <SuggestionSubscribeOnArtist/>
                :
                <PostsArtistComponent posts={props.posts} DeletePrivatePost={props.DeletePrivatePost}/>
            }
        </section>
    )
}