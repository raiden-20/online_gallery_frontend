import subscriptions_scss from '@/scss/components/subscriptions/Subscriptions.module.scss'
import nav_profile_scss from "@/scss/components/profile/Navigation.module.scss";
import {useEffect, useState} from "react";

import search_icon from '@/assets/icons/search/search.svg'
import Image from "next/image";
import {
    SubscriptionsArtistPrivate
} from "@/components/subscribers/subscriptionsArtistPrivate/SubscriptionsArtistPrivate";
import {SubscriptionsArtistPublic} from "@/components/subscribers/subscriptionsArtistPublic/SubscriptionsArtistPublic";
import {SubscriptionsArtistsPrivate, SubscriptionsUsers} from "@/interfaces/subscriptions";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import Cookies from "js-cookie";
import {ROLES} from "@/paths/main";
import {useRouter} from "next/navigation";

interface subscriptionsInterface {
    subscriptionsArtistsPrivate: SubscriptionsArtistsPrivate[]
    subscriptionsArtistsPublic: SubscriptionsUsers[]
    subscriptionsCustomersPrivate: SubscriptionsUsers[]
    subscriptionsCustomersPublic: SubscriptionsUsers[]

    PrivateSubscriptionsArtists(router: AppRouterInstance): void,

    PublicSubscriptionsArtists(router: AppRouterInstance): void,

    PrivateSubscribersCustomers(router: AppRouterInstance): void,

    PublicSubscribersCustomers(router: AppRouterInstance): void,

    SearchSubscriptions(role: string, subscription: string, input: string, router: AppRouterInstance): void
}


export const SubscriptionsComponent = (props: subscriptionsInterface) => {
    const router = useRouter()

    const [whoIsClicked, setWhoIsClicked] = useState(1)
    const [input, setInput] = useState('')

    const [role] = useState(Cookies.get('role') as string)

    useEffect(() => {
        if (role === ROLES.CUSTOMER) {
            if (whoIsClicked === 1) {
                props.SearchSubscriptions(ROLES.CUSTOMER, 'private', input, router)
            } else {
                props.SearchSubscriptions(ROLES.CUSTOMER, 'public', input, router)
            }
        } else {
            if (whoIsClicked === 1) {
                props.SearchSubscriptions(ROLES.ARTIST, 'private', input, router)
            } else {
                props.SearchSubscriptions(ROLES.ARTIST, 'public', input, router)
            }
        }
    }, [input]);

    return (
        <section className={subscriptions_scss.root}>
            <header className={subscriptions_scss.header}>Подписки</header>
            <ul className={nav_profile_scss.root}>
                <li className={whoIsClicked === 1 ? nav_profile_scss.active : undefined}
                    onClick={() => setWhoIsClicked(1)}>
                    <button className={nav_profile_scss.button}>
                        Платная подписка
                    </button>
                </li>
                <li className={whoIsClicked === 2 ? nav_profile_scss.active : undefined}
                    onClick={() => setWhoIsClicked(2)}>
                    <button className={nav_profile_scss.button}>
                        Уведомления
                    </button>
                </li>
            </ul>
            <section className={subscriptions_scss.search_section}>
                <Image src={search_icon} alt={'search_icon'}/>
                <input value={input} onChange={(event) => setInput(event.target.value)}
                       placeholder={'Поиск'}/>
            </section>
            {whoIsClicked === 1 ?
                role === ROLES.CUSTOMER ?
                    <SubscriptionsArtistPrivate PrivateSubscriptionsArtists={props.PrivateSubscriptionsArtists}
                                                subscriptionsArtistsPrivate={props.subscriptionsArtistsPrivate}/>
                    :
                    <SubscriptionsArtistPublic PublicSubscriptions={props.PublicSubscriptionsArtists}
                                               subscriptions={props.subscriptionsArtistsPublic}/>
                : whoIsClicked === 2 ?
                    role === ROLES.CUSTOMER ?
                        <SubscriptionsArtistPublic PublicSubscriptions={props.PrivateSubscribersCustomers}
                                                   subscriptions={props.subscriptionsCustomersPrivate}/>
                        :
                        <SubscriptionsArtistPublic PublicSubscriptions={props.PublicSubscribersCustomers}
                                                   subscriptions={props.subscriptionsCustomersPublic}/>
                    : null}
        </section>
    )
}