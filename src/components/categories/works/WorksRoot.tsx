import artists_scss from "@/scss/components/categories/Artists.module.scss";
import React, {useEffect, useState} from "react";

import filter_icon from '@/assets/icons/categories/filter.svg'
import Image from "next/image";

import works_root_scss from '@/scss/components/categories/WorksRoot.module.scss'
import {usePathname} from "next/navigation";
import {PATHS_CATEGORY} from "@/paths/main";
import {FiltersComponent} from "@/components/categories/works/filters/FiltersComponent";
import {Works} from "@/components/categories/works/works/Works";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {ART_TYPES} from "@/paths/elements";

interface workRootInterface {
    arts: ArtShortInterface[]
    GetArtsCategories(type: string, router: AppRouterInstance): void
}

export const WorksRoot = (props: workRootInterface) => {

    const pathname = usePathname().split('/')
    const lastPath = '/' + pathname[pathname.length - 1]

    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    const [category, setCategory] = useState(ART_TYPES.PAINTING)

    const select = [
        {popular: '-', value: '-'},
        {popular: 'popular', value: 'популярности'},
        {popular: 'alphabet', value: 'алфавиту'},
    ]

    useEffect(() => {
        switch (lastPath) {
            case 'Картины': {
                setCategory(ART_TYPES.PAINTING)
                break
            }
            case 'Фотографии': {
                setCategory(ART_TYPES.PHOTO)
                break
            }
            case 'Скульптуры': {
                setCategory(ART_TYPES.SCULPTURE)
                break
            }
        }
    }, []);

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
            <Works arts={props.arts} category={category} GetArtsCategories={props.GetArtsCategories}/>
        </section>
    )
}