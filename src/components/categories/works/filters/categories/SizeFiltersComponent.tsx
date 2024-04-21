import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";
import {useState} from "react";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";

export const SizeFiltersComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const size = [
        {title: 'Маленькие (<40 см)', name: 'SMALL'},
        {title: 'Средние', name: 'MEDIUM'},
        {title: 'Большие (>100 см)', name: 'BIG'},
    ]

    return (
        <section className={filters_scss.category_root}>
            <header className={filters_scss.category_header}>
                <div className={filters_scss.category_title}>Размер</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen? open_icon : close_icon} className={filters_scss.button_open_close}
                           alt={'open or close icon'}/>
                </button>
            </header>
            {isOpen ?
                <ul className={filters_scss.size_section}>
                    {size.map((oneElement: {title: string, name: string}) => {
                        return (
                            <li className={filters_scss.size_one_section}>
                                <input type={'checkbox'}/>
                                <div>{oneElement.title}</div>
                            </li>
                        )
                        })}
                </ul>
                : null}
        </section>
    )
}