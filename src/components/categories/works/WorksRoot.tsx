import React from "react";

import filter_icon from '@/assets/icons/categories/filter.svg'

import works_root_scss from '@/scss/components/categories/WorksRoot.module.scss'
import {usePathname} from "next/navigation";
import {PATHS_CATEGORY} from "@/paths/main";
import {FiltersContainer} from "@/components/categories/works/filters/FIltersContainer";
import {Filters} from "@/interfaces/filters";
import {WorkArtsContainer} from "@/components/categories/works/works/WorkArtsContainer";
import {AuctionsContainer} from "@/components/categories/works/auctions/AuctionsContainer";

interface workRootInterface {
    currentFilters: Filters
}

export const WorksRoot = (props: workRootInterface) => {
    const pathname = usePathname().split('/')
    const lastPath = '/' + pathname[pathname.length - 1]

    //const [isFiltersOpen, setIsFiltersOpen] = useState(false)

    // const select = [
    //     {popular: '-', value: '-'},
    //     {popular: 'popular', value: 'популярности'},
    //     {popular: 'alphabet', value: 'алфавиту'},
    // ]


    return (
        <section className={works_root_scss.root}>
            {/*{isFiltersOpen ? <FiltersContainer setIsFiltersOpen={setIsFiltersOpen} */}
            {/*                                   currentFilters={props.currentFilters}/>*/}
            {/*    : null}*/}
            <header className={works_root_scss.header}>
                {lastPath === PATHS_CATEGORY.PAINTINGS ? 'Картины' :
                lastPath === PATHS_CATEGORY.PHOTOS ? 'Фотографии' :
                lastPath === PATHS_CATEGORY.SCULPTURES ? 'Скульптуры' :
                lastPath === PATHS_CATEGORY.AUCTIONS ? 'Аукционы'
                : null}
            </header>
            {/*<nav className={works_root_scss.nav}>*/}
            {/*    <button className={works_root_scss.filters_button}*/}
            {/*            onClick={() => setIsFiltersOpen(true)}>*/}
            {/*        <Image src={filter_icon} alt={'filter icon'}/>*/}
            {/*        <div>Фильтры</div>*/}
            {/*    </button>*/}
            {/*    <section className={artists_scss.sort_section}>*/}
            {/*        <div>Сортировать по:</div>*/}
            {/*        <select className={artists_scss.select}>*/}
            {/*            {select.map((option: { popular: string, value: string }) => {*/}
            {/*                return (*/}
            {/*                    <option value={option.popular}>{option.value}</option>*/}
            {/*                )*/}
            {/*            })}*/}
            {/*        </select>*/}
            {/*    </section>*/}
            {/*</nav>*/}

            {/*currentFilters={props.currentFilters}*/}
            {lastPath === PATHS_CATEGORY.AUCTIONS ?
                <AuctionsContainer/>
            :
                <WorkArtsContainer/>
            }
        </section>
    )
}