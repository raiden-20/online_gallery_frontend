import {WorksComponent} from "@/components/profile/profile_elemets/categories/works/WorksComponent";
import artists_scss from "@/scss/components/categories/Artists.module.scss";
import React, {useState} from "react";

import filter_icon from '@/assets/icons/categories/filter.svg'
import Image from "next/image";

import works_root_scss from '@/scss/components/categories/WorksRoot.module.scss'
import {usePathname} from "next/navigation";
import {PATHS_CATEGORY} from "@/paths/main";
import {FiltersComponent} from "@/components/categories/works/filters/FiltersComponent";

export const WorksRoot = () => {

    const pathname = usePathname().split('/')
    const lastPath = '/' + pathname[pathname.length - 1]

    const [isFiltersOpen, setIsFiltersOpen] = useState(true)

    const select = [
        {popular: 'popular', value: 'популярности'},
        {popular: 'alphabet', value: 'алфавиту'},
    ]

    return (
        <section className={works_root_scss.root}>
            {isFiltersOpen ? <FiltersComponent setIsFiltersOpen={setIsFiltersOpen}/> : null}
            <header className={works_root_scss.header}>
                {lastPath === PATHS_CATEGORY.PAINTINGS ? 'Картины' :
                    lastPath === PATHS_CATEGORY.PHOTO ? 'Фотографии' :
                        lastPath === PATHS_CATEGORY.SCULPTURES ? 'Скульптуры' : null}
            </header>
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
            <WorksComponent/>
        </section>
    )
}