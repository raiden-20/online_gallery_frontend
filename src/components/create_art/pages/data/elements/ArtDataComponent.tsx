import create_art_data_scss from '@/scss/components/create_art/CreateArtData.module.scss'
import Image from "next/image";
import add_info_icon from "@/assets/icons/cart/add_info.svg";
import React, {useState} from "react";

export const ArtDataComponent = () => {
    const [isHover, setIsHover] = useState(false)

    return (
        <section className={create_art_data_scss.section_root}>
            <header className={create_art_data_scss.header}>Данные товара</header>
            <input placeholder={'Название'}/>
            <section className={create_art_data_scss.inputs_section}>
                <input placeholder={'Цена, ₽'}/>
                <input placeholder={'Год создания'}/>
            </section>
            <textarea placeholder={'Описание'}></textarea>
            <section className={create_art_data_scss.inputs_section}>
                <input placeholder={'Длина, см'}/>
                <input placeholder={'Ширина, см'}/>
            </section>
            <footer className={create_art_data_scss.footer}>
                <input type={'checkbox'}/>
                <div>Сделать доступным только для пользователей с ежемесячной подпиской</div>
                <button onMouseOver={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}>
                    <Image src={add_info_icon} alt={'add_info_icon'}/>
                </button>
                {isHover ?
                    <section className={create_art_data_scss.hover_section}>
                        <p className={create_art_data_scss.add_text}>Просматривать и покупать товар смогут только
                            пользователи с ежемесячной подпиской. Остальные пользователи будут видеть только размытое
                            основное фото и название. После покупки товара он перейдет в публичный доступ</p>
                    </section>
                    : null}
            </footer>
        </section>
    )
}