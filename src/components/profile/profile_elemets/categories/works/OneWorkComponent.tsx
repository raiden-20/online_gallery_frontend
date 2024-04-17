import one_work_scss from '@/scss/components/profile/categories/OneWork.module.scss'

export const OneWorkComponent = () => {
    return (
        <section className={one_work_scss.root}>
            <section className={one_work_scss.photo_section}> {/*todo scroll*/}
                <img src={'/default_art_photo.jpg'} className={one_work_scss.one_photo}
                     alt={'art photo'}/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'}/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'}/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'}/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'}/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'}/>
                <img src={'/default_art_photo.jpg'} alt={'art photo'}/>
            </section>
            <main className={one_work_scss.art_info}>
                <header className={one_work_scss.art_info_header}>
                    <div className={one_work_scss.art_artist}>Художник</div>
                    <div className={one_work_scss.art_name}>Название, 2024</div>
                    <div>Масло, холст</div>
                </header>
                <section className={one_work_scss.art_price}>
                    100 000 ₽
                </section>
                <button className={'main_button ' + one_work_scss.add_to_cart}>
                    Добавить в корзину
                </button>
                <section className={one_work_scss.more_info}>
                    <div className={one_work_scss.more_info_noimp}>Картина</div>
                    <div className={one_work_scss.more_info_noimp}>Масло, холст</div>
                    <div className={one_work_scss.more_info_noimp}>20 x 30 см</div>
                    <div className={one_work_scss.more_info_noimp}>Рама включена</div>
                    <p>Lorem ipsum dolor sit amet consectetur. Pharetra scelerisque morbi amet nunc aliquam condimentum dignissim pellentesque. Elementum at at aliquam nulla mi cursus. Massa donec cursus purus etiam facilisi tincidunt arcu feugiat. Iaculis integer dapibus eget elementum. Varius purus risus cras montes. Fermentum ultrices suscipit lectus augue.</p>
                    <section className={one_work_scss.tags_section}>
                        <section className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>Пейзаж</section>
                        <section className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>Импрессионизм</section>
                    </section>
                </section>
            </main>
        </section>
    )
}