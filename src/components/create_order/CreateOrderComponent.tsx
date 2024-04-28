import create_art_scss from "@/scss/components/create_art/CreateArt.module.scss";
import Image from "next/image";
import cancel_icon from "@/assets/icons/create_art/cancel.svg";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

import create_order_scss from '@/scss/components/create_order/CreateOder.module.scss'

import edit_icon from '@/assets/icons/create_order/edit.svg'
import settings_scss from "@/scss/components/settings/Settings.module.scss";
import {useState} from "react";
import {AddressEditComponent} from "@/components/create_order/edit/AddressEditComponent";
import {CardEditComponent} from "@/components/create_order/edit/CardEditComponent";

export const CreateOrderComponent = () => {
    const router = useRouter()

    const [isAddressEdit, setIsAddressEdit] = useState(false)
    const [isCardEdit, setIsCardEdit] = useState(false)

    return (
        <section className={create_order_scss.root}>
            <button className={create_art_scss.cancel}
                    onClick={() => router.push(MAIN_PATHS.CART)}>
                <Image src={cancel_icon} alt={'cancel_icon'}/>
                <div>Корзина</div>
            </button>
            <header className={create_order_scss.header}>Оформление заказа</header>
            <main className={create_order_scss.main}>
                <section className={create_order_scss.order_data}>
                    <section className={create_order_scss.one_data}>
                        <header className={create_order_scss.one_data_header}>
                            <div>Адрес доставки</div>
                            <button onClick={() => setIsAddressEdit(true)}>
                                <Image src={edit_icon} alt={'edit_icon'}/>
                            </button>
                        </header>
                        <section className={create_order_scss.data}>
                            <p className={create_order_scss.p}>ул. Победы, д. 20, кв. 29, г. Воронеж, Воронежская обл., Россия, Иванов Иван
                                Иванович </p>
                        </section>
                    </section>
                    <section className={create_order_scss.one_data}>
                        <header className={create_order_scss.one_data_header}>
                            <div>Способ оплаты</div>
                            <button onClick={() => setIsCardEdit(true)}>
                                <Image src={edit_icon} alt={'edit_icon'}/>
                            </button>
                        </header>
                        <section className={create_order_scss.data + ' ' + create_order_scss.card_data + ' ' + settings_scss.p}>
                            <div>MIR</div>
                            <div>•••• •••• •••• 1234</div>
                        </section>
                    </section>
                </section>
                <section className={create_order_scss.total_section + ' ' + create_order_scss.data}>
                    <section className={create_order_scss.total_data}>
                        <div>Итого</div>
                        <div>1 170 000 ₽ </div>
                    </section>
                    <button className={'main_button'}
                    onClick={() => router.push(MAIN_PATHS.SUCCESS_ORDER)}>
                        Оплатить
                    </button>
                </section>
            </main>
            {isAddressEdit ?
                <AddressEditComponent setIsAddressEdit={setIsAddressEdit}/>
            : null}

            {isCardEdit ?
                <CardEditComponent setIsCardEdit={setIsCardEdit}/>
            : null}
        </section>
    )
}