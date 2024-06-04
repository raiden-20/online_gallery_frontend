import {CreateEventComponent} from "@/components/create_event/CreateEventComponent";
import {useState} from "react";

export const CreateEvent = () => {

    const [photoArraySrcEvent, setPhotoArraySrcEvent] = useState<string[]>([])
    const [photoArrayFileEvent, setPhotoArrayFileEvent] = useState<File[]>([])

    const [photoArraySrcBanner, setPhotoArraySrcBanner] = useState<string[]>([])
    const [photoArrayFileBanner, setPhotoArrayFileBanner] = useState<File[]>([])

    return <CreateEventComponent photoArraySrcEvent={photoArraySrcEvent} photoArrayFileEvent={photoArrayFileEvent}
                                 setPhotoArrayFileEvent={setPhotoArrayFileEvent} setPhotoArraySrcEvent={setPhotoArraySrcEvent}
                                 photoArraySrcBanner={photoArraySrcBanner} photoArrayFileBanner={photoArrayFileBanner}
                                 setPhotoArrayFileBanner={setPhotoArrayFileBanner} setPhotoArraySrcBanner={setPhotoArraySrcBanner}
    />
}