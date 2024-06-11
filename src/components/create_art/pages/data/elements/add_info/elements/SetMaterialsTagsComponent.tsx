import create_art_data_scss from "@/scss/components/create_art/CreateArtData.module.scss";
import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";
import Image from "next/image";
import search_icon from "@/assets/icons/search/search.svg";
import React, {useCallback, useState} from "react";
import Select, {MultiValue} from "react-select";
import {SelectInterface} from "@/interfaces/filters";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface setMaterialsInterface {
    materials: string[]
    options: SelectInterface[],
    count: number
    name: string
    setMaterials(materials: (prevState: string[]) => (string)[]): void
}

export const SetMaterialsTagsComponent = (props: setMaterialsInterface) => {
    const [input_oneMaterial, setInput_oneMaterial] = useState('')

    const setMaterial = useCallback((event: MultiValue<SelectInterface>) => {
        if (event) {
            if (props.materials.length < props.count) {
                const arr = event.map(one => {
                    return one.label
                })
                props.setMaterials(() => [...arr])
            }
            setInput_oneMaterial('')
        }
    }, [])

    const setInputChange = useCallback((event: string) => {
        setInput_oneMaterial(event)
    }, [])

    return (
        <section className={create_art_data_scss.add_section}>
            <Select className={create_art_data_scss.select}
                    noOptionsMessage={() => 'Нет вариантов'}
                    placeholder={
                        <section className={subscriptions_scss.search_section}>
                            <Image src={search_icon} alt={'search_icon'}/>
                            <div>{props.name}</div>
                        </section>}
                    options={props.options}
                    isMulti={true}
                    onChange={setMaterial}
                    inputValue={input_oneMaterial}
                    onInputChange={setInputChange}
                    isClearable={true}
                    classNamePrefix={'custom-select'}/>
        </section>
    )
}