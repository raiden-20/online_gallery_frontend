import posts_artist_module from '@/scss/components/profile/categories/PostsArtist.module.scss'
import {OnePostArtistComponent} from "@/components/profile/profile_elemets/categories/artist/posts/elements/OnePostArtistComponent";
import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import Image from "next/image";
import create_post_icon from "@/assets/icons/profile/create_post/create_post_mobile.svg";
import create_post_button_icon from "@/assets/icons/profile/create_post_edit.svg";
import React, {useState} from "react";
import Cookies from "js-cookie";
import delete_icon from '@/assets/icons/profile/delete.svg'
import {DeletePrivateContainer} from "@/components/profile/profile_elemets/categories/artist/posts/delete_posts/DeletePrivateContainer";
import {OnePostInterface} from "@/interfaces/PostsInterface";
import {CreatePostContainer} from "@/components/profile/profile_elemets/categories/artist/posts/create_post/CreatePostContainer";
import post_settings_icon from '@/assets/icons/profile/create_post/post_settings.svg'
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface PostArtistInterface {
    posts: OnePostInterface[]
    DeletePrivatePost(id: string, router: AppRouterInstance): void
}

export const PostsArtistComponent = (props: PostArtistInterface) => {

    console.log(props.posts)

    const [artistId] = useState(Cookies.get('artistId'))
    const [currentId] = useState(Cookies.get('currentId'))

    const [isCreatePost, setIsCreatePost] = useState(false)
    const [isDeletePosts, setIsDeletePosts] = useState(false)

    return (
        <section className={posts_artist_module.main}>
            {currentId === artistId ?
                <header className={posts_artist_module.header_buttons}>
                    <button
                        className={'main_button ' + posts_artist_module.button + ' ' + posts_artist_module.create_post}
                        onClick={() => setIsCreatePost(true)}>
                        <Image src={create_post_button_icon} alt={'create_post_icon'}/>
                        <div>Написать пост</div>
                    </button>
                    <button className={'cancel_button ' + posts_artist_module.button + ' ' + posts_artist_module.create_post}
                            onClick={() => setIsDeletePosts(true)}>
                        <Image src={delete_icon} alt={'delete_icon'}/>
                        <div>Отключить ежемесячную подписку</div>
                    </button>
                    <button className={'cancel_button ' + posts_artist_module.button + ' ' + posts_artist_module.settings_button}
                        onClick={() => setIsDeletePosts(true)}>
                        <Image src={post_settings_icon} alt={'create_post_icon'}/>
                        <div>Настройки подписки</div>
                    </button>
                </header>
                : null}
            <ul className={posts_artist_module.root}>
                {props.posts.length > 0 ?
                    props.posts.map((onePost: OnePostInterface, index) => {
                        return (
                            <li key={index} className={index != 0 ? posts_artist_module.border : undefined}>
                                <OnePostArtistComponent onePost={onePost} DeletePrivatePost={props.DeletePrivatePost}/>
                            </li>
                        )
                    }).reverse()
                    :
                    <section className={'no_elements'}>
                        Художник не имеет ни одного поста...
                    </section>
                }
                {currentId === artistId ?
                    <button className={works_profile_scss.create_art_button}
                            onClick={() => setIsCreatePost(true)}>
                        <Image src={create_post_icon} alt={'create_art_icon'}/>
                    </button>
                    : null}
                {isCreatePost ?
                    <CreatePostContainer setIsCreatePost={setIsCreatePost}/>
                    : null}
                {isDeletePosts ?
                    <DeletePrivateContainer setIsDeletePosts={setIsDeletePosts}/>
                    : null}
            </ul>
        </section>
    )
}