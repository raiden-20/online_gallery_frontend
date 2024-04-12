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
import {AccountNavigation} from "@/components/main/main/navigation/header/nav/AccountNavigation";
import {NavigationElementsMobile} from "@/components/main/main/navigation/header/nav_elements/NavigationElementsMobile";
import {AccountNavigationContainer} from "@/components/main/main/navigation/header/AccountNavigationContainer";

export const NavigationComponentMobile = () => {
    const router = useRouter()

    const {  data: session, status } = useSession();

    const [isAccountClicked, setIsAccountClicked] = useState(false)
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const [registrationFlag] = useState(Cookies.get('registrationFlag'))

    return (
        <section className={navigation_scss.nav}>
            <section className={navigation_scss.nav_mobile}>
                <button className={'title ' + navigation_scss.title}
                        onClick={() => router.push(MAIN_PATHS.MAIN)}>
                    Lindéro
                </button>
                <button onClick={() => setIsMenuClicked(!isMenuClicked)}>
                    <Image src={menu_icon} alt={'menu_icon'}
                           className={navigation_scss.menu_img + ' ' + navigation_scss.img}
                           width={0} height={0}/>
                </button>
                {isMenuClicked ?
                <NavigationElementsMobile setIsMenuClicked={setIsMenuClicked}/> : null}
            </section>
            <section className={navigation_scss.nav_mobile}>
                <button onClick={() => router.push(MAIN_PATHS.SEARCH)}>
                    <Image src={search_icon} alt={'search_icon'} className={navigation_scss.img}
                           width={0} height={0}/>
                </button>
                <button onClick={() => {
                    if ((status === 'unauthenticated' || session === null)) {
                        signIn('keycloak')
                            .then(() => {
                                Cookies.set('role', ROLES.CUSTOMER)
                                Cookies.set('status', 'authenticated')

                            })
                    } else if (registrationFlag === 'true'){
                        setIsAccountClicked(!isAccountClicked)
                    }
                }
                }>
                    <Image src={account_icon} alt={'account_icon'} className={navigation_scss.img}
                           width={0} height={0}/>
                </button>
                {isAccountClicked ?
                    <AccountNavigationContainer setIsMenuClicked={setIsAccountClicked}/>
                    : null}
            </section>
        </section>
    )
}