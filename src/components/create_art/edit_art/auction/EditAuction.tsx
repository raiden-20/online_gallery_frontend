import {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {formatDate, removeSpaces} from "../../../../../utils/tests";
import {AuctionInterface} from "@/interfaces/auctionInterface";
import {CreateAuctionDataComponent} from "@/components/create_art/pages/auction/CreateAuctionDataComponent";

interface editArtInterface {
    auction: AuctionInterface

    EditAuctionThunk(auctionId: string, name: string, type: string, changeMainPhoto: boolean, newPhotos: File[],
                     deletePhotoUrls: string[], startPrice: string, createDate: string, description: string, size: string,
                     tags: string[], materials: string[], frame: boolean, startDate: string, endDate: string, router: AppRouterInstance,
                     setMessage: (message: string) => void): void
}

export const EditAuction = (props: editArtInterface) => {

    const router = useRouter()
    const [photoArraySrc, setPhotoArraySrc] = useState<string[]>(props.auction.photoUrls)
    const [photoArrayFile, setPhotoArrayFile] = useState<File[]>([])
    const [deletePhotoUrls, setDeletePhotoUrls] = useState<string[]>([])
    const [input_name, setInput_name] = useState(props.auction.name)
    const [input_price, setInput_price] = useState(props.auction.lastPrice)
    const [input_createDate, setInput_createDate] = useState(props.auction.createDate.split('').splice(0, 4).join(''))
    const [input_description, setInput_description] = useState(props.auction.description)
    const [input_height, setInput_height] = useState(props.auction.size.split('x')[0])
    const [input_width, setInput_width] = useState(props.auction.size.split('x')[1])
    const [tags, setTags] = useState<string[]>(props.auction.tags)
    const [materials, setMaterials] = useState<string[]>(props.auction.materials)
    const [isFrame, setIsFrame] = useState(props.auction.frame)
    const [isPrivate, setIsPrivate] = useState(false)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [message, setMessage] = useState('')
    const [setEditAuction, setSetEditAuction] = useState(false)

    const [isChangeMainPhoto, setIsChangeMainPhoto] = useState(false)
    useEffect(() => {
        setPhotoArraySrc(props.auction.photoUrls)
        setInput_name(props.auction.name)
        setInput_price(props.auction.lastPrice)
        setInput_createDate(props.auction.createDate.split('').splice(0, 4).join(''))
        setInput_description(props.auction.description)
        setInput_height(props.auction.size.split('x')[0])
        setInput_width(props.auction.size.split('x')[1])
        setStartDate(formatDate(props.auction.startDate))
        setEndDate(formatDate(props.auction.endDate))
        setTags(props.auction.tags)
        setMaterials(props.auction.materials)
        setIsFrame(props.auction.frame)
    }, []);

    useEffect(() => {
        if (setEditAuction) {
            if (Number.parseInt(input_createDate) > 999 && Number.parseInt(input_createDate) <= 2024) {
                props.EditAuctionThunk(props.auction.auctionId, input_name, props.auction.type,
                    isChangeMainPhoto, photoArrayFile,
                    deletePhotoUrls, removeSpaces(input_price.toString()), removeSpaces(input_createDate.toString()) + '-01-01', input_description,
                    removeSpaces(input_height.toString()) + 'x' + removeSpaces(input_width.toString()), tags, materials, isFrame,
                    startDate, endDate, router, setMessage)
                setSetEditAuction(false)
            }
        }
    }, [setEditAuction]);


    return <CreateAuctionDataComponent photoArraySrc={photoArraySrc} photoArrayFile={photoArrayFile}
                                       input_name={input_name} input_price={input_price} input_year={input_createDate}
                                       input_description={input_description} input_height={input_height}
                                       input_width={input_width} tags={tags} materials={materials} isPrivate={isPrivate}
                                       isFrame={isFrame} setPhotoArrayFile={setPhotoArrayFile}
                                       setPhotoArraySrc={setPhotoArraySrc} setInput_name={setInput_name}
                                       setInput_year={setInput_createDate} setInput_price={setInput_price}
                                       setInput_description={setInput_description} setInput_height={setInput_height}
                                       setInput_width={setInput_width} setTags={setTags} setMaterials={setMaterials}
                                       setIsPrivate={setIsPrivate} setIsFrame={setIsFrame} setCreateArt={setSetEditAuction}
                                       setDeletePhotoUrls={setDeletePhotoUrls} deletePhotoUrls={deletePhotoUrls}
                                       photoUrls={[]}
                                       setIsChangeMainPhoto={setIsChangeMainPhoto} message={message}
                                       setStartTime={setStartDate} startTime={startDate}
                                       setEndTime={setEndDate} endTime={endDate}/>
}