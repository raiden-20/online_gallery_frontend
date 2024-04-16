import create_post_scss from "@/scss/components/profile/categories/CreatePost.module.scss";
import React from "react";

import posts_artist_module from '@/scss/components/profile/categories/PostsArtist.module.scss'

interface oneOpenedPhotoInterface {
    img: string
    setOpenedPhotoSrc(openedPhotoSrc: string): void
}

export const OneOpenedPhotoPostComponent = (props: oneOpenedPhotoInterface) => {
    return (
        <section className={create_post_scss.page}>
            <section className={'bg ' + create_post_scss.bg} onClick={() => props.setOpenedPhotoSrc('')}></section>
            <img src={props.img} className={posts_artist_module.one_post_opened_photo}
                 alt={'post photo'}/>
        </section>
    )
}