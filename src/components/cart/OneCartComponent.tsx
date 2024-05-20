import one_cart_scss from '@/scss/components/cart/OneCart.module.scss'
import React, {useEffect, useState} from "react";

import add_info_icon from '@/assets/icons/cart/add_info.svg'
import delete_one_art_icon from '@/assets/icons/cart/delete_one.svg'
import Image from "next/image";
import {CartInterface} from "@/interfaces/cartInterface";
interface oneCartInterface {
    oneArt: CartInterface
    isAllSelected: boolean
    setIsAllSelected(isAllSelected: boolean): void

    setArtId(artId: {[key: string]: boolean }): void
    DeleteArtFromCart(artId: string, setMessage: (message: string) => void): void
    artId: {[key: string]: boolean } | undefined
}

export const OneCartComponent = (props: oneCartInterface) => {
    const [message, setMessage] = useState('')

    const [isSelected, setIsSelected] = useState(props.isAllSelected)
    const [isAnonymous, setIsAnonymous] = useState(false)

    const [isHover, setIsHover] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [windowPosition, setWindowPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        setIsSelected(props.isAllSelected)
    }, [props.isAllSelected]);

    useEffect(() => {
        const artData = props.artId
        if (isSelected) {
            // @ts-ignore
            artData[props.oneArt.artId] = isAnonymous
            // @ts-ignore
            props.setArtId(artData)
        } else {
            if (artData) {
                delete artData[props.oneArt.artId]}
            // @ts-ignore
            props.setArtId(artData)
        }
    }, [isSelected]);

    useEffect(() => {
        if (isDelete) {
            setMessage('')
            props.DeleteArtFromCart(props.oneArt.artId, setMessage)
            setIsDelete(false)
        }
    }, [isDelete]);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttonRect = e.currentTarget.getBoundingClientRect();
        setWindowPosition({ top: buttonRect.bottom, left: buttonRect.left });
        setIsHover(true);
    };

    return (
        <section className={one_cart_scss.root}>
            <input type={'checkbox'} className={one_cart_scss.checkbox}
                   onChange={() => setIsSelected(!isSelected)} checked={isSelected}/>
            <img src={props.oneArt.photoUrl} className={one_cart_scss.img} crossOrigin="anonymous"
                 alt={'art photo'}/>
            <section className={one_cart_scss.data_root}>
                <section className={one_cart_scss.data_main}>
                    <section className={one_cart_scss.data_section}>
                        <section className={one_cart_scss.art_data}>
                            <div
                                className={one_cart_scss.text + ' ' + one_cart_scss.name}>{props.oneArt.artistName}</div>
                            <div className={one_cart_scss.text}>{props.oneArt.name}</div>
                        </section>
                    </section>
                    <section className={one_cart_scss.art_data + ' ' + one_cart_scss.price_section}>
                        {isHover ?
                            <section className={one_cart_scss.hover_section}
                                     style={{
                                         position: 'fixed',
                                         top: windowPosition.top - 15 + 'px',
                                         left: windowPosition.left + 25 + 'px',
                                         display: 'block',
                                     }}>
                                <p className={one_cart_scss.add_text}>Ваше имя не будет отображаться в разделе
                                    владельцев, а
                                    товар будет скрыт из Вашей коллекции</p>
                            </section>
                            : null}
                        <div className={one_cart_scss.text + ' ' + one_cart_scss.name}>{props.oneArt.price} ₽</div>
                        <button className={'no_main_color'}
                                onClick={() => setIsDelete(true)}>
                            <Image src={delete_one_art_icon} alt={'delete_one_art_icon'} className={one_cart_scss.delete_img}/>
                        </button>
                    </section>
                </section>
                <section className={one_cart_scss.section}>
                    <section className={one_cart_scss.anonymous_section}>
                        <input type={'checkbox'}
                               onChange={() => setIsAnonymous(!isAnonymous)} checked={isAnonymous}/>
                        <section className={one_cart_scss.anonymous_section_add}>
                            <div>Купить анонимно</div>
                            <button onMouseOver={handleMouseEnter}
                                    onMouseLeave={() => setIsHover(false)}>
                                <Image src={add_info_icon} alt={'add_info_icon'}/>
                            </button>
                        </section>
                    </section>
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                    : null}
                </section>
            </section>
        </section>
    )
}