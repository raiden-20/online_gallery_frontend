import {useEffect, useState} from "react";
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/settings/open.svg";
import close_icon from "@/assets/icons/settings/close.svg";
import mark_icon from '@/assets/icons/settings/mark.svg'
import {OneCardInterface} from "@/interfaces/credentials";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {DeleteCardContainer} from "@/components/settings/categories/pay/deleteCard/DeleteCardContainer";

interface oneCardSettingsInterface {
    oneCard: OneCardInterface,
    EditCard(cardId: string, type: string, number: string, date: string, cvv: string, isDefault: boolean,
             router: AppRouterInstance, setMessage: (message: string) => void): void
}

export const OneCardSettingsComponent = (props: oneCardSettingsInterface) => {
    const router = useRouter()

    const [message, setMessage] = useState('')

    const [isOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

    const [input_number, setInput_number] = useState(props.oneCard.number)
    const [input_date, setInput_date] = useState(props.oneCard.date)
    const [input_cvv, setInput_cvv] = useState(props.oneCard.cvv)
    const [input_isDefault, setInput_isDefault] = useState(props.oneCard.isDefault)
    const [defaultCard, setDefault] = useState(false)

    const [save, setSave] = useState(false)

    useEffect(() => {
        if (save || defaultCard) {
            setMessage('')
            let dateArr = input_date.split('/')
            let date = '20' + dateArr[1] + '-' + dateArr[0] + '-' + '01'
            props.EditCard(props.oneCard.cardId, props.oneCard.type, input_number, date,
                           input_cvv, input_isDefault, router, setMessage)
            setSave(false)
        }
    }, [save, defaultCard]);

    return (
        <section>
            <section className={settings_scss.address_header}>
                <section className={settings_scss.address}>
                    <Image src={mark_icon} className={!props.oneCard.isDefault ? settings_scss.hide : undefined} alt={'mark_icon'}/>
                    <section className={settings_scss.p}>
                        <section className={settings_scss.card_data}>
                            <div>{props.oneCard.type === '' ? 'MIR' : props.oneCard.type}</div>
                            <div>•••• •••• ••••
                                {' ' + props.oneCard.number.substring(props.oneCard.number.length - 4, props.oneCard.number.length)}
                            </div>
                        </section>
                    </section>
                </section>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={settings_scss.icon}
                           alt={'open close icon'}/>
                </button>
            </section>
            {isOpen ?
                <section className={settings_scss.address_pay_main}>
                    <input value={input_number}
                           onChange={(event) => setInput_number(event.target.value)}
                           placeholder={'Номер карты'} disabled={!isEdit}/>
                    <section className={settings_scss.input_section}>
                        <input value={input_date}
                               onChange={(event) => setInput_date(event.target.value)}
                               placeholder={'ММ/ГГ'} disabled={!isEdit}/>
                        <input value={input_cvv}
                               onChange={(event) => setInput_cvv(event.target.value)}
                               type={'password'} placeholder={'CVV'} disabled={!isEdit}/>
                    </section>
                    {isEdit ?
                        <button className={'main_button'}
                        onClick={() => setSave(true)}>
                            Сохранить
                        </button>
                        :
                        <section className={settings_scss.footer_one}>
                            <button className={'no_main_color'}
                                    onClick={() => setIsDelete(true)}>
                                Удалить
                            </button>
                            <section>
                                <button className={'cancel_button'} onClick={() => setIsEdit(true)}>
                                    Редактировать
                                </button>
                                <button className={'main_button ' + settings_scss.disabled}
                                        onClick={() => {
                                            setInput_isDefault(true)
                                            setDefault(true)
                                        }
                                        }>
                                    Сделать основным
                                </button>
                            </section>
                        </section>
                    }
                    {message !== '' ?
                        <p className={'message'}>{message}</p>
                    : null}
                </section>
                : null
            }
            {isDelete ? <DeleteCardContainer setIsDelete={setIsDelete} id={props.oneCard.cardId}/>
                : null}
        </section>

    )
}