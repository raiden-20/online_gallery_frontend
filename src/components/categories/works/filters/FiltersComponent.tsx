import filters_scss from '@/scss/components/categories/Filters.module.scss'
import '@/scss/globals/pages.scss'
import Image from "next/image";

import close_icon from '@/assets/icons/categories/close.svg'
import {PriceFiltersComponent} from "@/components/categories/works/filters/categories/PriceFiltersComponent";
import {SizeFiltersComponent} from "@/components/categories/works/filters/categories/SizeFiltersComponent";
import {ArtistsFiltersComponent} from "@/components/categories/works/filters/categories/ArtistsFiltersComponent";
import {YearFiltersComponent} from "@/components/categories/works/filters/categories/YearFiltersComponent";
import {MaterialsFiltersComponent} from "@/components/categories/works/filters/categories/MaterialsFiltersComponent";
import {TagsFiltersComponent} from "@/components/categories/works/filters/categories/TagsFiltersComponent";
import {FrameFiltersComponent} from "@/components/categories/works/filters/categories/FrameFiltersComponent";
import {StatusFilterComponent} from "@/components/categories/works/filters/categories/StatusFilterComponent";

interface filtersInterface {
    setIsFiltersOpen(isFiltersOpen: boolean): void
}

export const FiltersComponent = (props: filtersInterface) => {


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
                <ul className={filters_scss.main}>
                    <li>
                        <PriceFiltersComponent/>
                    </li>
                    <li>
                        <SizeFiltersComponent/>
                    </li>
                    <li>
                        <ArtistsFiltersComponent/>
                    </li>
                    <li>
                        <YearFiltersComponent/>
                    </li>
                    <li>
                        <MaterialsFiltersComponent/>
                    </li>
                    <li>
                        <TagsFiltersComponent/>
                    </li>
                    <li>
                        <FrameFiltersComponent/>
                    </li>
                    <li>
                        <StatusFilterComponent/>
                    </li>
                </ul>
                <footer className={filters_scss.footer}>
                    <button className={'cancel_button'}>
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