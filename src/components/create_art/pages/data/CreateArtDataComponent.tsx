import create_art_data_scss from '@/scss/components/create_art/CreateArtData.module.scss'
import {ArtDataComponent} from "@/components/create_art/pages/data/elements/ArtDataComponent";
import {MainPhotoComponent} from "@/components/create_art/pages/data/elements/MainPhotoComponent";
import {AddPhotoComponent} from "@/components/create_art/pages/data/elements/AddPhotoComponent";
import {AddInformationComponent} from "@/components/create_art/pages/data/elements/AddInformationComponent";
import {useState} from "react";
import {ArtsAPI} from "@/api/arts";

export const CreateArtDataComponent = () => {
    const [photoArraySrc, setPhotoArraySrc] = useState<string[]>([])
    const [photoArrayFile, setPhotoArrayFile] = useState<File[]>([])

    const [input_name, setInput_name] = useState('')
    const [input_price, setInput_price] = useState('')
    const [input_year, setInput_year] = useState('')
    const [input_description, setInput_description] = useState('')
    const [input_height, setInput_height] = useState('')
    const [input_width, setInput_width] = useState('')
    const [tags, setTags] = useState<string[]>([])
    const [materials, setMaterials] = useState<string[]>([])
    const [isAnonymous, setIsAnonymous] = useState(false)
    const [isFrame, setIsFrame] = useState(false)

    const [message, setMessage] = useState('')


    const setArt = () => {
        const size = input_height + 'x' + input_width
        ArtsAPI.CreateArtAPI(input_name, 'PAINTING', photoArrayFile, input_price, input_year, input_description, size, tags,
        materials, isAnonymous, isFrame)
            .then((response) => {
                switch (response[0]) {
                    case 200 : {
                        setMessage('Запрос прошел успешно')
                        break
                    }
                    default: {
                        setMessage('Запрос провалился я заебалась, ошибка: ' + response[0])
                        break
                    }
                }
            } )
    }

    return (
        <section className={create_art_data_scss.root}>
            <ArtDataComponent input_name={input_name} setInput_name={setInput_name}
                              input_price={input_price} setInput_price={setInput_price}
                              input_year={input_year} setInput_year={setInput_year}
                              input_description={input_description} setInput_description={setInput_description}
                              input_height={input_height} setInput_height={setInput_height}
                              input_width={input_width} setInput_width={setInput_width}
                              isAnonymous={isAnonymous} setIsAnonymous={setIsAnonymous}/>
            <MainPhotoComponent photoArraySrc={photoArraySrc} photoArrayFile={photoArrayFile}
                                setPhotoArrayFile={setPhotoArrayFile} setPhotoArraySrc={setPhotoArraySrc} />
            <AddPhotoComponent photoArraySrc={photoArraySrc} photoArrayFile={photoArrayFile}
                               setPhotoArrayFile={setPhotoArrayFile} setPhotoArraySrc={setPhotoArraySrc}/>
            <AddInformationComponent tags={tags} setTags={setTags}
                                     materials={materials} setMaterials={setMaterials}
                                     isFrame={isFrame} setIsFrame={setIsFrame}/>
            <button className={'main_button'}
            onClick={setArt}>
                Выставить работу
            </button>
            <p className={'message'}>{message}</p>
        </section>
    )
}