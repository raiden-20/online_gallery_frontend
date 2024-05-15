import popup_notification_scss from '@/scss/components/notifications/PopUpNotification.module.scss'
import Image from "next/image";
import close_icon from '@/assets/icons/main/close.svg'
import {PopUpNotificationInterface} from "@/interfaces/notificationsInterface";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";

import {fetchEventSource} from '@microsoft/fetch-event-source';
import {useRouter} from "next/navigation";
import {clearOnePopUpNotification} from "@/store/thunks/notificationsThunk";

interface OnePopUpNotificationComponentInterface {
    popup_notification: PopUpNotificationInterface

    setOnePopUpNotification(avatarUrl: string, message: string): void,
    clearOnePopUpNotification(): void
}

export const OnePopUpNotificationComponent = (props: OnePopUpNotificationComponentInterface) => {

    const router = useRouter()

    const [role] = useState(Cookies.get('role'))
    const [customerId] = useState(Cookies.get('customerId'))
    const [artistId] = useState(Cookies.get('artistId'))

    const [isClear, setIsClear] = useState(false)

    useEffect(() => {
        const getNotificationSSE = async () => {
            const who = role === ROLES.CUSTOMER ? customerId : role === ROLES.ARTIST ? artistId : null
            await fetchEventSource('http://localhost:8080/notification/sse/' + who,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data; boundary=-------23456789012347',
                    },
                    onmessage(ev) {
                        const res = JSON.parse(ev.data)
                        props.setOnePopUpNotification(res.avatarUrl, res.message)
                    },
                    onclose() {
                        console.log("Connection closed by the server");
                    },

                })
        }

        getNotificationSSE()

    }, []);

    useEffect(() => {
        if (isClear) {
            props.clearOnePopUpNotification()
            setIsClear(false)
        }
    }, [isClear]);

    if (props.popup_notification.message !== '') {
        return (
            <section className={popup_notification_scss.root}>
                <section className={popup_notification_scss.main_root}>
                    <img src={props.popup_notification.avatarUrl !== '' ? props.popup_notification.avatarUrl
                        : '/default_system_notifications.svg'}
                         className={popup_notification_scss.data_img}
                         alt={'user photo'}
                         onClick={() => router.push(MAIN_PATHS.NOTIFICATIONS)}/>
                    <p className={popup_notification_scss.data_text}>{props.popup_notification.message}</p>
                    <button onClick={() => setIsClear(true)}>
                        <Image src={close_icon} className={popup_notification_scss.close}
                               alt={'close_icon'} width={0} height={0}/>
                    </button>
                </section>
            </section>
        )
    }
}