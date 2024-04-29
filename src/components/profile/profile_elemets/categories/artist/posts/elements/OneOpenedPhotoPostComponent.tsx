import React from "react";

import posts_artist_module from '@/scss/components/profile/categories/PostsArtist.module.scss'

import close_icon from '@/assets/icons/profile/close.svg'
import next_icon from '@/assets/icons/profile/next_photo.svg'
import prev_icon from '@/assets/icons/profile/prev_photo.svg'
import Image from "next/image";

interface oneOpenedPhotoInterface {
    openedPhotoSrc: string[]
    setOpenedPhotoSrc(openedPhotoSrc: string[]): void
    indexOpened: number
    setIndexOpened(indexOpened: number): void
}

export const OneOpenedPhotoPostComponent = (props: oneOpenedPhotoInterface) => {
    
    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setOpenedPhotoSrc([])}></section>
            <img src={props.openedPhotoSrc[props.indexOpened]} className={posts_artist_module.one_post_opened_photo}
                 alt={'post photo'} crossOrigin="anonymous"/>
            <button className={posts_artist_module.button_close}
                    onClick={() => props.setOpenedPhotoSrc([])}>
                <Image src={close_icon} alt={'close_icon'} width={0} height={0}/>
            </button>
            <button className={posts_artist_module.button_next}
                    onClick={() => {
                        if (props.indexOpened < props.openedPhotoSrc.length - 1) {
                            props.setIndexOpened(props.indexOpened + 1)
                        }
                    }}>
                <Image src={next_icon} alt={'close_icon'} width={0} height={0}/>
            </button>
            <button className={posts_artist_module.button_prev}
                    onClick={() => {
                        if (props.indexOpened > 0) {
                            props.setIndexOpened(props.indexOpened - 1)
                        }
                    }}>
                <Image src={prev_icon} alt={'prev_icon'} width={0} height={0}/>
            </button>
        </section>
    )
}