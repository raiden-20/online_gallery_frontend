import create_art_data_scss from '@/scss/components/create_art/CreateArtData.module.scss'
import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";
import Image from "next/image";
import search_icon from "@/assets/icons/search/search.svg";

import delete_add_icon from '@/assets/icons/create_art/delete_add.svg'
import add_info_icon from "@/assets/icons/cart/add_info.svg";
import React, {useState} from "react";

interface addInfoInterface {
    tags : string[]
    setTags(tags : string[]): void
    materials: string[]
    setMaterials(materials: string[]) : void
    isFrame: boolean
    setIsFrame(isFrame: boolean) : void
}

export const AddInformationComponent = (props: addInfoInterface) => {
    const tags = ['Акварель', 'Акрил', 'Глина', 'Древесина', 'Масло']

    const [input_oneTag, setInput_oneTag] = useState('')
    const [input_oneMaterial, setInput_oneMaterial] = useState('')

    return (
        <section className={create_art_data_scss.section_root}>
            <header className={create_art_data_scss.header}>Дополнительная информация</header>
            <section className={create_art_data_scss.add_section}>
                <section className={subscriptions_scss.search_section}>
                    <Image src={search_icon} alt={'search_icon'}/>
                    <input placeholder={'Материал'} value={input_oneMaterial}
                    onChange={(event) => setInput_oneMaterial(event.target.value)}/>
                </section>
                <button onClick={() => {
                    let new_material = props.materials
                    new_material.push(input_oneMaterial)
                    props.setMaterials(new_material)
                    setInput_oneMaterial('')
                }}>Добавить</button>
                <ul className={create_art_data_scss.add_section_ul}>
                    {props.materials.map((material: string, index) => {
                        return (
                            <li className={create_art_data_scss.one_add} key={index}>
                                <div>{material}</div>
                                <button>
                                    <Image src={delete_add_icon} alt={'delete_add_icon'}/>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className={create_art_data_scss.add_section}>
                <section className={subscriptions_scss.search_section}>
                    <Image src={search_icon} alt={'search_icon'}/>
                    <input placeholder={'Теги'} value={input_oneTag}
                           onChange={(event) => setInput_oneTag(event.target.value)}/>
                </section>
                <button onClick={() => {
                    let new_material = props.tags
                    new_material.push(input_oneTag)
                    props.setTags(new_material)
                    setInput_oneTag('')
                }}>Добавить
                </button>
                <ul className={create_art_data_scss.add_section_ul}>
                    {props.tags.map((material: string, index) => {
                        return (
                            <li className={create_art_data_scss.one_add} key={index}>
                                <div>{material}</div>
                                <button>
                                    <Image src={delete_add_icon} alt={'delete_add_icon'}/>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <footer className={create_art_data_scss.footer}>
                <input type={'checkbox'} onChange={() => props.setIsFrame(!props.isFrame)}/>
                <div>Рама включена</div>
            </footer>
        </section>
    )
}