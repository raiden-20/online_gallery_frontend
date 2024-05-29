import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";

import create_order_scss from '@/scss/components/create_order/CreateOder.module.scss'

import edit_icon from '@/assets/icons/create_order/edit.svg'
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import {useEffect, useState} from "react";
import {CardEditContainer} from "@/components/create_order/edit/cart/CardEditContainer";
import {OneAddressInterface, OneCardInterface} from "@/interfaces/credentials";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {AddressEditContainer} from "@/components/create_order/edit/address/AddressEditContainer";


interface createOrderInterface {
    totalCount: number
    addresses: OneAddressInterface[]
    cards: OneCardInterface[]

    ChangeAuctionOrderAwait(orderId: string, cardId: string, addressId: string, router: AppRouterInstance,
                            setMessage: (message: string) => void): void
    getAddresses(): void,
    getCards(): void
}

export const ChangeAuctionOrderComponent = (props: createOrderInterface) => {
    const router = useRouter()
    const pathname = usePathname()

    const [isAddressEdit, setIsAddressEdit] = useState(false)
    const [isCardEdit, setIsCardEdit] = useState(false)
    const [buy, setBuy] = useState(false)

    const [message, setMessage] = useState('')

    useEffect(() => {
        props.getAddresses()
        props.getCards()
    }, []);

    useEffect(() => {
        if (buy) {
            let addressId = ''
            let cardId = ''
            {props.addresses.map((oneAddress: OneAddressInterface) => {
                if (oneAddress.isDefault) {
                    addressId = oneAddress.addressId
                }
            })}
            {props.cards.map((oneCard: OneCardInterface) => {
                if (oneCard.isDefault) {
                    cardId = oneCard.cardId
                }
            })}
            if (addressId !== '' && cardId !== '') {
                props.ChangeAuctionOrderAwait(pathname.split('/')[2], cardId, addressId, router, setMessage)
            } else {
                setMessage('Заполните для данные для оформление заказа')
            }
        }
    }, [buy]);

    return (
        <section className={create_order_scss.root}>
            <header className={create_order_scss.header}>Оформление заказа</header>
            <main className={create_order_scss.main}>
                <section className={create_order_scss.order_data}>
                    <section className={create_order_scss.one_data}>
                        <header className={create_order_scss.one_data_header}>
                            <div>Адрес доставки</div>
                            <button onClick={() => setIsAddressEdit(true)}>
                                <Image src={edit_icon} alt={'edit_icon'}/>
                            </button>
                        </header>
                        {props.addresses.map((oneAddress: OneAddressInterface, index) => {
                            if (oneAddress.isDefault) {
                                return (
                                    <section className={create_order_scss.data} key={index}>
                                        <p className={create_order_scss.p}>
                                            {oneAddress.location}, {oneAddress.city},
                                            {oneAddress.region}, {oneAddress.country}, {oneAddress.name}
                                        </p>
                                    </section>
                                )
                            }
                        })}
                    </section>
                    <section className={create_order_scss.one_data}>
                        <header className={create_order_scss.one_data_header}>
                            <div>Способ оплаты</div>
                            <button onClick={() => setIsCardEdit(true)}>
                                <Image src={edit_icon} alt={'edit_icon'}/>
                            </button>
                        </header>
                        {props.cards.map((oneCard: OneCardInterface, index) => {
                            if (oneCard.isDefault ) {
                                return (
                                    <section key={index}
                                        className={create_order_scss.data + ' ' + create_order_scss.card_data + ' ' + settings_scss.p}>
                                        <div>{oneCard.type === '' ? 'MIR' : oneCard.type}</div>
                                        <div>•••• •••• ••••
                                            {oneCard.number.substring(oneCard.number.length - 4, oneCard.number.length - 1)}</div>
                                    </section>
                                )
                            }
                        })}
                    </section>
                    <p className={'message'}>{message}</p>
                </section>
                <section className={create_order_scss.total_section + ' ' + create_order_scss.data}>
                    <section className={create_order_scss.total_data}>
                        <div>Итого</div>
                        <div>{props.totalCount} ₽ </div>
                    </section>
                    <button className={'main_button'}
                    onClick={() => setBuy(true)}>
                        Оплатить
                    </button>
                </section>
            </main>
            {isAddressEdit ?
                <AddressEditContainer setIsAddressEdit={setIsAddressEdit} address={props.addresses}/>
            : null}
            {isCardEdit ?
                <CardEditContainer cards={props.cards} setIsCardEdit={setIsCardEdit}/>
            : null}
        </section>
    )
}