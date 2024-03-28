import React from "react";

import {usePathname} from "next/navigation";

import auth_main_scss from '@/scss/components/auth/Auth_main.module.scss'
import {AUTH_CATEGORY} from "@/paths/auth";

import {RegistrationComponent} from "@/components/auth/forms/RegistrationComponent";
import {LoginComponent} from "@/components/auth/forms/LoginComponent";
import {ForgotPasswordComponent} from "@/components/auth/forms/ForgotPasswordComponent";
import {CreateArtistComponent} from "@/components/auth/forms/CreateArtistComponent";

export const Auth_main = () => {
    const pathname = usePathname().split('/')
    const pathnameLast = '/' + pathname[pathname.length - 1]

    return (
        <section className={auth_main_scss.page}>
            <section className={auth_main_scss.root}>
                <section className={auth_main_scss.auth}>
                    <header className={auth_main_scss.header + ' title'}>Lindéro</header>
                    <section>
                        {pathnameLast === AUTH_CATEGORY.LOGIN ? <LoginComponent/> :
                            pathnameLast === AUTH_CATEGORY.REGISTRATION ? <RegistrationComponent/> :
                                pathnameLast === AUTH_CATEGORY.FORGOT_PASSWORD ? <ForgotPasswordComponent/> :
                                pathnameLast === AUTH_CATEGORY.CREATE_ARTIST ? <CreateArtistComponent/>
                                    : null}
                    </section>
                </section>
            </section>
        </section>


    )
}