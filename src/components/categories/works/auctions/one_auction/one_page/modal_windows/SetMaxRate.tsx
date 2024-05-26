import {Cancel_ButtonComponent} from "@/components/cancel_button/Cancel_ButtonComponent";
import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import auctions_modal_scss from '@/scss/components/categories/auctions/AuctionsModal.module.scss'
import React, {useEffect, useState} from "react";

interface SetMaxRate {
    auctionId: string

    setSetMaxRate(setMaxRate: boolean): void

    SetMaxRate(auctionId: string, isAnonymous: boolean, maxRate: string, setSetRate: (setMaxRate: boolean) => void): void
}

export const SetMaxRate = (props: SetMaxRate) => {

    const [input_amount, setInput_amount] = useState('')
    const [isAnonymous, setIsAnonymous] = useState(false)
    const [setMaxRate, setSetMaxRate] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (setMaxRate) {
            props.SetMaxRate(props.auctionId, isAnonymous, input_amount, props.setSetMaxRate)
        }
        setSetMaxRate(false)
    }, [setMaxRate]);

    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setSetMaxRate(false)}></section>
            <main className={'modal_window'}>
                <Cancel_ButtonComponent setCancel={props.setSetMaxRate} whatSet={false}/>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Максимальная ставка
                    </header>
                    <p>Когда другие пользователи будут делать ставки, система от Вашего имени будет перебивать их
                        ставки, не превышая установленную максимальную ставку</p>
                    <input placeholder={'Сумма, ₽ '} value={input_amount} className={delete_account_scss.input}
                           onChange={(event) => setInput_amount(event.target.value)}/>
                    <section className={auctions_modal_scss.checkbox}>
                        <input type={'checkbox'}
                               checked={isAnonymous}
                               onChange={(event) => setIsAnonymous(event.target.checked)}/>
                        <section>Участвовать анонимно</section>
                    </section>
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                        : null
                    }
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setSetMaxRate(false)}>
                            Отмена
                        </button>
                        <button className={'main_button'}
                        onClick={() => setSetMaxRate(true)}>
                            Установить
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}