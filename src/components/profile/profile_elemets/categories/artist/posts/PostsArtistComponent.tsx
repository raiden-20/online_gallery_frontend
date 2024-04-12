import posts_artist_module from '@/scss/components/profile/categories/PostsArtist.module.scss'

export const PostsArtistComponent = () => {

    return (
        <ul className={posts_artist_module.root}>
            <li>
                <section className={posts_artist_module.one_post + ' ' + posts_artist_module.border}>
                    <img src={'/default_work_profile.jpg'} className={posts_artist_module.one_post_img}
                         alt={'post photo'}/>
                    <header className={posts_artist_module.one_post_title}>Заголовок</header>
                    <p>Оцените этот нереальный рисунок карандашом</p>
                    <footer className={posts_artist_module.one_post_date}>9 апреля, 02:33</footer>
                </section>
            </li>
        </ul>
    )
}