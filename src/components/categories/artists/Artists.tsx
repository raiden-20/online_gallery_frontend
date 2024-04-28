import artists_scss from '@/scss/components/categories/Artists.module.scss'

import {UserShort} from "@/interfaces/artistInterface";
import React, {useEffect} from "react";
import {OneArtist} from "@/components/categories/artists/oneArtist/OneArtist";

interface ArtistsInterface {
    artists: UserShort[],

    getAllArtists(): void
}

export const Artists = (props: ArtistsInterface) => {
    const select = [
        {popular: 'popular', value: 'популярности'},
        {popular: 'alphabet', value: 'алфавиту'},
    ]

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
                        {select.map((option: {popular: string, value: string}) => {
                            return (
                                <option value={option.popular}>{option.value}</option>
                            )
                        })}
                    </select>
                </section>
            </header>
            <main>
                <ul className={artists_scss.users}>
                    {props.artists.map((oneArtist: UserShort) => {
                        return <OneArtist oneArtist={oneArtist}/>
                    })}
                </ul>
            </main>
        </section>
    )
}