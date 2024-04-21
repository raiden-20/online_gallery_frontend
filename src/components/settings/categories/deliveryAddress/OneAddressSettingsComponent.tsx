import {useState} from "react";
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/settings/open.svg";
import close_icon from "@/assets/icons/settings/close.svg";
import mark_icon from '@/assets/icons/settings/mark.svg'

export const OneAddressSettingsComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    return (
        <section className={settings_scss.one_address}>
            <section className={settings_scss.address_header}>
                <section className={settings_scss.address}>
                    <Image src={mark_icon} alt={'mark_icon'}/>
                    <p className={settings_scss.p}>ул. Победы, д. 20, кв. 29, г. Воронеж, Воронежская обл., Россия,
                        ФИО</p>
                </section>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={settings_scss.icon}
                           alt={'open close icon'}/>
                </button>
            </section>
            {isOpen ?
                <section className={settings_scss.address_pay_main}>
                    <input placeholder={'ФИО'} disabled={!isEdit}/>
                    <section className={settings_scss.input_section}>
                        <input placeholder={'Страна'} disabled={!isEdit}/>
                        <input placeholder={'Область'} disabled={!isEdit}/>
                    </section>
                    <section className={settings_scss.input_section}>
                        <input placeholder={'Город'} disabled={!isEdit}/>
                        <input placeholder={'Индекс'} disabled={!isEdit}/>
                    </section>
                    <input placeholder={'Адрес'} disabled={!isEdit}/>
                    {isEdit ?
                        <button className={'main_button'}>Сохранить</button>
                        :
                        <section className={settings_scss.footer_one}>
                            <button className={'no_main_color'}>Удалить</button>
                            <section>
                                <button className={'cancel_button'} onClick={() => setIsEdit(true)}>
                                    Редактировать
                                </button>
                                <button className={'main_button ' + settings_scss.disabled} disabled={true}>Сделать
                                    основным
                                </button>
                            </section>
                        </section>
                    }

                </section>
                : null
            }
        </section>
    )
}