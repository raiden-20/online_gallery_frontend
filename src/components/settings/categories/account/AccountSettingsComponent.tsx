import settings_scss from '@/scss/components/settings/Settings.module.scss'

import more_icon from '@/assets/icons/settings/more.svg'
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {Customer} from "@/interfaces/customerInterface";
import {EmailComponent} from "@/components/settings/categories/account/components/EmailComponent";
import {PasswordComponent} from "@/components/settings/categories/account/components/PasswordComponent";
import {ProfileComponent} from "@/components/settings/categories/account/components/ProfileComponent";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";

import cancel_icon from "@/assets/icons/settings/cancel.svg";
import {MAIN_PATHS} from "@/paths/main";
import Cookies from "js-cookie";
import {DeleteAccountComponent} from "@/components/settings/categories/account/components/DeleteAccountComponent";

interface AccountSettingsInterface {
    customer_data: Customer,

    getCustomerProfileData(id: string, router: AppRouterInstance): void
    changeCustomerProfileData(customerName: string, birthDate: string, gender: string, description: string,
                              avatarUrl: string, coverUrl: string, avatar: File, cover: File,
                              router: AppRouterInstance, setMessage:(message: string) => void): void
    changeEmail(input_email: string, setMessage:(message: string) => void): void
    changePassword(input_password: string): void
    deleteAccount(setMessage:(message: string) => void): void

    setWhoIsClickedMobile(flag: number): void
}

export const AccountSettingsComponent = (props: AccountSettingsInterface) => {
    const router = useRouter()

    const [isEmailSection, setIsEmailSection] = useState(false)
    const [isPasswordSection, setIsPasswordSection] = useState(false)

    const [artistId, setArtistId] = useState('')

    const [isDeleteClicked, setIsDeleteClicked] = useState(false)

    useEffect(() => {
        setArtistId(Cookies.get('artistId') as string)
    }, []);

    return (
        <section>
            <button className={settings_scss.back}
                    onClick={() => props.setWhoIsClickedMobile(0)}>
                <Image src={cancel_icon} alt={'cancel_icon'} width={19} height={10}/>
                <div>Назад</div>
            </button>

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
                                {!artistId ?
                                    <button className={settings_scss.button}
                                            onClick={() => router.push(MAIN_PATHS.CREATE_ARTIST)}>
                                        Создать аккаунт художника
                                    </button>
                                    : null}
                                <button className={settings_scss.delete_button}
                                        onClick={() => setIsDeleteClicked(true)}>
                                    Удалить аккаунт
                                </button>
                            </section>
                        </section>
                    </section>
            }
            {isDeleteClicked ? <DeleteAccountComponent setIsDeleteClicked={setIsDeleteClicked}
                                                       deleteAccount={props.deleteAccount}
                                                       customer_data={props.customer_data}/>
                : null}
        </section>
    )
}