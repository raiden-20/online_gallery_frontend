'use client'

import root_scss from '@/scss/components/main/Root.module.scss'
import {usePathname} from "next/navigation";
import {NavigationComponent} from "@/components/main/main/navigation/NavigationComponent";
import {PATHS_CATEGORY} from "@/paths/main";
import {Auth_main} from "@/components/auth/Auth_main";
import {ProfileRoot} from "@/components/profile/ProfileRoot";
import React from "react";
import {SettingsRoot} from "@/components/settings/SettingsRoot";
import {FooterComponent} from "@/components/main/main/navigation/FooterComponent";
import {Artists} from "@/components/categories/artists/Artists";
import {Search} from "@/components/search/Search";

export const Root = () => {
    const pathname = usePathname().split('/')
    const main_path = '/' + pathname[1]

    return (
        <section className={root_scss.page}>
            <section className={root_scss.root}>
                <NavigationComponent/>
                <main>
                    {main_path === PATHS_CATEGORY.AUTH ? <Auth_main/> :
                    main_path === PATHS_CATEGORY.PROFILE ? <ProfileRoot/> :
                    main_path === PATHS_CATEGORY.SETTINGS ? <SettingsRoot/> :
                    main_path === PATHS_CATEGORY.ARTISTS ? <Artists/> :
                    main_path === PATHS_CATEGORY.SEARCH ? <Search/> : null
                    }
                </main>
                <FooterComponent/>
            </section>
        </section>

    )
}