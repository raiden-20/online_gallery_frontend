import accountNavigation_scss from "@/scss/components/main/navigation/AccountNavigation.module.scss";
import Image from "next/image";
import Cookies from "js-cookie";
import {MAIN_PATHS, PATHS_CATEGORY, ROLES} from "@/paths/main";
import {deleteCookies, keycloakSessionLogOut} from "@/store/thunks/authThunk";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
import navigation_scss from "@/scss/components/main/navigation/Navigation.module.scss";
import close from "@/assets/icons/nav/close.svg";
import { useState} from "react";
import {Customer} from "@/interfaces/customerInterface";
import {Artist} from "@/interfaces/artistInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface accountNavInterface {
    my_customer_data: Customer
    my_artist_data: Artist

    getCustomerProfileData(id: string, router: AppRouterInstance): void
    getArtistProfileData(id: string, router: AppRouterInstance): void
    setIsMenuClicked(isMenuClicked: boolean): void
}

export const AccountNavigation = (props: accountNavInterface) => {
    const router = useRouter()

    const [artistId] = useState(Cookies.get('artistId'))
    const [registrationFlag] = useState(Cookies.get('registrationFlag'))

    return (
        <section className={accountNavigation_scss.account_section}>
            <section className={accountNavigation_scss.account_various}>
                <button onClick={() => props.setIsMenuClicked(false)} className={navigation_scss.close_button}>
                    <Image src={close} alt={'close'}
                           width={0} height={0} className={navigation_scss.img}/>
                </button>
                <section className={accountNavigation_scss.account_nav}>
                    {registrationFlag === 'true' ?
                        <section className={accountNavigation_scss.account_data}
                            onClick={() => {
                                Cookies.set('role', ROLES.CUSTOMER)
                                Cookies.set('currentRole', ROLES.CUSTOMER)
                                Cookies.set('currentId', Cookies.get('customerId') as string)
                                router.push(MAIN_PATHS.PROFILE_CUSTOMER + '/' + Cookies.get('customerId'))
                            }
                            }>
                            <img src={props.my_customer_data.avatarUrl === '' ? '/default_avatar_profile.svg' : props.my_customer_data.avatarUrl }
                                 className={accountNavigation_scss.avatar}
                                 crossOrigin="anonymous"
                                 alt={'avatar'}/>
                            <section className={accountNavigation_scss.name_section}>
                                <div className={'p ' + accountNavigation_scss.name}>{props.my_customer_data.customerName}</div>
                                <button className={accountNavigation_scss.button}>
                                    Покупатель
                                </button>
                            </section>
                        </section>
                        : null
                    }
                    {artistId !== undefined ?
                        <section className={accountNavigation_scss.account_data}
                            onClick={() => {
                                Cookies.set('role', ROLES.ARTIST)
                                Cookies.set('currentRole', ROLES.ARTIST)
                                Cookies.set('currentId', Cookies.get('artistId') as string)
                                router.push(MAIN_PATHS.PROFILE_ARTIST + '/' + Cookies.get('artistId'))
                            }
                            }>
                            <img src={props.my_artist_data.avatarUrl === '' ? '/default_avatar_profile.svg' : props.my_artist_data.avatarUrl}
                                 className={accountNavigation_scss.avatar}
                                 crossOrigin="anonymous"
                                 alt={'avatar'}/>
                            <section className={accountNavigation_scss.name_section}>
                                <div className={'p ' + accountNavigation_scss.name}>{props.my_artist_data.artistName}</div>
                                <button className={accountNavigation_scss.button}>
                                    Художник
                                </button>
                            </section>
                        </section>
                        :
                        <section>
                            <button className={accountNavigation_scss.buttonAdd}>
                                <div className={accountNavigation_scss.plus}>+</div>
                                <div className={accountNavigation_scss.artist_button}
                                    onClick={() => router.push(MAIN_PATHS.CREATE_ARTIST)}>
                                    Художник
                                </div>
                            </button>
                        </section>
                    }
                    <section>
                        <button className={accountNavigation_scss.button}
                                onClick={() => {
                                    router.push(MAIN_PATHS.CART)
                                    Cookies.set('role', ROLES.CUSTOMER)
                                    Cookies.set('currentRole', ROLES.CUSTOMER)
                                    Cookies.set('currentId', Cookies.get('customerId') as string)
                                }
                                }>
                            Корзина
                        </button>
                    </section>
                    <section>
                        <button className={accountNavigation_scss.button}
                        onClick={() => router.push(MAIN_PATHS.ORDERS)}>
                            Заказы
                        </button>
                    </section>
                    <section>
                        <button className={accountNavigation_scss.button}
                                onClick={() => router.push(MAIN_PATHS.NOTIFICATIONS)}>
                            Уведомления
                        </button>
                    </section>
                    <section>
                        <button className={accountNavigation_scss.button}
                                onClick={() => router.push(MAIN_PATHS.SUBSCRIPTIONS + PATHS_CATEGORY.PRIVATE)}>
                            Подписки
                        </button>
                    </section>
                    <section>
                        <button className={accountNavigation_scss.button}
                                onClick={() => {
                                    router.push(MAIN_PATHS.SETTINGS)
                                    Cookies.set('role', ROLES.CUSTOMER)
                                    Cookies.set('currentRole', ROLES.CUSTOMER)
                                    Cookies.set('currentId', Cookies.get('customerId') as string)
                                }}>
                            Настройки
                        </button>
                    </section>
                    <section>
                        <button className={accountNavigation_scss.button}
                                onClick={() => {
                                    keycloakSessionLogOut()
                                        .then(() => {
                                            deleteCookies()

                                            signOut({callbackUrl: MAIN_PATHS.MAIN}).then()
                                        })
                                }}>
                            Выход
                        </button>
                    </section>
                </section>
            </section>
        </section>
    )
}