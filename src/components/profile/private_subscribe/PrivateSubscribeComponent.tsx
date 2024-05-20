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
import mark_icon from "@/assets/icons/settings/mark.svg";
import {Cancel_ButtonComponent} from "@/components/cancel_button/Cancel_ButtonComponent";

interface privateSubscribeInterface {
    price: string
    artistName: string
    cards: OneCardInterface[]

    setSubscribe(flag: boolean): void
    PrivateSubscribe(artistId: string, cardId: string, router: AppRouterInstance, setSubscribe: (flag: boolean) => void): void
    PrivateGetData(artistId: string, router: AppRouterInstance): void
    getCards(): void
}

export const PrivateSubscribeComponent = (props: privateSubscribeInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.PrivateGetData(Cookies.get('currentId') as string, router)
        props.getCards()
    }, []);

    const [input_price, setInput_price] = useState('')
    const [isSubscribe, setIsSubscribe] = useState(false)
    const [isCardEdit, setIsCardEdit] = useState(false)

    const [message, setMessage] = useState('')

    useEffect(() => {
        if (isSubscribe) {
            let cardId= ''
            props.cards.forEach((oneCard: OneCardInterface) => {
                if (oneCard.isDefault) {
                    cardId = oneCard.cardId
                }
            })
            if (cardId !== '') {
                if (input_price >= props.price) {
                    props.PrivateSubscribe(Cookies.get('currentId') as string, cardId, router, props.setSubscribe)
                } else {
                    setMessage('Минимальная сумма поддержки ' + props.price + ' ₽ в месяц')
                }

            } else {
                setMessage('Выберите карту или создайте')
            }

        }
    }, [isSubscribe]);


    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'} onClick={() => props.setSubscribe(false)}></section>
            <main className={'modal_window'}>
                <Cancel_ButtonComponent setCancel={props.setSubscribe} whatSet={false}/>
                <section className={delete_account_scss.root}>
                    <header className={delete_account_scss.header}>
                        Поддержать {props.artistName}?
                    </header>
                    <p>Оформив ежемесячную подписку на художника, Вы получите доступ к эксклюзивному контенту</p>
                    <input placeholder={'Сумма, ₽ '} value={input_price} className={delete_account_scss.input}
                           onChange={(event) => setInput_price(event.target.value)}/>
                    <p className={create_order_scss.no_important}>Минимальная сумма – {props.price} ₽ в месяц</p>
                    <section className={create_order_scss.one_data}>
                        <section className={create_order_scss.one_data_card_header}>
                            <div className={create_order_scss.weight}>Способ оплаты</div>
                            <button onClick={() => setIsCardEdit(true)}>
                                <Image src={edit_icon} alt={'edit_icon'}/>
                            </button>
                        </section>

                        {props.cards.map((oneCard: OneCardInterface, index) => {
                            if (oneCard.isDefault) {
                                return (
                                    <section
                                        className={create_order_scss.data + ' ' + settings_scss.p} key={index}>
                                        <section className={settings_scss.address}>
                                            <Image src={mark_icon}
                                                   className={!oneCard.isDefault ? settings_scss.hide : undefined}
                                                   alt={'mark_icon'}/>
                                            <section className={settings_scss.p}>
                                                <section className={settings_scss.card_data}>
                                                    <div>{oneCard.type === '' ? 'MIR' : oneCard.type}</div>
                                                    <div>•••• •••• ••••
                                                        {oneCard.number.substring(oneCard.number.length - 4, oneCard.number.length - 1)}
                                                    </div>
                                                </section>
                                            </section>
                                        </section>
                                    </section>
                                )
                            }
                        })}
                    </section>
                    <p className={'message'}>{message}</p>
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
                <CardEditContainer setIsCardEdit={setIsCardEdit} cards={props.cards}/>
                : null}
        </section>
    )
}