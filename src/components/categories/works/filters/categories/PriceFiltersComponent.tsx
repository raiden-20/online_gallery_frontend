import {useState} from "react";
import Image from "next/image";

import open_icon from '@/assets/icons/categories/filter_category_open.svg'
import close_icon from '@/assets/icons/categories/filter_category_close.svg'

import filters_scss from '@/scss/components/categories/Filters.module.scss'

export const PriceFiltersComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

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
                <ul className={filters_scss.price_section}>
                    <li className={filters_scss.price_one_section}>
                        <header className={filters_scss.price_one_section_title}>От</header>
                        <input placeholder={'0'}/>
                    </li>
                    <li className={filters_scss.price_one_section}>
                        <header className={filters_scss.price_one_section_title}>До</header>
                        <input placeholder={'1 000 000'}/>
                    </li>
                </ul>
                : null}
        </section>
    )
}