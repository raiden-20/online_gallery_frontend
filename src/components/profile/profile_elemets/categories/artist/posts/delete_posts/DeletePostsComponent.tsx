import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import posts_artist_module from '@/scss/components/profile/categories/PostsArtist.module.scss'
import React, {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";

interface deletePostsInterface {
    setIsDeletePosts(isDeletePosts: boolean): void
    PrivateDeletePostPlace(router: AppRouterInstance): void
}

export const DeletePostsComponent = (props: deletePostsInterface) => {
    const router = useRouter()

    const [message, setMessage] = useState('')
    const [isDelete, setIsDelete] = useState(false)

    const [input_name, setInput_name] = useState('')

    const [artistName] = useState(Cookies.get('artistName') as string)


    useEffect(() => {
        if (isDelete) {
            if (input_name === artistName) {
                props.PrivateDeletePostPlace(router)
            } else {
                setMessage('Имена не совпадают')
            }
            setIsDelete(false)
        }
    }, [isDelete]);

    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setIsDeletePosts(false)}></section>
            <main className={'modal_window'}>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Отключение ежемесячной подписки
                    </header>
                    <p className={posts_artist_module.p}>Все Ваши посты будут удалены, а товары для поддержавших перейдут в публичный доступ</p>
                    <p className={delete_account_scss.main_p}>Для продолжения введите Ваше имя покупателя:</p>
                    <input placeholder={'Имя покупателя'} value={input_name}
                           onChange={(event) => setInput_name(event.target.value)}/>
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                        : null}
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setIsDeletePosts(false)}>
                            Отмена
                        </button>
                        <button className={'second_plan_button'}
                        onClick={() => setIsDelete(true) }>
                            Удалить
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}