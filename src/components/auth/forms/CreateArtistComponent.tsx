import {useState} from "react";
import auth_main_scss from "@/app/scss/components/auth/Auth_main.module.scss";
import {AUTH_PATHS} from "@/app/paths/auth";
import {useRouter} from "next/navigation";

export const CreateArtistComponent = () => {
    const router = useRouter()

    const [isPressedYes, setIsPressedYes] = useState(false)

    return (
        <section>
            {isPressedYes ?
                <main className={auth_main_scss.form}>
                    <p>Введите имя для аккаунта художника</p>
                    <input placeholder={'Имя'}/>
                    <button className={'main_button'}>
                        Продолжить
                    </button>
                    <button className={auth_main_scss.button_left} onClick={() => setIsPressedYes(false)}>
                        Стрелка назад
                    </button>
                </main>
                :
                <main className={auth_main_scss.form}>
                    <p>Создать аккаунт художника?</p>
                    <button className={'main_button'}
                            onClick={() => setIsPressedYes(true)}>
                        Да
                    </button>
                    <button className={'no_main_color'}>
                        Нет
                    </button>
                    <button className={auth_main_scss.button_left} onClick={() => router.push(AUTH_PATHS.REGISTRATION)}>
                        Стрелка назад
                    </button>
                </main>
            }
        </section>

    )
}