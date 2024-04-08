import {useRouter} from "next/navigation";
import Image from "next/image";

import artists_scss from '@/scss/components/categories/Artists.module.scss'

import {UserShort} from "@/interfaces/artistInterface";
import {MAIN_PATHS} from "@/paths/main";
import {useEffect} from "react";

interface ArtistsInterface {
    artists: UserShort[],

    getAllArtists(): void
}

export const Artists = (props: ArtistsInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.getAllArtists()
    }, []);

    return (
        <section className={artists_scss.root}>
            <header className={artists_scss.header}>
                <div className={artists_scss.page_title}>Художники</div>
                <section className={artists_scss.sort_section}>
                    <div>Сортировать по:</div>
                    <select className={artists_scss.select}>
                        <option value="popular">популярности</option>
                        <option value="alphabet">алфавиту</option>
                    </select>
                </section>
            </header>
            <main>
                <ul className={artists_scss.users}>
                    {props.artists.map((oneArtist: UserShort) => {
                        return (
                            <li className={artists_scss.one_user}
                                onClick={() => router.push(MAIN_PATHS.PROFILE_CUSTOMER + '/' + oneArtist.id)}>
                                <Image loader={() => oneArtist.avatarUrl}
                                       src={oneArtist.avatarUrl} className={artists_scss.one_user_avatar}
                                       alt={'default_ava'} width={0} height={0}/>
                                <div className={artists_scss.one_user_name}>{oneArtist.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </section>
    )
}