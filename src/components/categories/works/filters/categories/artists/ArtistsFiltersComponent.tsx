import {useCallback, useEffect, useState} from "react";
import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";
import search_icon from '@/assets/icons/categories/search.svg'
import {Filters} from "@/interfaces/filters";
import {UserShort} from "@/interfaces/artistInterface";

interface filterInterface {
    currentFilters: Filters

    setFiltersArtistsThunk(artists: string[]): void

    artists: UserShort[]

    getAllArtists(): void
}

export const ArtistsFiltersComponent = (props: filterInterface) => {
    const [isOpen, setIsOpen] = useState(false)

    const [filteredArtists, setFilteredArtists] = useState(props.artists)
    const [input_artist, setInput_artist] = useState('')

    const setInputFilteredArtists = useCallback((event: string) => {
        setInput_artist(event)
        if (event === '') {
            setFilteredArtists(props.artists);
        } else {
            if (props.artists.length > 0) {
                const filtered = props.artists.filter((oneArtist) =>
                    oneArtist.artistName.toLowerCase().includes(event.toLowerCase())
                );
                setFilteredArtists(filtered);
            }
        }
    }, [])

    useEffect(() => {
        props.getAllArtists()
    }, []);

    useEffect(() => {
        if (props.artists.length > 0) {
            const arr = [...props.artists]

            for (let i = 0; i < arr.length; i++) {
                arr[i].isActive = false
            }
            setFilteredArtists(arr);
        }
    }, [props.artists]);

    const setArtistsCheckBox = useCallback((event: boolean, artistId: string) => {
        if (event) {
            let flag = false
            props.currentFilters.artists.map((oneArtistId => {
                if (oneArtistId === artistId) {
                    flag = true
                }
            }))
            if (!flag) {
                let artists = [...props.currentFilters.artists]
                artists.push(artistId)
                props.setFiltersArtistsThunk(artists)
            }
        } else {
            props.currentFilters.artists.map(((oneArtistId, index) => {
                if (oneArtistId === artistId) {
                    let artists = [...props.currentFilters.artists]
                    artists.splice(index, 1)
                    props.setFiltersArtistsThunk(artists)
                }
            }))
        }
        const artistsFilter = [...filteredArtists]
        artistsFilter.some(one =>{
            if (one.artistId === artistId) {
                one.isActive = !one.isActive
            }
        })
        setFilteredArtists(artistsFilter)
    },[])

    if (props.artists.length > 0) {
        return (
            <section className={filters_scss.category_root}>
                <header className={filters_scss.category_header}>
                    <div className={filters_scss.category_title}>Художник</div>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <Image src={isOpen ? open_icon : close_icon} className={filters_scss.button_open_close}
                               alt={'open or close icon'}/>
                    </button>
                </header>
                {isOpen ?
                    <section className={filters_scss.section_with_search}>
                        <section className={filters_scss.search}>
                            <Image src={search_icon} alt={'search_icon'}/>
                            <input value={input_artist}
                                   placeholder={'Поиск'}
                                   onChange={(event) =>
                                       setInputFilteredArtists(event.target.value)}/>
                        </section>
                        <ul className={filters_scss.size_section + ' ' + filters_scss.checkbox_section + ' scrollbar'}>
                            {filteredArtists.map((oneArtist, index) => {
                                return (
                                    <li className={filters_scss.size_one_section} key={index}>
                                        <input type={'checkbox'} checked={oneArtist.isActive}
                                               onChange={(event) =>
                                                   setArtistsCheckBox(event.target.checked, oneArtist.artistId)}/>
                                        <div>{oneArtist.artistName}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                    : null}
            </section>
        )
    } else {
        return <>почему...</>
    }
}