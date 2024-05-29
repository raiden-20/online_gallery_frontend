import suggestion_scss from '@/scss/components/profile/categories/SuggestionSubscribeOnArtist.module.scss'

import {useState} from "react";
import {
    CreatePrivateContainer
} from "@/components/profile/profile_elemets/categories/artist/posts/create_private/CreatePrivateContainer";
import {signin} from "@/store/thunks/authThunk";
import {useSession} from "next-auth/react";

export const SuggestionSubscriptionOnArtist = () => {

    const [isClicked, setIsClicked] = useState(false)

    const { status } = useSession()

    return (
        <section className={suggestion_scss.root}>
            <main className={suggestion_scss.main}>
                <p>Подключите функцию ежемесячной подписки и начните публиковать посты и размещать эксклюзивные товары
                    прямо сейчас!</p>
                <button className={'main_button'}
                        onClick={() => {
                            if (status === 'authenticated') {
                                setIsClicked(true)
                            } else {
                                signin()
                            }

                        }}>
                    Подключить подписку
                </button>
            </main>
            {isClicked ?
                <CreatePrivateContainer setIsClicked={setIsClicked}/>
                : null
            }
        </section>
    )
}