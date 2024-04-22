import delete_account_scss from "@/scss/components/settings/DeleteAccount.module.scss";
import auth_main_scss from "@/scss/components/auth/Auth_main.module.scss";
import React, {useState} from "react";

import create_order_scss from '@/scss/components/create_order/CreateOder.module.scss'
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import {
    OneAddressSettingsComponent
} from "@/components/settings/categories/deliveryAddress/OneAddressSettingsComponent";
import Image from "next/image";
import add_icon from "@/assets/icons/settings/add.svg";
import open_icon from "@/assets/icons/settings/open.svg";
import close_icon from "@/assets/icons/settings/close.svg";

interface addressEditInterface {
    setIsAddressEdit(isAddressEdit: boolean): void
}

export const AddressEditComponent = (props: addressEditInterface) => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <section className={create_order_scss.page}>
            <section className={'bg ' + create_order_scss.bg}
                     onClick={() => props.setIsAddressEdit(false)}></section>
            <main className={create_order_scss.modal_window}>
                <section className={create_order_scss.root_window}>
                    <header className={create_order_scss.header_window}>
                        Выберите адрес доставки
                    </header>
                    <ul className={create_order_scss.window_height}>
                        {isOpen ?
                            null
                        :
                            <section className={settings_scss.address_root}>
                                <li className={settings_scss.grey_bgc}>
                                    <OneAddressSettingsComponent/>
                                </li>
                                <li className={settings_scss.grey_bgc}>
                                    <OneAddressSettingsComponent/>
                                </li>
                            </section>
                        }
                        <li className={settings_scss.grey_bgc}>
                            <header className={settings_scss.address_header}>
                                <button className={settings_scss.add_address}
                                        onClick={() => setIsOpen(!isOpen)}>
                                    <Image src={add_icon} alt={'add_icon'}/>
                                    <div>Добавить новый адрес</div>
                                </button>
                                <button onClick={() => setIsOpen(!isOpen)}>
                                <Image src={isOpen ? open_icon : close_icon} className={settings_scss.icon}
                                           alt={'open close icon'}/>
                                </button>
                            </header>
                            {isOpen ?
                                <section className={settings_scss.address_pay_main}>
                                    <input placeholder={'ФИО'}/>
                                    <section className={settings_scss.input_section}>
                                        <input placeholder={'Страна'}/>
                                        <input placeholder={'Область'}/>
                                    </section>
                                    <section className={settings_scss.input_section}>
                                        <input placeholder={'Город'}/>
                                        <input placeholder={'Индекс'}/>
                                    </section>
                                    <input placeholder={'Адрес'}/>
                                    <section className={settings_scss.checkbox_section}>
                                        <input type={'checkbox'}/>
                                        <div>Сделать основным</div>
                                    </section>
                                    <button className={'main_button'}>Добавить адрес</button>
                                </section>
                                : null}
                        </li>
                    </ul>
                    <footer className={create_order_scss.footer_buttons_window}>
                        <button className={'cancel_button'} onClick={() => props.setIsAddressEdit(false)}>
                            Отменить
                        </button>
                        <button className={'main_button'}>
                            Выбрать адрес
                        </button>
                    </footer>
                </section>
            </main>
        </section>
    )
}