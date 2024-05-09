import subscriptions_scss from '@/scss/components/subscriptions/Subscriptions.module.scss'
import {SubscriptionsCustomers} from "@/interfaces/subscriptions";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {MAIN_PATHS, ROLES} from "@/paths/main";

interface subscriptionsInterface {
    input: string
    subscriptions: SubscriptionsCustomers[]
    PublicSubscriptions(router: AppRouterInstance): void,
}

export const SubscriptionsCustomerPrivate = (props: subscriptionsInterface) => {
    const router = useRouter()
    const [role] = useState(Cookies.get('role') as string)

    useEffect(() => {
        if (props.input === '') {
            props.PublicSubscriptions(router)
        }

    }, [props.input]);

    return (
        <ul className={subscriptions_scss.subscription_public_section}>
            {props.subscriptions.map((one: SubscriptionsCustomers, index) => {
                return (
                    <li className={subscriptions_scss.one_artist_public} key={index}
                    onClick={() => {
                        if (role === ROLES.CUSTOMER) {
                            router.push(MAIN_PATHS.PROFILE_ARTIST + `/${one.customerId}`)
                        } else {
                            router.push(MAIN_PATHS.PROFILE_CUSTOMER + `/${one.customerId}`)
                        }
                    }}>
                        <img src={one.avatarUrl} alt={'avatar'} crossOrigin="anonymous"/>
                        <div className={'p'}>{one.customerName}</div>
                    </li>
                )
            })}
        </ul>
    )
}