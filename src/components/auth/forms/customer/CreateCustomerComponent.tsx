import auth_main_scss from "@/scss/components/auth/Auth_main.module.scss";
import {AUTH_PATHS} from "@/paths/auth";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

interface CreateCustomerInterface {
    createCustomerProfile(customerName: string, birthDate: string, gender: string,
                          setMessage:(message: string) => void): void
}

export const CreateCustomerComponent = (props: CreateCustomerInterface) => {
    const router = useRouter()

    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const [input_name, setInput_name] = useState('')
    const [input_date, setInput_date] = useState('')
    const [input_gender, setInput_gender] = useState('')

    const [message, setMessage] = useState('')

    useEffect(() => {
        if (isButtonClicked && (input_name !== '' && input_date !== '' && input_gender !== '')) {
            props.createCustomerProfile(input_name, input_date, input_gender, setMessage)

            router.push(AUTH_PATHS.CREATE_ARTIST)
            setIsButtonClicked(false)
        }
    }, [isButtonClicked]);


    return (
        <main className={auth_main_scss.form}>
            <input value={input_name}
                   onChange={(event) => setInput_name(event.target.value)}
                   placeholder={'Имя'}/>
            <input value={input_date}
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
            <p className={auth_main_scss.message}>{message}</p>
        </main>
    )
}