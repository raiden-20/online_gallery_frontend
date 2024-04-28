import posts_artist_module from '@/scss/components/profile/categories/PostsArtist.module.scss'
import {
    OnePostArtistComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/OnePostArtistComponent";
import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import Image from "next/image";
import create_post_icon from "@/assets/icons/profile/create_post_edit.svg";
import React, {useState} from "react";
import Cookies from "js-cookie";
import {CreatePostProfile} from "@/components/profile/profile_elemets/categories/artist/posts/create_post/CreatePostProfile";
import delete_icon from '@/assets/icons/profile/delete.svg'
import {
    DeletePostsComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/delete_posts/DeletePostsComponent";

export const PostsArtistComponent = () => {

    const [artistId] = useState(Cookies.get('artistId'))
    const [currentId] = useState(Cookies.get('currentId'))

    const [isCreatePost, setIsCreatePost] = useState(false)
    const [isDeletePosts, setIsDeletePosts] = useState(false)

    return (
        <section className={posts_artist_module.main}>
            {currentId === artistId ?
                <header className={posts_artist_module.header_buttons}>
                    <button className={'main_button ' + posts_artist_module.button}
                            onClick={() => setIsCreatePost(true)}>
                        <Image src={create_post_icon} alt={'create_post_icon'}/>
                        <div>Написать пост</div>
                    </button>
                    <button className={'cancel_button ' + posts_artist_module.button}
                            onClick={() => setIsDeletePosts(true)}>
                        <Image src={delete_icon} alt={'delete_icon'}/>
                        <div>Отключить ежемесячную подписку</div>
                    </button>
                </header>
                : null}
            <ul className={posts_artist_module.root}>
                <li>
                    <OnePostArtistComponent/>
                </li>
                <li>
                    <OnePostArtistComponent/>
                </li>
                <li>
                    <OnePostArtistComponent/>
                </li>
                {currentId === artistId ?
                    <button className={works_profile_scss.create_art_button}
                            onClick={() => setIsCreatePost(true)}>
                        <Image src={create_post_icon} alt={'create_art_icon'}/>
                    </button>
                    : null}
                {isCreatePost ?
                    <CreatePostProfile setIsCreatePost={setIsCreatePost}/>
                    : null}
                {isDeletePosts ?
                    <DeletePostsComponent setIsDeletePosts={setIsDeletePosts}/>
                    : null}
            </ul>
        </section>
    )
}