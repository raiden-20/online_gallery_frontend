import {useEffect, useState} from "react";
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import Image from "next/image";
import open_icon from "@/assets/icons/settings/open.svg";
import close_icon from "@/assets/icons/settings/close.svg";
import mark_icon from '@/assets/icons/settings/mark.svg'
import {OneAddressInterface} from "@/interfaces/credentials";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";

interface oneAddressSettingsInterface {
    oneAddress: OneAddressInterface,

    EditAddress(addressId: string, name: string, country: string, region: string, city: string,
                index: string, location: string, isDefault: boolean,
                router: AppRouterInstance): void

    DeleteAddress(id: string, router: AppRouterInstance): void
}

export const OneAddressSettingsComponent = (props: oneAddressSettingsInterface) => {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    const [input_name, setInput_name] = useState(props.oneAddress.name)
    const [input_country, setInput_country] = useState(props.oneAddress.country)
    const [input_region, setInput_region] = useState(props.oneAddress.region)
    const [input_city, setInput_city] = useState(props.oneAddress.city)
    const [input_index, setInput_index] = useState(props.oneAddress.index)
    const [input_location, setInput_location] = useState(props.oneAddress.location)
    const [input_isDefault, setInput_isDefault] = useState(false)

    const [edit, setEdit] = useState(false)
    const [deleteAddress, setDeleteAddress] = useState(false)

    useEffect(() => {
        if (edit) {
            props.EditAddress(props.oneAddress.addressId, input_name, input_country, input_region, input_city,
                input_index, input_location, input_isDefault, router)
            setEdit(false)
        }
    }, [edit]);

    useEffect(() => {
        if (deleteAddress) {
            props.DeleteAddress(props.oneAddress.addressId, router)
            setDeleteAddress(false)
        }
    }, [deleteAddress]);

    return (
        <section className={settings_scss.one_address}>
            <section className={settings_scss.address_header}>
                <section className={settings_scss.address}>
                    <Image src={mark_icon} alt={'mark_icon'}/>
                    <p className={settings_scss.p}>ул. Победы, д. 20, кв. 29, г. Воронеж, Воронежская обл., Россия,
                        ФИО</p>
                </section>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isOpen ? open_icon : close_icon} className={settings_scss.icon}
                           alt={'open close icon'}/>
                </button>
            </section>
            {isOpen ?
                <section className={settings_scss.address_pay_main}>
                    <input value={input_name}
                           onChange={(event) => setInput_name(event.target.value)}
                           placeholder={'ФИО'} disabled={!isEdit}/>
                    <section className={settings_scss.input_section}>
                        <input value={input_country}
                               onChange={(event) => setInput_country(event.target.value)}
                               placeholder={'Страна'} disabled={!isEdit}/>
                        <input value={input_region}
                               onChange={(event) => setInput_region(event.target.value)}
                               placeholder={'Область'} disabled={!isEdit}/>
                    </section>
                    <section className={settings_scss.input_section}>
                        <input value={input_city}
                               onChange={(event) => setInput_city(event.target.value)}
                               placeholder={'Город'} disabled={!isEdit}/>
                        <input value={input_index}
                               onChange={(event) => setInput_index(event.target.value)}
                               placeholder={'Индекс'} disabled={!isEdit}/>
                    </section>
                    <input value={input_location}
                           onChange={(event) => setInput_location(event.target.value)}
                           placeholder={'Адрес'} disabled={!isEdit}/>
                    {isEdit ?
                        <button className={'main_button'}
                            onClick={() => setEdit(true)}>
                            Сохранить
                        </button>
                        :
                        <section className={settings_scss.footer_one}>
                            <button className={'no_main_color'}
                            onClick={() => setDeleteAddress(true)}>
                                Удалить
                            </button>
                            <section>
                                <button className={'cancel_button'} onClick={() => setIsEdit(true)}>
                                    Редактировать
                                </button>
                                <button className={'main_button ' + settings_scss.disabled}
                                        onClick={() => setInput_isDefault(true)}>
                                    Сделать основным
                                </button>
                            </section>
                        </section>
                    }
                </section>
                : null
            }
        </section>
    )
}