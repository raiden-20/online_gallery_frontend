import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import React, {useEffect, useState} from "react";

import one_order_scss from '@/scss/components/orders/oneOrder/OneOrder.module.scss'
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";

interface OneOrderModalWindowInterface {
    text: string
    orderId: string
    setIsClicked(isClicked: boolean): void
    EditOrder(orderId: string, comment: string, router: AppRouterInstance): void
}

export const OneOrderModalWindowChange = (props: OneOrderModalWindowInterface) => {
    const router = useRouter()

    const [message, setMessage] = useState('')
    const [isButtonCLicked, setIsButtonCLicked] = useState(false)
    const [input_message, setInput_message] = useState(props.text)

    useEffect(() => {
        if (isButtonCLicked) {
            if (input_message !== '') {
                props.EditOrder(props.orderId, input_message, router)
            } else {
                setMessage('Введите сообщение')
            }
        }
    }, [isButtonCLicked]);

    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setIsClicked(false)}></section>
            <main className={'modal_window ' + one_order_scss.modal_width}>
                <section className={delete_account_scss.root}>
                    <textarea className={one_order_scss.textarea} placeholder={'Трек-номер для отслеживания заказа'}
                              value={input_message}
                              onChange={(event) => setInput_message(event.target.value)}/>
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                        : null}
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setIsClicked(false)}>
                            Отменить
                        </button>
                        <button className={'main_button'} onClick={() => setIsButtonCLicked(true)}>
                            Сохранить
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}