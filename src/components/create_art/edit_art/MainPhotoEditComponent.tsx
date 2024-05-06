import create_art_data_scss from '@/scss/components/create_art/CreateArtData.module.scss'

import add_photo_icon from '@/assets/icons/create_art/add_photo.svg'
import Image from "next/image";
import React, {useState} from "react";
import {fileSize} from "@/components/profile/components/setPhoto";
import create_post_scss from "@/scss/components/profile/categories/CreatePost.module.scss";
import delete_photo_icon from "@/assets/icons/profile/create_post/delete.svg";

interface mainPhotoInterface {
    photoArraySrc: string[]
    photoArrayFile: File[]
    setPhotoArrayFile(photoArrayFile: (prevItems: File[]) => File[]): void
    setPhotoArraySrc(photoArraySrc: (prevItems: string[]) => string[]): void

    setDeletePhotoUrls(arr: string[]): void
    photoUrls: string[]
    deletePhotoUrls: string[]
    setIsChangeMainPhoto(flag: boolean): void
}

export const MainPhotoEditComponent = (props: mainPhotoInterface) => {

    const [message, setMessage] = useState('')
    const setPhotoArr = (photoFile: FileList) => {
        setMessage('')
        if (photoFile !== null) {
            const file = photoFile[0];
            if (photoFile[0].size <= fileSize) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        props.setPhotoArraySrc((prevItems : string[]) => {
                            const newItems = [...prevItems];
                            // @ts-ignore
                            newItems.splice(0, 1, event.target.result.toString());
                            return newItems;
                        });
                    }

                };
                reader.readAsDataURL(file);
                props.setPhotoArrayFile((prevItems : File[]) => {
                    const newItems = [...prevItems];
                    newItems.splice(0, 1, photoFile[0]);
                    return newItems;
                });

                props.setIsChangeMainPhoto(true)
                const urls = props.deletePhotoUrls
                urls.push(props.photoArraySrc[0])
                props.setDeletePhotoUrls(urls)

            } else {
                setMessage('Файл слишком большой!')
            }
        }
    }

    const deleteInputPhoto = (index: number) => {
        props.setIsChangeMainPhoto(true)
        const newPhotoSrc = [...props.photoArraySrc];
        const newPhotoFile = [...props.photoArrayFile];
        newPhotoSrc.splice(index, 1);
        newPhotoFile.splice(index, 1);
        props.setPhotoArraySrc(() => newPhotoSrc);
        props.setPhotoArrayFile(() => newPhotoFile);

        props.photoUrls.forEach((one: string) => {
            if (props.photoArraySrc[index] === one) {
                const urls = props.deletePhotoUrls
                urls.splice(index, 1)
                props.setDeletePhotoUrls(urls)
            }
        })
    }

    return (
        <section className={create_art_data_scss.section_root}>
            <header className={create_art_data_scss.header}>Основное фото</header>
            {props.photoArraySrc.length !== 0 ?
                <section className={create_post_scss.onePhoto_section}>
                    <button className={create_post_scss.delete_button}
                            onClick={() => deleteInputPhoto(0)}>
                        <Image src={delete_photo_icon} alt={'delete_photo_icon'}/>
                    </button>
                    <img src={props.photoArraySrc[0]} className={create_post_scss.onePhoto}
                         alt={'photo'}/>
                </section>
                : null}
            {message !== '' ?
                <p className={'message'}>{message}</p>
                : null}
            <button className={'second_plan_button ' + create_art_data_scss.button}>
                <input className={create_art_data_scss.hidden} type="file" id="setMainPhoto"
                       onChange={(event) => setPhotoArr(event.target.files as FileList)}/>
                <label htmlFor="setMainPhoto" className={create_art_data_scss.button_img}>
                    <Image src={add_photo_icon} alt={add_photo_icon}/>
                    <div>Загрузить фото</div>
                </label>
            </button>
        </section>
    )
}