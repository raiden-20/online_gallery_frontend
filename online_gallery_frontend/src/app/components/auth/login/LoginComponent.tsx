import auth_main_scss from '@/app/scss/components/auth/Auth_main.module.scss'
import {useRouter} from "next/navigation";
import {AUTH_PATHS} from "@/app/paths/auth";

export const LoginComponent = () => {
    const router = useRouter()

    return (
        <main className={auth_main_scss.form}>
            <input placeholder={'Эл. адрес'}/>
            <input placeholder={'Пароль'}/>
            <section className={auth_main_scss.section_for_small_button}>
                <button className={auth_main_scss.button_small}
                        onClick={() => router.push(AUTH_PATHS.FORGOT_PASSWORD)}>
                    Забыли пароль?
                </button>
            </section>
            <button className={'main_button'}>Войти</button>
            <p className={auth_main_scss.p}>Нет аккаунта? <button className={auth_main_scss.button_small} onClick={() => router.push(AUTH_PATHS.REGISTRATION)}>
                Зарегистрируйтесь
            </button>
            </p>
        </main>
    )
}