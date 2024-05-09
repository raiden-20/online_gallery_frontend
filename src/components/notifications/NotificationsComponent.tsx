import notifications_scss from '@/scss/components/notifications/Notifications.module.scss'

export const NotificationsComponent = () => {

    return (
        <section className={notifications_scss.root}>
            <header className={notifications_scss.header}>Уведомления</header>
            <ul className={notifications_scss.ul}>
                <li className={notifications_scss.one_notification_root}>
                    <img src={'/default_avatar_profile.svg'} className={notifications_scss.img}
                         alt={'user photo'}/>
                    <section className={notifications_scss.data_section}>
                        <section className={notifications_scss.data_text}>
                            <section className={notifications_scss.data_weight}>Вася Пупкин</section>
                            <section>
                                выставил(-а) новую работу:
                            </section>
                            <section className={notifications_scss.data_weight}>Нереальный рисунок карандашом</section>
                        </section>
                        <section className={notifications_scss.data_time}>
                            35 сек. назад
                        </section>
                    </section>
                </li>
                <li className={notifications_scss.one_notification_root}>
                    <img src={'/default_avatar_profile.svg'} className={notifications_scss.img}
                         alt={'user photo'}/>
                    <section className={notifications_scss.data_section}>
                        <section className={notifications_scss.data_text}>
                            <section className={notifications_scss.data_weight}>Вася Пупкин</section>
                            <section>
                                выставил(-а) новую работу:
                            </section>
                            <section className={notifications_scss.data_weight}>Нереальный рисунок карандашом</section>
                        </section>
                        <section className={notifications_scss.data_time}>
                            35 сек. назад
                        </section>
                    </section>
                </li>
                <li className={notifications_scss.one_notification_root}>
                    <img src={'/default_avatar_profile.svg'} className={notifications_scss.img}
                         alt={'user photo'}/>
                    <section className={notifications_scss.data_section}>
                        <section className={notifications_scss.data_text}>
                            <section className={notifications_scss.data_weight}>Вася Пупкин</section>
                            <section>
                                выставил(-а) новую работу:
                            </section>
                            <section className={notifications_scss.data_weight}>Нереальный рисунок карандашом</section>
                        </section>
                        <section className={notifications_scss.data_time}>
                            35 сек. назад
                        </section>
                    </section>
                </li>
                <li className={notifications_scss.one_notification_root}>
                    <img src={'/default_system_notifications.svg'} className={notifications_scss.img}
                         alt={'user photo'}/>
                    <section className={notifications_scss.data_section}>
                        <section className={notifications_scss.data_text}>
                            <section className={notifications_scss.data_weight}>Вася Пупкин</section>
                            <section>
                                выставил(-а) новую работу:
                            </section>
                            <section className={notifications_scss.data_weight}>Нереальный рисунок карандашом</section>
                        </section>
                        <section className={notifications_scss.data_time}>
                            35 сек. назад
                        </section>
                    </section>
                </li>

            </ul>
        </section>
    )
}