import filters_scss from '@/scss/components/categories/Filters.module.scss'
import '@/scss/globals/pages.scss'
import Image from "next/image";

import close_icon from '@/assets/icons/categories/close.svg'
import {PriceFiltersComponent} from "@/components/categories/works/filters/categories/PriceFiltersComponent";
import {SizeFiltersComponent} from "@/components/categories/works/filters/categories/SizeFiltersComponent";
import {FrameFiltersComponent} from "@/components/categories/works/filters/categories/FrameFiltersComponent";
import {StatusFilterComponent} from "@/components/categories/works/filters/categories/StatusFilterComponent";
import {Filters} from "@/interfaces/filters";
import {
    ArtistsFiltersContainer
} from "@/components/categories/works/filters/categories/artists/ArtistsFiltersContainer";
import {YearFiltersContainer} from "@/components/categories/works/filters/categories/year/YearFiltersContainer";
import {
    MaterialsFiltersContainer
} from "@/components/categories/works/filters/categories/materials/MaterialsFiltersContainer";
import {TagsFiltersContainer} from "@/components/categories/works/filters/categories/tags/TagsFiltersContainer";
import {useCallback} from "react";

interface filtersInterface {
    setIsFiltersOpen(isFiltersOpen: boolean): void

    currentFilters: Filters

    setFiltersPriceStartThunk(priceStart: string): void

    setFiltersPriceEndThunk(priceEnd: string): void

    setFiltersSizeThunk(size: string[]): void

    setFiltersArtistsThunk(artists: string[]): void

    setFiltersYearThunk(year: string[]): void

    setFiltersMaterialsThunk(materials: string[]): void

    setFiltersTagsThunk(tags: string[]): void

    setFiltersFrameThunk(frame: boolean | null): void

    setFiltersStatusThunk(status: boolean | null): void
}

export const FiltersComponent = (props: filtersInterface) => {

    const clearFilters = useCallback(() => {
        props.setFiltersPriceStartThunk('')
        props.setFiltersPriceEndThunk('')
        props.setFiltersSizeThunk([])
        props.setFiltersArtistsThunk([])
        props.setFiltersYearThunk([])
        props.setFiltersMaterialsThunk([])
        props.setFiltersTagsThunk([])
        props.setFiltersFrameThunk(null)
        props.setFiltersStatusThunk(null)
    }, [])

    // todo фльтры применить

    return (
        <section className={filters_scss.page}>
            <section className={'bg'} onClick={() => props.setIsFiltersOpen(false)}></section>
            <main className={filters_scss.root}>
                <header className={filters_scss.header}>
                    <div className={filters_scss.title}>Фильтры</div>
                    <button onClick={() => props.setIsFiltersOpen(false)}>
                        <Image src={close_icon} alt={'close icon'}/>
                    </button>
                </header>
                <section className={filters_scss.main}>
                    <section>
                        <PriceFiltersComponent currentFilters={props.currentFilters}
                                               setFiltersPriceStartThunk={props.setFiltersPriceStartThunk}
                                               setFiltersPriceEndThunk={props.setFiltersPriceEndThunk}/>
                    </section>
                    <section>
                        <SizeFiltersComponent currentFilters={props.currentFilters}
                                              setFiltersSizeThunk={props.setFiltersSizeThunk}/>
                    </section>
                    <section>
                        <ArtistsFiltersContainer currentFilters={props.currentFilters}
                                                 setFiltersArtistsThunk={props.setFiltersArtistsThunk}/>
                    </section>
                    <section>
                        <YearFiltersContainer currentFilters={props.currentFilters}
                                              setFiltersYearThunk={props.setFiltersYearThunk}/>
                    </section>
                    <section>
                        <MaterialsFiltersContainer currentFilters={props.currentFilters}
                                                   setFiltersMaterialsThunk={props.setFiltersMaterialsThunk}/>
                    </section>
                    <section>
                        <TagsFiltersContainer currentFilters={props.currentFilters}
                                              setFiltersTagsThunk={props.setFiltersTagsThunk}/>
                    </section>
                    <section>
                        <FrameFiltersComponent currentFilters={props.currentFilters}
                                               setFiltersFrameThunk={props.setFiltersFrameThunk}/>
                    </section>
                    <section>
                        <StatusFilterComponent currentFilters={props.currentFilters}
                                               setFiltersStatusThunk={props.setFiltersStatusThunk}/>
                    </section>
                </section>
                <footer className={filters_scss.footer}>
                    <button className={'cancel_button'}
                            onClick={clearFilters}>
                        Сбросить все
                    </button>
                    <button className={'main_button'}>
                        Применить
                    </button>
                </footer>
            </main>
        </section>
    )
}