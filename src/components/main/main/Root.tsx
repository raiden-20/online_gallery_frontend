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

export const Root = () => {
    const pathname = usePathname().split('/')
    const pathnameThird = '/' + pathname[1]

    return (
        <section className={root_scss.page}>
            <section className={root_scss.root}>
                <NavigationComponent/>
                <main>
                    {pathnameThird === PATHS_CATEGORY.AUTH ? <Auth_main/> :
                    pathnameThird === PATHS_CATEGORY.PROFILE ? <ProfileRoot/> :
                    pathnameThird === PATHS_CATEGORY.SETTINGS ? <SettingsRoot/> : null
                    }
                </main>
                <FooterComponent/>
            </section>
        </section>

    )
}