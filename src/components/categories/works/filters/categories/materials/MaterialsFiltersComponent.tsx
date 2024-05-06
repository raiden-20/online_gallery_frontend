import filters_scss from "@/scss/components/categories/Filters.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/categories/filter_category_open.svg";
import close_icon from "@/assets/icons/categories/filter_category_close.svg";
import search_icon from "@/assets/icons/categories/search.svg";
import {useCallback, useState} from "react";
import { Filters, SelectInterface} from "@/interfaces/filters";

interface filterInterface {
    materials: SelectInterface[]
    currentFilters: Filters
    setFiltersMaterialsThunk(materials: string[]): void
}

export const MaterialsFiltersComponent = (props: filterInterface) => {
    const [isOpen, setIsOpen] = useState(false)

    const [filteredMaterials, setFilteredMaterials] = useState(props.materials)
    const [input_material, setInput_material] = useState('')

    const setInputFilteredMaterials = useCallback((event: string) => {
        setInput_material(event)
        const filtered = props.materials.filter((oneMaterial) =>
            oneMaterial.label.toLowerCase().includes(event.toLowerCase())
        );
        setFilteredMaterials(filtered);
    }, [])

    const setArtistsCheckBox = useCallback((event: boolean, name: string, index: number) => {
        if (event) {
            let flag = false
            props.currentFilters.materials.map((oneMaterial => {
                if (oneMaterial === name) {
                    flag = true
                }
            }))
            if (!flag) {
                let artists = [...props.currentFilters.artists]
                artists.push(name)
                props.setFiltersMaterialsThunk(artists)
            }
        } else {
            props.currentFilters.artists.map(((oneArtistId, index) => {
                if (oneArtistId === name) {
                    let artists = [...props.currentFilters.artists]
                    artists.splice(index, 1)
                    props.setFiltersMaterialsThunk(artists)
                }
            }))
        }
        const materialsFilter = [...filteredMaterials]
        materialsFilter[index].isActive = !materialsFilter[index].isActive
        setFilteredMaterials(materialsFilter)
    },[])

    return (
        <section className={filters_scss.category_root}>
            <header className={filters_scss.category_header}>
                <div className={filters_scss.category_title}>Материал</div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={filters_scss.button_open_close}
                           alt={'open or close icon'}/>
                </button>
            </header>
            {isOpen ?
                <section className={filters_scss.section_with_search}>
                    <section className={filters_scss.search}>
                        <Image src={search_icon} alt={'search_icon'}/>
                        <input value={input_material}
                               placeholder={'Поиск'}
                               onChange={(event) =>
                                   setInputFilteredMaterials(event.target.value)}/>
                    </section>
                    <ul className={filters_scss.size_section + ' ' + filters_scss.checkbox_section + ' scrollbar'}>
                        {filteredMaterials.map((oneMaterial, index) => {
                            return (
                                <li className={filters_scss.size_one_section} key={index}>
                                    <input type={'checkbox'} checked={oneMaterial.isActive}
                                           onChange={(event) =>
                                               setArtistsCheckBox(event.target.checked, oneMaterial.label, index)}/>
                                    <div>{oneMaterial.label}</div>
                                </li>
                            )
                        })}
                    </ul>
                </section>
                : null}
        </section>
    )
}