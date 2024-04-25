import artists_scss from "@/scss/components/categories/Artists.module.scss";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";
import {signIn, useSession} from "next-auth/react";
import Image from "next/image";
import bell_icon from "@/assets/icons/profile/bell_icon.svg";
import React, {useState} from "react";
import {UserShort} from "@/interfaces/artistInterface";
import {useRouter} from "next/navigation";
import {PhotoSection} from "@/components/categories/artists/oneArtist/PhotoSection";

interface OneArtistsInterface {
    oneArtist: UserShort,
}

export const OneArtist = (props: OneArtistsInterface) => {
    const router = useRouter()

    const [role] = useState(Cookies.get('role'))
    const [currentId] = useState(Cookies.get('currentId'))
    const [artistId] = useState(Cookies.get('artistId'))
    const {status} = useSession();

    return (
        <li key={props.oneArtist.artistId}
            className={artists_scss.one_user}>
            <section className={artists_scss.user_data}>
                <section className={artists_scss.one_user_avatar}
                         onClick={() => {
                             Cookies.set('currentRole', ROLES.ARTIST)
                             Cookies.set('currentId', props.oneArtist.artistId)
                             router.push(MAIN_PATHS.PROFILE_ARTIST + '/' + props.oneArtist.artistId)
                         }
                         }>
                    {props.oneArtist.avatarUrl === '' ?
                        <img src={'/default_avatar_profile.svg'}
                             alt={'default_ava'}/>
                        :
                        <img src={props.oneArtist.avatarUrl} crossOrigin="anonymous"
                             alt={'default_ava'}/>
                    }
                </section>
                <div className={artists_scss.one_user_name}>{props.oneArtist.artistName}</div>
                {(artistId !== currentId && artistId !== props.oneArtist.artistId && role !== ROLES.ARTIST) || status === 'unauthenticated' ?
                    <section className={header_profile_scss.subscriber_section}>
                        <button className={'main_button'}
                                onClick={() => {
                                    if (status === 'authenticated') {
                                        // todo
                                    } else if (status === 'unauthenticated') {
                                        signIn("keycloak")
                                            .then(() => {
                                                Cookies.set('role', ROLES.CUSTOMER)
                                                Cookies.set('status', 'authenticated')
                                            })
                                    }
                                }}>
                            Поддержать
                        </button>
                        <button className={header_profile_scss.button_bell}
                                onClick={() => {
                                    if (status === 'authenticated') {
                                        // todo
                                    } else if (status === 'unauthenticated') {
                                        signIn("keycloak")
                                            .then(() => {
                                            })
                                    }
                                }}>
                            <Image src={bell_icon} className={header_profile_scss.bell_image}
                                   alt={'bell_icon'} width={0} height={0}/>
                        </button>
                    </section>
                    : null
                }
            </section>
            <PhotoSection/>
        </li>
    )
}