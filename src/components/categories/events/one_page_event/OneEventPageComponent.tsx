import one_event_scss from '@/scss/components/categories/events/OneEventPage.module.scss'
import {ButtonsEvent} from "@/components/categories/events/one_page_event/elements/ButtonsEvent";

export const OneEventPageComponent = () => {

    return (
        <section>
            <section className={one_event_scss.img_section}>
                <img src={'/example_event_url.svg'}
                     className={one_event_scss.img}
                     alt={'event photo'}/>
            </section>
            <section className={one_event_scss.root}>
                <header className={one_event_scss.header_section}>
                    <section className={one_event_scss.event_data}>
                        <section className={one_event_scss.title}>
                            Благотворительный аукцион в защиту животных
                        </section>
                        <section className={one_event_scss.date}>
                            26 апреля — 10 мая
                        </section>
                    </section>
                    <section>
                        Описание события
                    </section>
                </header>
                <ButtonsEvent/>
                <ul>

                </ul>
            </section>
        </section>
    )
}