import {CreateEventComponent} from "@/components/create_event/CreateEventComponent";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {EventInterface} from "@/interfaces/eventInterface";
import Cookies from "js-cookie";
import {formatDate} from "../../../../utils/tests";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface EditEventInterface {
    event: EventInterface
    EditEventThunk(eventId: string, name: string, changeMainPhoto: boolean, newPhoto: File,
                   changeBanner: boolean, newBanner: File, description: string, startDate: Date, endDate: Date, router: AppRouterInstance): void
    GetOneEvent(eventId: string, currentId: string): void
}

export const EditEvent = (props: EditEventInterface) => {
    const router = useRouter()

    const eventId = usePathname().split('/')[usePathname().split('/').length - 1]

    useEffect(() => {
        props.GetOneEvent(eventId, Cookies.get('customerId') as string)
    }, []);

    if (props.event.name !== '') {
        const eventUrl = usePathname().split('/')[usePathname().split('/').length - 1]

        const [photoArraySrcEvent, setPhotoArraySrcEvent] = useState<string[]>([])
        const [photoArrayFileEvent, setPhotoArrayFileEvent] = useState<File[]>([])
        const [deleteEventUrl, setDeleteEventUrl] = useState<string[]>([])
        const [deleteBannerUrl, setDeleteBannerUrl] = useState<string[]>([])

        const [photoArraySrcBanner, setPhotoArraySrcBanner] = useState<string[]>([])
        const [photoArrayFileBanner, setPhotoArrayFileBanner] = useState<File[]>([])

        const [input_name, setInput_name] = useState(props.event.name)
        const [input_description, setInput_description] = useState(props.event.description)
        const [input_startDate, setInput_startDate] = useState(props.event.startDate.toISOString())
        const [input_endDate, setInput_endDate] = useState(props.event.endDate.toISOString())
        const [type, setType] = useState(props.event.type)

        const [isChangeEventUrl, setIsChangeEventUrl] = useState(false)
        const [isChangeBannerUrl, setIsChangeBannerUrl] = useState(false)

        const [IsCreateEvent, setIsCreateEvent] = useState(false)

        useEffect(() => {
            setPhotoArraySrcEvent([props.event.photoUrl])
            setPhotoArraySrcBanner([props.event.bannerUrl])
            setInput_name(props.event.name)
            setInput_description(props.event.description)
            setInput_startDate(formatDate(props.event.startDate.toISOString()))
            setInput_endDate(formatDate(props.event.endDate.toISOString()))
            setType(props.event.type)
        }, [props.event]);


        useEffect(() => {
            if (IsCreateEvent) {
                const startDate = new Date(input_startDate)
                const endDate = new Date(input_endDate)

                props.EditEventThunk(eventUrl ,input_name, isChangeEventUrl, photoArrayFileEvent[0],
                    isChangeBannerUrl, photoArrayFileBanner[0], input_description,
                    startDate, endDate, router)
            }
            setIsCreateEvent(false)
        }, [IsCreateEvent]);


        useEffect(() => {
            if (deleteEventUrl.length > 0) {
                setIsChangeEventUrl(true)
            }

        }, [deleteEventUrl]);

        useEffect(() => {
            if (deleteBannerUrl.length > 0) {
                setIsChangeBannerUrl(true)
            }
        }, [deleteBannerUrl]);

        return <CreateEventComponent photoArraySrcEvent={photoArraySrcEvent} photoArrayFileEvent={photoArrayFileEvent}
                                     setPhotoArrayFileEvent={setPhotoArrayFileEvent}
                                     setPhotoArraySrcEvent={setPhotoArraySrcEvent}
                                     photoArraySrcBanner={photoArraySrcBanner} photoArrayFileBanner={photoArrayFileBanner}
                                     setPhotoArrayFileBanner={setPhotoArrayFileBanner}
                                     setPhotoArraySrcBanner={setPhotoArraySrcBanner}
                                     input_name={input_name} setInput_name={setInput_name}
                                     input_description={input_description} setInput_description={setInput_description}
                                     input_startDate={input_startDate} setInput_startDate={setInput_startDate}
                                     input_endDate={input_endDate} setInput_endDate={setInput_endDate}
                                     type={type} setType={setType}
                                     setIsCreateEvent={setIsCreateEvent}
                                     setIsChangeEventUrl={setIsChangeEventUrl} setIsChangeBannerUrl={setIsChangeBannerUrl}
                                     deleteBannerUrl={deleteBannerUrl} deleteEventUrl={deleteEventUrl}
                                     setDeleteBannerUrl={setDeleteBannerUrl} setDeleteEventUrl={setDeleteEventUrl}/>
    } else {
        return <></>
    }
}