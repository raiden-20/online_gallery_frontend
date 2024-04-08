import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import cancel_icon from "@/assets/icons/settings/cancel.svg";
import {useEffect, useState} from "react";

interface EmailInterface {
    setIsEmailSection(flag: boolean): void
    changeEmail(input_email: string, setMessage:(message: string) => void): void
}

export const EmailComponent = (props: EmailInterface) => {
    const [isSave, setIsSave] = useState(false)
    const [input_email, setInput_email] = useState('')

    const [message, setMessage] = useState('')

    useEffect(() => {
        if (isSave) {
            setMessage('')
            props.changeEmail(input_email, setMessage)
            setIsSave(false)
        }
    }, [isSave]);


    return (
        <section className={settings_scss.new_section}>
            <section className={settings_scss.new_section_header}>
                <button onClick={() => props.setIsEmailSection(false)}>
                    <Image src={cancel_icon} alt={'cancel_icon'} width={0} height={0}/>
                </button>
                <header className={settings_scss.section_name}>Эл. адрес</header>
            </section>
            <p>Введите новый электронный адрес. После успешной смены вам нужно будет заново авторизоваться</p>
            <input value={input_email} onChange={(event) => setInput_email(event.target.value)}
                placeholder={'Новый электронный адрес'}/>
            <p className={settings_scss.message}>{message}</p>
            <button className={'main_button ' + settings_scss.save_button}
                    onClick={() => setIsSave(true)}>
                Сохранить
            </button>
        </section>
    )
}