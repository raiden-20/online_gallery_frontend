import {CreateArtDataComponent} from "@/components/create_art/pages/data/CreateArtDataComponent";
import {useEffect, useState} from "react";
import {ArtInterface} from "@/interfaces/artInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";

interface editArtInterface {
    oneArt: ArtInterface
    EditArt(artId: string, name: string, type: string, changeMainPhoto: boolean, newPhotos: File[],
            deletePhotoUrls: string[], price: string, createDate: string, description: string, size: string,
            tags: string[], materials: string[], isPrivate: boolean, frame: boolean, router: AppRouterInstance): void
}

export const EditArtComponent = (props: editArtInterface) => {
    const router = useRouter()
    const [photoArraySrc, setPhotoArraySrc] = useState<string[]>(props.oneArt.photoUrls)
    const [photoArrayFile, setPhotoArrayFile] = useState<File[]>([])
    const [deletePhotoUrls, setDeletePhotoUrls] = useState<string[]>([])
    const [input_name, setInput_name] = useState(props.oneArt.name)
    const [input_price, setInput_price] = useState(props.oneArt.price)
    const [input_createDate, setInput_createDate] = useState(props.oneArt.createDate)
    const [input_description, setInput_description] = useState(props.oneArt.description)
    const [input_height, setInput_height] = useState(props.oneArt.size.split('x')[0])
    const [input_width, setInput_width] = useState(props.oneArt.size.split('x')[1])
    const [tags, setTags] = useState<string[]>(props.oneArt.tags)
    const [materials, setMaterials] = useState<string[]>(props.oneArt.materials)
    const [isPrivate, setIsPrivate] = useState(props.oneArt.isPrivate)
    const [isFrame, setIsFrame] = useState(props.oneArt.frame)

    const [isChangeMainPhoto, setIsChangeMainPhoto] = useState(false)

    const [editArt, setEditArt] = useState(false)

    useEffect(() => {
        if (editArt) {
            props.EditArt(props.oneArt.artId, input_name, props.oneArt.type, isChangeMainPhoto, photoArrayFile,
                deletePhotoUrls, input_price, input_createDate, input_description, input_height + 'x' + input_width
                , tags, materials,  isPrivate ,isFrame, router)
            setEditArt(false)
        }
    }, [editArt]);


    return <CreateArtDataComponent photoArraySrc={photoArraySrc} photoArrayFile={photoArrayFile}
                                   input_name={input_name} input_price={input_price} input_year={input_createDate}
                                   input_description={input_description} input_height={input_height}
                                   input_width={input_width} tags={tags} materials={materials} isPrivate={isPrivate}
                                   isFrame={isFrame} setPhotoArrayFile={setPhotoArrayFile}
                                   setPhotoArraySrc={setPhotoArraySrc} setInput_name={setInput_name}
                                   setInput_year={setInput_createDate} setInput_price={setInput_price}
                                   setInput_description={setInput_description} setInput_height={setInput_height}
                                   setInput_width={setInput_width} setTags={setTags} setMaterials={setMaterials}
                                   setIsPrivate={setIsPrivate} setIsFrame={setIsFrame} setCreateArt={setEditArt}
                                   setDeletePhotoUrls={setDeletePhotoUrls}
                                   photoUrls={props.oneArt.photoUrls} deletePhotoUrls={deletePhotoUrls}
                                   setIsChangeMainPhoto={setIsChangeMainPhoto}/>
}