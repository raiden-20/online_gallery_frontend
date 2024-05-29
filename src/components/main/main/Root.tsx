'use client'

import root_scss from '@/scss/components/main/Root.module.scss'
import {usePathname, useRouter} from "next/navigation";
import {MAIN_PATHS, PATHS_CATEGORY} from "@/paths/main";
import {Auth_main} from "@/components/auth/Auth_main";
import {ProfileRoot} from "@/components/profile/ProfileRoot";
import React, {useEffect} from "react";
import {SettingsRoot} from "@/components/settings/SettingsRoot";
import {FooterComponent} from "@/components/main/main/navigation/FooterComponent";
import {ArtistsContainer} from "@/components/categories/artists/ArtistsContainer";
import Cookies from "js-cookie";
import {SearchContainer} from "@/components/search/SearchContainer";
import {NavigationComponent} from "@/components/main/main/navigation/header/nav/NavigationComponent";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {NavigationComponentMobile} from "@/components/main/main/navigation/header/nav/NavigationComponentMobile";
import {Artist} from "@/interfaces/artistInterface";
import {Customer} from "@/interfaces/customerInterface";
import {signOut, useSession} from "next-auth/react";
import {MainComponent} from "@/components/main/MainComponent";
import {CreateOrderSuccessComponent} from "@/components/create_order/success/CreateOrderSuccessComponent";
import {SubscriptionsContainer} from "@/components/subscribers/SubscriptionsContainer";
import {CreateArtContainer} from "@/components/create_art/CreateArtContainer";
import {OneWorkContainer} from "@/components/categories/works/works/one_work/one_page/OneWorkContainer";
import {WorkRootContainer} from "@/components/categories/works/WorkRootContainer";
import {CartContainer} from "@/components/cart/CartContainer";
import {CreateOrderContainer} from "@/components/create_order/CreateOrderContainer";
import {OrdersContainer} from "@/components/orders/OrdersContainer";
import {OneOrderContainer} from "@/components/orders/one_order/OneOrderContainer";
import {setToken} from "@/api/api_main";
import {deleteCookies, keycloakSessionLogOut} from "@/store/thunks/authThunk";
import {NotificationsContainer} from "@/components/notifications/NotificationsContainer";
import {OnePopUpNotificationContainer} from "@/components/notifications/one_popup_notification/OnePopUpNotificationContainer";
import {OneAuctionContainer} from "@/components/categories/works/auctions/one_auction/one_page/OneAuctionContainer";
import {EditRoot} from "@/components/create_art/edit_art/EditRoot";
import {ChangeAuctionOrderContainer} from "@/components/change_order_auction/ChangeAuctionOrderContainer";

interface RootInterface {
    artist_data: Artist
    customer_data: Customer

    isCustomerCreate(router: AppRouterInstance): void,
    getCustomerProfileData(id: string, router: AppRouterInstance): void
    getArtistProfileData(id: string, router: AppRouterInstance): void
}

