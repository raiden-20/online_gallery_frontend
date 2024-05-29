import one_order_scss from '@/scss/components/orders/OneOrder.module.scss'
import {OrderInterface} from "@/interfaces/cartInterface";
import {ORDER_STATUS_RUS} from "@/paths/elements";
import {zerosForOrder} from "../../../utils/tests";

interface oneOrder {
    oneOrder: OrderInterface
}
export const OneOrderComponentMain = (props: oneOrder) => {
    return (
        <section className={one_order_scss.root}>
            <section className={one_order_scss.data_address}>
                <section className={one_order_scss.header_section}>
                    <header className={one_order_scss.header}>Заказ <div
                        className={one_order_scss.order_id}>№{zerosForOrder(props.oneOrder.orderId)}{props.oneOrder.orderId}</div>
                    </header>
                    <div className={one_order_scss.status}>{props.oneOrder.status}</div>
                </section>
                {props.oneOrder.status !== ORDER_STATUS_RUS.AWAIT ?
                    <p className={one_order_scss.address}>
                        {props.oneOrder.location}, {props.oneOrder.city}, {props.oneOrder.region},
                        {props.oneOrder.city}, {props.oneOrder.name}
                    </p>
                    : null}
            </section>
            <section className={one_order_scss.order_data}>
                <img src={props.oneOrder.artUrl} className={one_order_scss.img}
                     alt={'art'}/>
                <section className={one_order_scss.data}>
                    <section className={one_order_scss.section_name}>
                        <div className={'p ' + one_order_scss.weight}>{props.oneOrder.artistName}</div>
                        <div className={'p'}>{props.oneOrder.artName}</div>
                    </section>
                    <div className={one_order_scss.price}>{props.oneOrder.price} ₽</div>
                </section>
            </section>
        </section>
    )
}