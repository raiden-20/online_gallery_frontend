import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import React, {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";
import create_order_scss from "@/scss/components/create_order/CreateOder.module.scss";
import Image from "next/image";
import edit_icon from "@/assets/icons/create_order/edit.svg";
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import {CardEditContainer} from "@/components/create_order/edit/cart/CardEditContainer";
import {OneCardInterface} from "@/interfaces/credentials";

interface privateSubscribeInterface {
    price: string
    artistName: string
    cards: OneCardInterface[]

    setSubscribe(flag: boolean): void
    PrivateSubscribe(artistId: string, cardId: string, router: AppRouterInstance): void
    PrivateGetData(artistId: string, router: AppRouterInstance): void
}

export const PrivateSubscribeComponent = (props: privateSubscribeInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.PrivateGetData(Cookies.get('currentId') as string, router)
    }, []);

    const [input_price, setInput_price] = useState('')
    const [isSubscribe, setIsSubscribe] = useState(false)
    const [isCardEdit, setIsCardEdit] = useState(false)

    useEffect(() => {
        if (isSubscribe) {
            let cardId= ''
            props.cards.forEach((oneCard: OneCardInterface) => {
                if (oneCard.isDefault) {
                    cardId = oneCard.cardId
                }
            })
            props.PrivateSubscribe(Cookies.get('currentId') as string, cardId, router)
        }
    }, [isSubscribe]);


    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setSubscribe(false)}></section>
            <main className={'modal_window'}>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Поддержать {props.artistName}?
                    </header>
                    <p>Оформив ежемесячную подписку на Linko, Вы получите доступ к эксклюзивному контенту</p>
                    <input placeholder={'Имя покупателя'} value={input_price}
                           onChange={(event) => setInput_price(event.target.value)}/>
                    <p>Минимальная сумма – {props.price} ₽ в месяц</p>
                    <section className={create_order_scss.one_data_header}>
                        <div>Способ оплаты</div>
                        <button onClick={() => setIsCardEdit(true)}>
                            <Image src={edit_icon} alt={'edit_icon'}/>
                        </button>
                        {props.cards.map((oneCard: OneCardInterface) => {
                            if (oneCard.isDefault) {
                                return (
                                    <section
                                        className={create_order_scss.data + ' ' + create_order_scss.card_data + ' ' + settings_scss.p}>
                                        <div>{oneCard.type}</div>
                                        <div>•••• •••• ••••
                                            {oneCard.number.substring(oneCard.number.length - 4, oneCard.number.length - 1)}</div>
                                    </section>
                                )
                            }
                        })}
                    </section>
                    <footer className={delete_account_scss.footer_buttons}>
                        <button className={'cancel_button'} onClick={() => props.setSubscribe(false)}>
                            Отменить
                        </button>
                        <button className={'main_button'} onClick={() => setIsSubscribe(true)}>
                            Поддержать
                        </button>
                    </footer>
                </section>
            </main>
            {isCardEdit ?
                <CardEditContainer setIsCardEdit={setIsCardEdit}/>
                : null}
        </section>
    )
}