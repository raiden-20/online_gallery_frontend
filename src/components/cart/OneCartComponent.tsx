import one_cart_scss from '@/scss/components/cart/OneCart.module.scss'
import React, {useEffect, useState} from "react";

import add_info_icon from '@/assets/icons/cart/add_info.svg'
import delete_one_art_icon from '@/assets/icons/cart/delete_one.svg'
import Image from "next/image";

interface oneCartInterface {
    isAllSelected: boolean
}

export const OneCartComponent = (props: oneCartInterface) => {
    const [isSelected, setIsSelected] = useState(props.isAllSelected)
    const [isAnonymous, setIsAnonymous] = useState(false)

    const [isHover, setIsHover] = useState(false)
    const [windowPosition, setWindowPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        setIsSelected(props.isAllSelected)
    }, [props.isAllSelected]);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttonRect = e.currentTarget.getBoundingClientRect();
        setWindowPosition({ top: buttonRect.bottom, left: buttonRect.left });
        setIsHover(true);
    };

    return (
        <section className={one_cart_scss.root}>
            <input type={'checkbox'} className={one_cart_scss.checkbox}
                   onClick={() => setIsSelected(!isSelected)} checked={isSelected}/>
            <img src={'/default_art_photo.jpg'} className={one_cart_scss.img} crossOrigin="anonymous"
                 alt={'art photo'}/>
            <section className={one_cart_scss.data_section}>
                <section className={one_cart_scss.art_data}>
                    <div className={one_cart_scss.text + ' ' + one_cart_scss.name}>Имя</div>
                    <div className={one_cart_scss.text}>Название</div>
                </section>
                <section className={one_cart_scss.section}>
                    <section className={one_cart_scss.anonymous_section}>
                        <input type={'checkbox'} onClick={() => setIsAnonymous(!isAnonymous)} checked={isAnonymous}/>
                        <section className={one_cart_scss.anonymous_section_add}>
                            <div>Купить анонимно</div>
                            <button onMouseOver={handleMouseEnter}
                                    onMouseLeave={() => setIsHover(false)}>
                                <Image src={add_info_icon} alt={'add_info_icon'}/>
                            </button>
                        </section>
                    </section>
                </section>
            </section>
            <section className={one_cart_scss.art_data + ' ' + one_cart_scss.price_section}>
                {isHover ?
                    <section className={one_cart_scss.hover_section}
                             style={{
                                 position: 'fixed',
                                 top: windowPosition.top - 15 + 'px' ,
                                 left: windowPosition.left + 25 + 'px',
                                 display: 'block',
                             }}>
                        <p className={one_cart_scss.add_text}>Ваше имя не будет отображаться в разделе владельцев, а товар будет скрыт из Вашей коллекции</p>
                    </section>
                    : null}
                <div className={one_cart_scss.text + ' ' + one_cart_scss.name}>100 000 ₽</div>
                <button className={'no_main_color'}>
                    <Image src={delete_one_art_icon} alt={'delete_one_art_icon'}/>
                </button>
            </section>
        </section>
    )
}