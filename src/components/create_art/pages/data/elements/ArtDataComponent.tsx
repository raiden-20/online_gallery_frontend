import create_art_data_scss from '@/scss/components/create_art/CreateArtData.module.scss'
import Image from "next/image";
import add_info_icon from "@/assets/icons/cart/add_info.svg";
import React, {useState} from "react";
import {containsOnlyDigits} from "../../../../../../utils/tests";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface artDataInterface {
    input_name: string
    setInput_name(input_name: string): void
    input_price: string
    setInput_price(input_price: string): void
    price_placeholder: string
    input_year: string
    setInput_year(input_year: string): void
    input_description: string
    setInput_description(input_description: string): void
    input_height: string
    setInput_height(input_height: string): void
    input_width: string
    setInput_width(input_height: string): void
    isPrivate: boolean
    setIsPrivate(isPrivate: boolean): void
    isFooter: boolean
}

export const ArtDataComponent = (props: artDataInterface) => {
    const [isHover, setIsHover] = useState(false)

    const [messageDate, setMessageDate] = useState('')
    const [messageHeight, setMessageHeight] = useState('')
    const [messageWidth, setMessageWidth] = useState('')

    return (
        <section className={create_art_data_scss.section_root}>
            <header className={create_art_data_scss.header}>Данные товара</header>
            <input placeholder={'Название'} value={props.input_name}
                   onChange={(event) => {
                       if (event.target.value.length <= CHARACTER_RESTRICTION.ART_NAME) {
                           props.setInput_name(event.target.value)
                       }
                   }}/>
            <section className={create_art_data_scss.inputs_section}>
                <input placeholder={`${props.price_placeholder}, ₽`} value={props.input_price}
                       onChange={(event) => props.setInput_price(event.target.value)}/>
                <section>
                    <input placeholder={'Год создания'} value={props.input_year}
                           onChange={(event) => {
                               setMessageDate('')
                               props.setInput_year(event.target.value)
                               if (Number.parseInt(event.target.value) < CHARACTER_RESTRICTION.MIN_YEAR ||
                                   Number.parseInt(event.target.value) > CHARACTER_RESTRICTION.MAX_YEAR) {
                                   setMessageDate('Неправильная дата')
                               }
                           }
                           }/>
                    <p className={'message'}>{messageDate}</p>
                </section>
            </section>
            <textarea placeholder={'Описание'} value={props.input_description}
                      onChange={(event) => props.setInput_description(event.target.value)}></textarea>
            <section className={create_art_data_scss.inputs_section}>
                <section>
                    <input placeholder={'Длина, см'} value={props.input_height}
                           onChange={(event) => {
                               setMessageHeight('')
                               if (!containsOnlyDigits(event.target.value)) {
                                   setMessageHeight('Неправильный формат')
                               }
                               props.setInput_height(event.target.value)
                           }
                           }/>
                    <p className={'message'}>{messageHeight}</p>
                </section>
                <section>
                    <input placeholder={'Ширина, см'} value={props.input_width}
                           onChange={(event) => {
                               setMessageWidth('')
                               props.setInput_width(event.target.value)
                               if (!containsOnlyDigits(event.target.value)) {
                                   setMessageWidth('Неправильный формат')
                               }
                           }
                           }/>
                    <p className={'message'}>{messageWidth}</p>
                </section>
            </section>
            {props.isFooter ?
                <footer className={create_art_data_scss.footer}>
                    <input type={'checkbox'}
                           onChange={() => props.setIsPrivate(!props.isPrivate)}/>
                    <section className={create_art_data_scss.footer_add_data}>
                        <div className={create_art_data_scss.footer_private}>Сделать доступным только для пользователей
                            с
                            ежемесячной подпиской
                        </div>
                        <button onMouseOver={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}>
                            <Image src={add_info_icon} alt={'add_info_icon'}/>
                        </button>
                    </section>
                    {isHover ?
                        <section className={create_art_data_scss.hover_section}>
                            <p className={create_art_data_scss.add_text}>Просматривать и покупать товар смогут только
                                пользователи с ежемесячной подпиской. Остальные пользователи будут видеть только
                                размытое
                                основное фото и название. После покупки товара он перейдет в публичный доступ</p>
                        </section>
                        : null}
                </footer>
                : null}
        </section>
    )
}