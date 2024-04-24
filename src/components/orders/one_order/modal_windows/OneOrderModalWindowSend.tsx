import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import auth_main_scss from "@/scss/components/auth/Auth_main.module.scss";
import React, {useEffect, useState} from "react";

import one_order_scss from '@/scss/components/orders/oneOrder/OneOrder.module.scss'

interface OneOrderModalWindowInterface {
    setIsClicked(isClicked: boolean): void
}

export const OneOrderModalWindowSend = (props: OneOrderModalWindowInterface) => {

    const [message, setMessage] = useState('')
    const [isButtonCLicked, setIsButtonCLicked] = useState(false)
    const [input_message, setInput_message] = useState('')

    useEffect(() => {
        if (isButtonCLicked) {
            if (input_message !== '') {

            } else {
                setMessage('Введите сообщение')
            }
        }
    }, [isButtonCLicked]);

    return (
        <section className={delete_account_scss.page}>
            <section className={'bg ' + delete_account_scss.bg} onClick={() => props.setIsClicked(false)}></section>
            <main className={delete_account_scss.modal_window + ' ' + one_order_scss.modal_width}>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Подтвердить отправление?
                    </header>
                    <p>Пожалуйста, укажите информацию о доставке (трек-номер, сервис для доставки и т.д.). Она будет
                        доступна покупателю.</p>
                    <textarea className={one_order_scss.textarea} placeholder={'Трек-номер для отслеживания заказа'} value={input_message}
                           onChange={(event) => setInput_message(event.target.value)}/>
                    {message !== '' ?
                        <p className={auth_main_scss.message}>{message}</p>
                        : null}
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setIsClicked(false)}>
                            Отменить
                        </button>
                        <button className={'main_button'} onClick={() => setIsButtonCLicked(true)}>
                            Подтвердить отправление
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}