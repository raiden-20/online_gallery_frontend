import {useCallback, useState} from "react";
import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";
import {Filters} from "@/interfaces/filters";

interface filterInterface {
    currentFilters: Filters
    setFiltersFrameThunk(frame: boolean | null): void
}

export const FrameFiltersComponent = (props: filterInterface) => {
    const [isOpen, setIsOpen] = useState(false)

    const frame = [
        {title: 'Присутствует', name: true, isActive: false},
        {title: 'Отсутствует', name: false, isActive: false}]

    const setFrame = useCallback((isActive: boolean, name: boolean, index: number) => {
        frame[index].isActive = !isActive

        if (name) {
            if (isActive) {
                if (frame[2].isActive) {
                    props.setFiltersFrameThunk(false)
                } else {
                    props.setFiltersFrameThunk(null)
                }
            } else {
                if (isActive) {
                    if (frame[1].isActive) {
                        props.setFiltersFrameThunk(true)
                    } else {
                        props.setFiltersFrameThunk(null)
                    }
                }
            }
        }


    }, [])

    return (
        <section className={filters_scss.category_root}>
            <header className={filters_scss.category_header}>
                <div className={filters_scss.category_title}>Наличие рамы</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={filters_scss.button_open_close}
                           alt={'open or close icon'}/>
                </button>
            </header>
            {isOpen ?
                <section className={filters_scss.section_with_search}>
                    <ul className={filters_scss.size_section + ' ' + filters_scss.checkbox_section + ' scrollbar'}>
                        {frame.map((oneFrame, index) => {
                            return (
                                <li className={filters_scss.size_one_section} key={index}>
                                    <input type={'checkbox'}
                                           onClick={() => setFrame(oneFrame.isActive, oneFrame.name, index)}/>
                                    <div>{oneFrame.title}</div>
                                </li>
                            )
                        })}
                    </ul>
                </section>
                : null}
        </section>
    )
}