import one_work_scss from '@/scss/components/profile/categories/OneWork.module.scss'
import {useState} from "react";
import {signIn, useSession} from "next-auth/react";
import Cookies from "js-cookie";
import {ROLES} from "@/paths/main";

export const OneWorkComponent = () => {
    const {status} = useSession();


    return (
        <section className={one_work_scss.root}>
            <section className={one_work_scss.photo_section}> {/*todo scroll*/}
                <img src={'/default_art_photo.jpg'} className={one_work_scss.one_photo} crossOrigin="anonymous"
                     alt={'art photo'}/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'} crossOrigin="anonymous"/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'} crossOrigin="anonymous"/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'} crossOrigin="anonymous"/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'} crossOrigin="anonymous"/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'} crossOrigin="anonymous"/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'} crossOrigin="anonymous"/>
            </section>
            <main className={one_work_scss.art_info}>
                <header className={one_work_scss.art_info_header}>
                    <div className={one_work_scss.art_artist}>Художник</div>
                    <div className={one_work_scss.art_name}>Название, 2024</div>
                </header>
                <section className={one_work_scss.art_price}>
                    100 000 ₽
                </section>
                <button className={'main_button ' + one_work_scss.add_to_cart}
                        onClick={() => {
                            if (status === 'authenticated') {
                            }
                            else {
                                signIn('keycloak')
                                    .then(() => {
                                        Cookies.set('role', ROLES.CUSTOMER)
                                        Cookies.set('status', 'authenticated')

                                    })
                            }
                        }}>
                    Добавить в корзину
                </button>
                <section className={one_work_scss.details_section}>
                    <section className={one_work_scss.details_one_section}>
                        <div className={one_work_scss.more_info_noimp}>Тип</div>
                        <div className={one_work_scss.more_info_noimp}>Материал</div>
                        <div className={one_work_scss.more_info_noimp}>Размер</div>
                        <div className={one_work_scss.more_info_noimp}>Наличие рамы</div>
                    </section>
                    <section className={one_work_scss.details_one_section}>
                        <div className={one_work_scss.more_info_noimp_text}>Картина</div>
                        <div className={one_work_scss.more_info_noimp_text}>Масло, холст</div>
                        <div className={one_work_scss.more_info_noimp_text}>20 x 30 см</div>
                        <div className={one_work_scss.more_info_noimp_text}>Да</div>
                    </section>
                </section>
                <p className={one_work_scss.info_text}>Lorem ipsum dolor sit amet consectetur. Pharetra scelerisque
                    morbi amet nunc aliquam condimentum dignissim pellentesque. Elementum at at aliquam nulla mi
                    cursus. Massa donec cursus purus etiam facilisi tincidunt arcu feugiat. Iaculis integer dapibus
                    eget elementum. Varius purus risus cras montes. Fermentum ultrices suscipit lectus augue.</p>
                <section className={one_work_scss.tags_section}>
                    <section className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>Пейзаж</section>
                    <section className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>Импрессионизм</section>
                    <section className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>Еще что-нибудь
                    </section>
                    <section className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>И еще</section>
                </section>
            </main>
        </section>
    )
}