import {useEffect, useState} from "react";
import create_art_scss from '@/scss/components/create_art/CreateArt.module.scss'
import cancel_icon from '@/assets/icons/create_art/cancel.svg'
import Image from "next/image";
import {CreateArtDataComponent} from "@/components/create_art/pages/data/CreateArtDataComponent";
import {CreateArtFirstPage} from "@/components/create_art/pages/CreateArtFirstPage";
import {CreateArtSecondPage} from "@/components/create_art/pages/CreateArtSecondPage";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import Cookies from "js-cookie";
import {containsOnlyDigits, removeSpaces} from "../../../utils/tests";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface createArtInterface {
    CreateArt(name: string, type: string, photos: File[], price: string,
              createDate: string, description: string, size: string,
              tags: string[], materials: string[], isPrivate: boolean, frame: boolean, router: AppRouterInstance,
              setMessage : (message: string) => void): void
}

export const CreateArtTypeComponent = (props: createArtInterface) => {
    const router = useRouter()

    const [page, setPage] = useState(1)

    const [photoArraySrc, setPhotoArraySrc] = useState<string[]>([])
    const [photoArrayFile, setPhotoArrayFile] = useState<File[]>([])
    const [deletePhotoUrls, setDeletePhotoUrls] = useState<string[]>([])
    const [input_type, setInput_type] = useState('')
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

    const setCountPage = () => {
        if (page - 1 !== 0) {
            setPage(page - 1)
        } else {
            router.push(MAIN_PATHS.PROFILE_ARTIST + `/${Cookies.get('artistId')}`)
        }
    }


    useEffect(() => {
        if (createArt) {
            if (Number.parseInt(input_createDate) >= CHARACTER_RESTRICTION.MIN_YEAR && Number.parseInt(input_createDate) <= CHARACTER_RESTRICTION.MAX_YEAR
            && containsOnlyDigits(input_height) && containsOnlyDigits(input_width)) {
                const size = input_height + 'x' + input_width
                props.CreateArt(input_name, input_type, photoArrayFile, removeSpaces(input_price.toString()), removeSpaces(input_createDate.toString()) + '-01-01', input_description, size, tags,
                    materials, isPrivate, isFrame, router, setMessage)
                setCreateArt(false)
            }
        }
    }, [createArt]);

    return (
        <section className={create_art_scss.root}>
            <button className={create_art_scss.cancel}
                    onClick={setCountPage}>
                <Image src={cancel_icon} alt={'cancel_icon'}/>
                <div>Назад</div>
            </button>
            {page === 1 ? <CreateArtFirstPage setPage={setPage} setInput_type={setInput_type}/>
                :
            page === 2 ? <CreateArtSecondPage setPage={setPage}/>
                :
            page === 3 ? <CreateArtDataComponent photoArraySrc={photoArraySrc} photoArrayFile={photoArrayFile}
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
                 :
            null}
        </section>
    )
}