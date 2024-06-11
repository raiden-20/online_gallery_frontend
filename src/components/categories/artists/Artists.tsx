import artists_scss from '@/scss/components/categories/Artists.module.scss'
import {UserShort} from "@/interfaces/artistInterface";
import React, {useCallback, useEffect, useState} from "react";
import {OneArtist} from "@/components/categories/artists/oneArtist/OneArtist";
import Select, {SingleValue} from "react-select";

interface ArtistsInterface {
    artists: UserShort[],
    getAllArtists(): void
}

export const Artists = (props: ArtistsInterface) => {
    const select = [
        {value: 'popular', label: 'популярности'},
        {value: 'alphabet', label: 'алфавиту'},
    ]
    const [selectedValue, setSelectedValue] = useState<{ value: string, label: string }>({value: 'popular', label: 'популярности'})
    const [filteredArtists, setFilteredArtists] = useState<UserShort[]>()

    useEffect(() => {
        props.getAllArtists()
    }, []);

    useEffect(() => {
        setSelectedValue({value: 'popular', label: 'популярности'})
        const arr = [...props.artists.sort((first, second) => (second.viewsCount - first.viewsCount))]
        setFilteredArtists(arr)
    }, [props.artists]);

    useEffect(() => {
        switch (selectedValue.value) {
            case 'popular' : {
                const arr = [...props.artists.sort((first, second) => (second.viewsCount - first.viewsCount))]
                setFilteredArtists(arr)
                break
            }
            case 'alphabet' : {
                const arr = [...props.artists.sort((first, second) => (first.artistName.localeCompare(second.artistName)))]
                setFilteredArtists(arr)
            }
        }
    }, [selectedValue]);

    const setOnChange = useCallback((newValue: SingleValue<{ value: string; label: string; }>) => {
        if (newValue) {
            setSelectedValue(newValue)
        }
    },[])

    if (filteredArtists !== undefined) {
        return (
            <section className={artists_scss.root}>
                <header className={artists_scss.header}>
                    <div className={artists_scss.page_title}>Художники</div>
                    <section className={artists_scss.sort_section}>
                        <div>Сортировать по:</div>
                        <Select
                            value={selectedValue}
                            noOptionsMessage={() => '-'}
                            options={select}
                            isSearchable={false}
                            classNamePrefix={'custom-select-artists'}
                            onChange={setOnChange}/>
                    </section>
                </header>
                <main>
                    <ul className={artists_scss.users}>
                        {filteredArtists.map((oneArtist: UserShort, index) => {
                            return <OneArtist oneArtist={oneArtist} key={index}/>
                        })}
                    </ul>
                </main>
            </section>
        )
    } else {
        return <></>
    }
}