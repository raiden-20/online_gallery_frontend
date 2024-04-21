import auth_main_scss from '@/scss/components/auth/Auth_main.module.scss'
import {useRouter} from "next/navigation";
import {AUTH_PATHS} from "@/paths/auth";
import {useState} from "react";

export const LoginComponent = () => {
    const router = useRouter()

    const [input_email, setInput_email] = useState('')
    const [input_password, setInput_password] = useState('')


    return (
        <form className={auth_main_scss.form}>
            <input value={input_email}
                   onChange={(event) => {
                       setInput_email(event.target.value)
                   }}
                   placeholder={'Эл. адрес'}/>
            <input type={'password'}
                value={input_password}
                   onChange={(event) => setInput_password(event.target.value)}
                   placeholder={'Пароль'}/>
            <section className={auth_main_scss.section_for_small_button}>
                <button className={auth_main_scss.button_small}
                        onClick={() => router.push(AUTH_PATHS.FORGOT_PASSWORD)}>
                    Забыли пароль?
                </button>
            </section>
            <button className={'main_button'}>
                Войти
            </button>
            <p className={auth_main_scss.p}>Нет аккаунта? <button className={auth_main_scss.button_small}
                                                                  onClick={() => router.push(AUTH_PATHS.REGISTRATION)}>
                Зарегистрируйтесь
            </button>
            </p>
        </form>
    )
}