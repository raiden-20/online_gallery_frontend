import subscriptions_scss from '@/scss/components/subscriptions/Subscriptions.module.scss'
import {useState} from "react";
import {
    CancelSubscriptionComponent
} from "@/components/subscribers/subscriptionsArtistPrivate/CancelSubscriptionComponent";
import {SubscriptionsArtistsPrivate} from "@/interfaces/subscriptions";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";

export const OneSubscription = (props: {oneArtist: SubscriptionsArtistsPrivate}) => {
    const router = useRouter()

    const [isCanceledClicked, setIsCanceledClicked] = useState(false)

    return (
        <section className={subscriptions_scss.one_private_subscription_artists}>
            <section className={subscriptions_scss.artist_data_private}>
                <button onClick={() => router.push(MAIN_PATHS.PROFILE_ARTIST + `/${props.oneArtist.artistId}`)}>
                    <img src={props.oneArtist.avatarUrl} alt={'avatar'} crossOrigin="anonymous"/>
                </button>
                <div>{props.oneArtist.artistName}</div>
            </section>
            <div>{props.oneArtist.price} ₽</div>
            <div>{props.oneArtist.payDate}</div>
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