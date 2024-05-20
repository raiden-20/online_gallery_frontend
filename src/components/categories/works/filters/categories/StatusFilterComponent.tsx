import {useCallback, useState} from "react";
import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";
import {Filters} from "@/interfaces/filters";

interface filterInterface {
    currentFilters: Filters
    setFiltersStatusThunk(status: boolean | null): void
}

export const StatusFilterComponent = (props: filterInterface) => {
    const [isOpen, setIsOpen] = useState(false)

    const status = [
        {title: 'В наличии', name: true, isActive: false},
        {title: 'Продано', name: false, isActive: false}]

    const setStatus = useCallback((isActive: boolean, name: boolean, index: number) => {
        status[index].isActive = !isActive

        if (name) {
            if (isActive) {
                if (status[2].isActive) {
                    props.setFiltersStatusThunk(false)
                } else {
                    props.setFiltersStatusThunk(null)
                }
            } else {
                if (isActive) {
                    if (status[1].isActive) {
                        props.setFiltersStatusThunk(true)
                    } else {
                        props.setFiltersStatusThunk(null)
                    }
                }
            }
        }


    }, [])

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
                <ul className={filters_scss.size_section + ' ' + filters_scss.checkbox_section + ' scrollbar'}>
                    {status.map((oneStatus, index) => {
                        return (
                            <li className={filters_scss.size_one_section} key={index}>
                                <input type={'checkbox'}
                                       onClick={() => setStatus(oneStatus.isActive, oneStatus.name, index)}/>
                                <div>{oneStatus.title}</div>
                            </li>
                        )
                    })
                    }
                </ul>
                : null}
        </section>
    )
}