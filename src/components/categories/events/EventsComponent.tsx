import React, {useEffect} from "react";
import events_scss from '@/scss/components/categories/events/Events.module.scss'
import event_add_icon from '@/assets/icons/events/add_event.svg'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {
    OneEventCategoriesComponent
} from "@/components/categories/events/one_event_categories/OneEventCategoriesComponent";
import {EventsCategoriesInterface} from "@/interfaces/eventInterface";
import {AUCTION_STATUS} from "@/interfaces/auctionInterface";
import {IsAdmin} from "@/store/thunks/adminThunk";
import {EVENT_STATUS} from "@/paths/elements";

interface EventsComponentInterface {
    events: EventsCategoriesInterface[]
    GetEvents(): void
}
export const EventsComponent = (props: EventsComponentInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.GetEvents()
    }, []);

    return (
        <section className={events_scss.root}>
            <header className={events_scss.header}>
                <section className={events_scss.page_title}>События</section>
            </header>
            {IsAdmin() ?
                <button className={'main_button ' + events_scss.add_button}
                        onClick={() => router.push(MAIN_PATHS.CREATE_EVENT)}>
                    <Image src={event_add_icon} alt={'add icon'} width={0} height={0}/>
                    <div>Создать событие</div>
                </button>
                : null}
            <main>
                <section className={events_scss.events_section}>
                    <section className={events_scss.one_event_section}>
                        <header className={events_scss.one_section_header}>Текущие события</header>
                        <ul className={events_scss.one_section_ul}>
                            {props.events.filter((oneEvent) =>
                                oneEvent.status === EVENT_STATUS.AVAILABLE)
                                .map((oneEvent, index) => {
                                    return (
                                        <li key={index}>
                                            <OneEventCategoriesComponent oneEvent={oneEvent}/>
                                        </li>
                                    )
                                })}
                        </ul>
                    </section>
                    <section className={events_scss.one_event_section}>
                        <header className={events_scss.one_section_header}>Предстоящие события</header>
                        <ul className={events_scss.one_section_ul}>
                            {props.events.filter((oneEvent) =>
                                oneEvent.status === EVENT_STATUS.WAIT)
                                .map((oneEvent, index) => {
                                    return (
                                        <li key={index}>
                                            <OneEventCategoriesComponent oneEvent={oneEvent}/>
                                        </li>
                                    )
                                })}
                        </ul>
                    </section>
                    <section className={events_scss.one_event_section}>
                        <header className={events_scss.one_section_header}>Прошедшие события</header>
                        <ul className={events_scss.one_section_ul}>
                            {props.events.filter((oneEvent) =>
                                oneEvent.status === EVENT_STATUS.END)
                                .map((oneEvent, index) => {
                                    return (
                                        <li key={index}>
                                            <OneEventCategoriesComponent oneEvent={oneEvent}/>
                                        </li>
                                    )
                                })}
                        </ul>
                    </section>
                </section>
            </main>
        </section>
    )
}