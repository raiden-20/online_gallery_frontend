import Image from "next/image";
import search_icon from "@/assets/icons/nav/search.svg";
import account_icon from "@/assets/icons/nav/account.svg";
import menu_icon from "@/assets/icons/nav/menu.svg";

import navigation_scss from '@/scss/components/main/navigation/Navigation.module.scss'
import {useState} from "react";

import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {signIn} from "next-auth/react";
import {useSession} from "next-auth/react";
import Cookies from "js-cookie";
import {AccountNavigation} from "@/components/main/main/navigation/nav/AccountNavigation";

export const NavigationComponent = () => {
    const router = useRouter()

    const {  data: session, status } = useSession();

    const [isAccountClicked, setIsAccountClicked] = useState(false)
    const [isAccountNavClicked, setIsAccountNavClicked] = useState(false)

    return (
        <ul className={navigation_scss.nav}>
            <li>
                <button className={'title ' + navigation_scss.title}
                        onClick={() => router.push(MAIN_PATHS.MAIN)}>
                    Lindéro
                </button>
            </li>
            <li className={navigation_scss.menu_li}>
                <button onClick={() => router.push(MAIN_PATHS.MAIN)}>
                   <Image src={menu_icon} alt={'menu_icon'} className={navigation_scss.menu_img + ' ' + navigation_scss.img}
                          width={0} height={0}/>
                </button>
            </li>
            <li className={navigation_scss.visible_various}>
                <button onClick={() => router.push(MAIN_PATHS.ARTISTS)}>
                    Художники
                </button>
            </li>
            <li className={navigation_scss.visible_various}>
                <button>
                    Картины
                </button>
            </li>
            <li className={navigation_scss.visible_various}>
                <button>
                    Фотографии
                </button>
            </li>
            <li className={navigation_scss.visible_various}>
                <button>
                    Скульптуры
                </button>
            </li>
            <li className={navigation_scss.visible_various}>
                <button>
                    Аукционы
                </button>
            </li>
            <li className={navigation_scss.visible_various}>
                <button>
                    События
                </button>
            </li>
            {isAccountClicked ?
                <AccountNavigation setIsMenuClicked={setIsAccountNavClicked}/>
                : null}
            <li className={navigation_scss.img_section}>
                <button onClick={() => router.push(MAIN_PATHS.SEARCH)}>
                    <Image src={search_icon} alt={'search_icon'} className={navigation_scss.img}
                           width={0} height={0}/>
                </button>
            </li>
            <li>
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

            </li>
        </ul>
    )
}