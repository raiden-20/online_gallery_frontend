import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";
import {useCallback, useState} from "react";
import {FilteredElementsInterface, Filters} from "@/interfaces/filters";

interface filterInterface {
    year: FilteredElementsInterface[]
    currentFilters: Filters
    setFiltersYearThunk(year: string[]): void
}

export const YearFiltersComponent = (props: filterInterface) => {
    const [isOpen, setIsOpen] = useState(false)
    const [filteredYear, setFilteredYear] = useState(props.year)

    const setYearCheckBox = useCallback((event: boolean, artistId: string, index: number) => {
        if (event) {
            let flag = false
            props.currentFilters.artists.map((oneArtistId => {
                if (oneArtistId === artistId) {
                    flag = true
                }
            }))
            if (!flag) {
                let year = [...props.currentFilters.year]
                year.push(artistId)
                props.setFiltersYearThunk(year)
            }
        } else {
            props.currentFilters.artists.map(((oneArtistId, index) => {
                if (oneArtistId === artistId) {
                    let artists = [...props.currentFilters.year]
                    artists.splice(index, 1)
                }
            }))
        }
        const artistsFilter = [...filteredYear]
        artistsFilter[index].isActive = !artistsFilter[index].isActive
        setFilteredYear(artistsFilter)
    },[])

    return (
        <section className={filters_scss.category_root}>
            <header className={filters_scss.category_header}>
                <div className={filters_scss.category_title}>Год</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={filters_scss.button_open_close}
                           alt={'open or close icon'}/>
                </button>
            </header>
            {isOpen ?
                <ul className={filters_scss.size_section + ' ' + filters_scss.checkbox_section + ' scrollbar'}>
                    {filteredYear.map((oneDate, index) => {
                        return (
                            <li className={filters_scss.size_one_section} key={index}>
                                <input type={'checkbox'} checked={oneDate.isActive}
                                       onChange={(event) =>
                                           setYearCheckBox(event.target.checked, oneDate.data, index)}/>
                                <div>{oneDate.data}</div>
                            </li>
                        )
                    })}
                </ul>
                : null}
        </section>
    )
}