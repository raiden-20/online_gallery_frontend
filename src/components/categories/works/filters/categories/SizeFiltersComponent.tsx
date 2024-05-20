import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";
import {useCallback, useState} from "react";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";
import {Filters, SizeInterface} from "@/interfaces/filters";

interface filterInterface {
    currentFilters: Filters

    setFiltersSizeThunk(size: string[]): void
}

export const SizeFiltersComponent = (props: filterInterface) => {
    const [isOpen, setIsOpen] = useState(false)

    const size = [
        {title: 'Маленькие (<40 см)', name: SizeInterface.SMALL, isActive: false},
        {title: 'Средние', name: SizeInterface.MEDIUM, isActive: false},
        {title: 'Большие (>100 см)', name: SizeInterface.BIG, isActive: false},
    ]

    const setSize = useCallback((isActive: boolean, name: string, index: number) => {
        size[index].isActive = !isActive

        if (isActive) {
            let size = [...props.currentFilters.size]
            size.push(name)
            props.setFiltersSizeThunk(size)
        } else {
            let size = props.currentFilters.size
            size.forEach((oneSize, index) => {
                if (oneSize === name) {
                    size.splice(index, 1)
                }
            })
            props.setFiltersSizeThunk(size)
        }
    }, [])

    return (
        <section className={filters_scss.category_root}>
            <header className={filters_scss.category_header}>
                <div className={filters_scss.category_title}>Размер</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={filters_scss.button_open_close}
                           alt={'open or close icon'}/>
                </button>
            </header>
            {isOpen ?
                <ul className={filters_scss.size_section}>
                    {size.map((oneElement: { title: string, name: string, isActive: boolean }, index) => {
                        return (
                            <li className={filters_scss.size_one_section} key={index}>
                                <input type={'checkbox'}
                                       onClick={() => setSize(oneElement.isActive, oneElement.name, index)}/>
                                <div>{oneElement.title}</div>
                            </li>
                        )
                    })}
                </ul>
                : null}
        </section>
    )
}