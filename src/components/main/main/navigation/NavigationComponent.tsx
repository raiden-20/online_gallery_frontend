import Image from "next/image";
import search_icon from "@/assets/icons/nav/search.svg";
import account_icon from "@/assets/icons/nav/account.svg";

import navigation_scss from '@/scss/components/main/navigation/Navigation.module.scss'
import {useState} from "react";

import avatar from '@/assets/default/default_ava_nav.svg'
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import { signIn, signOut } from "next-auth/react";
import {useSession} from "next-auth/react";
import axios from "axios";

export const NavigationComponent = () => {
    const router = useRouter()

    const { status } = useSession();


    const [isAccountClicked, setIsAccountClicked] = useState(false)
    const keycloakSessionLogOut = async () => {
        try {
           await axios.get(`/api/auth/logout`)
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <ul className={navigation_scss.nav}>
            <li>
                <button className={'title'}
                        onClick={() => router.push(MAIN_PATHS.MAIN)}>
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
            <li onClick={() => {
                if (status === 'unauthenticated') {
                    signIn('keycloak')
                } else {
                    setIsAccountClicked(!isAccountClicked)
                }
            }
            }>
                <button>
                    <Image src={account_icon} alt={'account_icon'} width={0} height={0}/>
                </button>
                {isAccountClicked ?
                    <section className={navigation_scss.account_various}>
                        <ul className={navigation_scss.account_nav}>
                            <li className={navigation_scss.account_data}>
                                <Image src={avatar} className={navigation_scss.avatar}
                                       onClick={() => router.push(MAIN_PATHS.PROFILE)}
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
                                <button className={navigation_scss.button}
                                        onClick={() => router.push(MAIN_PATHS.SETTINGS)}>
                                    Настройки
                                </button>
                            </li>
                            <li>
                                <button className={navigation_scss.button}
                                onClick={() => {
                                    keycloakSessionLogOut()
                                        .then(() => signOut({callbackUrl: MAIN_PATHS.MAIN}))
                                }}>
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