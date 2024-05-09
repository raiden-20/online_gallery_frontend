import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import React, {useEffect, useState} from "react";

import suggestion_scss from '@/scss/components/profile/categories/SuggestionSubscribeOnArtist.module.scss'
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import {Cancel_ButtonComponent} from "@/components/cancel_button/Cancel_ButtonComponent";

interface createPrivateInterface {
    setIsClicked(isClicked: boolean): void
    PrivateCreatePostPlace(artistId: string, price: string, router: AppRouterInstance): void
}


export const CreatePrivateModalWindow = (props: createPrivateInterface) => {
    const router = useRouter()

    const [input_price, setInput_price] = useState('')

    const [message, setMessage] = useState('')
    const [isAddClicked, setIsAddClicked] = useState(false)

    useEffect(() => {
        setMessage('')
        if (isAddClicked) {
            if (input_price === '' || input_price === '0') {
                setMessage('Введите сумму')
            } else {
                props.PrivateCreatePostPlace(Cookies.get('artistId') as string, input_price, router)
            }
        }
    }, [isAddClicked]);
    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setIsClicked(false)}></section>
            <main className={'modal_window'}>
                <Cancel_ButtonComponent setCancel={props.setIsClicked} whatSet={false}/>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Подключение ежемесячной подписки
                    </header>
                    <section className={suggestion_scss.modal_window_main}>
                        <section className={suggestion_scss.set_data}>
                            <p>Укажите минимальную стоимость ежемесячной подписки:</p>
                            <input placeholder={'Сумма, ₽'} value={input_price}
                                   onChange={(event) => setInput_price(event.target.value)}/>
                            {message !== '' ?
                                <p className={'message'}>{message}</p>
                                : null}
                        </section>

                        <footer className={delete_account_scss.footer_buttons}>
                            <button className={'cancel_button'} onClick={() => props.setIsClicked(false)}>
                                Отмена
                            </button>
                            <button className={'main_button'} onClick={() => setIsAddClicked(true)}>
                                Подключить
                            </button>
                        </footer>
                    </section>
                </section>
            </main>
        </section>
    )
}