import artists_scss from "@/scss/components/categories/Artists.module.scss";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import React from "react";
import {UserShort} from "@/interfaces/artistInterface";
import {useRouter} from "next/navigation";
import {PhotoSection} from "@/components/categories/artists/oneArtist/PhotoSection";

interface OneArtistsInterface {
    oneArtist: UserShort,
}

export const OneArtist = (props: OneArtistsInterface) => {
    const router = useRouter()

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
            </section>
            <PhotoSection photos={props.oneArtist.photos}/>
        </li>
    )
}