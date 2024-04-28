import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import React, {useState} from "react";
interface deleteAccountInterface {
    setIsDelete(isDeleteClicked: boolean): void
}

export const DeleteCardModalWindow = (props: deleteAccountInterface) => {
    const [message, setMessage] = useState('')

    const [input_name, setInput_name] = useState('')

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
                    <input placeholder={'Имя покупателя'} value={input_name}
                           onChange={(event) => setInput_name(event.target.value)}/>
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                        : null}
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setIsDelete(false)}>
                            Отменить
                        </button>
                        <button className={'second_plan_button'}>
                            Удалить
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}