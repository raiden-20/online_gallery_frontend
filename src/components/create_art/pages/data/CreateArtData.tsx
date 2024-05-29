import {CreateArtDataComponent} from "@/components/create_art/pages/data/CreateArtDataComponent";
import {useEffect, useState} from "react";
import {CHARACTER_RESTRICTION} from "@/paths/elements";
import {containsOnlyDigits, removeSpaces} from "../../../../../utils/tests";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";

interface CreateArtDataInterface {
    CreateArt(name: string, type: string, photos: File[], price: string,
              createDate: string, description: string, size: string,
              tags: string[], materials: string[], isPrivate: boolean, frame: boolean, router: AppRouterInstance,
              setMessage : (message: string) => void): void
    input_type: string
}

export const CreateArtData = (props: CreateArtDataInterface) => {
    const router = useRouter()

    const [photoArraySrc, setPhotoArraySrc] = useState<string[]>([])
    const [photoArrayFile, setPhotoArrayFile] = useState<File[]>([])
    const [deletePhotoUrls, setDeletePhotoUrls] = useState<string[]>([])

    const [input_name, setInput_name] = useState('')
    const [input_price, setInput_price] = useState('')
    const [input_createDate, setInput_createDate] = useState('')
    const [input_description, setInput_description] = useState('')
    const [input_height, setInput_height] = useState('')
    const [input_width, setInput_width] = useState('')
    const [tags, setTags] = useState<string[]>([])
    const [materials, setMaterials] = useState<string[]>([])
    const [isPrivate, setIsPrivate] = useState(false)
    const [isFrame, setIsFrame] = useState(false)
    const [, setIsChangeMainPhoto] = useState(false)
    const [message, setMessage] = useState('')

    const [createArt, setCreateArt] = useState(false)

    useEffect(() => {
        if (createArt) {
            if (Number.parseInt(input_createDate) >= CHARACTER_RESTRICTION.MIN_YEAR && Number.parseInt(input_createDate) <= CHARACTER_RESTRICTION.MAX_YEAR
                && containsOnlyDigits(input_height) && containsOnlyDigits(input_width)) {
                const size = input_height + 'x' + input_width
                props.CreateArt(input_name, props.input_type, photoArrayFile, removeSpaces(input_price.toString()), removeSpaces(input_createDate.toString()) + '-01-01', input_description, size, tags,
                    materials, isPrivate, isFrame, router, setMessage)
                setCreateArt(false)
            }
        }
    }, [createArt]);


    return <CreateArtDataComponent photoArraySrc={photoArraySrc} photoArrayFile={photoArrayFile}
                                   input_name={input_name} input_price={input_price} input_year={input_createDate}
                                   input_description={input_description} input_height={input_height}
                                   input_width={input_width} tags={tags} materials={materials} isPrivate={isPrivate}
                                   isFrame={isFrame} setPhotoArrayFile={setPhotoArrayFile}
                                   setPhotoArraySrc={setPhotoArraySrc} setInput_name={setInput_name}
                                   setInput_year={setInput_createDate} setInput_price={setInput_price}
                                   setInput_description={setInput_description} setInput_height={setInput_height}
                                   setInput_width={setInput_width} setTags={setTags} setMaterials={setMaterials}
                                   setIsPrivate={setIsPrivate} setIsFrame={setIsFrame} setCreateArt={setCreateArt}
                                   setDeletePhotoUrls={setDeletePhotoUrls} deletePhotoUrls={deletePhotoUrls} photoUrls={[]}
                                   setIsChangeMainPhoto={setIsChangeMainPhoto} message={message}/>
}