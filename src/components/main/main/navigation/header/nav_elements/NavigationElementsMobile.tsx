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
            <section className={navigation_scss.menu_full}>
                <section className={navigation_scss.visible_various}>
                    <button onClick={() => router.push(MAIN_PATHS.ARTISTS)}>
                        Художники
                    </button>
                </section>
                <section className={navigation_scss.visible_various}>
                    <button onClick={() => router.push(MAIN_PATHS.PAINTINGS)}>
                        Картины
                    </button>
                </section>
                <section className={navigation_scss.visible_various}>
                    <button onClick={() => router.push(MAIN_PATHS.PHOTO)}>
                        Фотографии
                    </button>
                </section>
                <section className={navigation_scss.visible_various}>
                    <button onClick={() => router.push(MAIN_PATHS.SCULPTURES)}>
                        Скульптуры
                    </button>
                </section>
                <section className={navigation_scss.visible_various}>
                    <button onClick={() => router.push(MAIN_PATHS.AUCTIONS)}>
                        Аукционы
                    </button>
                </section>
                <section className={navigation_scss.visible_various}>
                    <button>
                        События
                    </button>
                </section>
            </section>
        </section>

    )
}