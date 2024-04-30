import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";
import {SubscriptionsArtistsPrivate} from "@/interfaces/subscriptions";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {OneSubscription} from "@/components/subscribers/subscriptionsArtistPrivate/OneSubscription";

interface subscriptionsInterface {
    subscriptionsArtistsPrivate: SubscriptionsArtistsPrivate[]
    PrivateSubscriptionsArtists(router: AppRouterInstance): void,
}


export const SubscriptionsArtistPrivate = (props: subscriptionsInterface) => {
    const router = useRouter()

    useEffect(() => {
        props.PrivateSubscriptionsArtists(router)
    }, []);

    return (
        <main>
            <header className={subscriptions_scss.section_title}>
                <div>Художник</div>
                <div>Сумма</div>
                <div>Дата списания</div>
                <button className={'no_main_color'}></button>
            </header>
            <ul className={subscriptions_scss.subscriptions_private_section}>
                {props.subscriptionsArtistsPrivate.map((oneArtist: SubscriptionsArtistsPrivate, index) => {
                    return (
                        <li key={index} className={subscriptions_scss.grid}>
                            <OneSubscription oneArtist={oneArtist}/>
                        </li>
                    )
                })
                }
            </ul>
        </main>
    )
}