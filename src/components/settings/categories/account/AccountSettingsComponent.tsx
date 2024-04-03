import settings_scss from '@/scss/components/settings/Settings.module.scss'

import more_icon from '@/assets/icons/settings/more.svg'
import Image from "next/image";
import {useState} from "react";

export const AccountSettingsComponent = () => {
    const [isEmailSection, setIsEmailSection] = useState(false)
    const [isPasswordSection, setIsPasswordSection] = useState(false)

    return (
        <section className={settings_scss.main}>
            <section className={settings_scss.section}>
                <header className={settings_scss.section_header}>Данные профиля</header>
                <section className={settings_scss.section_form}>
                    <section className={settings_scss.input_section}>
                        <input type={'date'} placeholder={'ДД.ММ.ГГ'}/>
                        <select>
                            <option value="man">Мужской</option>
                            <option value="woman">Женский</option>
                        </select>
                    </section>
                    <button className={'main_button ' + settings_scss.save_button}>Сохранить</button>
                </section>
            </section>
            <section className={settings_scss.section}>
                <header className={settings_scss.section_header}>Данные аккаунта</header>
                <section className={settings_scss.section_form}>
                    {isEmailSection ?
                        <section className={settings_scss.auth_data}>
                            <input placeholder={'Новый электронный адрес'}/>
                            <button className={'main_button ' + settings_scss.save_button}
                                    onClick={() => {
                                    }}>
                                Сохранить
                            </button>
                            <button className={'main_button ' + settings_scss.save_button}
                                    onClick={() => setIsEmailSection(false)}>
                                Отменить
                            </button>
                        </section>
                        :
                        <section className={settings_scss.auth_data}>
                            <header>Эл. адрес</header>
                            <button onClick={() => setIsEmailSection(true)}>
                                <Image src={more_icon} alt={'more_icon'} width={0} height={0}/>
                            </button>
                        </section>
                    }
                    {isPasswordSection ?
                        <section className={settings_scss.auth_data}>
                            <input placeholder={'Новый пароль'}/>
                            <button className={'main_button ' + settings_scss.save_button}
                                    onClick={() => {
                                    }}>
                                Сохранить
                            </button>
                            <button className={'main_button ' + settings_scss.save_button}
                                    onClick={() => setIsPasswordSection(false)}>
                                Отменить
                            </button>
                        </section>
                        :
                        <section className={settings_scss.auth_data}>
                            <header>Пароль</header>
                            <button onClick={() => setIsPasswordSection(true)}>
                                <Image src={more_icon} alt={'more_icon'} width={0} height={0}/>
                            </button>

                        </section>
                    }
                </section>
            </section>
            <section className={settings_scss.section}>
                <header className={settings_scss.section_header}>Действия</header>
                <section className={settings_scss.footer_buttons}>
                    <button className={settings_scss.button}>Создать аккаунт художника</button>
                    <button className={settings_scss.button + ' ' + settings_scss.delete_button}>Удалить аккаунт
                    </button>
                </section>
            </section>
        </section>
    )
}