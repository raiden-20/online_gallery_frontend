import works_profile_scss from '@/scss/components/profile/categories/WorksProfile.module.scss'
import {
    OneWorkArtistProfileComponent
} from "@/components/profile/profile_elemets/categories/artist/artist_works/OneWorkArtistProfileComponent";
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";

import create_art_icon from '@/assets/icons/profile/create_art_button.svg'
import Image from "next/image";
import {ArtArtistInterface} from "@/interfaces/artInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

interface worksProfileInterface {
    arts_artist: ArtArtistInterface[]
    artistName: string

    GetArtsArtist(artistId: string, router: AppRouterInstance): void
}

export const WorksArtistProfileComponent = (props: worksProfileInterface) => {
    const router = useRouter()

    const [currentId] = useState(Cookies.get('currentId') as string)
    const [artistId] = useState(Cookies.get('artistId') as string)

    useEffect(() => {
        props.GetArtsArtist(currentId, router)
    }, []);


    return (
        <ul className={works_profile_scss.root}>
            {props.arts_artist.map((oneArt: ArtArtistInterface, index) => {
                return (
                    <li key={index}>
                        <OneWorkArtistProfileComponent artistName={props.artistName} oneArt={oneArt}/>
                    </li>
                )
            })
            }
            {currentId === artistId ?
                <button className={works_profile_scss.create_art_button}
                        onClick={() => router.push(MAIN_PATHS.CREATE_ART)}>
                    <Image src={create_art_icon} alt={'create_art_icon'}/>
                </button>
                : null}
        </ul>
    )
}