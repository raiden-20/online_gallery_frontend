import orders_scss from '@/scss/components/orders/Orders.module.scss'
import {OneOrderComponentMain} from "@/components/orders/OneOrderComponentMain";
import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {OrderInterface} from "@/interfaces/cartInterface";
import {useEffect} from "react";
import Cookies from "js-cookie";

interface ordersInterface {
    orders: OrderInterface[]
    GetOrders(currentId: string): void
}

export const OrdersComponent = (props: ordersInterface) => {
    const route = useRouter()

    useEffect(() => {
        const currentId =
            Cookies.get('role') as string === ROLES.CUSTOMER ? Cookies.get('customerId') as string: Cookies.get('artistId') as string
        props.GetOrders(currentId)
    }, []);

    return (
        <section className={orders_scss.root}>
            <header className={orders_scss.header}>Заказы</header>
            {props.orders.length > 0 ?
                <ul className={orders_scss.main}>
                    {props.orders.map((oneOrder, index) => {
                        return (
                            <li className={orders_scss.li} key={index}
                                onClick={() => route.push(MAIN_PATHS.ONE_ORDER + `/${oneOrder.orderId}`)}>
                                <OneOrderComponentMain oneOrder={oneOrder}/>
                            </li>
                        )
                    })}
                </ul>
                :
                <section className={'no_elements'}>
                    Нет заказов...
                </section>
            }

        </section>
    )
}