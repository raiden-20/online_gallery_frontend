'use client'

import {NavigationComponent} from "@/app/components/main/main/navigation/NavigationComponent";
import {usePathname} from "next/navigation";
import {PATHS_CATEGORY} from "@/app/paths/main";
import {Auth_main} from "@/app/components/auth/Auth_main";
import {FooterComponent} from "@/app/components/main/main/navigation/FooterComponent";

import root_scss from '@/app/scss/components/main/Root.module.scss'
import {ProfileRoot} from "@/app/components/profile/ProfileRoot";
import {SettingsRoot} from "@/app/components/settings/SettingsRoot";

export const Root = () => {
    const pathname = usePathname().split('/')
    const pathnameThird = '/' + pathname[2]

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