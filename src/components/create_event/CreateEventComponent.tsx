import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import createEvent_scss from "@/scss/components/create_event/CreateEvent.module.scss";
import Image from "next/image";
import cancel_icon from "@/assets/icons/settings/cancel.svg";
import React from "react";
import create_art_data_scss from "@/scss/components/create_art/CreateArtData.module.scss";
import {MainPhotoComponent} from "@/components/create_art/pages/data/elements/MainPhotoComponent";

interface CreateEventComponentInterface {
    photoArraySrcEvent: string[]
    photoArrayFileEvent: File[]
    setPhotoArrayFileEvent(photoArrayFile: (prevItems: File[]) => File[]): void
    setPhotoArraySrcEvent(photoArraySrc: (prevItems: string[]) => string[]): void

    photoArraySrcBanner: string[]
    photoArrayFileBanner: File[]
    setPhotoArrayFileBanner(photoArrayFile: (prevItems: File[]) => File[]): void
    setPhotoArraySrcBanner(photoArraySrc: (prevItems: string[]) => string[]): void
}

export const CreateEventComponent = (props: CreateEventComponentInterface) => {
    const router = useRouter()

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
                    <input placeholder={'Название'}/>
                    <textarea placeholder={'Описание'}
                              className={'scrollBar'}>
                    </textarea>
                    <section className={create_art_data_scss.inputs_section}>
                        <input placeholder={`Время начала события`}/>
                        <input placeholder={'Время окончания события'}/>
                    </section>

                </section>
                <section className={create_art_data_scss.inputs_section}>
                    <MainPhotoComponent photoArraySrc={props.photoArraySrcEvent}
                                        photoArrayFile={props.photoArrayFileEvent}
                                        setPhotoArrayFile={props.setPhotoArrayFileEvent}
                                        setPhotoArraySrc={props.setPhotoArraySrcEvent}
                                        title={'Обложка события'}
                                        id={'setEventPhoto'}
                    />
                    <MainPhotoComponent photoArraySrc={props.photoArraySrcBanner}
                                        photoArrayFile={props.photoArrayFileBanner}
                                        setPhotoArrayFile={props.setPhotoArrayFileBanner}
                                        setPhotoArraySrc={props.setPhotoArraySrcBanner}
                                        title={'Обложка баннера'}
                                        id={'setBannerPhoto'}
                    />
                </section>
                <section className={create_art_data_scss.section_root}>
                    <header className={create_art_data_scss.header}>Тип события</header>
                    <footer className={create_art_data_scss.footer}>
                        <input type={'checkbox'}/>
                        <div>Аукционы</div>
                    </footer>
                    <footer className={create_art_data_scss.footer}>
                        <input type={'checkbox'}/>
                        <div>Товары</div>
                    </footer>
                </section>
                <button className={'main_button'}>
                    Создать событие
                </button>
            </section>
        </section>
    )
}