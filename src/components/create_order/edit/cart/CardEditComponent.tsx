import React, {useEffect} from "react";
import create_order_scss from '@/scss/components/create_order/CreateOder.module.scss'
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import {OneCardContainer} from "@/components/settings/categories/pay/oneCard/OneCardContainer";
import {AddCardContainer} from "@/components/settings/categories/pay/addCard/AddCardContainer";
import {OneCardInterface} from "@/interfaces/credentials";
import {Cancel_ButtonComponent} from "@/components/cancel_button/Cancel_ButtonComponent";

interface addressEditInterface {
    setIsCardEdit(isCardEdit: boolean): void
    cards: OneCardInterface[]
    getCards(): void
}

export const CardEditComponent = (props: addressEditInterface) => {
    useEffect(() => {
        props.getCards()
    }, []);

    return (
        <section className={'page_modal_window ' + create_order_scss.z}>
            <section className={'bg2'}
                     onClick={() => props.setIsCardEdit(false)}></section>
            <main className={'modal_window'}>
                <Cancel_ButtonComponent setCancel={props.setIsCardEdit} whatSet={false}/>
                <section className={create_order_scss.root_window}>
                    <header className={create_order_scss.header_window}>
                        Выберите карту
                    </header>
                    <ul className={create_order_scss.window_height}>
                        <section className={settings_scss.address_root}>
                            {props.cards.map((oneCard: OneCardInterface, index) => {
                                return (
                                    <li className={settings_scss.grey_bgc} key={index}>
                                        <OneCardContainer oneCard={oneCard}/>
                                    </li>
                                )
                            })}
                        </section>
                        <li className={settings_scss.grey_bgc} key={0}>
                            <AddCardContainer/>
                        </li>
                    </ul>
                    <footer className={create_order_scss.footer_buttons_window}>
                        <button className={'cancel_button'} onClick={() => props.setIsCardEdit(false)}>
                            Отменить
                        </button>
                        <button className={'main_button'}>
                            Выбрать карту
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}