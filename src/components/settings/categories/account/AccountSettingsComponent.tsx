import settings_scss from '@/scss/components/settings/Settings.module.scss'

import more_icon from '@/assets/icons/settings/more.svg'
import Image from "next/image";
import {useState} from "react";
import {Customer} from "@/interfaces/customerInterface";
import {EmailComponent} from "@/components/settings/categories/account/components/EmailComponent";
import {PasswordComponent} from "@/components/settings/categories/account/components/PasswordComponent";
import {ProfileComponent} from "@/components/settings/categories/account/components/ProfileComponent";

interface AccountSettingsInterface {
    customer_data: Customer,

    getCustomerProfileData(id: string): void
    changeCustomerProfileData(customer_name: string, date_birth: string, gender: string,
                              avatar_url: string, cover_url: string, avatar_file: File, cover_file: File): void
    changeEmail(input_email: string): void
    changePassword(input_password: string): void
    deleteAccount(): void
}

export const AccountSettingsComponent = (props: AccountSettingsInterface) => {
    const [isEmailSection, setIsEmailSection] = useState(false)
    const [isPasswordSection, setIsPasswordSection] = useState(false)

    return (
        <section>
            {isEmailSection ? <EmailComponent setIsEmailSection={setIsEmailSection}
                                              changeEmail={props.changeEmail}/> :
                isPasswordSection ? <PasswordComponent setIsPasswordSection={setIsPasswordSection}
                                                       changePassword={props.changePassword}/> :
                    <section className={settings_scss.main}>
                        <ProfileComponent customer_data={props.customer_data}
                                          changeCustomerProfileData={props.changeCustomerProfileData}
                                          getCustomerProfileData={props.getCustomerProfileData}/>
                        <section className={settings_scss.section}>
                            <header className={settings_scss.section_header}>Данные аккаунта</header>
                            <section className={settings_scss.section_form}>
                                <section className={settings_scss.auth_data}>
                                    <header>Эл. адрес</header>
                                    <button onClick={() => setIsEmailSection(true)}>
                                        <Image src={more_icon} alt={'more_icon'} width={0} height={0}/>
                                    </button>
                                </section>
                                <section className={settings_scss.auth_data}>
                                    <header>Пароль</header>
                                    <button onClick={() => setIsPasswordSection(true)}>
                                        <Image src={more_icon} alt={'more_icon'} width={0} height={0}/>
                                    </button>

                                </section>
                            </section>
                        </section>
                        <section className={settings_scss.section}>
                            <header className={settings_scss.section_header}>Действия</header>
                            <section className={settings_scss.footer_buttons}>
                                <button className={settings_scss.button}>Создать аккаунт художника</button>
                                <button className={settings_scss.button + ' ' + settings_scss.delete_button}>Удалить
                                    аккаунт
                                </button>
                            </section>
                        </section>
                    </section>
            }

        </section>
    )
}