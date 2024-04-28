import suggestion_scss from '@/scss/components/profile/categories/SuggestionSubscribeOnArtist.module.scss'

import subscribe_icon from '@/assets/icons/profile/create_post/subscribe_img.svg'
import Image from "next/image";
import {useState} from "react";
import {
    CreatePrivateModalWindow
} from "@/components/profile/profile_elemets/categories/artist/posts/create_private/CreatePrivateModalWindow";

export const SuggestionSubscribeOnArtist = () => {

    const [isClicked, setIsClicked] = useState(false)

    return (
        <section className={suggestion_scss.root}>
            <Image src={subscribe_icon} alt={'subscribe_icon'}/>
            <main className={suggestion_scss.main}>
                <p>Подключите функцию ежемесячной подписки и начните публиковать посты и размещать эксклюзивные товары
                    прямо сейчас!</p>
                <button className={'main_button'}
                        onClick={() => setIsClicked(true)}>
                    Подключить подписку
                </button>
            </main>
            {isClicked ?
                <CreatePrivateModalWindow setIsClicked={setIsClicked}/>
                : null
            }
        </section>
    )
}