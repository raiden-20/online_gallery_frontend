import Image from "next/image";
import search_icon from "@/app/assets/icons/nav/search.svg";
import account_icon from "@/app/assets/icons/nav/account.svg";

import navigation_scss from '@/app/scss/components/main/Navigation.module.scss'

export const NavigationComponent = () => {
    return (
        <section className={navigation_scss.root}>
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
                <li>
                    <button>
                        <Image src={account_icon} alt={'account_icon'} width={0} height={0}/>
                    </button>
                </li>
            </ul>
        </section>
    )
}