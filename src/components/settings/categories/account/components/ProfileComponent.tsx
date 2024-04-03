import settings_scss from "@/scss/components/settings/Settings.module.scss";
import {Customer} from "@/interfaces/customerInterface";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

interface ProfileInterface {
    customer_data: Customer,

    changeCustomerProfileData(customer_name: string, date_birth: string, gender: string,
                              avatar_url: string, cover_url: string, avatar_file: File | null, cover_file: File | null): void

    getCustomerProfileData(id: string): void
}

export const ProfileComponent = (props: ProfileInterface) => {
    const [input_date, setInput_date] = useState(props.customer_data.date_birth)
    const [input_gender, setInput_gender] = useState(props.customer_data.gender)
    const [isSave, setIsSave] = useState(false)

    useEffect(() => {
        if (isSave) {
            const gender = input_gender === 'man' ? 'Мужской' : 'Женский'

            props.changeCustomerProfileData(props.customer_data.customer_name, input_date, gender,
                props.customer_data.avatar_url, props.customer_data.cover_url, null, null)
            setIsSave(false)


        }
    }, [isSave]);

    useEffect(() => {
        props.getCustomerProfileData(Cookies.get('id') as string)
    }, []);

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
                        <option value="man">Мужской</option>
                        <option value="woman">Женский</option>
                    </select>
                </section>
                <button className={'main_button ' + settings_scss.save_button}>Сохранить</button>
            </section>
        </section>
    )
}