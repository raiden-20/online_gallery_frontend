import {Cancel_ButtonComponent} from "@/components/cancel_button/Cancel_ButtonComponent";
import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import auctions_modal_scss from '@/scss/components/categories/auctions/AuctionsModal.module.scss'
import React, {useEffect, useState} from "react";
import {addRateToPrice} from "../../../../../../../../utils/tests";

interface SetRate {
    auctionId: string
    lastPrice: string
    rate: string

    setSetRate(setMaxRate: boolean): void
    SetNewRate(auctionId: string, isAnonymous: boolean, setSetRate: (setMaxRate: boolean) => void,
               setMessage: (message: string) => void): void
}

export const SetRate = (props: SetRate) => {
    const [isAnonymous, setIsAnonymous] = useState(false)
    const [setRateButton, setSetRateButton] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (setRateButton) {
            props.SetNewRate(props.auctionId, isAnonymous, props.setSetRate, setMessage)
        }
        setSetRateButton(false)
    }, [setRateButton]);

    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setSetRate(false)}></section>
            <main className={'modal_window ' + auctions_modal_scss.set_rate_width}>
                <Cancel_ButtonComponent setCancel={props.setSetRate} whatSet={false}/>
                <section className={delete_account_scss.root}>
                    <section className={auctions_modal_scss.set_rate_section}>
                        <header className={auctions_modal_scss.set_rate_header}>Следующий шаг</header>
                        <section className={auctions_modal_scss.set_rate_price}>
                            {addRateToPrice(props.rate, props.lastPrice)} ₽
                        </section>
                        <section className={auctions_modal_scss.checkbox}>
                            <input checked={isAnonymous}
                                   type={'checkbox'}
                                   onChange={(event) =>
                                       setIsAnonymous(event.target.checked)}/>
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
                        <button className={'main_button'}
                                onClick={() => setSetRateButton(true)}>
                            Установить
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}