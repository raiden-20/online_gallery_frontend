import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import add_icon from "@/assets/icons/settings/add.svg";
import open_icon from "@/assets/icons/settings/open.svg";
import close_icon from "@/assets/icons/settings/close.svg";
import {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface addCardInterface {
    AddCard(number: string, date: string, cvv: string, isDefault: boolean,
            router: AppRouterInstance): void
}

export const AddCardComponent = (props: addCardInterface) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const [input_number, setInput_number] = useState('')
    const [input_date, setInput_date] = useState('')
    const [input_cvv, setInput_cvv] = useState('')
    const [input_isDefault, setInput_isDefault] = useState(false)

    const [addCard, setAddCard] = useState(false)

    useEffect(() => {
        if (addCard) {
            let dateArr = input_date.split('/')
            let date = '20' + dateArr[1] + '-' + dateArr[0] + '-' + '01'

            props.AddCard(input_number, date, input_cvv, input_isDefault, router)
            setAddCard(false)
        }
    }, [addCard]);

    return (
        <section>
            <header className={settings_scss.address_header}>
                <button className={settings_scss.add_address}
                        onClick={() => setIsOpen(!isOpen)}>
                    <Image src={add_icon} alt={'add_icon'} className={settings_scss.icon}/>
                    <div>Добавить новую карту</div>
                </button>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={settings_scss.icon}
                           alt={'open close icon'}/>
                </button>
            </header>
            {isOpen ?
                <section className={settings_scss.address_pay_main}>
                    <input value={input_number}
                           onChange={(event) => {
                               if (event.target.value.length < CHARACTER_RESTRICTION.CARD) {
                                   setInput_number(event.target.value)}
                               }
                           }
                           placeholder={'Номер карты'}/>
                    <section className={settings_scss.input_section}>
                        <input value={input_date}
                               onChange={(event) => setInput_date(event.target.value)}
                               placeholder={'ММ/ГГ'}/>
                        <input value={input_cvv}
                               onChange={(event) => setInput_cvv(event.target.value)}
                               type={'password'} placeholder={'CVV'}/>
                    </section>
                    <section className={settings_scss.checkbox_section}>
                        <input onClick={() => setInput_isDefault(!input_isDefault)}
                               type={'checkbox'}/>
                        <div>Сделать основным</div>
                    </section>
                    <button className={'main_button'}
                            onClick={() => setAddCard(true)}>
                        Добавить карту
                    </button>
                </section>
                : null}
        </section>
    )
}