import {OneCartComponent} from "@/components/cart/OneCartComponent";
import cart_scss from '@/scss/components/cart/Cart.module.scss'

export const CartComponent = () => {
    return (
        <section className={cart_scss.root}>
            <header className={cart_scss.header}>
                Корзина
            </header>
            <main className={cart_scss.main}>
                <ul className={cart_scss.arts}>
                    <li>
                        <OneCartComponent/>
                    </li>
                    <li>
                        <OneCartComponent/>
                    </li>
                    <li>
                        <OneCartComponent/>
                    </li>
                    <li>
                        <OneCartComponent/>
                    </li>
                    <li>
                        <OneCartComponent/>
                    </li>

                </ul>
                <section className={cart_scss.buy_section}>
                <section className={cart_scss.buy_data}>
                        <div className={cart_scss.total_text}>Итого</div>
                        <div className={cart_scss.price_text}>200 000 руб.</div>
                    </section>
                    <button className={'main_button'}>Перейти к оформлению</button>
                </section>
            </main>
        </section>
    )
}