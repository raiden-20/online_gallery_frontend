import {useCallback, useState} from "react";
import Image from "next/image";

import open_icon from '@/assets/icons/categories/filter_category_open.svg'
import close_icon from '@/assets/icons/categories/filter_category_close.svg'

import filters_scss from '@/scss/components/categories/Filters.module.scss'
import {Filters} from "@/interfaces/filters";
import {containsOnlyDigits} from "../../../../../../utils/tests";

interface filterInterface {
    currentFilters: Filters
    setFiltersPriceStartThunk(priceStart: string): void
    setFiltersPriceEndThunk(priceEnd: string): void
}

export const PriceFiltersComponent = (props: filterInterface) => {
    const [isOpen, setIsOpen] = useState(false)

    const [input_priceStart, setInput_priceStart] = useState('0')
    const [input_priceEnd, setInput_priceEnd] = useState('1000000')

    const setPriceStart = useCallback((value: string) => {
        if (containsOnlyDigits(value)) {
            setInput_priceStart(value)
            props.setFiltersPriceStartThunk(value)
        }
    },[])

    const setPriceEnd = useCallback((value: string) => {
        if (containsOnlyDigits(value)) {
            setInput_priceEnd(value)
            props.setFiltersPriceEndThunk(value)
        }
    },[])

    return (
        <section className={filters_scss.category_root}>
            <header className={filters_scss.category_header}>
                <div className={filters_scss.category_title}>Цена, ₽</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen? open_icon : close_icon} className={filters_scss.button_open_close}
                           alt={'open or close icon'}/>
                </button>
            </header>
            {isOpen ?
                <section className={filters_scss.price_section}>
                    <section className={filters_scss.price_one_section}>
                        <header className={filters_scss.price_one_section_title}>От</header>
                        <input value={input_priceStart}
                                onChange={(event) =>
                                    setPriceStart(event.target.value)}/>
                    </section>
                    <section className={filters_scss.price_one_section}>
                        <header className={filters_scss.price_one_section_title}>До</header>
                        <input value={input_priceEnd}
                               onChange={(event) =>
                                   setPriceEnd(event.target.value)}/>
                    </section>
                </section>
                : null}
        </section>
    )
}