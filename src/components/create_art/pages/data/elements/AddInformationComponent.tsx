import create_art_data_scss from '@/scss/components/create_art/CreateArtData.module.scss'
import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";
import Image from "next/image";
import search_icon from "@/assets/icons/search/search.svg";

import delete_add_icon from '@/assets/icons/create_art/delete_add.svg'
import add_info_icon from "@/assets/icons/cart/add_info.svg";
import React from "react";

export const AddInformationComponent = () => {
    return (
        <section className={create_art_data_scss.section_root}>
            <header className={create_art_data_scss.header}>Дополнительная информация</header>
            <section className={create_art_data_scss.add_section}>
                <section className={subscriptions_scss.search_section}>
                    <Image src={search_icon} alt={'search_icon'}/>
                    <input placeholder={'Материал'}/>
                </section>
                <ul className={create_art_data_scss.add_section_ul}>
                    <li className={create_art_data_scss.one_add}>
                        <div>Масло</div>
                        <Image src={delete_add_icon} alt={'delete_add_icon'}/>
                    </li>
                    <li className={create_art_data_scss.one_add}>
                        <div>Холст</div>
                        <Image src={delete_add_icon} alt={'delete_add_icon'}/>
                    </li>
                </ul>
            </section>
            <section className={create_art_data_scss.add_section}>
                <section className={subscriptions_scss.search_section}>
                    <Image src={search_icon} alt={'search_icon'}/>
                    <input placeholder={'Теги'}/>
                </section>
                <ul className={create_art_data_scss.add_section_ul}>
                    <li className={create_art_data_scss.one_add}>
                        <div>Пейзаж</div>
                        <Image src={delete_add_icon} alt={'delete_add_icon'}/>
                    </li>
                    <li className={create_art_data_scss.one_add}>
                        <div>Импрессионизм</div>
                        <Image src={delete_add_icon} alt={'delete_add_icon'}/>
                    </li>
                </ul>
            </section>
            <footer className={create_art_data_scss.footer}>
                <input type={'checkbox'}/>
                <div>Рама включена</div>
            </footer>
        </section>
    )
}