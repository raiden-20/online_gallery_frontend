'use client'

import {NavigationComponent} from "@/app/components/main/main/navigation/NavigationComponent";
import {usePathname} from "next/navigation";
import {PATHS_CATEGORY} from "@/app/paths/main";
import {Auth_main} from "@/app/components/auth/Auth_main";

export const Root = () => {
    const pathname = usePathname().split('/')
    const pathnameThird = '/' + pathname[2]

    return (
        <section>
            <nav>
                <NavigationComponent/>
            </nav>
            <main>
                {pathnameThird === PATHS_CATEGORY.AUTH ? <Auth_main/>
                    : null
                }
            </main>
        </section>
    )
}