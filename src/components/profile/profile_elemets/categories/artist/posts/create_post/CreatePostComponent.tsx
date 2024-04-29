import create_post_scss from '@/scss/components/profile/categories/CreatePost.module.scss'
import cancel_icon from '@/assets/icons/profile/cancel.svg'
import download_photo_icon from '@/assets/icons/profile/download_photo.svg'
import delete_photo_icon from '@/assets/icons/profile/create_post/delete.svg'
import Image from "next/image";
import React from "react";

interface createPostProfile {
    setIsCreatePost(isCreatePost: boolean): void
    input_title: string
    setInput_title(input_title: string): void
    input_text: string
    setInput_text(input_text: string): void
    photoArraySrc: string[]
    deleteInputPhoto(index: number): void
    message: string
    setPhotoArr(photoFile: FileList): void
    setCreatePostClicked(flag: boolean): void
}

export const CreatePostComponent = (props: createPostProfile) => {

    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setIsCreatePost(false)}></section>
            <main className={'modal_window'}>
                <section className={create_post_scss.root}>
                    <button className={create_post_scss.cancel} onClick={() => props.setIsCreatePost(false)}>
                        <Image src={cancel_icon} alt={'cancel_icon'}/>
                    </button>
                    <input value={props.input_title} onChange={(event) => props.setInput_title(event.target.title)}
                           placeholder={'Заголовок'} className={create_post_scss.title}/>
                    <textarea value={props.input_text} onChange={(event) => props.setInput_text(event.target.title)}
                              placeholder={'Напишите что-нибудь'} className={create_post_scss.textarea + ' scrollbar'}/>
                    {props.photoArraySrc.length > 0 ?
                        <section className={create_post_scss.photo_section}>
                            {props.photoArraySrc.map((onePhoto: string, index) => {
                                return (
                                    <section className={create_post_scss.onePhoto_section}>
                                        <button className={create_post_scss.delete_button}
                                                onClick={() => props.deleteInputPhoto(index)}>
                                            <Image src={delete_photo_icon} alt={'delete_photo_icon'}/>
                                        </button>
                                        <Image src={onePhoto} className={create_post_scss.onePhoto}
                                               alt={'photo'} width={0} height={0}/>
                                    </section>
                                )
                            })}
                        </section>
                        : null}
                    {props.message !== '' ?
                        <p className={'message'}>{props.message}</p>
                        : null
                    }
                    <footer className={create_post_scss.buttons_section}>
                        <button>
                            <input className={create_post_scss.hidden} type="file" id="setCover"
                                   onChange={(event) => props.setPhotoArr(event.target.files as FileList)}/>
                            <label htmlFor="setCover" className={create_post_scss.button_images}>
                                <Image src={download_photo_icon} alt={'download_photo_icon'}/>
                                <div className={props.photoArraySrc.length === 4 ? create_post_scss.forbidden : undefined}>
                                    Загрузить изображение
                                </div>
                            </label>
                        </button>
                        <button className={'main_button'}
                                onClick={() => props.setCreatePostClicked(true)}>
                            Опубликовать
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}