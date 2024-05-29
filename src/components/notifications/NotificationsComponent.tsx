import notifications_scss from '@/scss/components/notifications/Notifications.module.scss'
import {NotificationsInterface, TYPES_NOTIFICATIONS} from "@/interfaces/notificationsInterface";
import TimeComponent from "@/components/time/TimeComponent";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import {useRouter} from "next/navigation";

interface NotificationsComponentInterface {
    notifications: NotificationsInterface[]
    setAllArtistNotifications(): void,
    setAllCustomerNotifications(): void
}

export const NotificationsComponent = (props: NotificationsComponentInterface) => {
    const router = useRouter()

    const [role] = useState(Cookies.get('role'))


    useEffect(() => {
        if (role === ROLES.ARTIST) {
            props.setAllArtistNotifications()
        } else if (role === ROLES.CUSTOMER) {
            props.setAllCustomerNotifications()
        }
    }, []);

    const goTo = (subjectId: string, type: string) => {
        let url = ''
        switch (type) {
            case TYPES_NOTIFICATIONS.ART  : {
                url = MAIN_PATHS.ONE_ART
                router.push(url + `/${subjectId}`)
                break
            }
            case TYPES_NOTIFICATIONS.POST  : {
                url =  MAIN_PATHS.PROFILE_ARTIST + MAIN_PATHS.POSTS
                router.push(url)
                break
            }
            case TYPES_NOTIFICATIONS.AUCTION  : {
                url = MAIN_PATHS.AUCTION + `/${subjectId}`
                router.push(url)
                break
            }
            case TYPES_NOTIFICATIONS.ORDER  : {
                url = MAIN_PATHS.ONE_ORDER
                router.push(url + `/${subjectId}`)
                break
            }
        }
    }

    return (
        <section className={notifications_scss.root}>
            <header className={notifications_scss.header}>Уведомления</header>
            <ul className={notifications_scss.ul}>
                {props.notifications.length > 0 ?
                    props.notifications.map((one: NotificationsInterface, index) => {
                        return (
                            <li className={notifications_scss.one_notification_root} key={index}
                                onClick={() => goTo(one.subjectId, one.type)}>
                                <img src={one.avatarUrl !== '' ? one.avatarUrl : '/default_avatar_profile.svg'}
                                     className={notifications_scss.img}
                                     alt={'user photo'}/>
                                <section className={notifications_scss.data_section}>
                                    <p>{one.text}</p>
                                    <section className={notifications_scss.data_time}>
                                        <TimeComponent time={one.date}/>
                                    </section>
                                </section>
                            </li>
                        )
                    }).reverse()
                    :
                    <section className={'no_elements'}>
                        Нет уведомлений...
                    </section>}

            </ul>
        </section>
    )
}