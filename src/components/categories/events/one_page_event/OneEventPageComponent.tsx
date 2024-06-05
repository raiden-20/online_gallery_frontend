import one_event_scss from '@/scss/components/categories/events/OneEventPage.module.scss'
import {ButtonsEvent} from "@/components/categories/events/one_page_event/elements/ButtonsEvent";
import {EventInterface} from "@/interfaces/eventInterface";
import {usePathname} from "next/navigation";
import {useEffect} from "react";
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {reformatDateFull} from "../../../../../utils/tests";
import {EVENT_TYPES} from "@/paths/elements";
import {WorksEventComponent} from "@/components/categories/events/one_page_event/subjects/WorksEventComponent";
import {AuctionsEventComponent} from "@/components/categories/events/one_page_event/subjects/AuctionsEventComponent";

interface OneEventPageComponentInterface {
    event: EventInterface,

    GetOneEvent(eventId: string, currentId: string): void,
    DeleteEvent(eventId: string, router: AppRouterInstance): void
}

export const OneEventPageComponent = (props: OneEventPageComponentInterface) => {
    const eventId = usePathname().split('/')[usePathname().split('/').length - 1]

    useEffect(() => {
        props.GetOneEvent(eventId, Cookies.get('currentId') === undefined ? 'null' : Cookies.get('currentId') as string)
    }, []);

    if (props.event !== undefined) {
        return (
            <section>
                <section className={one_event_scss.img_section}>
                    <img src={props.event.photoUrl}
                         className={one_event_scss.img}
                         alt={'event photo'}/>
                </section>
                <section className={one_event_scss.root}>
                    <header className={one_event_scss.header_section}>
                        <section className={one_event_scss.event_data}>
                            <section className={one_event_scss.title}>
                                {props.event.name}
                            </section>
                            <section className={one_event_scss.date}>
                                {reformatDateFull(props.event.startDate.toISOString())} — {reformatDateFull(props.event.endDate.toISOString())}
                            </section>
                        </section>
                        <section className={one_event_scss.description_section}>
                            {props.event.description}
                        </section>
                    </header>
                    <ButtonsEvent eventId={eventId}
                                  type={props.event.type}
                                  status={props.event.status}
                                  DeleteEvent={props.DeleteEvent}/>
                    {props.event.type === EVENT_TYPES.ART ?
                        <WorksEventComponent arts={props.event.subjects}/>
                    :
                        <AuctionsEventComponent auctions={props.event.subjects}/>
                    }
                </section>
            </section>
        )
    } else {
        return <></>
    }
}