import {useState} from "react";
import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";
import search_icon from '@/assets/icons/categories/search.svg'

export const ArtistsFiltersComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const artists = ['Художник 1', 'Художник 1', 'Художник 1', 'Художник 1', 'Художник 1', 'Художник 1', 'Художник 1', 'Художник 1', 'Художник 1', 'Художник 1']

    return (
        <section className={filters_scss.category_root}>
            <header className={filters_scss.category_header}>
                <div className={filters_scss.category_title}>Художник</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen? open_icon : close_icon} className={filters_scss.button_open_close}
                           alt={'open or close icon'}/>
                </button>
            </header>
            {isOpen ?
                <section className={filters_scss.section_with_search}>
                    <section className={filters_scss.search}>
                        <Image src={search_icon} alt={'search_icon'}/>
                        <input placeholder={'Поиск'}/>
                    </section>
                    <ul className={filters_scss.size_section + ' ' + filters_scss.checkbox_section + ' scrollbar'}>
                        {artists.map(oneArtist => {
                            return (
                                <li className={filters_scss.size_one_section}>
                                    <input type={'checkbox'}/>
                                    <div>{oneArtist}</div>
                                </li>
                            )
                            })}
                    </ul>
                </section>
                : null}
        </section>
    )
}