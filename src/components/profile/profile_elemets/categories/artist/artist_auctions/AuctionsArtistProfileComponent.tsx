import auction_profile_scss from '@/scss/components/categories/auctions/Auction.module.scss'
import works_profile_scss from '@/scss/components/profile/categories/WorksProfile.module.scss'
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import create_art_icon from '@/assets/icons/profile/create_art_button.svg'
import Image from "next/image";
import {ArtArtistInterface} from "@/interfaces/artInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {OneAuctionArtistProfileComponent} from "@/components/profile/profile_elemets/categories/artist/artist_auctions/OneAuctionArtistProfileComponent";

interface worksProfileInterface {
    arts_artist: ArtArtistInterface[]
    artistName: string

    GetArtsArtist(artistId: string, router: AppRouterInstance): void
}

export const AuctionsArtistProfileComponent = (props: worksProfileInterface) => {
    const router = useRouter()

    const [currentId] = useState(Cookies.get('currentId') as string)
    const [artistId] = useState(Cookies.get('artistId') as string)

    useEffect(() => {
        props.GetArtsArtist(currentId, router)
    }, []);


    return (
        <main className={auction_profile_scss.root}>
            <section className={auction_profile_scss.one_section}>
                <header className={auction_profile_scss.one_section_header}>Текущие аукционы</header>
                <ul className={auction_profile_scss.ul}>
                    {props.arts_artist.map((oneArt: ArtArtistInterface, index) => {
                        return (
                            <li key={index}>
                                <OneAuctionArtistProfileComponent artistName={props.artistName} oneArt={oneArt}/>
                            </li>
                        )
                    })
                    }
                    {currentId === artistId ? // todo
                        <button className={works_profile_scss.create_art_button}
                                onClick={() => router.push(MAIN_PATHS.CREATE_ART)}>
                            <Image src={create_art_icon} alt={'create_art_icon'}/>
                        </button>
                        : null}
                </ul>
            </section>
            <section className={auction_profile_scss.one_section}>
                <header className={auction_profile_scss.one_section_header}>Предстоящие аукционы</header>
                <ul className={auction_profile_scss.ul}>
                    {props.arts_artist.map((oneArt: ArtArtistInterface, index) => {
                        return (
                            <li key={index}>
                                <OneAuctionArtistProfileComponent artistName={props.artistName} oneArt={oneArt}/>
                            </li>
                        )
                    })
                    }
                    {currentId === artistId ? // todo
                        <button className={works_profile_scss.create_art_button}
                                onClick={() => router.push(MAIN_PATHS.CREATE_ART)}>
                            <Image src={create_art_icon} alt={'create_art_icon'}/>
                        </button>
                        : null}
                </ul>
            </section>
            <section className={auction_profile_scss.one_section}>
                <header className={auction_profile_scss.one_section_header}>Прошедшие аукционы</header>
                <ul className={auction_profile_scss.ul}>
                    {props.arts_artist.map((oneArt: ArtArtistInterface, index) => {
                        return (
                            <li key={index}>
                                <OneAuctionArtistProfileComponent artistName={props.artistName} oneArt={oneArt}/>
                            </li>
                        )
                    })
                    }
                    {currentId === artistId ? // todo
                        <button className={works_profile_scss.create_art_button}
                                onClick={() => router.push(MAIN_PATHS.CREATE_ART)}>
                            <Image src={create_art_icon} alt={'create_art_icon'}/>
                        </button>
                        : null}
                </ul>
            </section>
        </main>


    )
}