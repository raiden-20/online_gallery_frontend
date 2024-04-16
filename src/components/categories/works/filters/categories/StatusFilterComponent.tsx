import {useState} from "react";
import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";

export const StatusFilterComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const date = ['В наличии', 'Продано']

    return (
        <section className={filters_scss.category_root}>
            <header className={filters_scss.category_header}>
                <div className={filters_scss.category_title}>Статус</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={filters_scss.button_open_close}
                           alt={'open or close icon'}/>
                </button>
            </header>
            {isOpen ?
                <ul className={filters_scss.size_section + ' ' + filters_scss.checkbox_section}>
                    {date.map(oneDate => {
                        return (
                            <li className={filters_scss.size_one_section}>
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