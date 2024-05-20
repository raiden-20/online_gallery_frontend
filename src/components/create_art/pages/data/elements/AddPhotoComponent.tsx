import create_art_data_scss from '@/scss/components/create_art/CreateArtData.module.scss'
import React, {useState} from "react";
import {fileSize} from "@/components/profile/components/setPhoto";
import create_post_scss from "@/scss/components/profile/categories/CreatePost.module.scss";
import Image from "next/image";
import delete_photo_icon from "@/assets/icons/profile/create_post/delete.svg";
import add_photo_icon from "@/assets/icons/create_art/add_photo.svg";

interface mainPhotoInterface {
    photoArraySrc: string[]
    photoArrayFile: File[]
    setPhotoArrayFile(photoArrayFile: (prevItems: File[]) => File[]): void
    setPhotoArraySrc(photoArraySrc: (prevItems: string[]) => string[]): void
}

export const AddPhotoComponent = (props: mainPhotoInterface) => {
    const [message, setMessage] = useState('')

    const setPhotoArr = (photoFile: FileList) => {
        setMessage('')
        if (photoFile !== null) {
            const file = photoFile[0];
            if (props.photoArraySrc?.length === 5) {
                setMessage('Масимальное кол-во дополнительных фото: 4')
            } else if (photoFile[0].size <= fileSize) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        // @ts-ignore
                        props.setPhotoArraySrc(prevItems => [...prevItems, event.target.result.toString()]);
                    }

                };
                reader.readAsDataURL(file);
                props.setPhotoArrayFile((prevItems: File[]) => [...prevItems, photoFile[0]])

            } else {
                setMessage('Файл слишком большой!')
            }
        }
    }

    const deleteInputPhoto = (index: number) => {
        const newPhotoSrc = [...props.photoArraySrc];
        const newPhotoFile = [...props.photoArrayFile];
        newPhotoSrc.splice(index, 1);
        newPhotoFile.splice(index, 1);
        props.setPhotoArraySrc(() => newPhotoSrc);
        props.setPhotoArrayFile(() => newPhotoFile);
    };
    return (
        <section className={create_art_data_scss.section_root}>
            <header className={create_art_data_scss.header}>Дополнительные фото</header>
            {props.photoArraySrc.length > 0 ?
                <section className={create_post_scss.photo_section}>
                    {props.photoArraySrc.map((onePhoto: string, index) => {
                        if (index !== 0) {
                            return (
                                <section className={create_post_scss.onePhoto_section} key={index}>
                                    <button className={create_post_scss.delete_button}
                                            onClick={() => deleteInputPhoto(index)}>
                                        <Image src={delete_photo_icon} alt={'delete_photo_icon'}/>
                                    </button>
                                    <Image src={onePhoto} className={create_post_scss.onePhoto}
                                           alt={'photo'} width={0} height={0}/>
                                </section>
                            )
                        }
                    })}
                </section>
                : null}
            {message !== '' ?
                <p className={'message'}>{message}</p>
                : null}
            <button className={'main_button ' + create_art_data_scss.button}>
                <input className={create_art_data_scss.hidden} type="file" id="setAddPhoto"
                       onChange={(event) => setPhotoArr(event.target.files as FileList)}/>
                <label htmlFor="setAddPhoto" className={create_art_data_scss.button_img}>
                    <Image src={add_photo_icon} alt={add_photo_icon}/>
                    <div>Загрузить фото</div>
                </label>
            </button>
        </section>
    )
}