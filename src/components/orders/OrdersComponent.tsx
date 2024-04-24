import orders_scss from '@/scss/components/orders/Orders.module.scss'
import {OneOrderComponentMain} from "@/components/orders/OneOrderComponentMain";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

export const OrdersComponent = () => {
    const route = useRouter()

    return (
        <section className={orders_scss.root}>
            <header className={orders_scss.header}>Заказы</header>
            <ul className={orders_scss.main}>
                <li className={orders_scss.li}
                    onClick={() => route.push(MAIN_PATHS.ONE_ORDER)}>
                    <OneOrderComponentMain/>
                </li>
                <li className={orders_scss.li}
                    onClick={() => route.push(MAIN_PATHS.ONE_ORDER)}>
                    <OneOrderComponentMain/>
                </li>
            </ul>
        </section>
    )
}