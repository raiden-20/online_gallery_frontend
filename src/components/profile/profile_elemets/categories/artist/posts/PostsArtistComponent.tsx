import posts_artist_module from '@/scss/components/profile/categories/PostsArtist.module.scss'
import {
    OnePostArtistComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/OnePostArtistComponent";
import works_profile_scss from "@/scss/components/profile/categories/WorksProfile.module.scss";
import Image from "next/image";
import create_post_icon from "@/assets/icons/profile/create_post_button.svg";
import React, {useState} from "react";
import Cookies from "js-cookie";
import {CreatePostProfile} from "@/components/profile/profile_elemets/create_post/CreatePostProfile";

export const PostsArtistComponent = () => {

    const [artistId] = useState(Cookies.get('artistId'))
    const [currentId] = useState(Cookies.get('currentId'))

    const [isCreatePost, setIsCreatePost] = useState(false)

    return (
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
        </ul>
    )
}