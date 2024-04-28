import auth_main_scss from "@/scss/components/auth/Auth_main.module.scss";
import {AUTH_PATHS} from "@/paths/auth";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface CreateCustomerInterface {
    createCustomerProfile(customerName: string, birthDate: string, gender: string,
                          setMessage: (message: string) => void, router: AppRouterInstance): void
}

export const CreateCustomerComponent = (props: CreateCustomerInterface) => {
    const router = useRouter()

    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const [input_name, setInput_name] = useState('')
    const [input_date, setInput_date] = useState('')
    const [input_gender, setInput_gender] = useState('MAN')

    const [message, setMessage] = useState('')

    useEffect(() => {
        if (isButtonClicked && (input_name !== '' && input_date !== '' && input_gender !== '')) {
            props.createCustomerProfile(input_name, input_date, input_gender, setMessage, router)

            router.push(AUTH_PATHS.CREATE_ARTIST)
            setIsButtonClicked(false)
        }
    }, [isButtonClicked]);


    return (
        <main className={auth_main_scss.form}>
            <input value={input_name}
                   onChange={(event) => {
                       if (event.target.value.length > 200) {
                           setMessage('Лимит на имя 200 символов')
                       } else {
                           setMessage('')
                           setInput_name(event.target.value)
                       }
                   }}
                   placeholder={'Имя'}/>
            <input value={input_date} type={'date'}
                   onChange={(event) => setInput_date(event.target.value)}
                   placeholder={'Возраст'}/>
            <select value={input_gender}
                    onChange={(event) => setInput_gender(event.target.value)}>
                <option value="MAN">Мужской</option>
                <option value="WOMAN">Женский</option>
            </select>
            <button className={'main_button'}
                    onClick={() => setIsButtonClicked(true)}>
                Зарегистрироваться
            </button>
            <p className={'message'}>{message}</p>
        </main>
    )
}