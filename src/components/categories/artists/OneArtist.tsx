import artists_scss from "@/scss/components/categories/Artists.module.scss";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";
import {signIn, useSession} from "next-auth/react";
import Image from "next/image";
import bell_icon from "@/assets/icons/profile/bell_icon.svg";
import back_icon from "@/assets/icons/search/back.svg";
import next_icon from "@/assets/icons/search/next.svg";
import React, {useRef, useState} from "react";
import {UserShort} from "@/interfaces/artistInterface";
import {useRouter} from "next/navigation";

interface OneArtistsInterface {
    oneArtist: UserShort,
}

export const OneArtist = (props: OneArtistsInterface) => {
    const router = useRouter()

    const [role] = useState(Cookies.get('role'))
    const [currentId] = useState(Cookies.get('currentId'))
    const [artistId] = useState(Cookies.get('artistId'))
    const {data: session, status} = useSession();

    const [isHover, setIsHover] = useState(false)


    const listRef = useRef<HTMLUListElement>(null);


    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollLeft += 200;
        }
    };

    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollLeft -= 200;
        }
    };

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
                        <img src={'/default_avatar_profile.jpg'}
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
            <ul ref={listRef}
                className={artists_scss.one_user_photo}
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                {isHover ?
                    <button className={artists_scss.back_icon}
                            onMouseOver={() => setIsHover(true)}
                            onClick={scrollLeft}>
                        <Image src={back_icon} alt={'next_icon'}/>
                    </button>
                    : null}
                <li>
                    <Image src={'/default_avatar_profile.jpg'} className={artists_scss.onePhoto}
                           alt={'photo'} width={0} height={0}/>
                </li>
                <li>
                    <Image src={'/default_avatar_profile.jpg'} className={artists_scss.onePhoto}
                           alt={'photo'} width={0} height={0}/>
                </li>
                <li>
                    <Image src={'/default_avatar_profile.jpg'} className={artists_scss.onePhoto}
                           alt={'photo'} width={0} height={0}/>
                </li>
                <li>
                    <Image src={'/default_avatar_profile.jpg'} className={artists_scss.onePhoto}
                           alt={'photo'} width={0} height={0}/>
                </li>
                <li>
                    <Image src={'/default_avatar_profile.jpg'} className={artists_scss.onePhoto}
                           alt={'photo'} width={0} height={0}/>
                </li>
            </ul>
            {isHover ?
                <button className={artists_scss.next_icon}
                        onMouseOver={() => setIsHover(true)}
                        onClick={scrollRight}>
                    <Image src={next_icon} alt={'next_icon'}/>
                </button>
                : null}
        </li>
    )
}