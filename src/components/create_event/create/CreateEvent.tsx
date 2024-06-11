import {CreateEventComponent} from "@/components/create_event/CreateEventComponent";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface CreateEventInterface {
    CreateEventThunk(name: string, photo: File, banner: File, type: string,
                description: string, startDate: Date, endDate: Date, router: AppRouterInstance): void
}

export const CreateEvent = (props: CreateEventInterface) => {
    const router = useRouter()

    const [photoArraySrcEvent, setPhotoArraySrcEvent] = useState<string[]>([])
    const [photoArrayFileEvent, setPhotoArrayFileEvent] = useState<File[]>([])
    const [deleteEventUrl, setDeleteEventUrl] = useState<string[]>([])
    const [deleteBannerUrl, setDeleteBannerUrl] = useState<string[]>([])

    const [photoArraySrcBanner, setPhotoArraySrcBanner] = useState<string[]>([])
    const [photoArrayFileBanner, setPhotoArrayFileBanner] = useState<File[]>([])

    const [input_name, setInput_name] = useState('')
    const [input_description, setInput_description] = useState('')
    const [input_startDate, setInput_startDate] = useState('')
    const [input_endDate, setInput_endDate] = useState('')
    const [type, setType] = useState('')

    const [, setIsChangeEventUrl] = useState(false)
    const [, setIsChangeBannerUrl] = useState(false)

    const [IsCreateEvent, setIsCreateEvent] = useState(false)

    useEffect(() => {
        if (IsCreateEvent) {
            const startDate = new Date(input_startDate)
            const endDate = new Date(input_endDate)
            props.CreateEventThunk(input_name, photoArrayFileEvent[0], photoArrayFileBanner[0], type, input_description,
                startDate, endDate, router)
        }
        setIsCreateEvent(false)
    }, [IsCreateEvent]);

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
}