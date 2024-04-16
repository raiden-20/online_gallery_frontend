import works_profile_scss from '@/scss/components/profile/categories/WorksProfile.module.scss'

export const WorksComponent = () => {

    return (
        <ul className={works_profile_scss.root}>
            <li>
                <section className={works_profile_scss.one_work}>
                    <img src={'/default_work_profile.jpg'} className={works_profile_scss.one_work_img}
                         alt={'one work'}/>
                    <section className={works_profile_scss.one_work_names}>
                        <div className={works_profile_scss.one_work_weight}>Имя</div>
                        <div>Название</div>
                    </section>
                    <div className={works_profile_scss.one_work_weight}>100000 ₽</div>
                </section>
            </li>
            <li>
                <section className={works_profile_scss.one_work}>
                    <img src={'/default_work_profile.jpg'} className={works_profile_scss.one_work_img}
                         alt={'one work'}/>
                    <section className={works_profile_scss.one_work_names}>
                        <div className={works_profile_scss.one_work_weight}>Имя</div>
                        <div>Название</div>
                    </section>
                    <div className={works_profile_scss.one_work_weight}>100000 ₽</div>
                </section>
            </li>
            <li>
                <section className={works_profile_scss.one_work}>
                    <img src={'/default_work_profile.jpg'} className={works_profile_scss.one_work_img}
                         alt={'one work'}/>
                    <section className={works_profile_scss.one_work_names}>
                        <div className={works_profile_scss.one_work_weight}>Имя</div>
                        <div>Название</div>
                    </section>
                    <div className={works_profile_scss.one_work_weight}>100000 ₽</div>
                </section>
            </li>
            <li>
                <section className={works_profile_scss.one_work}>
                    <img src={'/default_work_profile.jpg'} className={works_profile_scss.one_work_img}
                         alt={'one work'}/>
                    <section className={works_profile_scss.one_work_names}>
                        <div className={works_profile_scss.one_work_weight}>Имя</div>
                        <div>Название</div>
                    </section>
                    <div className={works_profile_scss.one_work_weight}>100000 ₽</div>
                </section>
            </li>
            <li>
                <section className={works_profile_scss.one_work}>
                    <img src={'/default_work_profile.jpg'} className={works_profile_scss.one_work_img}
                         alt={'one work'}/>
                    <section className={works_profile_scss.one_work_names}>
                        <div className={works_profile_scss.one_work_weight}>Имя</div>
                        <div>Название</div>
                    </section>
                    <div className={works_profile_scss.one_work_weight}>100000 ₽</div>
                </section>
            </li>
            <li>
                <section className={works_profile_scss.one_work}>
                <img src={'/default_work_profile.jpg'} className={works_profile_scss.one_work_img}
                         alt={'one work'}/>
                    <section className={works_profile_scss.one_work_names}>
                        <div className={works_profile_scss.one_work_weight}>Имя</div>
                        <div>Название</div>
                    </section>
                    <div className={works_profile_scss.one_work_weight}>100000 ₽</div>
                </section>
            </li>
            <li>
                <section className={works_profile_scss.one_work}>
                    <img src={'/default_work_profile.jpg'} className={works_profile_scss.one_work_img}
                         alt={'one work'}/>
                    <section className={works_profile_scss.one_work_names}>
                        <div className={works_profile_scss.one_work_weight}>Имя</div>
                        <div>Название</div>
                    </section>
                    <div className={works_profile_scss.one_work_weight}>100000 ₽</div>
                </section>
            </li>

        </ul>
    )
}