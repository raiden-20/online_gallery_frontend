import Image from "next/image";
import search_icon from "@/assets/icons/nav/search.svg";
import account_icon from "@/assets/icons/nav/account.svg";
import menu_icon from "@/assets/icons/nav/menu.svg";

import navigation_scss from '@/scss/components/main/navigation/Navigation.module.scss'
import {useState} from "react";

import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {useSession} from "next-auth/react";
import Cookies from "js-cookie";
import {NavigationElementsMobile} from "@/components/main/main/navigation/header/nav_elements/NavigationElementsMobile";
import {AccountNavigationContainer} from "@/components/main/main/navigation/header/AccountNavigationContainer";
import {signin} from "@/store/thunks/authThunk";

interface navigationInterface {
    artist_avatar: string
    customer_avatar: string
}

export const NavigationComponentMobile = (props: navigationInterface) => {
    const router = useRouter()

    const {  data: session, status } = useSession();

    const [isAccountClicked, setIsAccountClicked] = useState(false)
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const [registrationFlag] = useState(Cookies.get('registrationFlag'))
    const [role] = useState(Cookies.get('role'))

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
                        signin()
                    } else if (registrationFlag === 'true'){
                        setIsAccountClicked(!isAccountClicked)
                    }
                }
                }>
                    {status === 'authenticated' ?
                        <img src={role === ROLES.CUSTOMER ? props.customer_avatar : props.artist_avatar}
                             alt={'account_icon'} className={navigation_scss.avatar}
                             crossOrigin="anonymous"/>
                    :
                        <Image src={account_icon} alt={'account_icon'} className={navigation_scss.img}
                               width={0} height={0}/>
                    }
                </button>
                {isAccountClicked ?
                    <AccountNavigationContainer setIsMenuClicked={setIsAccountClicked}/>
                    : null}
            </section>
        </section>
    )
}