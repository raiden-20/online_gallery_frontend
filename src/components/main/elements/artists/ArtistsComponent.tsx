import main_scss from "@/scss/components/main/main_page/Main.module.scss";

import artists_scss from '@/scss/components/main/main_page/Artists.module.scss'

export const ArtistsComponent = () => {
    return (
        <section className={main_scss.root}>
            <header className={main_scss.header}>Художники</header>
            <ul className={artists_scss.ul}>
                <li className={artists_scss.one_artist} key={0}>
                    <img src={'/default_avatar_profile.svg'} className={artists_scss.one_artist_img}
                         alt={'one work'}
                         crossOrigin="anonymous"/>
                    <section className={artists_scss.one_artist_name_section}>
                        <div className={artists_scss.one_artist_name}>Имя</div>
                    </section>
                </li>
                <li className={artists_scss.one_artist} key={1}>
                    <img src={'/default_avatar_profile.svg'} className={artists_scss.one_artist_img}
                         alt={'one work'}
                         crossOrigin="anonymous"/>
                    <section className={artists_scss.one_artist_name_section}>
                        <div className={artists_scss.one_artist_name}>Имя</div>
                    </section>
                </li>
                <li className={artists_scss.one_artist} key={2}>
                    <img src={'/default_avatar_profile.svg'} className={artists_scss.one_artist_img}
                         alt={'one work'}
                         crossOrigin="anonymous"/>
                    <section className={artists_scss.one_artist_name_section}>
                        <div className={artists_scss.one_artist_name}>Имя</div>
                    </section>
                </li>
                <li className={artists_scss.one_artist} key={3}>
                    <img src={'/default_avatar_profile.svg'} className={artists_scss.one_artist_img}
                         alt={'one work'}
                         crossOrigin="anonymous"/>
                    <section className={artists_scss.one_artist_name_section}>
                        <div className={artists_scss.one_artist_name}>Имя</div>
                    </section>
                </li>
                <li className={artists_scss.one_artist} key={4}>
                    <img src={'/default_avatar_profile.svg'} className={artists_scss.one_artist_img}
                         alt={'one work'}
                         crossOrigin="anonymous"/>
                    <section className={artists_scss.one_artist_name_section}>
                        <div className={artists_scss.one_artist_name}>Имя</div>
                    </section>
                </li>
                <li className={artists_scss.one_artist} key={5}>
                    <img src={'/default_avatar_profile.svg'} className={artists_scss.one_artist_img}
                         alt={'one work'}
                         crossOrigin="anonymous"/>
                    <section className={artists_scss.one_artist_name_section}>
                        <div className={artists_scss.one_artist_name}>Имя</div>
                    </section>
                </li>
            </ul>
        </section>
    )
}