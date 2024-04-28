import one_work_scss from '@/scss/components/profile/categories/OneWork.module.scss'
import {useState} from "react";
import Cookies from "js-cookie";
import {ROLES} from "@/paths/main";

import edit_icon from '@/assets/icons/categories/art/edit.svg'
import delete_icon from '@/assets/icons/categories/art/delete.svg'
import Image from "next/image";
import {OneWorkData} from "@/components/categories/works/works/one_work/element/OneWorkData";
import {OneWorkButton} from "@/components/categories/works/works/one_work/element/OneWorkButton";

export const OneWorkComponent = () => { // todo если мой товар, то убирать кнопку купить и добавлять футер
    const [artistId] = useState(Cookies.get('artistId'))

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
                <OneWorkButton/>
                <OneWorkData/>
                <footer className={one_work_scss.footer} >
                    <button className={'no_main_color'}>
                        <Image src={edit_icon} alt={'edit_icon'}/>
                        <div>Редактировать</div>
                    </button>
                    <button className={'no_main_color'}>
                        <Image src={delete_icon} alt={'edit_icon'}/>
                        <div>Удалить</div>
                    </button>
                </footer>
            </main>
        </section>
    )
}