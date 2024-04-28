import one_cart_scss from '@/scss/components/cart/OneCart.module.scss'

export const OneCartComponent = () => {
    return (
        <section className={one_cart_scss.root}>
            <img src={'/default_art_photo.jpg'} className={one_cart_scss.img}
                 alt={'art photo'}/>
            <section className={one_cart_scss.art_data}>
                <div className={one_cart_scss.text}>Название</div>
                <div className={one_cart_scss.text}>Автор</div>
            </section>
            <section className={one_cart_scss.art_data + ' ' + one_cart_scss.price_section}>
                <div className={one_cart_scss.text}>100 000 руб.</div>
                <div>Удалить</div>
            </section>
        </section>
    )
}