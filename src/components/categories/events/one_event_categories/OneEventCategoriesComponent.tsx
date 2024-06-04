import events_scss from "@/scss/components/categories/events/Events.module.scss";
import React from "react";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

export const OneEventCategoriesComponent = () => {
    const router = useRouter()

    return (
        <section className={events_scss.one_section_li}
                onClick={() => router.push(MAIN_PATHS.EVENT)}>
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
        </section>
    )
}