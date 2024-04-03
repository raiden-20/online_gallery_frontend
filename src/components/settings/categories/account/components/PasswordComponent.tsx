import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import cancel_icon from "@/assets/icons/settings/cancel.svg";
import {useEffect, useState} from "react";

interface PasswordInterface {
    setIsPasswordSection(flag: boolean): void

    changePassword(input_password: string): void
}

export const PasswordComponent = (props: PasswordInterface) => {
    const [isSave, setIsSave] = useState(false)
    const [input_password, setInput_password] = useState('')

    useEffect(() => {
        if (isSave) {
            props.changePassword(input_password)
            setIsSave(false)
        }
    }, [isSave]);

    return (
        <section className={settings_scss.new_section}>
            <section className={settings_scss.new_section_header}>
                <button onClick={() => props.setIsPasswordSection(false)}>
                    <Image src={cancel_icon} alt={'cancel_icon'} width={0} height={0}/>
                </button>
                <header className={settings_scss.section_name}>Пароль</header>
            </section>
            <p>Введите новый пароль. После успешной смены вам нужно будет заново
                авторизоваться</p>
            <input value={input_password} type={'password'}
                   onChange={(event) => setInput_password(event.target.value)}
                   placeholder={'Новый пароль'}/>
            <button className={'main_button ' + settings_scss.save_button}
                    onClick={() => setIsSave(true)}>
                Сохранить
            </button>
        </section>
    )
}