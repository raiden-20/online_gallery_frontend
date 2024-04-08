import Image from "next/image";
import search_icon from "@/assets/icons/nav/search.svg";
import account_icon from "@/assets/icons/nav/account.svg";
import menu_icon from "@/assets/icons/nav/menu.svg";

import navigation_scss from '@/scss/components/main/navigation/Navigation.module.scss'
import {useState} from "react";

import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {signIn, useSession} from "next-auth/react";
import Cookies from "js-cookie";
import {AccountNavigation} from "@/components/main/main/navigation/nav/AccountNavigation";

export const NavigationComponentMobile = () => {
    const router = useRouter()

    const {  data: session, status } = useSession();

    const [isAccountClicked, setIsAccountClicked] = useState(false)

    return (
        <section className={navigation_scss.nav}>
            <section className={navigation_scss.nav_mobile}>
                <button className={'title ' + navigation_scss.title}
                        onClick={() => router.push(MAIN_PATHS.MAIN)}>
                    Lindéro
                </button>
                <button onClick={() => router.push(MAIN_PATHS.MAIN)}>
                    <Image src={menu_icon} alt={'menu_icon'}
                           className={navigation_scss.menu_img + ' ' + navigation_scss.img}
                           width={0} height={0}/>
                </button>
            </section>
            <section className={navigation_scss.nav_mobile}>
                <button onClick={() => router.push(MAIN_PATHS.SEARCH)}>
                    <Image src={search_icon} alt={'search_icon'} className={navigation_scss.img}
                           width={0} height={0}/>
                </button>
                <button onClick={() => {
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
                    <Image src={account_icon} alt={'account_icon'} className={navigation_scss.img}
                           width={0} height={0}/>
                </button>
                {isAccountClicked ?
                    <AccountNavigation/>
                    : null}
            </section>
        </section>
    )
}