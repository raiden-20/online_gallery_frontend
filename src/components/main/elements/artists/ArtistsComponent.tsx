import main_scss from "@/scss/components/main/main_page/Main.module.scss";

import artists_scss from '@/scss/components/main/main_page/Artists.module.scss'
import {UserShort} from "@/interfaces/artistInterface";
import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {useEffect} from "react";
import {getAllArtists} from "@/store/thunks/categoriesThunk";
import Cookies from "js-cookie";

interface artistsMain {
    artists: UserShort[]
    getAllArtists(): void
}


export const ArtistsComponent = (props: artistsMain) => {
    const router = useRouter()

    useEffect(() => {
        props.getAllArtists()
    }, []);

    return (
        <section className={main_scss.root}>
            <header className={main_scss.header}>Художники</header>
            <ul className={artists_scss.ul}>
                {props.artists.map((oneArtist : UserShort, index) => {
                    return (
                        <li className={artists_scss.one_artist} key={index}
                        onClick={() => {
                            Cookies.set('currentRole', ROLES.ARTIST)
                            if (Cookies.get('artistId') === oneArtist.artistId) {
                                Cookies.set('role', ROLES.ARTIST)
                            }
                            Cookies.set('currentId', oneArtist.artistId)
                            router.push(MAIN_PATHS.PROFILE_ARTIST + `/${oneArtist.artistId}`)
                        }}>
                            <img src={oneArtist.avatarUrl === '' ? '/default_avatar_profile.svg' : oneArtist.avatarUrl} className={artists_scss.one_artist_img}
                                 alt={'one work'}
                                 crossOrigin="anonymous"/>
                            <section className={artists_scss.one_artist_name_section}>
                                <div className={artists_scss.one_artist_name}>{oneArtist.artistName}</div>
                            </section>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}