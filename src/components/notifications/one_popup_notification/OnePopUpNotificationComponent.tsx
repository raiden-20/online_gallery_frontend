import popup_notification_scss from '@/scss/components/notifications/PopUpNotification.module.scss'
import Image from "next/image";
import close_icon from '@/assets/icons/main/close.svg'
import {PopUpNotificationInterface} from "@/interfaces/notificationsInterface";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";

import {fetchEventSource} from '@microsoft/fetch-event-source';
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {PathsAPI} from "@/api/api_main";

interface OnePopUpNotificationComponentInterface {
    popup_notification: PopUpNotificationInterface

    setOnePopUpNotification(avatarUrl: string, message: string): void,
    clearOnePopUpNotification(): void
}

export const OnePopUpNotificationComponent = (props: OnePopUpNotificationComponentInterface) => {

    const router = useRouter()

    const {status} = useSession()

    const [role] = useState(Cookies.get('role'))
    const [customerId, setCustomerId] = useState(Cookies.get('customerId') as string)
    const [artistId, setArtistId] = useState(Cookies.get('artistId') as string)

    const [isClear, setIsClear] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setCustomerId(Cookies.get('customerId') as string)
        setArtistId(Cookies.get('artistId') as string)

        const getNotificationSSE = async () => {
            const signal = controller.signal
            const who = role === ROLES.CUSTOMER ? customerId : role === ROLES.ARTIST ? artistId : null
            Cookies.set('SSE', 'true')
            const url = PathsAPI.BASE + PathsAPI.NOTIFICATION + PathsAPI.SSE
            await fetchEventSource(`${url}/` + who,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data; boundary=-------23456789012347',
                    },
                    signal: signal,
                    onmessage(ev) {
                        const res = JSON.parse(ev.data)
                        props.setOnePopUpNotification(res.avatarUrl, res.message)
                    },
                    onclose() {
                        console.log("Connection closed by the server");
                    },

                })
           
        }
        if (status === 'authenticated' && (customerId !== '' && customerId !== undefined) && Cookies.get('SSE') !== 'true') {
            getNotificationSSE().then()
        }
        return () => {
            controller.abort()
            Cookies.remove('SSE')
        }

    }, [status, customerId, artistId]);

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