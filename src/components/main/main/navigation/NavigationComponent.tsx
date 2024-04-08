import Image from "next/image";
import search_icon from "@/assets/icons/nav/search.svg";
import account_icon from "@/assets/icons/nav/account.svg";

import navigation_scss from '@/scss/components/main/navigation/Navigation.module.scss'
import {useState} from "react";

import avatar from '@/assets/default/default_ava_nav.svg'
import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {signIn, signOut} from "next-auth/react";
import {useSession} from "next-auth/react";
import Cookies from "js-cookie";
import {keycloakSessionLogOut} from "@/store/thunks/authThunk"

export const NavigationComponent = () => {
    const router = useRouter()

    const {  data: session, status } = useSession();

    const [isAccountClicked, setIsAccountClicked] = useState(false)

    return (
        <ul className={navigation_scss.nav}>
            <li>
                <button className={'title'}
                        onClick={() => router.push(MAIN_PATHS.MAIN)}>
                    Lindéro
                </button>
            </li>
            <li>
                <button onClick={() => router.push(MAIN_PATHS.ARTISTS)}>
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
                <button onClick={() => router.push(MAIN_PATHS.SEARCH)}>
                    <Image src={search_icon} alt={'search_icon'} width={0} height={0}/>
                </button>
            </li>
            <li onClick={() => {
                if (status === 'unauthenticated' || session === null) {
                    signIn('keycloak')
                        .then(() => {
                            Cookies.set('role', ROLES.CUSTOMER)

                        })
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
                                       onClick={() => {
                                           Cookies.set('role', ROLES.CUSTOMER)
                                           Cookies.set('currentId', Cookies.get('customerId') as string)
                                           router.push(MAIN_PATHS.PROFILE_CUSTOMER)}
                                       }
                                       alt={'avatar'} width={0} height={0}/>
                                <section>
                                    <div>Имя</div>
                                    <button className={navigation_scss.button}>
                                        Покупатель
                                    </button>
                                </section>
                            </li>
                            <li className={navigation_scss.account_data}>
                                <Image src={avatar} className={navigation_scss.avatar}
                                       onClick={() => {
                                           Cookies.set('role', ROLES.ARTIST)
                                           Cookies.set('currentId', Cookies.get('artistId') as string)
                                           router.push(MAIN_PATHS.PROFILE_ARTIST)}
                                       }
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
                                                .then(() => {
                                                    Cookies.remove('customerId');
                                                    Cookies.remove('currentId');
                                                    Cookies.remove('artistId');
                                                    Cookies.remove('role')})
                                                    signOut({callbackUrl: MAIN_PATHS.MAIN})
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