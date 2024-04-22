import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";
import {OneSubscription} from "@/components/subscribers/subscriptionsArtistPrivate/OneSubscription";

export const SubscriptionsArtistPrivate = () => {
    return (
        <main>
            <header className={subscriptions_scss.section_title}>
                <div>Художник</div>
                <div>Сумма</div>
                <div>Дата списания</div>
                <button className={'no_main_color'}></button>
            </header>
            <ul className={subscriptions_scss.subscriptions_private_section}>
                <li>
                    <OneSubscription/>
                </li>
                <li>
                    <OneSubscription/>
                </li>
                <li>
                    <OneSubscription/>
                </li>
                <li>
                    <OneSubscription/>
                </li>
            </ul>
        </main>
    )
}