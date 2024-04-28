import posts_artist_module from "@/scss/components/profile/categories/PostsArtist.module.scss";
import {useState} from "react";
import {OneOpenedPhotoPostComponent} from "@/components/profile/profile_elemets/categories/artist/posts/OneOpenedPhotoPostComponent";
import Cookies from "js-cookie";

import create_post_icon from '@/assets/icons/profile/create_post.svg'
import delete_post_icon from '@/assets/icons/profile/delete.svg'
import Image from "next/image";

export const OnePostArtistComponent = () => {
    const [openedPhotoSrc, setOpenedPhotoSrc] = useState<string[]>([])

    const [artistId] = useState(Cookies.get('artistId'))
    const [currentId] = useState(Cookies.get('currentId'))

    return (
        <section className={posts_artist_module.one_post + ' ' + posts_artist_module.border}>
            <img src={'/default_work_profile.jpg'} className={posts_artist_module.one_post_img}
                 onClick={() => setOpenedPhotoSrc(['/default_work_profile.jpg', '/default_avatar_profile.jpg'])}
                 alt={'post photo'}
                 crossOrigin="anonymous"/>
            <header className={posts_artist_module.one_post_title}>Заголовок</header>
            <p>Оцените этот нереальный рисунок карандашом</p>
            {currentId === artistId ?
                <footer className={posts_artist_module.footer_stretch}>
                    <section className={posts_artist_module.footer_buttons}>
                        <button className={posts_artist_module.button}>
                            <Image src={create_post_icon} alt={create_post_icon}/>
                            <div>Редактировать</div>
                        </button>
                        <button className={posts_artist_module.button}>
                            <Image src={delete_post_icon} alt={create_post_icon}/>
                            <div>Удалить</div>
                        </button>
                    </section>
                    <div>9 апреля, 02:33</div>
                </footer>
                :
                <footer className={posts_artist_module.one_post_date}>9 апреля, 02:33</footer>
            }
            {openedPhotoSrc.length !== 0 ?
                <OneOpenedPhotoPostComponent setOpenedPhotoSrc={setOpenedPhotoSrc} openedPhotoSrc={openedPhotoSrc}/>
                : null
            }
        </section>
    )
}