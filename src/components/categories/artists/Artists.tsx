import artists_scss from '@/scss/components/categories/Artists.module.scss'
import {UserShort} from "@/interfaces/artistInterface";
import React, {useCallback, useEffect, useState} from "react";
import {OneArtist} from "@/components/categories/artists/oneArtist/OneArtist";
import Select, {SingleValue} from "react-select";
import works_root_scss from "@/scss/components/categories/WorksRoot.module.scss";
import Image from "next/image";
import search_icon from "@/assets/icons/search/search.svg";
import search_scss from "@/scss/components/search/Search.module.scss";
import delete_icon from "@/assets/icons/search/delete.svg";

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
    const [input_name, setInput_name] = useState('')

    useEffect(() => {
        props.getAllArtists()
    }, []);

    useEffect(() => {
        setSelectedValue({value: 'popular', label: 'популярности'})
        const arr = [...props.artists.sort((first, second) => (second.viewsCount - first.viewsCount))]
        setFilteredArtists(arr)
    }, [props.artists]);

    useEffect(() => {
        if (input_name !== '') {
            const arr = [...props.artists.filter(one => one.artistName.toLowerCase().includes(input_name))]
            setFilteredArtists(arr)
        } else {
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
        }

    }, [input_name]);

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
                    <section className={works_root_scss.nav_section}>
                        <Image src={search_icon} className={search_scss.img}
                               alt={'search_icon'} width={0} height={0}/>
                        <input value={input_name} onChange={(event) => setInput_name(event.target.value)}
                               className={search_scss.input} placeholder={'Поиск'}/>
                        <button className={search_scss.delete_button}>
                            <Image src={delete_icon} className={search_scss.img}
                                   onClick={() => setInput_name('')}
                                   alt={'search_icon'} width={0} height={0}/>
                        </button>
                    </section>
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