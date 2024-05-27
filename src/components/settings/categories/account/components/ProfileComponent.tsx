import settings_scss from "@/scss/components/settings/Settings.module.scss";
import {Customer} from "@/interfaces/customerInterface";
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import header_profile_scss from "@/scss/components/profile/HeaderProfile.module.scss";

interface ProfileInterface {
    customer_data: Customer,

    changeCustomerProfileData(customerName: string, birthDate: string, gender: string, description: string,
                              avatarUrl: string, coverUrl: string, avatar: File | string, cover: File | string,
                              router: AppRouterInstance, setMessage: (message: string) => void): void

    getCustomerProfileData(id: string, router: AppRouterInstance): void
}

export const ProfileComponent = (props: ProfileInterface) => {
    const router = useRouter()

    const [input_date, setInput_date] = useState(props.customer_data.birthDate.toISOString().split('T')[0])
    const [input_gender, setInput_gender] = useState(props.customer_data.gender)
    const [isSave, setIsSave] = useState(false)

    const [message, setMessage] = useState('')

    useEffect(() => {
        if (isSave) {
            props.changeCustomerProfileData(props.customer_data.customerName, input_date,
                input_gender === '' ? 'MAN' : input_gender, props.customer_data.description,
                props.customer_data.avatarUrl, props.customer_data.coverUrl, ' ', ' ',
                router, setMessage)
            setIsSave(false)
        }
    }, [isSave]);

    useEffect(() => {
        props.getCustomerProfileData(Cookies.get('customerId') as string, router)
    }, []);

    useEffect(() => {
        setInput_date(props.customer_data.birthDate.getFullYear() + '-' +
            (props.customer_data.birthDate.getMonth() + 1).toString().padStart(2, '0') + '-' +
            props.customer_data.birthDate.getDate().toString().padStart(2, '0'))
        setInput_gender(props.customer_data.gender)
    }, [props.customer_data.birthDate, props.customer_data.gender]);

    return (
        <section className={settings_scss.section}>
            <header className={settings_scss.section_header}>Данные профиля</header>
            <section className={settings_scss.section_form}>
                <section className={settings_scss.input_section}>
                    <input value={input_date}
                           onChange={(event) => setInput_date(event.target.value)}
                           type={'date'} placeholder={'ДД.ММ.ГГ'}/>
                    <select value={input_gender}
                            onChange={(event) => setInput_gender(event.target.value)}>
                        <option value="MAN">Мужской</option>
                        <option value="WOMAN">Женский</option>
                    </select>
                </section>
                <button className={'main_button ' + settings_scss.save_button}
                        onClick={() => setIsSave(true)}>
                    Сохранить
                </button>
            </section>
            <p className={header_profile_scss.message}>{message}</p>
        </section>
    )
}