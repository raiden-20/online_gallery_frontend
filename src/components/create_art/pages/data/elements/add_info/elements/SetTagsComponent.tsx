import create_art_data_scss from "@/scss/components/create_art/CreateArtData.module.scss";
import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";
import Image from "next/image";
import search_icon from "@/assets/icons/search/search.svg";
import delete_add_icon from "@/assets/icons/create_art/delete_add.svg";
import React, {useCallback, useState} from "react";
import Select, {MultiValue} from "react-select";
import {SelectInterface} from "@/interfaces/filters";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface setMaterialsInterface {
    tags: string[]
    options: SelectInterface[],
    setTags(tags: (prevState: string[]) => (string)[]): void
}

export const SetTagsComponent = (props: setMaterialsInterface) => {
    const [input_oneTag, setInput_oneTag] = useState('')

    const setTags = useCallback((event: MultiValue<SelectInterface>) => {
        if (event) {
            if (props.tags.length < CHARACTER_RESTRICTION.TAG_COUNT) {
                const arr = event.map(one => {
                    return one.label
                })
                props.setTags(() => [...arr])
            }
            setInput_oneTag('')
        }
    }, [])

    const setInputChange = useCallback((event: string) => {
        setInput_oneTag(event)
    }, [])

    return (
        <section className={create_art_data_scss.add_section}>
            <Select className={create_art_data_scss.select}
                    noOptionsMessage={() => 'Нет вариантов'}
                    placeholder={
                        <section className={subscriptions_scss.search_section}>
                            <Image src={search_icon} alt={'search_icon'}/>
                            <div>Теги</div>
                        </section>}
                    options={props.options}
                    isMulti={true}
                    onChange={setTags}
                    inputValue={input_oneTag}
                    onInputChange={setInputChange}
                    classNamePrefix={'custom-select'}/>
            {props.tags.length !== 0 ?
                <ul className={create_art_data_scss.add_section_ul}>
                    {props.tags.map((tag: string, index) => {
                        return (
                            <li className={create_art_data_scss.one_add} key={index}>
                                <div>{tag}</div>
                                <button onClick={() => {
                                    let new_material = [...props.tags]
                                    new_material.splice(index, 1)
                                    props.setTags(() => new_material)
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