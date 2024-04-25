import React, {useEffect, useState} from "react";
import auth_main_scss from "@/scss/components/auth/Auth_main.module.scss";
import {useRouter} from "next/navigation";
import {AUTH_PATHS} from "@/paths/auth";
import {createArtistProfile} from "@/store/thunks/profileThunk";
import {MAIN_PATHS} from "@/paths/main";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface CreateArtistInterface {
    createArtistProfile(artistName: string, setMessage:(message: string) => void, router: AppRouterInstance): void
}

export const CreateArtistComponent = (props: CreateArtistInterface) => {
    const router = useRouter()

    const [isPressedYes, setIsPressedYes] = useState(false)
    const [isRegisterClicked, setIsRegisterClicked] = useState(false)

    const [input_name, setInput_name] = useState('')

    const [message, setMessage] = useState('')

    useEffect(() => {
        if (isRegisterClicked) {
            if (input_name !== '') {
                props.createArtistProfile(input_name, setMessage, router)
            }

            setIsRegisterClicked(false)
        }
    }, [isRegisterClicked]);

    return (
        <section>
            {isPressedYes ?
                <main className={auth_main_scss.form}>
                    <p>Введите имя для аккаунта художника</p>
                    <input value={input_name}
                           onChange={(event) => {
                               if (event.target.value.length > 200) {
                                   setMessage('Лимит на имя 200 символов')
                               } else {
                                   setMessage('')
                                   setInput_name(event.target.value)
                               }
                           }
                           }
                           placeholder={'Имя'}/>
                    <button className={'main_button'}
                            onClick={() => setIsRegisterClicked(true)}>
                        Зарегистрироваться
                    </button>
                    <p className={'message'}>{message}</p>
                </main>
                :
                <main className={auth_main_scss.form}>
                    <p>Создать аккаунт художника?</p>
                    <p> Необязательно соглашаться сейчас, вы всегда сможете создать через настройки</p>
                    <section className={auth_main_scss.button_section}>
                        <button className={'cancel_button'}
                                onClick={() => router.push(MAIN_PATHS.MAIN)}>
                            Пропустить
                        </button>
                        <button className={'main_button'}
                                onClick={() => setIsPressedYes(true)}>
                            Cтать художником
                        </button>
                    </section>

                </main>
            }
        </section>

    )
}