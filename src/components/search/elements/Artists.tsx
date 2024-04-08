import search_scss from "@/scss/components/search/Search.module.scss";
import Image from "next/image";
import default_avatar from "@/assets/default/default_ava_nav.svg";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {useEffect} from "react";

interface SearchCustomers {
    artistId: string,
    artistName: string,
    avatarUrl: string,
    viewsCount: string
}

interface ArtistsInterface {
    artists: SearchCustomers[],
    input_name: string,

    getAllArtists(): void
    getSmthByName(input_name: string, type: string): void,
}

export const Artists = (props: ArtistsInterface) => {
    const router = useRouter()

    useEffect(() => {
        if (props.input_name === '') {
            props.getAllArtists()
        } else {
            props.getSmthByName(props.input_name, 'artist')
        }
    }, [props.input_name]);

    props.artists.sort((a, b) => Number.parseInt(a.viewsCount) - Number.parseInt(b.viewsCount))

    return (
        <ul>
            {props.artists.map((oneElement:SearchCustomers) => {
                return (
                    <li className={search_scss.one_element}
                        onClick={() => router.push(MAIN_PATHS.PROFILE)}>
                        <Image loader={() => oneElement.avatarUrl}
                               src={oneElement.avatarUrl === '' ? default_avatar : oneElement.avatarUrl}
                               className={search_scss.one_element_photo}
                               alt={'avatar'} width={0} height={0}/>
                        <div className={search_scss.one_element_name}>{oneElement.artistName}</div>
                    </li>
                )
            })}
        </ul>
    )
}