import popup_notification_scss from '@/scss/components/notifications/PopUpNotification.module.scss'
import Image from "next/image";
import close_icon from '@/assets/icons/main/close.svg'

export const OnePopUpNotificationComponent = () => {

    return (
        <section className={popup_notification_scss.root}>
            <section className={popup_notification_scss.main_root}>
                <img src={'/default_avatar_profile.svg'} className={popup_notification_scss.data_img}
                     alt={'user photo'}/>
                <section className={popup_notification_scss.data_text}>
                    <section className={popup_notification_scss.data_weight}>Вася Пупкин</section>
                    <section> выставил(-а) новую работу:</section>
                    <section className={popup_notification_scss.data_weight}>Нереальный рисунок карандашом</section>
                </section>
                <Image src={close_icon} className={popup_notification_scss.close}
                       alt={'close_icon'} width={0} height={0}/>
            </section>
        </section>
    )
}