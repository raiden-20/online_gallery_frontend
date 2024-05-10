import subscriptions_scss from "@/scss/components/subscriptions/Subscriptions.module.scss";
import {SubscriptionsArtistsPrivate} from "@/interfaces/subscriptions";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {OneSubscription} from "@/components/subscribers/subscriptionsArtistPrivate/OneSubscription";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";

interface subscriptionsInterface {
    input: string
    subscriptionsArtistsPrivate: SubscriptionsArtistsPrivate[]
    PrivateSubscriptionsArtists(router: AppRouterInstance): void,
}


export const SubscriptionsArtistPrivate = (props: subscriptionsInterface) => {
    const router = useRouter()

    useEffect(() => {
        if (props.input === '') {
            props.PrivateSubscriptionsArtists(router)
        }

    }, [props.input]);

    return (
        <main>
            <header className={subscriptions_scss.section_title}>
                <div>Художник</div>
                <div className={subscriptions_scss.mobile_hidden}>Сумма</div>
                <div className={subscriptions_scss.mobile_hidden}>Дата списания</div>
                <div className={subscriptions_scss.desktop_hidden}>Платеж</div>
                <button className={'no_main_color'}></button>
            </header>
            <ul className={subscriptions_scss.subscriptions_private_section}>
                {props.subscriptionsArtistsPrivate.map((oneArtist: SubscriptionsArtistsPrivate, index) => {
                    return (
                        <li key={index} className={subscriptions_scss.grid}
                        onClick={() => {
                            Cookies.set('currentRole', ROLES.ARTIST)
                            Cookies.set('currentId', oneArtist.artistId)
                            router.push(MAIN_PATHS.PROFILE_ARTIST + `/${oneArtist.artistId}`)
                        }}>
                            <OneSubscription oneArtist={oneArtist}/>
                        </li>
                    )
                })
                }
            </ul>
        </main>
    )
}