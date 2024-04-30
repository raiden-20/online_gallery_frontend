import navigation_scss from "@/scss/components/main/navigation/Navigation.module.scss";
import {MAIN_PATHS} from "@/paths/main";
import {useRouter} from "next/navigation";
import Image from "next/image";

import close from '@/assets/icons/nav/close.svg'

export const NavigationElementsMobile = (props: {setIsMenuClicked(isMenuClicked: boolean): void}) => {
    const router = useRouter()

    return (
        <section className={navigation_scss.menu_page}>
            <button onClick={() => props.setIsMenuClicked(false)} className={navigation_scss.close_button}>
                <Image src={close} alt={'close'}
                       width={0} height={0} className={navigation_scss.img}/>
            </button>
            <ul className={navigation_scss.menu_full}>
                <li className={navigation_scss.visible_various} key={0}>
                    <button onClick={() => router.push(MAIN_PATHS.ARTISTS)}>
                        Художники
                    </button>
                </li>
                <li className={navigation_scss.visible_various}>
                    <button onClick={() => router.push(MAIN_PATHS.PAINTINGS)}>
                        Картины
                    </button>
                </li>
                <li className={navigation_scss.visible_various} key={1}>
                    <button onClick={() => router.push(MAIN_PATHS.PHOTO)}>
                        Фотографии
                    </button>
                </li>
                <li className={navigation_scss.visible_various} key={2}>
                    <button onClick={() => router.push(MAIN_PATHS.SCULPTURES)}>
                        Скульптуры
                    </button>
                </li>
                <li className={navigation_scss.visible_various} key={3}>
                    <button>
                        Аукционы
                    </button>
                </li>
                <li className={navigation_scss.visible_various} key={4}>
                    <button>
                        События
                    </button>
                </li>
            </ul>
        </section>

    )
}