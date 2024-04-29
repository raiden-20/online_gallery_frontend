import create_art_scss from "@/scss/components/create_art/CreateArt.module.scss";
import Image from "next/image";
import cancel_icon from "@/assets/icons/create_art/cancel.svg";
import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";

import one_order_scss from '@/scss/components/orders/OneOrder.module.scss'
import {useEffect, useState} from "react";
import {OrderInterface} from "@/interfaces/cartInterface";
import Cookies from "js-cookie";
import {OneOrderButtons} from "@/components/orders/one_order/OneOrderButtons";

interface oneOrderInterface {
    oneOrder: OrderInterface
    GetOneOrder(currentId: string): void
    SetOrder(orderId: string, comment: string): void
    EditOrder(orderId: string, comment: string): void
    ReceiveOrder(orderId: string): void
}

export const OneOrderComponent = (props: oneOrderInterface) => {
    const router = useRouter()

    const [role] = useState(Cookies.get('role') as string)
    const [artistId] = useState(Cookies.get('artistId') as string)
    const [customerId] = useState(Cookies.get('customerId') as string)

    useEffect(() => {
        const id = role === ROLES.CUSTOMER ? customerId : artistId
        props.GetOneOrder(id)
    }, []);

    return (
        <section className={one_order_scss.root}>
            <button className={create_art_scss.cancel}
                    onClick={() => router.push(MAIN_PATHS.ORDERS)}>
                <Image src={cancel_icon} alt={'cancel_icon'}/>
                <div>Назад</div>
            </button>
            <header className={one_order_scss.header}>Заказ №0000 {props.oneOrder.orderId}</header>
            <section className={one_order_scss.main}>
                <section className={one_order_scss.section + ' ' + one_order_scss.data}>
                    <ul className={one_order_scss.table_part}>
                        <li className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Адрес</div>
                            <p className={one_order_scss.address}>
                                {props.oneOrder.location}, {props.oneOrder.city}, {props.oneOrder.region},
                                {props.oneOrder.city}, {props.oneOrder.name}
                            </p>
                        </li>
                        <li className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Способ оплаты</div>
                            <div>•••• •••• ••••
                                {props.oneOrder.number.substring(props.oneOrder.number.length - 4, props.oneOrder.number.length - 1)}</div>
                        </li>
                        <li className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Художник</div>
                            <div className={one_order_scss.table_name}>{props.oneOrder.artistName}</div>
                        </li>
                        <li className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Покупатель</div>
                            <div className={one_order_scss.table_name}>{props.oneOrder.customerName}</div>
                        </li>
                    </ul>
                    <section className={one_order_scss.art_data}>
                        <img src={'/default_art_photo.jpg'} className={one_order_scss.img}
                             alt={'photo'}/>
                        <section className={one_order_scss.art_data_name}>
                            <div>{props.oneOrder.artName}</div>
                            <div className={one_order_scss.price}>{props.oneOrder.price} ₽</div>
                        </section>
                    </section>
                </section>
                <section className={one_order_scss.section + ' ' + one_order_scss.condition}>
                    <ul className={one_order_scss.table_part}>
                        <li className={one_order_scss.table_condition}>
                            <div className={one_order_scss.table_title}>Состояние</div>
                            <div>{props.oneOrder.status}</div>
                        </li>
                        <li className={one_order_scss.table_condition}>
                            <div className={one_order_scss.table_title}>Комментарий к доставке</div>
                            <div>{props.oneOrder.artistComment}</div>
                        </li>
                    </ul>
                    <OneOrderButtons status={props.oneOrder.status}
                                     ReceiveOrder={props.ReceiveOrder}
                                     SetOrder={props.SetOrder}
                                     orderId={props.oneOrder.orderId}
                                     EditOrder={props.EditOrder}/>
                </section>
            </section>
            <p>Возникли проблемы? <button>Обратитесь в техническую поддержку</button></p>
        </section>
    )
}