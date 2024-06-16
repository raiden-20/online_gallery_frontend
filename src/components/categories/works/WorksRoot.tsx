import React, {useState} from "react";

import filter_icon from '@/assets/icons/categories/filter.svg'
import works_root_scss from '@/scss/components/categories/WorksRoot.module.scss'
import artists_scss from '@/scss/components/categories/Artists.module.scss'
import {usePathname} from "next/navigation";
import {PATHS_CATEGORY} from "@/paths/main";
import {FiltersContainer} from "@/components/categories/works/filters/FIltersContainer";
import {Filters} from "@/interfaces/filters";
import {WorkArtsContainer} from "@/components/categories/works/works/WorkArtsContainer";
import {AuctionsContainer} from "@/components/categories/works/auctions/AuctionsContainer";
import Image from "next/image";
import search_scss from "@/scss/components/search/Search.module.scss";
import search_icon from "@/assets/icons/search/search.svg";
import delete_icon from "@/assets/icons/search/delete.svg";
interface workRootInterface {
    currentFilters: Filters
}

export const WorksRoot = (props: workRootInterface) => {
    const pathname = usePathname().split('/')
    const lastPath = '/' + pathname[pathname.length - 1]

    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    const [setFilters, setSetFilters] = useState(false)
    const [input_name, setInput_name] = useState('')

    const select = [
        {popular: '-', value: '-'},
        {popular: 'popular', value: 'популярности'},
        {popular: 'alphabet', value: 'алфавиту'},
    ]

    return (
        <section>
            {isFiltersOpen ? <FiltersContainer setIsFiltersOpen={setIsFiltersOpen}
                                               currentFilters={props.currentFilters}
                                               setSetFilters={setSetFilters}/>
                : null}
            <section className={works_root_scss.root}>
                <header className={works_root_scss.header}>
                    {lastPath === PATHS_CATEGORY.PAINTINGS ? 'Картины' :
                        lastPath === PATHS_CATEGORY.PHOTOS ? 'Фотографии' :
                            lastPath === PATHS_CATEGORY.SCULPTURES ? 'Скульптуры' :
                                lastPath === PATHS_CATEGORY.AUCTIONS ? 'Аукционы'
                                    : null}
                </header>
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
                <nav className={works_root_scss.nav}>
                    <button className={works_root_scss.filters_button}
                            onClick={() => setIsFiltersOpen(true)}>
                        <Image src={filter_icon} alt={'filter icon'}/>
                        <div>Фильтры</div>
                    </button>
                    <section className={artists_scss.sort_section}>
                        <div>Сортировать по:</div>
                        <select className={artists_scss.select}>
                            {select.map((option: { popular: string, value: string }) => {
                                return (
                                    <option value={option.popular}>{option.value}</option>
                                )
                            })}
                        </select>
                    </section>
                </nav>

                {lastPath === PATHS_CATEGORY.AUCTIONS ?
                    <AuctionsContainer input_name={input_name}
                                       currentFilters={props.currentFilters}/>
                    :
                    <WorkArtsContainer currentFilters={props.currentFilters}
                                       setFilters={setFilters}
                                       setSetFilters={setSetFilters}
                                       input_name={input_name}/>
                }
            </section>
        </section>
    )
}