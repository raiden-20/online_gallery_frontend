import one_event_scss from '@/scss/components/categories/events/OneEventPage.module.scss'
import Image from "next/image";
import add_photo_icon from '@/assets/icons/create_art/add_photo.svg'
import {useRouter} from "next/navigation";
import {MAIN_PATHS, ROLES} from "@/paths/main";
import Cookies from "js-cookie";
import {IsAdmin} from "@/store/thunks/adminThunk";
import {AUCTION_STATUS} from "@/interfaces/auctionInterface";
import {useEffect, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {EVENT_STATUS} from "@/paths/elements";

interface ButtonsEventInterface {
    eventId: string
    type: string
    status: string

    DeleteEvent(eventId: string, router: AppRouterInstance): void
}

export const ButtonsEvent = (props: ButtonsEventInterface) => {
    const router = useRouter()

    const [isDeleteEvent, setIsDeleteEvent] = useState(false)

    useEffect(() => {
        if (isDeleteEvent) {
            props.DeleteEvent(props.eventId, router)
        }
    }, [isDeleteEvent]);

    if (IsAdmin() && props.status === AUCTION_STATUS.WAIT) {
        return (
            <section className={one_event_scss.buttons_section}>
                <button className={'main_button'}
                        onClick={() => router.push(MAIN_PATHS.EDIT_EVENT + '/' + props.eventId)}>
                    Редактировать информацию
                </button>
                <button className={'delete-button'}
                        onClick={() => setIsDeleteEvent(true)}>
                    Удалить событие
                </button>
            </section>
        )
    } else if (Cookies.get('role') === ROLES.ARTIST && props.status === EVENT_STATUS.WAIT) {
        return (
            <button className={'main_button ' + one_event_scss.button}
                    onClick={() => {
                        Cookies.set('eventId', props.eventId)
                        Cookies.set('eventType', props.type)
                        router.push(MAIN_PATHS.CREATE_ART)
                    }}>
                <Image src={add_photo_icon} alt={'add art icon'} width={0} height={0}/>
                <div>Добавить работу</div>
            </button>
        )
    } else {
        return <></>
    }
}