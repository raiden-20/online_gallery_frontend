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
import {useSession} from "next-auth/react";
import {WorksRoot} from "@/components/categories/works/WorksRoot";
import {CartComponent} from "@/components/cart/CartComponent";
import {MainComponent} from "@/components/main/MainComponent";
import {OneWorkComponent} from "@/components/categories/works/works/OneWorkComponent";
import {SubscriptionsComponent} from "@/components/subscribers/SubscriptionsComponent";

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

    const {  data: session} = useSession();

    useEffect(() => {
        if (Cookies.get('status') === 'authenticated') {
            if (session) {
                // @ts-ignore
                localStorage.setItem('access_token', session.access_token)
                if (!Cookies.get('registrationFlag')) {
                    // @ts-ignore
                    Cookies.set('customerId', session.providerAccountId)
                    props.isCustomerCreate(router)
                }
                props.getCustomerProfileData(Cookies.get('customerId') as string, router)
                if (Cookies.get('artistId')) {
                    props.getArtistProfileData(Cookies.get('artistId') as string, router)
                } else {
                    if (props.customer_data.artistId !== '' && props.customer_data.artistId !== null) {
                        Cookies.set('artistId', props.customer_data.artistId)
                        props.getArtistProfileData(Cookies.get('artistId') as string, router)
                    }
                }
            }
        }
    }, [session]);


    return (
        <section className={root_scss.page}>
            <section className={root_scss.root}>
                <nav className={root_scss.desktop_nav}> {/*todo перенести в одну компоненту */}
                    <NavigationComponent artist_avatar={props.artist_data.avatarUrl === '' ? '/default_ava_nav.jpg' : props.artist_data.avatarUrl}
                                         customer_avatar={props.customer_data.avatarUrl === '' ? '/default_ava_nav.jpg' : props.customer_data.avatarUrl}/>
                </nav>
                <nav className={root_scss.mobile_nav}>
                    <NavigationComponentMobile artist_avatar={props.artist_data.avatarUrl === '' ? '/default_ava_nav.jpg' : props.artist_data.avatarUrl}
                                               customer_avatar={props.customer_data.avatarUrl === '' ? '/default_ava_nav.jpg' : props.customer_data.avatarUrl}/>
                </nav>
                <main>
                    {main_path === PATHS_CATEGORY.MAIN ? <MainComponent/> :
                    main_path === PATHS_CATEGORY.CREATE ? <Auth_main/> :
                    main_path === PATHS_CATEGORY.PROFILE ? <ProfileRoot/> :
                    main_path === PATHS_CATEGORY.SETTINGS ? <SettingsRoot/> :
                        pathname === PATHS_CATEGORY.ARTISTS ? <ArtistsContainer/> :
                        pathname === PATHS_CATEGORY.PAINTINGS ? <WorksRoot/> :
                        pathname === PATHS_CATEGORY.PHOTO ? <WorksRoot/> :
                        pathname === PATHS_CATEGORY.SCULPTURES ? <WorksRoot/> :
                        pathname === PATHS_CATEGORY.SEARCH ? <SearchContainer/> :
                        pathname === MAIN_PATHS.ONE_PHOTO ? <OneWorkComponent/> :
                        pathname === MAIN_PATHS.ONE_PAINTING ? <OneWorkComponent/> :
                        pathname === MAIN_PATHS.ONE_SCULPTURE ? <OneWorkComponent/> :
                    main_path === PATHS_CATEGORY.CART ? <CartComponent/> :
                    main_path === PATHS_CATEGORY.SUBSCRIPTIONS ? <SubscriptionsComponent/> : null
                    }
                </main>
                <FooterComponent/>
            </section>
        </section>

    )
}