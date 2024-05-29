import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import React, {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";

interface deleteAccountInterface {
    id: string

    setIsDelete(isDeleteClicked: boolean): void
    DeleteCard(id: string, router: AppRouterInstance, setMessage: (message: string) => void): void
}

export const DeleteCardModalWindow = (props: deleteAccountInterface) => {
    const router = useRouter()

    const [message, setMessage] = useState('')
    const [input_name, setInput_name] = useState('')
    const [deleteCard, setDeleteCard] = useState(false)

    const [customerName] = useState(Cookies.get('customerName'))

    useEffect(() => {
        if (deleteCard) {
            setMessage('')
            if (input_name === customerName) {
                props.DeleteCard(props.id, router, setMessage)
            } else {
                setMessage('Имена не совпадают')
            }
        }
    }, [deleteCard]);

    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setIsDelete(false)}></section>
            <main className={'modal_window'}>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Удалить способ оплаты?
                    </header>
                    <p>Если у Вас есть действующая платная подписка на художника, где выбранный способ оплаты — данная
                        карта, то подписка аннулируется</p>
                    <p className={delete_account_scss.main_p}>Для продолжения введите Ваше имя покупателя:</p>
                    <input placeholder={'Имя покупателя'}
                           value={input_name}
                           onChange={(event) => setInput_name(event.target.value)}/>
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                        : null}
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setIsDelete(false)}>
                            Отменить
                        </button>
                        <button className={'second_plan_button'}
                                onClick={() => setDeleteCard(true)}>
                            Удалить
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}