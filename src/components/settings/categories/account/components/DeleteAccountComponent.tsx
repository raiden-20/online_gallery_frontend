import delete_account_scss from '@/scss/components/settings/DeleteAccount.module.scss'
import React, {useEffect, useState} from "react";
import {Customer} from "@/interfaces/customerInterface";
import {Cancel_ButtonComponent} from "@/components/cancel_button/Cancel_ButtonComponent";

interface deleteAccountInterface {
    customer_data: Customer,
    
    setIsDeleteClicked(isDeleteClicked: boolean): void
    deleteAccount(setMessage:(message: string) => void): void
}

export const DeleteAccountComponent = (props: deleteAccountInterface) => {
    const [message, setMessage] = useState('')
    const [isDelete, setIsDelete] = useState(false)

    const [input_name, setInput_name] = useState('')

    useEffect(() => {
        if (isDelete) {
            setMessage('')
            if (input_name === props.customer_data.customerName) {
                props.deleteAccount(setMessage)
            } else {
                setMessage('Имена не совпадают')
            }
            setIsDelete(false)
        }
    }, [isDelete]);
    
    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setIsDeleteClicked(false)}></section>
            <main className={'modal_window'}>
                <Cancel_ButtonComponent setCancel={props.setIsDeleteClicked} whatSet={false}/>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Удалить аккаунт?
                    </header>
                    <p>Вся информация о Вашем аккаунте будет удалена. После удаления аккаунта Вы не сможете его
                        восстановить. При наличии аккаунта художника он тоже будет удален. Хотите продолжить?</p>
                    <p className={delete_account_scss.main_p}>Для продолжения введите Ваше имя покупателя:</p>
                    <input placeholder={'Имя покупателя'} value={input_name} className={delete_account_scss.input}
                           onChange={(event) => setInput_name(event.target.value)}/>
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                        : null
                    }
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setIsDeleteClicked(false)}>
                            Отменить
                        </button>
                        <button className={'second_plan_button'} onClick={() => setIsDelete(true)}>
                            Удалить
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}