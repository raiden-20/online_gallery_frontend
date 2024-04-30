import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";
import {useState} from "react";

export const YearFiltersComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const date = ['2020е', '2010е', '2000е', '1990е', '1980е', '1970е', '1960е', '1950е', '1940е', '1930е']

    return (
        <section className={filters_scss.category_root}>
            <header className={filters_scss.category_header}>
                <div className={filters_scss.category_title}>Год</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={filters_scss.button_open_close}
                           alt={'open or close icon'}/>
                </button>
            </header>
            {isOpen ?
                <ul className={filters_scss.size_section + ' ' + filters_scss.checkbox_section + ' scrollbar'}>
                    {date.map((oneDate, index) => {
                        return (
                            <li className={filters_scss.size_one_section} key={index}>
                                <input type={'checkbox'}/>
                                <div>{oneDate}</div>
                            </li>
                        )
                    })
                    }
                </ul>
                : null}
        </section>
    )
}