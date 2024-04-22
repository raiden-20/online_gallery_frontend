import create_art_data_scss from '@/scss/components/create_art/CreateArtData.module.scss'
import {ArtDataComponent} from "@/components/create_art/pages/data/elements/ArtDataComponent";
import {MainPhotoComponent} from "@/components/create_art/pages/data/elements/MainPhotoComponent";
import {AddPhotoComponent} from "@/components/create_art/pages/data/elements/AddPhotoComponent";
import {AddInformationComponent} from "@/components/create_art/pages/data/elements/AddInformationComponent";
import {useState} from "react";

export const CreateArtDataComponent = () => {
    const [photoArraySrc, setPhotoArraySrc] = useState<string[]>([])
    const [photoArrayFile, setPhotoArrayFile] = useState<File[]>([])

    return (
        <section className={create_art_data_scss.root}>
            <ArtDataComponent/>
            <MainPhotoComponent photoArraySrc={photoArraySrc} photoArrayFile={photoArrayFile}
                                setPhotoArrayFile={setPhotoArrayFile} setPhotoArraySrc={setPhotoArraySrc} />
            <AddPhotoComponent photoArraySrc={photoArraySrc} photoArrayFile={photoArrayFile}
                               setPhotoArrayFile={setPhotoArrayFile} setPhotoArraySrc={setPhotoArraySrc}/>
            <AddInformationComponent/>
            <button className={'main_button'}>
                Выставить работу
            </button>
        </section>
    )
}