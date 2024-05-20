import subscriptions_scss from '@/scss/components/subscriptions/Subscriptions.module.scss'
import {useState} from "react";
import {SubscriptionsArtistsPrivate} from "@/interfaces/subscriptions";
import {useRouter} from "next/navigation";
import {MAIN_PATHS} from "@/paths/main";
import {
    CancelSubscriptionsContainer,
} from "@/components/subscribers/subscriptionsArtistPrivate/cancel/CancelSubscriptionContainer";
import TimeComponent from "@/components/time/TimeComponent";

export const OneSubscription = (props: {oneArtist: SubscriptionsArtistsPrivate}) => {
    const router = useRouter()

    const [isCanceledClicked, setIsCanceledClicked] = useState(false)

    return (
        <section className={subscriptions_scss.one_private_subscription_artists}>
            <section className={subscriptions_scss.artist_data_private}>
                <button onClick={() => router.push(MAIN_PATHS.PROFILE_ARTIST + `/${props.oneArtist.artistId}`)}>
                    <img src={props.oneArtist.avatarUrl} alt={'avatar'} crossOrigin="anonymous"/>
                </button>
                <div className={'p ' + subscriptions_scss.p}>{props.oneArtist.artistName}</div>
            </section>
            <div className={subscriptions_scss.mobile_hidden}>{props.oneArtist.price} ₽</div>
            <div className={subscriptions_scss.mobile_hidden}><TimeComponent time={props.oneArtist.payDate}/></div>
            <section className={subscriptions_scss.data}>
                <div>{props.oneArtist.price} ₽</div>
                <div className={subscriptions_scss.mobile_date}> до <TimeComponent time={props.oneArtist.payDate}/></div>
            </section>
            <button className={'cancel_button'}
                    onClick={() => setIsCanceledClicked(true)}>
                Отменить
            </button>
            {isCanceledClicked ?
                <CancelSubscriptionsContainer setIsCanceledClicked={setIsCanceledClicked}
                                              artistId={props.oneArtist.artistId}/>
                : null}
        </section>
    )
}