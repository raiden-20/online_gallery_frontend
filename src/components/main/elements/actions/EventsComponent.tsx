import main_scss from "@/scss/components/main/main_page/Main.module.scss";
import actions_scss from "@/scss/components/main/main_page/Actions.module.scss";
import {EventsCategoriesInterface} from "@/interfaces/eventInterface";
import {reformatDateDayMonth} from "../../../../../utils/tests";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {EVENT_STATUS} from "@/paths/elements";

interface events {
    events: EventsCategoriesInterface[]
    GetEvents(): void
}


export const EventsComponent = (props: events) => {
    const router = useRouter()

    return (
        <section className={main_scss.root}>
            <header className={main_scss.header}>События</header>
            <ul className={actions_scss.ul}>
                {props.events.filter(one => one.status === EVENT_STATUS.WAIT || one.status === EVENT_STATUS.AVAILABLE)
                    .map((oneEvent, index) => {
                    if (index % 2 === 0) {
                        return (
                            <li className={actions_scss.one_action} key={index}
                                onClick={() => {
                                    router.push(MAIN_PATHS.EVENT + `/${oneEvent.eventId}`)
                                }}>
                                <img src={oneEvent.photoUrl} alt={'action'}/>
                                <section className={actions_scss.date_section}>
                                    <div>{reformatDateDayMonth(oneEvent.startDate.toISOString())}</div>
                                    <div>―</div>
                                    <div>{reformatDateDayMonth(oneEvent.endDate.toISOString())}</div>
                                </section>
                            </li>
                        )
                    } else {
                        return (
                            <li className={actions_scss.one_action + ' ' + actions_scss.one_action_reverse} key={index}
                                onClick={() => {
                                    router.push(MAIN_PATHS.EVENT + `/${oneEvent.eventId}`)
                                }}>
                                <section className={actions_scss.date_section}>
                                    <div>{reformatDateDayMonth(oneEvent.startDate.toISOString())}</div>
                                    <div>―</div>
                                    <div>{reformatDateDayMonth(oneEvent.endDate.toISOString())}</div>
                                </section>
                                <img src={oneEvent.photoUrl} alt={'action'}/>
                            </li>
                        )
                    }
                })}
            </ul>
        </section>
    )
}