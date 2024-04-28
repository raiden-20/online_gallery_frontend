import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import add_icon from "@/assets/icons/settings/add.svg";
import open_icon from "@/assets/icons/settings/open.svg";
import close_icon from "@/assets/icons/settings/close.svg";
import {useState} from "react";
import {OneCardSettingsComponent} from "@/components/settings/categories/pay/OneCardSettingsComponent";
import cancel_icon from "@/assets/icons/settings/cancel.svg";

interface paySettingsInterface {
    setWhoIsClickedMobile(num: number): void
}

export const PaySettingsComponent = (props: paySettingsInterface) => {
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
                    <OneCardSettingsComponent/>
                </li>
                <li className={settings_scss.grey_bgc}>
                    <header className={settings_scss.address_header}>
                        <button className={settings_scss.add_address}
                                onClick={() => setIsOpen(!isOpen)}>
                            <Image src={add_icon} alt={'add_icon'} className={settings_scss.icon}/>
                            <div>Добавить новую карту</div>
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <Image src={isOpen ? open_icon : close_icon} className={settings_scss.icon}
                                   alt={'open close icon'}/>
                        </button>
                    </header>
                    {isOpen ?
                        <section className={settings_scss.address_pay_main}>
                            <input placeholder={'Номер карты'}/>
                            <section className={settings_scss.input_section}>
                                <input placeholder={'ММ/ГГ'}/>
                                <input type={'password'} placeholder={'CVV'}/>
                            </section>
                            <section className={settings_scss.checkbox_section}>
                                <input type={'checkbox'}/>
                                <div>Сделать основным</div>
                            </section>
                            <button className={'main_button'}>Добавить карту</button>
                        </section>
                        : null}
                </li>
            </ul>
        </section>


    )
}