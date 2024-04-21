import delete_account_scss from '@/scss/components/settings/DeleteAccount.module.scss'
import React, {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import auth_main_scss from "@/scss/components/auth/Auth_main.module.scss";
import {Customer} from "@/interfaces/customerInterface";
import {useRouter} from "next/navigation";

interface deleteAccountInterface {
    customer_data: Customer,
    
    setIsDeleteClicked(isDeleteClicked: boolean): void
    deleteAccount(router: AppRouterInstance): void
}

export const DeleteAccountComponent = (props: deleteAccountInterface) => {
    const router = useRouter()

    const [message, setMessage] = useState('')
    const [isDelete, setIsDelete] = useState(false)

    const [input_name, setInput_name] = useState('')

    useEffect(() => {
        if (isDelete) {
            if (input_name === props.customer_data.customerName) {
                props.deleteAccount(router)
            } else {
                setMessage('Имена не совпадают')
            }
            setIsDelete(false)
        }
    }, [isDelete]);
    
    return (
        <section className={delete_account_scss.page}>
            <section className={'bg ' + delete_account_scss.bg} onClick={() => props.setIsDeleteClicked(false)}></section>
            <main className={delete_account_scss.modal_window}>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Удалить аккаунт?
                    </header>
                    <p>Вся информация о Вашем аккаунте будет удалена. После удаления аккаунта Вы не сможете его
                        восстановить. При наличии аккаунта художника он тоже будет удален. Хотите продолжить?</p>
                    <p className={delete_account_scss.main_p}>Для продолжения введите Ваше имя покупателя:</p>
                    <input placeholder={'Имя покупателя'} value={input_name}
                           onChange={(event) => setInput_name(event.target.value)}/>
                    {message !== '' ?
                        <p className={auth_main_scss.message}>{message}</p>
                        : null}
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