import settings_scss from "@/scss/components/settings/Settings.module.scss";
import {useState} from "react";

import add_icon from '@/assets/icons/settings/add.svg'
import open_icon from '@/assets/icons/settings/open.svg'
import close_icon from '@/assets/icons/settings/close.svg'
import Image from "next/image";
import {OneAddressSettingsComponent} from "@/components/settings/categories/deliveryAddress/OneAddressSettingsComponent";
import cancel_icon from "@/assets/icons/settings/cancel.svg";

interface deliverySettingsInterface {
    setWhoIsClickedMobile(num: number): void
}

export const DeliveryAddressSettingsComponent = (props: deliverySettingsInterface) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section>
            <button className={settings_scss.back}
                    onClick={() => props.setWhoIsClickedMobile(0)}>
                <Image src={cancel_icon} alt={'cancel_icon'} width={19} height={10}/>
                <div>Назад</div>
            </button>
            <ul className={settings_scss.address_root}>
                <li className={settings_scss.grey_bgc}>
                    <OneAddressSettingsComponent/>
                </li>
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
                            <button className={'main_button'}>Добавить адрес</button>
                        </section>
                        : null}
                </li>
            </ul>
        </section>


    )
}