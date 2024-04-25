import create_art_scss from "@/scss/components/create_art/CreateArt.module.scss";
import Image from "next/image";
import cancel_icon from "@/assets/icons/create_art/cancel.svg";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

import one_order_scss from '@/scss/components/orders/oneOrder/OneOrder.module.scss'
import {useState} from "react";
import {OneOrderModalWindowChange} from "@/components/orders/one_order/modal_windows/OneOrderModalWindowChange";
import {OneOrderModalWindowSend} from "@/components/orders/one_order/modal_windows/OneOrderModalWindowSend";

export const OneOrderComponent = () => {
    const router = useRouter()

    const [isClicked, setIsClicked] = useState(false)

    return (
        <section className={one_order_scss.root}>
            <button className={create_art_scss.cancel}
                    onClick={() => router.push(MAIN_PATHS.ORDERS)}>
                <Image src={cancel_icon} alt={'cancel_icon'}/>
                <div>Назад</div>
            </button>
            <header className={one_order_scss.header}>Заказ №00001236 от 20.04.2024</header>
            <section className={one_order_scss.main}>
                <section className={one_order_scss.section + ' ' + one_order_scss.data}>
                    <ul className={one_order_scss.table_part}>
                        <li className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Адрес</div>
                            <div>ул. Победы, д. 20, кв. 29, г. Воронеж, Воронежская обл., Россия, ФИО</div>
                        </li>
                        <li className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Способ оплаты</div>
                            <div>MIR •••• •••• •••• 1234</div>
                        </li>
                        <li className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Художник</div>
                            <div className={one_order_scss.table_name}>Имя</div>
                        </li>
                        <li className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Покупатель</div>
                            <div className={one_order_scss.table_name}>Имя</div>
                        </li>
                    </ul>
                    <section className={one_order_scss.art_data}>
                        <img src={'/default_art_photo.jpg'} className={one_order_scss.img}
                             alt={'photo'}/>
                        <section className={one_order_scss.art_data_name}>
                            <div>Название</div>
                            <div className={one_order_scss.price}>10 000 ₽</div>
                        </section>
                    </section>
                </section>
                <section className={one_order_scss.section + ' ' + one_order_scss.condition}>
                    <ul className={one_order_scss.table_part}>
                        <li className={one_order_scss.table_condition}>
                            <div className={one_order_scss.table_title}>Состояние</div>
                            <div>В пути</div>
                        </li>
                        <li className={one_order_scss.table_condition}>
                            <div className={one_order_scss.table_title}>Комментарий к доставке</div>
                            <div>Трек-номер 12700690540000 для Почты России</div>
                        </li>
                    </ul>
                    <button className={'main_button'}
                            onClick={() => setIsClicked(true)}>
                        Подтвердить получение
                    </button>
                </section>
            </section>
            <p>Возникли проблемы? <button>Обратитесь в техническую поддержку</button></p>

            {isClicked ?
                <OneOrderModalWindowSend setIsClicked={setIsClicked}/>
                //<OneOrderModalWindowChange setIsClicked={setIsClicked}/>
            : null}
        </section>
    )
}