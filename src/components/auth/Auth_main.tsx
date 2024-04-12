'use client'

import React from "react";

import {usePathname} from "next/navigation";

import auth_main_scss from '@/scss/components/auth/Auth_main.module.scss'

import {PATHS_CATEGORY} from "@/paths/main";
import {CreateCustomerContainer} from "@/components/auth/forms/customer/CreateCustomerContainer";
import {CreateArtistContainer} from "@/components/auth/forms/artist/CreateArtistContainer";

export const Auth_main = () => {
    const pathname = usePathname().split('/')
    const pathnameLast = '/' + pathname[pathname.length - 1]

    return (
        <section className={auth_main_scss.page}>
            <section className={auth_main_scss.root}>
                <section className={auth_main_scss.auth}>
                    <header className={auth_main_scss.header + ' title'}>Lindéro</header>
                    <section>
                        {pathnameLast === PATHS_CATEGORY.CUSTOMER ? <CreateCustomerContainer/> :
                                pathnameLast === PATHS_CATEGORY.ARTIST? <CreateArtistContainer/>
                                    : null}
                    </section>
                </section>
            </section>
        </section>


    )
}