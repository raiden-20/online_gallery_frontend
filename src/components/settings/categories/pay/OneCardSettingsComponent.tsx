import {useState} from "react";
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/settings/open.svg";
import close_icon from "@/assets/icons/settings/close.svg";
import mark_icon from '@/assets/icons/settings/mark.svg'

export const OneCardSettingsComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    return (
        <section>
            <section className={settings_scss.address_header}>
                <section className={settings_scss.address}>
                    <Image src={mark_icon} alt={'mark_icon'}/>
                    <section className={settings_scss.card_data + ' ' + settings_scss.p}>
                        <div>MASTERCARD</div>
                        <div>•••• •••• •••• 1234</div>
                    </section>
                </section>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon}
                           alt={'open close icon'}/>
                </button>
            </section>
            {isOpen ?
                <section className={settings_scss.address_pay_main}>
                    <input placeholder={'Номер карты'} disabled={!isEdit}/>
                    <section className={settings_scss.input_section}>
                        <input placeholder={'ММ/ГГ'} disabled={!isEdit}/>
                        <input type={'password'} placeholder={'CVV'} disabled={!isEdit}/>
                    </section>
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