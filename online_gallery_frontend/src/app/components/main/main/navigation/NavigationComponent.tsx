import Image from "next/image";
import search_icon from "@/app/assets/icons/nav/search.svg";
import account_icon from "@/app/assets/icons/nav/account.svg";

import navigation_scss from '@/app/scss/components/main/navigation/Navigation.module.scss'
import {useState} from "react";

import avatar from '@/app/assets/default/default_ava_nav.svg'

export const NavigationComponent = () => {
    const [isAccountClicked, setIsAccountClicked] = useState(false)

    return (
        <ul className={navigation_scss.nav}>
            <li>
                <button className={'title'}>
                    Lindéro
                </button>
            </li>
            <li>
                <button>
                    Художники
                </button>
            </li>
            <li>
                <button>
                    Картины
                </button>
            </li>
            <li>
                <button>
                    Фотографии
                </button>
            </li>
            <li>
                <button>
                    Скульптуры
                </button>
            </li>
            <li>
                <button>
                    Аукционы
                </button>
            </li>
            <li>
                <button>
                    События
                </button>
            </li>
            <li>
                <button>
                    <Image src={search_icon} alt={'search_icon'} width={0} height={0}/>
                </button>
            </li>
            <li onClick={() => setIsAccountClicked(!isAccountClicked)}>
                <button>
                    <Image src={account_icon} alt={'account_icon'} width={0} height={0}/>
                </button>
                {isAccountClicked ?
                    <section className={navigation_scss.account_various}>
                        <ul className={navigation_scss.account_nav}>
                            <li className={navigation_scss.account_data}>
                                <Image src={avatar} className={navigation_scss.avatar}
                                       alt={'avatar'} width={0} height={0}/>
                                <section>
                                    <div>Имя</div>
                                    <button className={navigation_scss.button}>
                                        Художник
                                    </button>
                                </section>
                            </li>
                            <li>
                                <button className={navigation_scss.button}>
                                    Корзина
                                </button>
                            </li>
                            <li>
                                <button className={navigation_scss.button}>
                                    Заказы
                                </button>
                            </li>
                            <li>
                                <button className={navigation_scss.button}>
                                    Уведомления
                                </button>
                            </li>
                            <li>
                                <button className={navigation_scss.button}>
                                    Подписки
                                </button>
                            </li>
                            <li>
                                <button className={navigation_scss.button}>
                                    Настройки
                                </button>
                            </li>
                            <li>
                                <button className={navigation_scss.button}>
                                    Выход
                                </button>
                            </li>
                        </ul>
                    </section>
                    : null}
            </li>

        </ul>
    )
}