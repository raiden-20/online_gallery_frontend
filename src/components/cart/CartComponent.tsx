import {OneCartComponent} from "@/components/cart/OneCartComponent";
import cart_scss from '@/scss/components/cart/Cart.module.scss'

import delete_icon from '@/assets/icons/cart/delete_arts.svg'
import Image from "next/image";
import {useState} from "react";

export const CartComponent = () => {
    const [isAllSelected, setIsAllSelected] = useState(true)

    return (
        <section className={cart_scss.root}>
            <header className={cart_scss.header}>
                Корзина
            </header>
            <section className={cart_scss.top_buttons_section}>
                <section className={cart_scss.top_button_checkbox}>
                    <input type={'checkbox'}
                           onClick={() => setIsAllSelected(!isAllSelected)} checked={isAllSelected}/>
                    <div>Выбрать все</div>
                </section>
                <button className={cart_scss.top_button_delete}>
                    <Image src={delete_icon} alt={'delete_icon'}/>
                    <div>Очистить корзину</div>
                </button>
            </section>
            <main className={cart_scss.main}>
                <ul className={cart_scss.arts}>
                    <li>
                        <OneCartComponent isAllSelected={isAllSelected}/>
                    </li>
                    <li>
                        <OneCartComponent isAllSelected={isAllSelected}/>
                    </li>
                    <li>
                        <OneCartComponent isAllSelected={isAllSelected}/>
                    </li>
                    <li>
                        <OneCartComponent isAllSelected={isAllSelected}/>
                    </li>
                    <li>
                        <OneCartComponent isAllSelected={isAllSelected}/>
                    </li>

                </ul>
                <section className={cart_scss.buy_section}>
                    <section className={cart_scss.buy_data}>
                        <div className={cart_scss.price_text}>Итого</div>
                        <div className={cart_scss.price_text}>1 170 000 ₽ </div>
                    </section>
                    <button className={'main_button'}>К оформлению</button>
                </section>
            </main>
        </section>
    )
}