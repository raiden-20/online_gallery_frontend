import subscriptions_scss from '@/scss/components/subscriptions/Subscriptions.module.scss'
import nav_profile_scss from "@/scss/components/profile/Navigation.module.scss";
import {useState} from "react";

import search_icon from '@/assets/icons/search/search.svg'
import Image from "next/image";
import {
    SubscriptionsArtistPrivate
} from "@/components/subscribers/subscriptionsArtistPrivate/SubscriptionsArtistPrivate";
import {SubscriptionsArtistPublic} from "@/components/subscribers/subscriptionsArtistPublic/SubscriptionsArtistPublic";


export const SubscriptionsComponent = () => {
    const [whoIsClicked, setWhoIsClicked] = useState(1)

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
                <input placeholder={'Поиск'}/>
            </section>
            {whoIsClicked === 1 ?
                <SubscriptionsArtistPrivate/>
            : whoIsClicked === 2 ?
                <SubscriptionsArtistPublic/>
            : null}
        </section>
    )
}