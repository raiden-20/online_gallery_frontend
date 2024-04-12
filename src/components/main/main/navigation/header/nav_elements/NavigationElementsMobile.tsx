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
            </ul>
        </section>

    )
}