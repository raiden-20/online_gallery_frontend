import suggestion_scss from '@/scss/components/profile/categories/SuggestionSubscribeOnArtist.module.scss'

import Image from "next/image";
import {useState} from "react";
import {PrivateSubscribeContainer} from "@/components/profile/private_subscribe/PrivateSubscribeContainer";
import not_available from '@/assets/icons/profile/create_post/not_available.svg'
import {useSession} from "next-auth/react";
import {signin} from "@/store/thunks/authThunk";
import Cookies from "js-cookie";

export const SuggestionSubscribeOnArtist = () => {

    const [isClicked, setIsClicked] = useState(false)

    const { status } = useSession()

    const [artistName] = useState(Cookies.get('artistName'))

    return (
        <section className={suggestion_scss.root}>
            <main className={suggestion_scss.main}>
                <Image src={not_available} className={suggestion_scss.img} alt={'not_available'} width={0} height={0}/>
                <p>Чтобы просматривать эксклюзивный контент,
                    необходимо
                    <button className={suggestion_scss.underline}
                            onClick={() => {
                                if (status === 'authenticated') {
                                    setIsClicked(true)
                                } else {
                                    signin()
                                }
                            }
                            }>
                        оформить ежемесячную подписку
                    </button> на {artistName}
                </p>
            </main>
            {isClicked ?
                <PrivateSubscribeContainer setSubscribe={setIsClicked}/>
                : null
            }
        </section>
    )
}