import posts_artist_module from "@/scss/components/profile/categories/PostsArtist.module.scss";
import {useState} from "react";
import {OneOpenedPhotoPostComponent} from "@/components/profile/profile_elemets/categories/artist/posts/OneOpenedPhotoPostComponent";

export const OnePostArtistComponent = () => {
    const [openedPhotoSrc, setOpenedPhotoSrc] = useState('')

    return (
        <section className={posts_artist_module.one_post + ' ' + posts_artist_module.border}>
            <img src={'/default_work_profile.jpg'} className={posts_artist_module.one_post_img}
                 onClick={() => setOpenedPhotoSrc('/default_work_profile.jpg')}
                 alt={'post photo'}
                 crossOrigin="anonymous"/>
            <header className={posts_artist_module.one_post_title}>Заголовок</header>
            <p>Оцените этот нереальный рисунок карандашом</p>
            <footer className={posts_artist_module.one_post_date}>9 апреля, 02:33</footer>
            {openedPhotoSrc !== '' ?
                <OneOpenedPhotoPostComponent setOpenedPhotoSrc={setOpenedPhotoSrc} img={'/default_work_profile.jpg'}/>
                : null
            }
        </section>
    )
}