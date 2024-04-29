import works_profile_scss from '@/scss/components/profile/categories/WorksProfile.module.scss'
import {
    OneWorkArtistProfileComponent
} from "@/components/profile/profile_elemets/categories/artist/artist_works/OneWorkArtistProfileComponent";
import React, {useState} from "react";
import Cookies from "js-cookie";

import create_art_icon from '@/assets/icons/profile/create_art_button.svg'
import Image from "next/image";
import {ArtArtistInterface} from "@/interfaces/artInterface";

interface worksProfileInterface {
    arts: ArtArtistInterface[]
    artistName: string
}

export const WorksArtistProfileComponent = (props: worksProfileInterface) => {

    const [artistId] = useState(Cookies.get('artistId'))
    const [currentId] = useState(Cookies.get('currentId'))

    return (
        <ul className={works_profile_scss.root}>
            {props.arts.map((oneArt: ArtArtistInterface) => {
                return (
                    <li>
                        <OneWorkArtistProfileComponent artistName={props.artistName} oneArt={oneArt}/>
                    </li>
                )
            })
            }
            {currentId === artistId ?
                <button className={works_profile_scss.create_art_button}>
                    <Image src={create_art_icon} alt={'create_art_icon'}/>
                </button>
                : null}
        </ul>
    )
}