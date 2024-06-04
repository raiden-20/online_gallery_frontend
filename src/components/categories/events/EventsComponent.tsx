import React from "react";
import events_scss from '@/scss/components/categories/events/Events.module.scss'
import event_add_icon from '@/assets/icons/events/add_event.svg'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
export const EventsComponent = () => {
    const router = useRouter()

    return (
        <section className={events_scss.root}>
            <header className={events_scss.header}>
                <section className={events_scss.page_title}>События</section>
            </header>
            <button className={'main_button ' + events_scss.add_button}
                    onClick={() => router.push(MAIN_PATHS.CREATE_EVENT)}>
                <Image src={event_add_icon} alt={'add icon'} width={0} height={0}/>
                <div>Создать событие</div>
            </button>
            <main>
                <section className={events_scss.events_section}>
                    <section className={events_scss.one_event_section}>
                        <header className={events_scss.one_section_header}>Текущие события</header>
                        <ul className={events_scss.one_section_ul}>
                            <li className={events_scss.one_section_li}>
                                <img src={'/event_example.svg'}
                                     className={events_scss.one_section_img}
                                     alt={'event image'}/>
                                <section className={events_scss.one_section_data}>
                                    <section className={events_scss.one_section_data_title}>
                                        Благотворительный аукцион в защиту животных
                                    </section>
                                    <section className={events_scss.one_section_data_date}>
                                        26 апреля — 10 мая
                                    </section>
                                </section>
                            </li>
                            <li className={events_scss.one_section_li}>
                                <img src={'/event_example.svg'}
                                     className={events_scss.one_section_img}
                                     alt={'event image'}/>
                                <section className={events_scss.one_section_data}>
                                    <section className={events_scss.one_section_data_title}>
                                        Благотворительный аукцион в защиту животных
                                    </section>
                                    <section className={events_scss.one_section_data_date}>
                                        26 апреля — 10 мая
                                    </section>
                                </section>
                            </li>
                        </ul>
                    </section>
                    <section className={events_scss.one_event_section}>
                        <header className={events_scss.one_section_header}>Предстоящие события</header>
                        <ul className={events_scss.one_section_ul}>
                            <li className={events_scss.one_section_li}>
                                <img src={'/event_example.svg'}
                                     className={events_scss.one_section_img}
                                     alt={'event image'}/>
                                <section className={events_scss.one_section_data}>
                                    <section className={events_scss.one_section_data_title}>
                                        Благотворительный аукцион в защиту животных
                                    </section>
                                    <section className={events_scss.one_section_data_date}>
                                        26 апреля — 10 мая
                                    </section>
                                </section>
                            </li>
                            <li className={events_scss.one_section_li}>
                                <img src={'/event_example.svg'}
                                     className={events_scss.one_section_img}
                                     alt={'event image'}/>
                                <section className={events_scss.one_section_data}>
                                    <section className={events_scss.one_section_data_title}>
                                        Благотворительный аукцион в защиту животных
                                    </section>
                                    <section className={events_scss.one_section_data_date}>
                                        26 апреля — 10 мая
                                    </section>
                                </section>
                            </li>
                        </ul>
                    </section>
                    <section className={events_scss.one_event_section}>
                        <header className={events_scss.one_section_header}>Прошедшие события</header>
                        <ul className={events_scss.one_section_ul}>
                            <li className={events_scss.one_section_li}>
                                <img src={'/event_example.svg'}
                                     className={events_scss.one_section_img}
                                     alt={'event image'}/>
                                <section className={events_scss.one_section_data}>
                                    <section className={events_scss.one_section_data_title}>
                                        Благотворительный аукцион в защиту животных
                                    </section>
                                    <section className={events_scss.one_section_data_date}>
                                        26 апреля — 10 мая
                                    </section>
                                </section>
                            </li>
                            <li className={events_scss.one_section_li}>
                                <img src={'/event_example.svg'}
                                     className={events_scss.one_section_img}
                                     alt={'event image'}/>
                                <section className={events_scss.one_section_data}>
                                    <section className={events_scss.one_section_data_title}>
                                        Благотворительный аукцион в защиту животных
                                    </section>
                                    <section className={events_scss.one_section_data_date}>
                                        26 апреля — 10 мая
                                    </section>
                                </section>
                            </li>
                        </ul>
                    </section>
                </section>
            </main>
        </section>
    )
}