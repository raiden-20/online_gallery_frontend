import one_order_scss from '@/scss/components/orders/OneOrder.module.scss'

export const OneOrderComponentMain = () => {
    return (
        <section className={one_order_scss.root}>
            <section>
                <section className={one_order_scss.header_section}>
                    <header className={one_order_scss.header}>Заказ <div
                        className={one_order_scss.order_id}>№00001236</div> от 20.04.2024
                    </header>
                    <div className={one_order_scss.status}>Завершен</div>
                </section>
                <p className={one_order_scss.address}>ул. Победы, д. 20, кв. 29, г. Воронеж, Воронежская обл., Россия, ФИО</p>
            </section>
            <section className={one_order_scss.order_data}>
                <img src={'/default_art_photo.jpg'} className={one_order_scss.img}
                     alt={'art'}/>
                <section className={one_order_scss.data}>
                    <section className={one_order_scss.section_name}>
                        <div className={one_order_scss.weight}>Имя</div>
                        <div>Название</div>
                    </section>
                    <div className={one_order_scss.price}>10 000 ₽</div>
                </section>
            </section>
        </section>
    )
}