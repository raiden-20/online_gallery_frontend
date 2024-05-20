import {OneCartComponent} from "@/components/cart/OneCartComponent";
import cart_scss from '@/scss/components/cart/Cart.module.scss'

import delete_icon from '@/assets/icons/cart/delete_arts.svg'
import Image from "next/image";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {CartInterface} from "@/interfaces/cartInterface";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
interface cartInterface {
    totalCount: number
    cart: CartInterface[]
    GetCart(): void
    DeleteArtFromCart(artId: string, setMessage: (message: string) => void): void
    SetSelectedArts(arts: {[key: string]: boolean }): void
}

export const CartComponent = (props: cartInterface) => {
    const router = useRouter()

    const [isAllSelected, setIsAllSelected] = useState(true)
    const [artId, setArtId] = useState<{[key: string]: boolean }>({})

    useEffect(() => {
        const artId: {[key: string]: boolean }  = {}
        props.cart.forEach((oneArt: CartInterface) => {
            artId[oneArt.artId] = false
        })
        setArtId(artId)

        props.GetCart()
    }, []);


    return (
        <section className={cart_scss.root}>
            <header className={cart_scss.header}>
                Корзина
            </header>
            <section className={cart_scss.top_buttons_section}>
                <section className={cart_scss.top_button_checkbox}>
                    <input type={'checkbox'}
                           onClick={() => setIsAllSelected(!isAllSelected)} checked={isAllSelected}/>
                    <div>Выбрать все</div>
                </section>
                <button className={cart_scss.top_button_delete}>
                    <Image src={delete_icon} alt={'delete_icon'}/>
                    <div>Очистить корзину</div>
                </button>
            </section>
            <main className={cart_scss.main}>
                <ul className={cart_scss.arts}>
                    {props.cart.map((oneArt: CartInterface, index) => {
                        return (
                            <li key={oneArt.artId}>
                                <OneCartComponent isAllSelected={isAllSelected} oneArt={oneArt}
                                                  setArtId={setArtId} artId={artId}
                                                  DeleteArtFromCart={props.DeleteArtFromCart}/>
                            </li>
                        )
                    })}

                </ul>
                <section className={cart_scss.buy_section}>
                    <section className={cart_scss.buy_data}>
                        <div className={cart_scss.price_text}>Итого</div>
                        <div className={cart_scss.price_text}>{props.totalCount} ₽</div>
                    </section>
                    <button className={'main_button'}
                            onClick={() => {
                                props.SetSelectedArts(artId)
                                if (props.totalCount > 0) {
                                    router.push(MAIN_PATHS.CREATE_ORDER)}
                                }
                            }>
                        К оформлению
                    </button>
                </section>
            </main>
        </section>
    )
}