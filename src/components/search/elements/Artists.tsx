import search_scss from "@/scss/components/search/Search.module.scss";
import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {useEffect} from "react";
import Cookies from "js-cookie";

interface SearchCustomers {
    artistId: string,
    artistName: string,
    avatarUrl: string,
    viewsCount: string
}

interface ArtistsInterface {
    search: SearchCustomers[],
    input_name: string,

    getAllArtists(): void
    getSmthByName(input_name: string, type: string): void,
}

export const Artists = (props: ArtistsInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.getAllArtists()
    }, []);

    useEffect(() => {
        if (props.input_name === '') {
            props.getAllArtists()
        } else {
            props.getSmthByName(props.input_name, 'artist')
        }
    }, [props.input_name]);

    props.search.sort((a, b) => Number.parseInt(a.viewsCount) - Number.parseInt(b.viewsCount))

    return (
        <ul>
            {props.search.map((oneElement:SearchCustomers, index) => {
                return (
                    <li className={search_scss.one_element} key={index}
                        onClick={() => {
                            router.push(MAIN_PATHS.PROFILE_ARTIST + '/' + oneElement.artistId)
                            Cookies.set("currentRole", ROLES.ARTIST)
                            Cookies.set("currentId", oneElement.artistId)
                            if (Cookies.get('artistId') === oneElement.artistId) {
                                Cookies.set("role", ROLES.ARTIST)
                            }
                        }
                    }>
                        <img src={oneElement.avatarUrl === '' ? '/default_avatar_profile.svg' : oneElement.avatarUrl}
                             className={search_scss.one_element_photo}
                             alt={'avatar'} crossOrigin="anonymous"/>
                        <div className={'p ' + search_scss.one_element_name}>{oneElement.artistName}</div>
                    </li>
                )
            })}
        </ul>
    )
}