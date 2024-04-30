import one_order_scss from '@/scss/components/orders/OneOrder.module.scss'
import {OrderInterface} from "@/interfaces/cartInterface";

interface oneOrder {
    oneOrder: OrderInterface
}
export const OneOrderComponentMain = (props: oneOrder) => {
    return (
        <section className={one_order_scss.root}>
            <section>
                <section className={one_order_scss.header_section}>
                    <header className={one_order_scss.header}>Заказ <div
                        className={one_order_scss.order_id}>№0000{props.oneOrder.orderId}</div>
                    </header>
                    <div className={one_order_scss.status}>{props.oneOrder.status}</div>
                </section>
                <p className={one_order_scss.address}>
                    {props.oneOrder.location}, {props.oneOrder.city}, {props.oneOrder.region},
                    {props.oneOrder.city}, {props.oneOrder.name}
                </p>
            </section>
            <section className={one_order_scss.order_data}>
                <img src={props.oneOrder.artUrl} className={one_order_scss.img}
                     alt={'art'}/>
                <section className={one_order_scss.data}>
                    <section className={one_order_scss.section_name}>
                        <div className={one_order_scss.weight}>{props.oneOrder.artistName}</div>
                        <div>{props.oneOrder.artName}</div>
                    </section>
                    <div className={one_order_scss.price}>{props.oneOrder.price} ₽</div>
                </section>
            </section>
        </section>
    )
}