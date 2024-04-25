import create_post_scss from '@/scss/components/profile/categories/CreatePost.module.scss'
import cancel_icon from '@/assets/icons/profile/cancel.svg'
import download_photo_icon from '@/assets/icons/profile/download_photo.svg'
import delete_photo_icon from '@/assets/icons/profile/create_post/delete.svg'
import Image from "next/image";
import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";
import React, {useState} from "react";
import auth_main_scss from "@/scss/components/auth/Auth_main.module.scss";
import {fileSize} from "@/components/profile/components/setPhoto";

interface createPostProfile {
    setIsCreatePost(isCreatePost: boolean): void
}

export const CreatePostProfile = (props: createPostProfile) => {
    const [photoArraySrc, setPhotoArraySrc] = useState<string[]>([])
    const [photoArrayFile, setPhotoArrayFile] = useState<File[]>([])

    const [message, setMessage] = useState('')
    const setPhotoArr = (photoFile: FileList) => {
        setMessage('')
        if (photoFile !== null) {
            const file = photoFile[0];
            if (photoArraySrc?.length === 4) {
                setMessage('Масимальное кол-во фото: 4')
            } else if (photoFile[0].size <= fileSize) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    if (event.target !== null && event.target.result !== null) {
                        // @ts-ignore
                        setPhotoArraySrc(prevItems => [...prevItems, event.target.result.toString()]);
                    }

                };
                reader.readAsDataURL(file);
                setPhotoArrayFile((prevItems: File[]) => [...prevItems, photoFile[0]])
            } else {
                setMessage('Файл слишком большой!')
            }
        }
    }

    const deleteInputPhoto = (index: number) => {
        const newPhotoSrc = [...photoArraySrc];
        const newPhotoFile = [...photoArrayFile];
        newPhotoSrc.splice(index, 1);
        newPhotoFile.splice(index, 1);
        setPhotoArraySrc(newPhotoSrc);
        setPhotoArrayFile(newPhotoFile);
    };

    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setIsCreatePost(false)}></section>
            <main className={'modal_window'}>
                <section className={create_post_scss.root}>
                    <button className={create_post_scss.cancel} onClick={() => props.setIsCreatePost(false)}>
                        <Image src={cancel_icon} alt={'cancel_icon'}/>
                    </button>
                    <input placeholder={'Заголовок'} className={create_post_scss.title}/>
                    <textarea placeholder={'Напишите что-нибудь'} className={create_post_scss.textarea + ' scrollbar'}/>
                    {photoArraySrc.length > 0 ?
                        <section className={create_post_scss.photo_section}>
                            {photoArraySrc.map((onePhoto: string, index) => {
                                return (
                                    <section className={create_post_scss.onePhoto_section}>
                                        <button className={create_post_scss.delete_button}
                                                onClick={() => deleteInputPhoto(index)}>
                                            <Image src={delete_photo_icon} alt={'delete_photo_icon'}/>
                                        </button>
                                        <Image src={onePhoto} className={create_post_scss.onePhoto}
                                               alt={'photo'} width={0} height={0}/>
                                    </section>
                                )
                            })}
                        </section>
                        : null}
                    <footer className={create_post_scss.buttons_section}>
                        <button>
                            <input className={header_profile_scss.hidden} type="file" id="setCover"
                                   onChange={(event) => setPhotoArr(event.target.files as FileList)}/>
                            <label htmlFor="setCover" className={create_post_scss.button_images}>
                                <Image src={download_photo_icon} alt={'download_photo_icon'}/>
                                <div>Загрузить изображение</div>
                            </label>
                        </button>
                        <button className={'main_button'}>
                            Опубликовать
                        </button>
                    </footer>
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                        : null
                    }
                </section>
            </main>
        </section>
    )
}