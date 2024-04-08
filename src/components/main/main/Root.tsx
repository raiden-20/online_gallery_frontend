'use client'

import root_scss from '@/scss/components/main/Root.module.scss'
import {usePathname, useRouter} from "next/navigation";
import {PATHS_CATEGORY} from "@/paths/main";
import {Auth_main} from "@/components/auth/Auth_main";
import {ProfileRoot} from "@/components/profile/ProfileRoot";
import React from "react";
import {SettingsRoot} from "@/components/settings/SettingsRoot";
import {FooterComponent} from "@/components/main/main/navigation/FooterComponent";
import {ArtistsContainer} from "@/components/categories/artists/ArtistsContainer";
import Cookies from "js-cookie";
import {useSession} from "next-auth/react";
import {setToken} from "@/api/api_main";
import {decrypt} from "../../../../utils/encryption";
import {SearchContainer} from "@/components/search/SearchContainer";
import {NavigationComponent} from "@/components/main/main/navigation/NavigationComponent";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

interface RootInterface {
    isCustomerCreate(router: AppRouterInstance): void
}

export const Root = (props: RootInterface) => {
    const router = useRouter()

    const pathname = usePathname().split('/')
    const main_path = '/' + pathname[1]

    const {  data: session, status } = useSession();
    if (session !== null && session !== undefined && status === 'authenticated'){
        if (!Cookies.get('customerId')) {
            // @ts-ignore
            Cookies.set('customerId', session.providerAccountId)
        }
        if (Cookies.get('registrationFlag') === undefined) {
            props.isCustomerCreate(router)
        }
        // @ts-ignore
        setToken(decrypt(session.access_token))
    }

    return (
        <section className={root_scss.page}>
            <section className={root_scss.root}>
                <NavigationComponent/>
                <main>
                    {main_path === PATHS_CATEGORY.CREATE  ? <Auth_main/> :
                    main_path === PATHS_CATEGORY.PROFILE ? <ProfileRoot/> :
                    main_path === PATHS_CATEGORY.SETTINGS ? <SettingsRoot/> :
                    main_path === PATHS_CATEGORY.ARTISTS ? <ArtistsContainer/> :
                    main_path === PATHS_CATEGORY.SEARCH ? <SearchContainer/> : null
                    }
                </main>
                <FooterComponent/>
            </section>
        </section>

    )
}