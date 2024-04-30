import React, {useEffect, useState} from "react";
import main_posts_scss from '@/scss/components/profile/categories/MainPosts.module.scss'
import {
    PostsArtistComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/elements/PostsArtistComponent";
import {OnePostInterface} from "@/interfaces/PostsInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

interface mainPostInterface {
    countSubscribers: string
    posts: OnePostInterface[]

    GetPrivatePosts(artistId: string, router: AppRouterInstance): void
    DeletePrivatePost(id: string, router: AppRouterInstance): void
}

export const MainPostsComponent = (props: mainPostInterface) => {
    const router = useRouter()

    const [currentId] = useState(Cookies.get('currentId') as string)

    useEffect(() => {
        props.GetPrivatePosts(currentId, router)
    }, []);

    return (
        <section className={main_posts_scss.root}>
            <PostsArtistComponent posts={props.posts} DeletePrivatePost={props.DeletePrivatePost}/>
        </section>
    )
}