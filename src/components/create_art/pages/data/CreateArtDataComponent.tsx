import create_art_data_scss from '@/scss/components/create_art/CreateArtData.module.scss'
import {ArtDataComponent} from "@/components/create_art/pages/data/elements/ArtDataComponent";
import {MainPhotoComponent} from "@/components/create_art/pages/data/elements/MainPhotoComponent";
import {AddPhotoComponent} from "@/components/create_art/pages/data/elements/AddPhotoComponent";
import {usePathname} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {MainPhotoEditComponent} from "@/components/create_art/edit_art/elements/MainPhotoEditComponent";
import {AddPhotoEditComponent} from "@/components/create_art/edit_art/elements/AddPhotoEditComponent";
import {AddInformationContainer} from "@/components/create_art/pages/data/elements/add_info/AddInformationContainer";

interface createArtDataInterface {
    photoArraySrc: string[]
    photoArrayFile: File[]
    input_name: string
    input_price: string
    input_year: string
    input_description: string
    input_height: string
    input_width: string
    tags: string[]
    materials: string[]
    isPrivate: boolean
    isFrame: boolean
    photoUrls: string[]
    setPhotoArrayFile(photoArrayFile: (prevItems: File[]) => File[]): void
    setPhotoArraySrc(photoArraySrc: (prevItems: string[]) => string[]): void
    setInput_name(input_name: string): void
    setInput_year(input_name: string): void
    setInput_price(input_name: string): void
    setInput_description(input_name: string): void
    setInput_height(input_name: string): void
    setInput_width(input_name: string): void
    setTags(tags: (prevState: string[]) => (string)[]): void
    setMaterials(materials: (prevState: string[]) => (string)[]): void
    setIsPrivate(isPrivate: boolean): void
    setIsFrame(isFrame: boolean): void
    setCreateArt(createArt: boolean): void
    setDeletePhotoUrls(arr: string[]): void
    deletePhotoUrls: string[]
    setIsChangeMainPhoto(flag: boolean): void
    setIsChangeMainPhoto(flag: boolean): void
    message: string
}

export const CreateArtDataComponent = (props: createArtDataInterface) => {

    const pathname = usePathname()
    return (
        <section className={create_art_data_scss.root}>
            <ArtDataComponent input_name={props.input_name} setInput_name={props.setInput_name}
                              input_price={props.input_price} setInput_price={props.setInput_price}
                              input_year={props.input_year} setInput_year={props.setInput_year}
                              input_description={props.input_description}
                              setInput_description={props.setInput_description}
                              input_height={props.input_height} setInput_height={props.setInput_height}
                              input_width={props.input_width} setInput_width={props.setInput_width}
                              isPrivate={props.isPrivate} setIsPrivate={props.setIsPrivate} price_placeholder={"Цена"}
                              isFooter={true}/>
            {pathname === MAIN_PATHS.CREATE_ART ?
                <MainPhotoComponent photoArraySrc={props.photoArraySrc} photoArrayFile={props.photoArrayFile}
                                    setPhotoArrayFile={props.setPhotoArrayFile}
                                    setPhotoArraySrc={props.setPhotoArraySrc}
                />
                :
                <MainPhotoEditComponent photoArraySrc={props.photoArraySrc} photoArrayFile={props.photoArrayFile}
                                        setPhotoArrayFile={props.setPhotoArrayFile}
                                        setPhotoArraySrc={props.setPhotoArraySrc}
                                        photoUrls={props.photoUrls} setDeletePhotoUrls={props.setDeletePhotoUrls}
                                        deletePhotoUrls={props.deletePhotoUrls} setIsChangeMainPhoto={props.setIsChangeMainPhoto}/>
            }
            {pathname === MAIN_PATHS.CREATE_ART ?
                <AddPhotoComponent photoArraySrc={props.photoArraySrc} photoArrayFile={props.photoArrayFile}
                                   setPhotoArrayFile={props.setPhotoArrayFile} setPhotoArraySrc={props.setPhotoArraySrc}/>
                :
                <AddPhotoEditComponent photoArraySrc={props.photoArraySrc} photoArrayFile={props.photoArrayFile}
                                   setPhotoArrayFile={props.setPhotoArrayFile} setPhotoArraySrc={props.setPhotoArraySrc}
                                   photoUrls={props.photoUrls} setDeletePhotoUrls={props.setDeletePhotoUrls}
                                   deletePhotoUrls={props.deletePhotoUrls}/>
            }
            <AddInformationContainer tags={props.tags} setTags={props.setTags}
                                     materials={props.materials} setMaterials={props.setMaterials}
                                     isFrame={props.isFrame} setIsFrame={props.setIsFrame}/>
            {props.message !== '' ?
                <p className={'message'}>{props.message}</p>
                : null}
            <button className={'main_button'}
                    onClick={() => {
                        props.setCreateArt(true)}
                    }>
                Выставить работу
            </button>
        </section>
    )
}