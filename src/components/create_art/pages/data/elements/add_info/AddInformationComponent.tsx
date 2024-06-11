import create_art_data_scss from '@/scss/components/create_art/CreateArtData.module.scss'
import React from "react";
import {SetMaterialsTagsComponent} from "@/components/create_art/pages/data/elements/add_info/elements/SetMaterialsTagsComponent";
import {SelectInterface} from "@/interfaces/filters";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface addInfoInterface {
    tags_list: SelectInterface[],
    materials_list: SelectInterface[],
    tags : string[]
    setTags(tags: (prevState: string[]) => (string)[]): void
    materials: string[]
    setMaterials(materials: (prevState: string[]) => (string)[]): void
    isFrame: boolean
    setIsFrame(isFrame: boolean) : void
}

export const AddInformationComponent = (props: addInfoInterface) => {
    return (
        <section className={create_art_data_scss.section_root}>
            <header className={create_art_data_scss.header}>Дополнительная информация</header>
            <SetMaterialsTagsComponent materials={props.materials}
                                       setMaterials={props.setMaterials}
                                       options={props.materials_list}
                                       name={'Материалы'}
                                       count={CHARACTER_RESTRICTION.MATERIAL_COUNT}/>
            <SetMaterialsTagsComponent materials={props.tags}
                                       setMaterials={props.setTags}
                                       options={props.tags_list}
                                       name={'Теги'}
                                       count={CHARACTER_RESTRICTION.TAG_COUNT}/>
            <footer className={create_art_data_scss.footer}>
                <input type={'checkbox'} onChange={() => props.setIsFrame(!props.isFrame)}/>
                <div>Рама включена</div>
            </footer>
        </section>
    )
}