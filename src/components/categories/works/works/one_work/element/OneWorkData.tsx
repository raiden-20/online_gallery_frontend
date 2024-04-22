import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";

export const OneWorkData = () => {
    return (
        <section className={one_work_scss.art_info}>
            <section className={one_work_scss.details_section}>
                <section className={one_work_scss.details_one_section}>
                    <div className={one_work_scss.more_info_noimp}>Тип</div>
                    <div className={one_work_scss.more_info_noimp}>Материал</div>
                    <div className={one_work_scss.more_info_noimp}>Размер</div>
                    <div className={one_work_scss.more_info_noimp}>Наличие рамы</div>
                    <div className={one_work_scss.more_info_noimp}>Владелец</div>
                </section>
                <section className={one_work_scss.details_one_section}>
                    <div className={one_work_scss.more_info_noimp_text}>Картина</div>
                    <div className={one_work_scss.more_info_noimp_text}>Масло, холст</div>
                    <div className={one_work_scss.more_info_noimp_text}>20 x 30 см</div>
                    <div className={one_work_scss.more_info_noimp_text}>Да</div>
                    <div className={one_work_scss.underline}>Вася Пупкин</div>
                </section>
            </section>
            <p className={one_work_scss.info_text}>Lorem ipsum dolor sit amet consectetur. Pharetra scelerisque
                morbi amet nunc aliquam condimentum dignissim pellentesque. Elementum at at aliquam nulla mi
                cursus. Massa donec cursus purus etiam facilisi tincidunt arcu feugiat. Iaculis integer dapibus
                eget elementum. Varius purus risus cras montes. Fermentum ultrices suscipit lectus augue.</p>
            <section className={one_work_scss.tags_section}>
                <section className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>Пейзаж</section>
                <section className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>Импрессионизм</section>
                <section className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>Еще что-нибудь
                </section>
                <section className={one_work_scss.more_info_noimp + ' ' + one_work_scss.tag}>И еще</section>
            </section>
        </section>
    )
}