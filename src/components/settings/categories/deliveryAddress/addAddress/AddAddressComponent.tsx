import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import add_icon from "@/assets/icons/settings/add.svg";
import open_icon from "@/assets/icons/settings/open.svg";
import close_icon from "@/assets/icons/settings/close.svg";
import {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {CHARACTER_RESTRICTION} from "@/paths/elements";

interface addAddressInterface {
    AddAddress(name: string, country: string, region: string, city: string,
               index: string, location: string, isDefault: boolean,
               router: AppRouterInstance): void
}

export const AddAddressComponent = (props: addAddressInterface) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const [isSave, setIsSave] = useState(false)

    const [input_name, setInput_name] = useState('')
    const [input_country, setInput_country] = useState('')
    const [input_region, setInput_region] = useState('')
    const [input_city, setInput_city] = useState('')
    const [input_index, setInput_index] = useState('')
    const [input_location, setInput_location] = useState('')
    const [input_isDefault, setInput_isDefault] = useState(false)

    useEffect(() => {
        if (isSave) {
            props.AddAddress(input_name, input_country, input_region, input_city,
                input_index, input_location, input_isDefault, router)
            setIsSave(false)
        }
    }, [isSave]);

    return (
        <section>
            <header className={settings_scss.address_header}>
                <button className={settings_scss.add_address}
                        onClick={() => setIsOpen(!isOpen)}>
                    <Image src={add_icon} alt={'add_icon'}/>
                    <div>Добавить новый адрес</div>
                </button>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={settings_scss.icon}
                           alt={'open close icon'}/>
                </button>
            </header>
            {isOpen ?
                <section className={settings_scss.address_pay_main}>
                    <input value={input_name}
                           onChange={(event) => {
                               if (event.target.value.length < CHARACTER_RESTRICTION.ADDRESS_NAME) {
                                   setInput_name(event.target.value)
                               }
                           }}
                           placeholder={'ФИО'}/>
                    <section className={settings_scss.input_section}>
                        <input value={input_country}
                               onChange={(event) => {
                                   if (event.target.value.length < CHARACTER_RESTRICTION.ADDRESS_COUNTRY) {
                                       setInput_country(event.target.value)
                                   }
                               }}
                               placeholder={'Страна'}/>
                        <input value={input_region}
                               onChange={(event) => {
                                   if (event.target.value.length < CHARACTER_RESTRICTION.ADDRESS_REGION) {
                                       setInput_region(event.target.value)
                                   }
                               }}
                               placeholder={'Область'}/>
                    </section>
                    <section className={settings_scss.input_section}>
                        <input value={input_city}
                               onChange={(event) => {
                                   if (event.target.value.length < CHARACTER_RESTRICTION.ADDRESS_CITY) {
                                       setInput_city(event.target.value)
                                   }
                               }}
                               placeholder={'Город'}/>
                        <input  value={input_index}
                                onChange={(event) => setInput_index(event.target.value)}
                                placeholder={'Индекс'}/>
                    </section>
                    <input value={input_location}
                           onChange={(event) => {
                               if (event.target.value.length < CHARACTER_RESTRICTION.ADDRESS_LOCATION) {
                                   setInput_location(event.target.value)
                               }
                           }}
                           placeholder={'Адрес'}/>
                    <section className={settings_scss.checkbox_section}>
                        <input onClick={() => setInput_isDefault(!input_isDefault)}
                               type={'checkbox'}/>
                        <div>Сделать основным</div>
                    </section>
                    <button className={'main_button'}
                            onClick={() => setIsSave(true)}>
                        Добавить адрес
                    </button>
                </section>
                : null}
        </section>
    )
}