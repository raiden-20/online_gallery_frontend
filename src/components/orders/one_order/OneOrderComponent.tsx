import create_art_scss from "@/scss/components/create_art/CreateArt.module.scss";
import Image from "next/image";
import cancel_icon from "@/assets/icons/create_art/cancel.svg";
import {usePathname, useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

import one_order_scss from '@/scss/components/orders/oneOrder/OneOrder.module.scss'
import {useEffect} from "react";
import {OrderInterface} from "@/interfaces/cartInterface";
import {OneOrderButtons} from "@/components/orders/one_order/OneOrderButtons";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface oneOrderInterface {
    oneOrder: OrderInterface
    GetOneOrder(currentId: string): void
    SetOrder(orderId: string, comment: string, router: AppRouterInstance): void
    EditOrder(orderId: string, comment: string, router: AppRouterInstance): void
    ReceiveOrder(orderId: string, router: AppRouterInstance): void
}

export const OneOrderComponent = (props: oneOrderInterface) => {
    const router = useRouter()
    const pathName = usePathname().split('/')

    useEffect(() => {
        const id = pathName[2]
        props.GetOneOrder(id)
    }, []);


    return (
        <section className={one_order_scss.root}>
            <button className={create_art_scss.cancel}
                    onClick={() => router.push(MAIN_PATHS.ORDERS)}>
                <Image src={cancel_icon} alt={'cancel_icon'}/>
                <div>Назад</div>
            </button>
            <header className={one_order_scss.header}>Заказ №0000{props.oneOrder.orderId}</header>
            <section className={one_order_scss.main}>
                <section className={one_order_scss.section + ' ' + one_order_scss.data}>
                    <section className={one_order_scss.table_part}>
                        <section className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Адрес</div>
                            <p className={one_order_scss.address}>
                                {props.oneOrder.location}, {' ' + props.oneOrder.city}, {' ' + props.oneOrder.region},
                                {' ' + props.oneOrder.city}, {' ' + props.oneOrder.name}
                            </p>
                        </section>
                        <section className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Способ оплаты</div>
                            {props.oneOrder.number !== null ?
                                <div>•••• •••• ••••
                                    {props.oneOrder.number.substring(props.oneOrder.number.length - 4, props.oneOrder.number.length - 1)}
                                </div>
                                : null}
                        </section>
                        <section className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Художник</div>
                            <div className={one_order_scss.table_name}>{props.oneOrder.artistName}</div>
                        </section>
                        <section className={one_order_scss.table}>
                            <div className={one_order_scss.table_title}>Покупатель</div>
                            <div className={one_order_scss.table_name}>{props.oneOrder.customerName}</div>
                        </section>
                    </section>
                    <section className={one_order_scss.art_data}>
                        <img src={props.oneOrder.artUrl} className={one_order_scss.img}
                             alt={'photo'}/>
                        <section className={one_order_scss.art_data_name}>
                            <div className={'p'}>{props.oneOrder.artName}</div>
                            <div className={one_order_scss.price}>{props.oneOrder.price} ₽</div>
                        </section>
                    </section>
                </section>
                <section className={one_order_scss.section + ' ' + one_order_scss.condition}>
                    <section className={one_order_scss.table_part}>
                        <section className={one_order_scss.table_condition}>
                            <div className={one_order_scss.table_title}>Состояние</div>
                            <div>{props.oneOrder.status}</div>
                        </section>
                        <section className={one_order_scss.table_condition}>
                            <div className={one_order_scss.table_title}>Комментарий к доставке</div>
                            <div>{props.oneOrder.artistComment}</div>
                        </section>
                    </section>
                    <OneOrderButtons status={props.oneOrder.status}
                                     ReceiveOrder={props.ReceiveOrder}
                                     SetOrder={props.SetOrder}
                                     orderId={props.oneOrder.orderId}
                                     EditOrder={props.EditOrder}
                                     text={props.oneOrder.artistComment}/>
                </section>
            </section>
            <p className={one_order_scss.p}>Возникли проблемы? <button>Обратитесь в техническую поддержку</button></p>
        </section>
    )
}