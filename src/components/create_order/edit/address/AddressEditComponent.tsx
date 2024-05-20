import React, {useEffect} from "react";

import create_order_scss from '@/scss/components/create_order/CreateOder.module.scss'
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import {OneAddressContainer} from "@/components/settings/categories/deliveryAddress/oneAddress/OneAddressContainer";
import {OneAddressInterface} from "@/interfaces/credentials";
import {AddAddressContainer} from "@/components/settings/categories/deliveryAddress/addAddress/AddAddressContainer";

interface addressEditInterface {
    address: OneAddressInterface[]
    setIsAddressEdit(isAddressEdit: boolean): void
    getAddresses(): void
}

export const AddressEditComponent = (props: addressEditInterface) => {

    useEffect(() => {
        props.getAddresses()
    }, []);


    return (
        <section className={'page_modal_window'}>
            <section className={'bg2'}
                     onClick={() => props.setIsAddressEdit(false)}></section>
            <main className={'modal_window'}>
                <section className={create_order_scss.root_window}>
                    <header className={create_order_scss.header_window}>
                        Выберите адрес доставки
                    </header>
                    <section className={create_order_scss.window_height}>
                        <ul className={settings_scss.address_root}>
                            {props.address.map((oneAddress: OneAddressInterface, index) => {
                                return (
                                    <li className={settings_scss.grey_bgc} key={index}>
                                        <OneAddressContainer oneAddress={oneAddress}/>
                                    </li>
                                )
                            })
                            }
                        </ul>
                        <section className={settings_scss.grey_bgc}>
                            <AddAddressContainer/>
                        </section>
                    </section>
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