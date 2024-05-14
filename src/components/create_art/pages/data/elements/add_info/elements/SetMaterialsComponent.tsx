import create_art_data_scss from "@/scss/components/create_art/CreateArtData.module.scss";
import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";
import Image from "next/image";
import search_icon from "@/assets/icons/search/search.svg";
import delete_add_icon from "@/assets/icons/create_art/delete_add.svg";
import React, {useCallback, useEffect, useState} from "react";
import Select, {SingleValue} from "react-select";
import {SelectInterface} from "@/interfaces/filters";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface setMaterialsInterface {
    materials: string[]
    options: SelectInterface[],
    setMaterials(materials: (prevState: string[]) => (string)[]): void
}

export const SetMaterialsComponent = (props: setMaterialsInterface) => {
    const [input_oneMaterial, setInput_oneMaterial] = useState('')
    const [filteredValues, setFilteredValues] = useState(props.options);

    const setMaterial = useCallback((event: SingleValue<SelectInterface>) => {
        const filter = [...filteredValues]
        filter.forEach((one: SelectInterface, index) => {
            // @ts-ignore
            if (one.value === event.value) {
                filter.splice(index, 1)
            }
        })
        setFilteredValues(filter)
        // @ts-ignore
        props.setMaterials((prevState: string[]) => [...prevState, event.label])
        setInput_oneMaterial('')
    }, [])

    const setInputChange = useCallback((event: string) => {
        setInput_oneMaterial(event)
        const filtered = filteredValues.filter((option: SelectInterface) =>
            option.label.toLowerCase().includes(event.toLowerCase())
        );
        // @ts-ignore
        setFilteredValues(filtered);
    }, [])

    useEffect(() => {
        setFilteredValues(props.options)
    }, []);

    return (
        <section className={create_art_data_scss.add_section}>
            <Select className={create_art_data_scss.select}
                    noOptionsMessage={() => 'Нет вариантов'}
                    placeholder={
                        <section className={subscriptions_scss.search_section}>
                            <Image src={search_icon} alt={'search_icon'}/>
                            <div>Материалы</div>
                        </section>}
                    options={filteredValues}
                    onChange={setMaterial}
                    inputValue={input_oneMaterial}
                    onInputChange={setInputChange}
                    classNamePrefix={'custom-select'}/>
            {props.materials.length !== 0 ?
                <ul className={create_art_data_scss.add_section_ul}>
                    {props.materials.map((material: string, index) => {
                        return (
                            <li className={create_art_data_scss.one_add} key={index}>
                                <div>{material}</div>
                                <button onClick={() => {
                                    if (props.materials.length < CHARACTER_RESTRICTION.MATERIAL_COUNT) {
                                        let new_material = [...props.materials]
                                        new_material.splice(index, 1)
                                        props.setMaterials(() => new_material)
                                    }
                                }}>
                                    <Image src={delete_add_icon} alt={'delete_add_icon'}/>
                                </button>
                            </li>
                        )
                    })}
                </ul>
                : null}
        </section>
    )
}