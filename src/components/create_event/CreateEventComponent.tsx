import {usePathname, useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import createEvent_scss from "@/scss/components/create_event/CreateEvent.module.scss";
import Image from "next/image";
import cancel_icon from "@/assets/icons/settings/cancel.svg";
import React, {useEffect, useState} from "react";
import create_art_data_scss from "@/scss/components/create_art/CreateArtData.module.scss";
import {MainPhotoComponent} from "@/components/create_art/pages/data/elements/MainPhotoComponent";
import {MainPhotoEditComponent} from "@/components/create_art/edit_art/elements/MainPhotoEditComponent";

interface CreateEventComponentInterface {
    photoArraySrcEvent: string[]
    photoArrayFileEvent: File[]

    setPhotoArrayFileEvent(photoArrayFile: (prevItems: File[]) => File[]): void

    setPhotoArraySrcEvent(photoArraySrc: (prevItems: string[]) => string[]): void

    photoArraySrcBanner: string[]
    photoArrayFileBanner: File[]

    setPhotoArrayFileBanner(photoArrayFile: (prevItems: File[]) => File[]): void

    setPhotoArraySrcBanner(photoArraySrc: (prevItems: string[]) => string[]): void

    input_name: string
    setInput_name(input_name: string): void

    input_description: string
    setInput_description(input_description: string): void

    input_startDate: string
    setInput_startDate(input_startDate: string): void

    input_endDate: string
    setInput_endDate(input_endDate: string): void

    type: string
    setType(type: string): void

    setIsCreateEvent(IsCreateEvent: boolean): void

    setIsChangeEventUrl(flag: boolean): void
    setIsChangeBannerUrl(flag: boolean): void
    setDeleteEventUrl(deleteEventUrl: string[]): void
    deleteEventUrl: string[]
    setDeleteBannerUrl(deleteBannerUrl: string[]): void
    deleteBannerUrl: string[]
}

export const CreateEventComponent = (props: CreateEventComponentInterface) => {
    const pathname = usePathname().split('/')
    const currPath = '/' +  pathname[1] + '/' + pathname[2]
    const router = useRouter()

    const [isCLickedStart, setIsCLickedStart] = useState(false)
    const [isCLickedEnd, setIsCLickedEnd] = useState(false)

    const [isAuction, setIsAuction] = useState(false)
    const [isArts, setIsArts] = useState(false)

    const [today, setToday] = useState('')

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();

        let month: string | number = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        let day: string | number = date.getDate();
        day = day < 10 ? `0${day}` : day;

        setToday(`${year}-${month}-${day}T` + date.getHours() + ':' + date.getMinutes());
    }, []);

    return (
        <section className={createEvent_scss.root}>
            <button className={createEvent_scss.cancel_button}
                    onClick={() => router.push(MAIN_PATHS.EVENTS)}>
                <Image src={cancel_icon} alt={'cancel_icon'} width={0} height={0}/>
                <div>Назад</div>
            </button>
            <section className={createEvent_scss.root_data}>
                <section className={create_art_data_scss.section_root}>
                    <header className={create_art_data_scss.header}>Данные события</header>
                    <input placeholder={'Название'}
                           value={props.input_name}
                           onChange={(event) => props.setInput_name(event.target.value)}/>
                    <textarea placeholder={'Описание'}
                              className={'scrollBar'}
                              value={props.input_description}
                              onChange={(event) => props.setInput_description(event.target.value)}>
                    </textarea>
                    <section className={create_art_data_scss.inputs_section}>
                        <input placeholder={`Время начала события`}
                               min={today}
                               type={props.input_startDate !== '' || isCLickedStart ? 'datetime-local' : 'text'}
                               value={props.input_startDate}
                               onFocus={() => setIsCLickedStart(true)}
                               onBlur={() => {
                                   if (props.input_startDate === '') {
                                       setIsCLickedStart(false)
                                   }
                               }}
                               onChange={(event) => props.setInput_startDate(event.target.value)}/>
                        <input placeholder={'Время окончания события'}
                               type={props.input_endDate !== '' || isCLickedEnd ? 'datetime-local' : 'text'}
                               value={props.input_endDate}
                               min={props.input_startDate}
                               onFocus={() => setIsCLickedEnd(true)}
                               onBlur={() => {
                                   if (props.input_endDate === '') {
                                       setIsCLickedEnd(false)
                                   }
                               }}
                               onChange={(event) => {
                                   props.setInput_endDate(event.target.value)
                               }
                               }/>
                    </section>

                </section>
                <section className={create_art_data_scss.inputs_section}>
                    {currPath === MAIN_PATHS.CREATE_EVENT ?
                        <MainPhotoComponent photoArraySrc={props.photoArraySrcEvent}
                                            photoArrayFile={props.photoArrayFileEvent}
                                            setPhotoArrayFile={props.setPhotoArrayFileEvent}
                                            setPhotoArraySrc={props.setPhotoArraySrcEvent}
                                            title={'Обложка события'}
                                            id={'setEventPhoto'}
                        />
                    :
                        <MainPhotoEditComponent photoArraySrc={props.photoArraySrcEvent}
                                                photoArrayFile={props.photoArrayFileEvent}
                                                setPhotoArrayFile={props.setPhotoArrayFileEvent}
                                                setPhotoArraySrc={props.setPhotoArraySrcEvent}
                                                title={'Обложка события'}
                                                id={'setEventPhoto'}
                                                deletePhotoUrls={props.deleteEventUrl} photoUrls={props.photoArraySrcEvent}
                                                setDeletePhotoUrls={props.setDeleteEventUrl} setIsChangeMainPhoto={props.setIsChangeEventUrl}/>
                    }
                    {currPath === MAIN_PATHS.CREATE_EVENT ?
                        <MainPhotoComponent photoArraySrc={props.photoArraySrcBanner}
                                            photoArrayFile={props.photoArrayFileBanner}
                                            setPhotoArrayFile={props.setPhotoArrayFileBanner}
                                            setPhotoArraySrc={props.setPhotoArraySrcBanner}
                                            title={'Обложка баннера'}
                                            id={'setBannerPhoto'}
                        />
                    :
                        <MainPhotoEditComponent photoArraySrc={props.photoArraySrcBanner}
                                                photoArrayFile={props.photoArrayFileBanner}
                                                setPhotoArrayFile={props.setPhotoArrayFileBanner}
                                                setPhotoArraySrc={props.setPhotoArraySrcBanner}
                                                title={'Обложка баннера'}
                                                id={'setBannerPhoto'}
                                                deletePhotoUrls={props.deleteBannerUrl} photoUrls={props.photoArraySrcBanner}
                                                setDeletePhotoUrls={props.setDeleteBannerUrl} setIsChangeMainPhoto={props.setIsChangeBannerUrl}/>
                    }

                </section>
                <section className={create_art_data_scss.section_root}>
                    <header className={create_art_data_scss.header}>Тип события</header>
                    <footer className={create_art_data_scss.footer}>
                        <input type={'checkbox'}
                               disabled={!(currPath === MAIN_PATHS.CREATE_EVENT)}
                               checked={isAuction}
                               onChange={(event) => {
                                   setIsAuction(event.target.checked)
                                   if (event.target.checked) {
                                       props.setType('AUCTION')
                                       setIsArts(false)
                                   } else {
                                       props.setType('')
                                   }
                               }}/>
                        <div>Аукционы</div>
                    </footer>
                    <footer className={create_art_data_scss.footer}>
                        <input type={'checkbox'}
                               checked={isArts}
                               disabled={!(currPath === MAIN_PATHS.CREATE_EVENT)}
                               onChange={(event) => {
                                   setIsArts(event.target.checked)
                                   if (event.target.checked) {
                                       props.setType('ART')
                                       setIsAuction(false)
                                   } else {
                                       props.setType('')
                                   }
                               }}/>
                        <div>Товары</div>
                    </footer>
                </section>
                <button className={'main_button '}
                        disabled={!(props.input_name !== '' && props.input_description !== '' &&
                            props.input_startDate !== '' && props.input_endDate !== '' &&
                            props.photoArraySrcEvent.length !== 0 && props.photoArraySrcBanner.length !== 0)}
                        onClick={() => props.setIsCreateEvent(true)}>
                    Создать событие
                </button>
            </section>
        </section>
    )
}