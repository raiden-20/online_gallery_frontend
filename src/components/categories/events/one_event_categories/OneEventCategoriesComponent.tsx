import events_scss from "@/scss/components/categories/events/Events.module.scss";
import React from "react";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {EventsCategoriesInterface} from "@/interfaces/eventInterface";
import {reformatDateFull} from "../../../../../utils/tests";

interface OneEventCategoriesComponentInterface {
    oneEvent: EventsCategoriesInterface
}
export const OneEventCategoriesComponent = (props: OneEventCategoriesComponentInterface) => {
    const router = useRouter()

    return (
        <section className={events_scss.one_section_li}
                onClick={() => router.push(MAIN_PATHS.EVENT + '/' + props.oneEvent.eventId)}>
            <img src={props.oneEvent.photoUrl}
                 className={events_scss.one_section_img}
                 alt={'event image'}/>
            <section className={events_scss.one_section_data}>
                <section className={events_scss.one_section_data_title}>
                    {props.oneEvent.name}
                </section>
                <section className={events_scss.one_section_data_date}>
                    {reformatDateFull(props.oneEvent.startDate.toISOString())} — {reformatDateFull(props.oneEvent.endDate.toISOString())}
                </section>
            </section>
        </section>
    )
}