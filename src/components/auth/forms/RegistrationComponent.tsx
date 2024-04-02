import auth_main_scss from "@/scss/components/auth/Auth_main.module.scss";
import {AUTH_PATHS} from "@/paths/auth";
import {useRouter} from "next/navigation";
import {useState} from "react";

export const RegistrationComponent = () => {
    const router = useRouter()

    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const [input_email, setInput_email] = useState('')
    const [input_password, setInput_password] = useState('')


    return (

        <section>
            <main className={auth_main_scss.form}>
                <input value={input_email}
                       onChange={(event) => {
                           setInput_email(event.target.value)
                       }}
                       placeholder={'Эл. адрес'}/>
                <input type={'password'}
                       value={input_password}
                       onChange={(event) => setInput_password(event.target.value)}
                       placeholder={'Пароль'}/>
                <button className={'main_button'}
                        onClick={() => setIsButtonClicked(true)}>
                    Зарегистрироваться
                </button>
                <p className={auth_main_scss.p}>Есть аккаунт? <button className={auth_main_scss.button_small}
                                                                      onClick={() => router.push(AUTH_PATHS.LOGIN)}>
                    Войдите
                </button>
                </p>
            </main>

            {/*<main className={auth_main_scss.form}>*/}
            {/*    <input placeholder={'Возраст'}/>*/}
            {/*    <input placeholder={'Пол'}/>*/}
            {/*    <button className={'main_button'}*/}
            {/*            onClick={() => router.push(AUTH_PATHS.CREATE_ARTIST)}>*/}
            {/*        Зарегистрироваться*/}
            {/*    </button>*/}
            {/*    <button className={auth_main_scss.button_left} onClick={() => setIsAuthData(false)}>*/}
            {/*        Стрелка назад*/}
            {/*    </button>*/}
            {/*</main>*/}

        </section>
    )
}