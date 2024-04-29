import posts_artist_module from "@/scss/components/profile/categories/PostsArtist.module.scss";
import {useEffect, useState} from "react";
import {
    OneOpenedPhotoPostComponent
} from "@/components/profile/profile_elemets/categories/artist/posts/elements/OneOpenedPhotoPostComponent";
import Cookies from "js-cookie";

import create_post_icon from '@/assets/icons/profile/create_post.svg'
import delete_post_icon from '@/assets/icons/profile/delete.svg'
import Image from "next/image";
import {OnePostInterface} from "@/interfaces/PostsInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {
    EditPostContainer
} from "@/components/profile/profile_elemets/categories/artist/posts/edit_post/EditPostContainer";

interface OnePostComponentInterface {
    onePost: OnePostInterface

    DeletePrivatePost(id: string, router: AppRouterInstance): void
}

export const OnePostArtistComponent = (props: OnePostComponentInterface) => {
    const router = useRouter()

    const [openedPhotoSrc, setOpenedPhotoSrc] = useState<string[]>([])
    const [indexOpened, setIndexOpened] = useState(0)

    const [deletePost, setDeletePost] = useState(false)
    const [editPost, setEditPost] = useState(false)

    const [artistId] = useState(Cookies.get('artistId'))
    const [currentId] = useState(Cookies.get('currentId'))

    useEffect(() => {
        if (deletePost) {
            props.DeletePrivatePost(props.onePost.postId, router)
        }
    }, [deletePost]);

    return (
        <section className={posts_artist_module.one_post + ' ' + posts_artist_module.border}>
            <ul>
                {props.onePost.photoUrls.map((img: string, index) => {
                    return (
                        <li key={index}>
                            <img src={img} className={posts_artist_module.one_post_img}
                                 onClick={() => {
                                     setOpenedPhotoSrc(props.onePost.photoUrls)
                                     setIndexOpened(index)
                                 }}
                                 alt={'post photo'}
                                 crossOrigin="anonymous"/>
                        </li>
                    )
                })}
            </ul>
            <header className={posts_artist_module.one_post_title}>{props.onePost.title}</header>
            <p>{props.onePost.text}</p>
            {currentId === artistId ?
                <footer className={posts_artist_module.footer_stretch}>
                    <section className={posts_artist_module.footer_buttons}>
                        <button className={posts_artist_module.button}
                                onClick={() => setEditPost(true)}>
                            <Image src={create_post_icon} alt={create_post_icon}/>
                            <div>Редактировать</div>
                        </button>
                        <button className={posts_artist_module.button}
                                onClick={() => setDeletePost(true)}>
                            <Image src={delete_post_icon} alt={create_post_icon}/>
                            <div>Удалить</div>
                        </button>
                    </section>
                    <div>{props.onePost.date}</div>
                </footer>
                :
                <footer className={posts_artist_module.one_post_date}>9 апреля, 02:33</footer>
            }
            {openedPhotoSrc.length !== 0 ?
                <OneOpenedPhotoPostComponent setOpenedPhotoSrc={setOpenedPhotoSrc} openedPhotoSrc={openedPhotoSrc}
                                             indexOpened={indexOpened} setIndexOpened={setIndexOpened}/>
                : null
            }
            {editPost ? <EditPostContainer onePost={props.onePost} setIsCreatePost={setEditPost}/> : null}
        </section>
    )
}