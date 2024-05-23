import {Cancel_ButtonComponent} from "@/components/cancel_button/Cancel_ButtonComponent";
import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import auctions_modal_scss from '@/scss/components/categories/auctions/AuctionsModal.module.scss'
import React, {useState} from "react";

interface SetMaxRate {
    setSetRate(setMaxRate: boolean): void
}

export const SetRate = (props: SetMaxRate) => {

    const [input_amount, setInput_amount] = useState('')
    const [message, setMessage] = useState('')

    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setSetRate(false)}></section>
            <main className={'modal_window ' + auctions_modal_scss.set_rate_width}>
                <Cancel_ButtonComponent setCancel={props.setSetRate} whatSet={false}/>
                <section className={delete_account_scss.root}>
                    <section className={auctions_modal_scss.set_rate_section}>
                        <header className={auctions_modal_scss.set_rate_header}>Следующий шаг</header>
                        <section className={auctions_modal_scss.set_rate_price}>105 000 ₽</section>
                        <section className={auctions_modal_scss.checkbox}>
                            <input type={'checkbox'}/>
                            <section>Участвовать анонимно</section>
                        </section>
                    </section>
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                        : null
                    }
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setSetRate(false)}>
                            Отмена
                        </button>
                        <button className={'main_button'}>
                            Установить
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}