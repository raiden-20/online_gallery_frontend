import subscriptions_scss from '@/scss/components/subscriptions/Subscriptions.module.scss'
import {useState} from "react";
import {
    CancelSubscriptionComponent
} from "@/components/subscribers/subscriptionsArtistPrivate/CancelSubscriptionComponent";

export const OneSubscription = () => {
    const [isCanceledClicked, setIsCanceledClicked] = useState(false)

    return (
        <section className={subscriptions_scss.one_private_subscription_artists}>
            <section className={subscriptions_scss.artist_data_private}>
                <img src={'/default_avatar_profile.jpg'} alt={'avatar'} crossOrigin="anonymous"/>
                <div>Имя</div>
            </section>
            <div>1 000 ₽</div>
            <div>10.04.2024</div>
            <button className={'cancel_button'}
                    onClick={() => setIsCanceledClicked(true)}>
                Отменить
            </button>
            {isCanceledClicked ?
                <CancelSubscriptionComponent setIsCanceledClicked={setIsCanceledClicked}/>
            : null}
        </section>
    )
}