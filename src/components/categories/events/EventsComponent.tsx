import React, {useEffect, useState} from "react";
import events_scss from '@/scss/components/categories/events/Events.module.scss'
import event_add_icon from '@/assets/icons/events/add_event.svg'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {OneEventCategoriesComponent} from "@/components/categories/events/one_event_categories/OneEventCategoriesComponent";
import {EventsCategoriesInterface} from "@/interfaces/eventInterface";
import {IsAdmin} from "@/store/thunks/adminThunk";
import {EVENT_STATUS} from "@/paths/elements";
import works_root_scss from "@/scss/components/categories/WorksRoot.module.scss";
import search_icon from "@/assets/icons/search/search.svg";
import search_scss from "@/scss/components/search/Search.module.scss";
import delete_icon from "@/assets/icons/search/delete.svg";

interface EventsComponentInterface {
    events: EventsCategoriesInterface[]
    GetEvents(): void
}
export const EventsComponent = (props: EventsComponentInterface) => {
    const router = useRouter()

    const [input_name, setInput_name] = useState('')
    const [filteredEvents, setFilteredEvents] = useState<EventsCategoriesInterface[]>([])

    useEffect(() => {
        props.GetEvents()
    }, []);

    useEffect(() => {
        setFilteredEvents(props.events)
    }, [props.events]);

    useEffect(() => {
        if (input_name !== '') {
            const arr = [...props.events.filter(one => one.name.toLowerCase().includes(input_name))]
            setFilteredEvents(arr)
        } else {
            setFilteredEvents(props.events)
        }

    }, [input_name]);

    return (
        <section className={events_scss.root}>
            <header className={events_scss.header}>
                <section className={events_scss.page_title}>События</section>
            </header>
            <section className={works_root_scss.nav_section}>
                <Image src={search_icon} className={search_scss.img}
                       alt={'search_icon'} width={0} height={0}/>
                <input value={input_name} onChange={(event) => setInput_name(event.target.value)}
                       className={search_scss.input} placeholder={'Поиск'}/>
                <button className={search_scss.delete_button}>
                    <Image src={delete_icon} className={search_scss.img}
                           onClick={() => setInput_name('')}
                           alt={'search_icon'} width={0} height={0}/>
                </button>
            </section>
            {IsAdmin() ?
                <button className={'main_button ' + events_scss.add_button}
                        onClick={() => router.push(MAIN_PATHS.CREATE_EVENT)}>
                    <Image src={event_add_icon} alt={'add icon'} width={0} height={0}/>
                    <div>Создать событие</div>
                </button>
                : null}
            <main>
                <section className={events_scss.events_section}>
                    {filteredEvents.filter((oneEvent) =>
                        oneEvent.status === EVENT_STATUS.AVAILABLE)
                        .map((oneEvent, index) => {
                            return (
                                <li key={index}>
                                    <OneEventCategoriesComponent oneEvent={oneEvent}/>
                                </li>
                            )
                        }).length > 0 ?
                        <section className={events_scss.one_event_section}>
                            <header className={events_scss.one_section_header}>Текущие события</header>
                            <ul className={events_scss.one_section_ul}>
                                {filteredEvents.filter((oneEvent) =>
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
                        : null}
                    {filteredEvents.filter((oneEvent) =>
                        oneEvent.status === EVENT_STATUS.WAIT)
                        .map((oneEvent, index) => {
                            return (
                                <li key={index}>
                                    <OneEventCategoriesComponent oneEvent={oneEvent}/>
                                </li>
                            )
                        }).length > 0 ?
                        <section className={events_scss.one_event_section}>
                            <header className={events_scss.one_section_header}>Предстоящие события</header>
                            <ul className={events_scss.one_section_ul}>
                                {filteredEvents.filter((oneEvent) =>
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
                        : null}
                    {filteredEvents.filter((oneEvent) =>
                        oneEvent.status === EVENT_STATUS.END)
                        .map((oneEvent, index) => {
                            return (
                                <li key={index}>
                                    <OneEventCategoriesComponent oneEvent={oneEvent}/>
                                </li>
                            )
                        }).length > 0 ?
                        <section className={events_scss.one_event_section}>
                            <header className={events_scss.one_section_header}>Прошедшие события</header>
                            <ul className={events_scss.one_section_ul}>
                                {filteredEvents.filter((oneEvent) =>
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
                        : null}
                </section>
            </main>
        </section>
    )
}