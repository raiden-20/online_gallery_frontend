import {useCallback, useState} from "react";
import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";
import search_icon from "@/assets/icons/categories/search.svg";
import {Filters, SelectInterface} from "@/interfaces/filters";

interface filterInterface {
    tags: SelectInterface[]
    currentFilters: Filters
    setFiltersTagsThunk(tags: string[]): void
}

export const TagsFiltersComponent = (props: filterInterface) => {
    const [isOpen, setIsOpen] = useState(false)

    const [filteredTags, setFilteredTags] = useState(props.tags)
    const [input_tags, setInput_tags] = useState('')

    const setInputFilteredTags = useCallback((event: string) => {
        setInput_tags(event)
        const filtered = props.tags.filter((oneTag) =>
            oneTag.label.toLowerCase().includes(event.toLowerCase())
        );
        setFilteredTags(filtered);
    }, [])

    const setTagsCheckBox = useCallback((event: boolean, name: string, index: number) => {
        if (event) {
            let flag = false
            props.currentFilters.materials.map((oneTag => {
                if (oneTag === name) {
                    flag = true
                }
            }))
            if (!flag) {
                let tags = [...props.currentFilters.tags]
                tags.push(name)
                props.setFiltersTagsThunk(tags)
            }
        } else {
            props.currentFilters.tags.map(((oneTag, index) => {
                if (oneTag === name) {
                    let tags = [...props.currentFilters.tags]
                    tags.splice(index, 1)
                    props.setFiltersTagsThunk(tags)
                }
            }))
        }
        const tagsFilter = [...filteredTags]
        tagsFilter[index].isActive = !tagsFilter[index].isActive
        setFilteredTags(tagsFilter)
    },[])

    return (
        <section className={filters_scss.category_root}>
            <header className={filters_scss.category_header}>
                <div className={filters_scss.category_title}>Теги</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={filters_scss.button_open_close}
                           alt={'open or close icon'}/>
                </button>
            </header>
            {isOpen ?
                <section className={filters_scss.section_with_search}>
                    <section className={filters_scss.search}>
                        <Image src={search_icon} alt={'search_icon'}/>
                        <input value={input_tags}
                               placeholder={'Поиск'}
                               onChange={(event) =>
                                   setInputFilteredTags(event.target.value)}/>
                    </section>
                    <ul className={filters_scss.size_section + ' ' + filters_scss.checkbox_section + ' scrollbar'}>
                        {filteredTags.map((oneTag, index) => {
                            return (
                                <li className={filters_scss.size_one_section} key={index}>
                                    <input type={'checkbox'} checked={oneTag.isActive}
                                           onChange={(event) =>
                                               setTagsCheckBox(event.target.checked, oneTag.label, index)}/>
                                    <div>{oneTag.label}</div>
                                </li>
                            )
                        })}
                    </ul>
                </section>
                : null}
        </section>
    )
}