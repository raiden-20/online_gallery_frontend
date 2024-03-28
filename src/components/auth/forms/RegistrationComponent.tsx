import auth_main_scss from "@/app/scss/components/auth/Auth_main.module.scss";
import {AUTH_PATHS} from "@/app/paths/auth";
import {useRouter} from "next/navigation";
import {useState} from "react";

export const RegistrationComponent = () => {
    const router = useRouter()

    const [isAuthData, setIsAuthData] = useState(false)

    return (

        <section>
            {isAuthData ?
                <main className={auth_main_scss.form}>
                    <input placeholder={'Возраст'}/>
                    <input placeholder={'Пол'}/>
                    <button className={'main_button'}
                            onClick={() => router.push(AUTH_PATHS.CREATE_ARTIST)}>
                        Зарегистрироваться
                    </button>
                    <button className={auth_main_scss.button_left} onClick={() => setIsAuthData(false)}>
                        Стрелка назад
                    </button>
                </main>
                :
                <main className={auth_main_scss.form}>
                    <input placeholder={'Имя'}/>
                    <input placeholder={'Эл. адрес'}/>
                    <input placeholder={'Пароль'}/>
                    <button className={'main_button'}
                            onClick={() => setIsAuthData(true)}>
                        Продолжить
                    </button>
                    <p className={auth_main_scss.p}>Есть аккаунт? <button className={auth_main_scss.button_small}
                                                                          onClick={() => router.push(AUTH_PATHS.LOGIN)}>
                        Войдите
                    </button>
                    </p>
                </main>
            }
        </section>
    )
}