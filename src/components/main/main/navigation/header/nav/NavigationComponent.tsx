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
import {AccountNavigationContainer} from "@/components/main/main/navigation/header/AccountNavigationContainer";
import {signin} from "@/store/thunks/authThunk";

interface navigationInterface {
    artist_avatar: string
    customer_avatar: string
}

export const NavigationComponent = (props: navigationInterface) => {
    const router = useRouter()

    const {  data: session, status } = useSession();

    const [isAccountClicked, setIsAccountClicked] = useState(false)
    const [isAccountNavClicked, setIsAccountNavClicked] = useState(false)

    const [role] = useState(Cookies.get('role'))

    return (
        <ul className={navigation_scss.nav}>
            <li key={0}>
                <button className={'title ' + navigation_scss.title}
                        onClick={() => router.push(MAIN_PATHS.MAIN)}>
                    Lindéro
                </button>
            </li>
            <li className={navigation_scss.menu_li} key={1}>
                <button onClick={() => router.push(MAIN_PATHS.MAIN)}>
                   <Image src={menu_icon} alt={'menu_icon'} className={navigation_scss.menu_img + ' ' + navigation_scss.img}
                          width={0} height={0}/>
                </button>
            </li>
            <li className={navigation_scss.visible_various} key={2}>
                <button onClick={() => router.push(MAIN_PATHS.ARTISTS)}>
                    Художники
                </button>
            </li>
            <li className={navigation_scss.visible_various} key={3}>
                <button onClick={() => router.push(MAIN_PATHS.PAINTINGS)}>
                    Картины
                </button>
            </li>
            <li className={navigation_scss.visible_various} key={4}>
                <button onClick={() => router.push(MAIN_PATHS.PHOTO)}>
                    Фотографии
                </button>
            </li>
            <li className={navigation_scss.visible_various} key={5}>
                <button onClick={() => router.push(MAIN_PATHS.SCULPTURES)}>
                    Скульптуры
                </button>
            </li>
            <li className={navigation_scss.visible_various} key={6}>
                <button>
                    Аукционы
                </button>
            </li>
            <li className={navigation_scss.visible_various} key={7}>
                <button>
                    События
                </button>
            </li>
            {isAccountClicked ?
                <AccountNavigationContainer setIsMenuClicked={setIsAccountNavClicked}/>
                : null}
            <li className={navigation_scss.img_section} key={0}>
                <button onClick={() => router.push(MAIN_PATHS.SEARCH)}>
                    <Image src={search_icon} alt={'search_icon'} className={navigation_scss.img}
                           width={0} height={0}/>
                </button>
            </li>
            <li key={1}>
                <button onClick={() => {
                    if ((status === 'unauthenticated' || session === null || !role)) {
                        signin()
                     } else {
                        setIsAccountClicked(!isAccountClicked)
                    }
                }
                }>
                    {status === 'authenticated' && role ?
                        <img src={role === ROLES.CUSTOMER ? props.customer_avatar : props.artist_avatar}
                             alt={'account_icon'} className={navigation_scss.avatar}
                             crossOrigin="anonymous"/>
                        :
                        <Image src={account_icon} alt={'account_icon'} className={navigation_scss.img}
                               width={0} height={0}/>
                    }
                </button>

            </li>
        </ul>
    )
}