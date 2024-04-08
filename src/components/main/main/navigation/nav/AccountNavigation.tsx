import navigation_scss from "@/scss/components/main/navigation/Navigation.module.scss";
import Image from "next/image";
import avatar from "@/assets/default/default_ava_nav.svg";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {keycloakSessionLogOut} from "@/store/thunks/authThunk";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";

export const AccountNavigation = () => {
    const router = useRouter()

    return (
        <section className={navigation_scss.account_section}>
            <section className={navigation_scss.account_various}>
                <ul className={navigation_scss.account_nav}>
                    <li className={navigation_scss.account_data}>
                        <Image src={avatar} className={navigation_scss.avatar}
                               onClick={() => {
                                   Cookies.set('role', ROLES.CUSTOMER)
                                   Cookies.set('currentId', Cookies.get('customerId') as string)
                                   router.push(MAIN_PATHS.PROFILE_CUSTOMER)
                               }
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
                                   router.push(MAIN_PATHS.PROFILE_ARTIST)
                               }
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
                                            Cookies.remove('role')

                                            signOut({callbackUrl: MAIN_PATHS.MAIN})
                                        })
                                }}>
                            Выход
                        </button>
                    </li>
                </ul>
            </section>
        </section>
    )
}