export const Root = (props: RootInterface) => {
    const router = useRouter()

    const pathname = usePathname()
    const pathnameArr = pathname.split('/')
    const main_path = '/' + pathnameArr[1]
    const lastPath = '/' + pathnameArr[pathnameArr.length - 1]

    const {  data: session, status} = useSession();

    useEffect(() => {
        if (Cookies.get('status') === 'authenticated') {
            if (session) {
                // @ts-ignore
                if (session.error !== undefined) {
                    keycloakSessionLogOut()
                        .then(() => {
                            deleteCookies()
                            signOut({callbackUrl: MAIN_PATHS.MAIN}).then()
                        })
                } else {
                    // @ts-ignore
                    localStorage.setItem('access_token', session.accessToken)

                    localStorage.setItem('session', JSON.stringify(session))
                    if (!Cookies.get('registrationFlag')) {
                        // @ts-ignore
                        Cookies.set('customerId', session.providerAccountId)
                        props.isCustomerCreate(router)
                    }
                    if (props.customer_data.customerName === '') {
                        props.getCustomerProfileData(Cookies.get('customerId') as string, router)
                    }
                    if (Cookies.get('artistId') && props.artist_data.artistName === '') {
                        props.getArtistProfileData(Cookies.get('artistId') as string, router)
                    } else {
                        if (props.customer_data.artistId !== '' && props.customer_data.artistId !== null) {
                            Cookies.set('artistId', props.customer_data.artistId)
                            props.getArtistProfileData(Cookies.get('artistId') as string, router)
                        }
                    }
                    setToken(localStorage.getItem('access_token') as string)
                }
            }
        }
    }, [session]);

    return (
        <section className={root_scss.page}>
            <section className={root_scss.root}>
                <nav className={root_scss.desktop_nav}>
                    <NavigationComponent artist_avatar={props.artist_data.avatarUrl === '' ? '/default_avatar_profile.svg' : props.artist_data.avatarUrl}
                                         customer_avatar={props.customer_data.avatarUrl === '' ? '/default_avatar_profile.svg' : props.customer_data.avatarUrl}/>
                </nav>
                <nav className={root_scss.mobile_nav}>
                    <NavigationComponentMobile artist_avatar={props.artist_data.avatarUrl === '' ? '/default_avatar_profile.svg' : props.artist_data.avatarUrl}
                                               customer_avatar={props.customer_data.avatarUrl === '' ? '/default_avatar_profile.svg' : props.customer_data.avatarUrl}/>
                </nav>
                <main>
                    {main_path === PATHS_CATEGORY.MAIN ? <MainComponent/> :
                    main_path === PATHS_CATEGORY.PROFILE ? <ProfileRoot/> :
                    main_path === PATHS_CATEGORY.SETTINGS ? <SettingsRoot/> :
                        pathname === MAIN_PATHS.CREATE_ARTIST ? <Auth_main/> :
                        pathname === MAIN_PATHS.CREATE_CUSTOMER ? <Auth_main/> :
                        pathname === PATHS_CATEGORY.ARTISTS ? <ArtistsContainer/> :
                        main_path === PATHS_CATEGORY.PAINTINGS ? <WorkRootContainer/> :
                        main_path === PATHS_CATEGORY.PHOTOS ? <WorkRootContainer/> :
                        main_path === PATHS_CATEGORY.SCULPTURES ? <WorkRootContainer/> :
                        main_path === PATHS_CATEGORY.SCULPTURES ? <WorkRootContainer/> :
                        main_path === PATHS_CATEGORY.AUCTIONS ? <WorkRootContainer/> :
                        main_path === PATHS_CATEGORY.ARTS ? <OneWorkContainer/> :
                        main_path === PATHS_CATEGORY.AUCTION ? <OneAuctionContainer/> :
                        pathname === PATHS_CATEGORY.SEARCH ? <SearchContainer/> :
                        pathname === MAIN_PATHS.CREATE_ART ? <CreateArtContainer/> :
                        main_path === PATHS_CATEGORY.EDIT ? <EditRoot/> :
                        pathname === MAIN_PATHS.CREATE_ORDER ? <CreateOrderContainer/> :
                        pathname === MAIN_PATHS.SUCCESS_ORDER ? <CreateOrderSuccessComponent/> :
                        pathname === MAIN_PATHS.ORDERS ? <OrdersContainer/> :
                        main_path === PATHS_CATEGORY.ORDERS && lastPath !== PATHS_CATEGORY.BUY
                            ? <OneOrderContainer/> :
                        main_path === PATHS_CATEGORY.ORDERS && lastPath === PATHS_CATEGORY.BUY
                            ? <ChangeAuctionOrderContainer/> :
                    main_path === PATHS_CATEGORY.CART ? <CartContainer/> :
                    main_path === PATHS_CATEGORY.SUBSCRIPTIONS ? <SubscriptionsContainer/>  :
                        main_path === MAIN_PATHS.NOTIFICATIONS ? <NotificationsContainer/>
                            : null
                    }
                </main>
                <FooterComponent/>
                {status === 'authenticated' ?
                    <OnePopUpNotificationContainer/>
                : null}
            </section>
        </section>

    )
}