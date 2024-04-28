import success_scss from '@/scss/components/create_order/CreateOrderSuccess.module.scss'
import success_icon from '@/assets/icons/create_order/success.svg'
import Image from "next/image";

export const CreateOrderSuccessComponent = () => {
    return (
        <section className={success_scss.root}>
            <Image src={success_icon} alt={'success_icon'}/>
            <section className={success_scss.info}>
                <header className={success_scss.header}>Ваш заказ был успешно оплачен!</header>
                <p>Информацию о статусе заказа можно узнать в разделе <button className={success_scss.button}>заказов</button></p>
            </section>
        </section>
    )
}