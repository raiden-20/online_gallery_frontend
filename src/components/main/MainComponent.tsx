import main_scss from '@/scss/components/main/Main.module.scss'

import next_icon from '@/assets/icons/main/next.svg'
import Image from "next/image";

export const MainComponent = () => {
    return (
        <section>
            <section className={main_scss.banner_section}> {/*баннер*/}
                <img src={'/default_banner.jpg'} className={main_scss.banner_img}
                     alt={'banner'} crossOrigin="anonymous"/>
                <button className={main_scss.next_banner_button}>
                    <Image src={next_icon} alt={'next_icon'}/>
                </button>
            </section>
            <section className={main_scss.section}> {/*рекомендации*/}
                <header className={main_scss.section_title}>
                    Рекомендации
                </header>
                <section className={main_scss.section_main}>
                    <section className={main_scss.section_main_data}>
                        <img src={'/default_rec_auc_photo.jpg'} className={main_scss.section_main_data_img}
                             alt={'section photo'} crossOrigin="anonymous"/>
                        <section className={main_scss.section_main_info}>
                            <div className={main_scss.artist_name}>Имя художника</div>
                            <div className={main_scss.art_data}>Название</div>
                            <div className={main_scss.art_data}>100 000 руб.</div>
                        </section>
                    </section>
                    <button className={main_scss.section_next_button}>
                        <Image src={next_icon} alt={'next_icon'}/>
                    </button>
                </section>
            </section>
            <section className={main_scss.section}> {/*аукционы*/}
                <header className={main_scss.section_title}>
                    Аукционы
                </header>
                <section className={main_scss.section_main}>
                    <section className={main_scss.section_main_data}>
                        <img src={'/default_rec_auc_photo.jpg'} className={main_scss.section_main_data_img}
                             alt={'section photo'} crossOrigin="anonymous"/>
                        <section className={main_scss.section_main_info}>
                            <div className={main_scss.artist_name}>Имя художника</div>
                            <div className={main_scss.art_data}>Название</div>
                            <div className={main_scss.art_data}>100 000 руб. (3 ставки)</div>
                        </section>
                    </section>
                    <button className={main_scss.section_next_button}>
                        <Image src={next_icon} alt={'next_icon'}/>
                    </button>
                </section>
            </section>
            <section className={main_scss.section}> {/*события*/}
                <header className={main_scss.section_title}>
                    События
                </header>
                <section className={main_scss.section_main}>
                    <section className={main_scss.action_section}>
                        <section className={main_scss.section_main_data}>
                            <img src={'/default_action.jpg'} className={main_scss.section_action_img}
                                 alt={'section photo'} crossOrigin="anonymous"/>
                            <section className={main_scss.action_data}>
                                <div className={main_scss.art_data}>Название</div>
                                <div className={main_scss.art_data}>Начало - окончание</div>
                            </section>
                        </section>
                        <section className={main_scss.section_main_data}>
                            <img src={'/default_action.jpg'} className={main_scss.section_action_img}
                                 alt={'section photo'} crossOrigin="anonymous"/>
                            <section className={main_scss.action_data}>
                                <div className={main_scss.art_data}>Название</div>
                                <div className={main_scss.art_data}>Начало - окончание</div>
                            </section>
                        </section>
                        <section className={main_scss.section_main_data}>
                            <img src={'/default_action.jpg'} className={main_scss.section_action_img}
                                 alt={'section photo'} crossOrigin="anonymous"/>
                            <section className={main_scss.action_data}>
                                <div className={main_scss.art_data}>Название</div>
                                <div className={main_scss.art_data}>Начало - окончание</div>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section className={main_scss.section}> {/*художники*/}
                <header className={main_scss.section_title}>
                    Художники
                </header>
                <section className={main_scss.artists_section}>
                    <section className={main_scss.one_artist}>
                        <img src={'/default_artist_main.jpg'} className={main_scss.one_artist_photo}
                             alt={'artist photo'} crossOrigin="anonymous"/>
                        <div className={main_scss.one_artist_name}>Имя</div>
                    </section>
                    <section className={main_scss.one_artist}>
                        <img src={'/default_artist_main.jpg'} className={main_scss.one_artist_photo}
                             alt={'artist photo'} crossOrigin="anonymous"/>
                        <div className={main_scss.one_artist_name}>Имя</div>
                    </section>
                    <section className={main_scss.one_artist}>
                        <img src={'/default_artist_main.jpg'} className={main_scss.one_artist_photo}
                             alt={'artist photo'} crossOrigin="anonymous"/>
                        <div className={main_scss.one_artist_name}>Имя</div>
                    </section>
                    <section className={main_scss.one_artist}>
                        <img src={'/default_artist_main.jpg'} className={main_scss.one_artist_photo}
                             alt={'artist photo'} crossOrigin="anonymous"/>
                        <div className={main_scss.one_artist_name}>Имя</div>
                    </section>
                    <section className={main_scss.one_artist}>
                        <img src={'/default_artist_main.jpg'} className={main_scss.one_artist_photo}
                             alt={'artist photo'} crossOrigin="anonymous"/>
                        <div className={main_scss.one_artist_name}>Имя</div>
                    </section>
                    <section className={main_scss.one_artist}>
                        <img src={'/default_artist_main.jpg'} className={main_scss.one_artist_photo}
                             alt={'artist photo'} crossOrigin="anonymous"/>
                        <div className={main_scss.one_artist_name}>Имя</div>
                    </section>
                </section>
            </section>
        </section>
    )
}