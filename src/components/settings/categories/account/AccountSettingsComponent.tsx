import settings_scss from '@/scss/components/settings/Settings.module.scss'

import more_icon from '@/assets/icons/settings/more.svg'
import Image from "next/image";
import {useState} from "react";
import {Customer} from "@/interfaces/customerInterface";
import {EmailComponent} from "@/components/settings/categories/account/components/EmailComponent";
import {PasswordComponent} from "@/components/settings/categories/account/components/PasswordComponent";
import {ProfileComponent} from "@/components/settings/categories/account/components/ProfileComponent";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";

interface AccountSettingsInterface {
    customer_data: Customer,

    getCustomerProfileData(id: string, router: AppRouterInstance): void
    changeCustomerProfileData(customerName: string, birthDate: string, gender: string,
                              avatarUrl: string, coverUrl: string, avatar: File, cover: File,
                              router: AppRouterInstance, setMessage:(message: string) => void): void
    changeEmail(input_email: string, setMessage:(message: string) => void): void
    changePassword(input_password: string): void
    deleteAccount(router: AppRouterInstance): void
}

export const AccountSettingsComponent = (props: AccountSettingsInterface) => {
    const router = useRouter()

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
                                <button className={settings_scss.button + ' ' + settings_scss.delete_button}
                                onClick={() => props.deleteAccount(router)}>
                                    Удалить аккаунт
                                </button>
                            </section>
                        </section>
                    </section>
            }

        </section>
    )
}