import {usePathname} from "next/navigation";
import {AUTH_CATEGORY} from "@/app/paths/auth";
import {LoginComponent} from "@/app/components/auth/login/LoginComponent";
import {RegistrationComponent} from "@/app/components/auth/registration/RegistrationComponent";
import {ForgotPasswordComponent} from "@/app/components/auth/forgotPassword/ForgotPasswordComponent";

import auth_main_scss from '@/app/scss/components/auth/Auth_main.module.scss'

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
                                pathnameLast === AUTH_CATEGORY.FORGOT_PASSWORD ? <ForgotPasswordComponent/>
                                    : null}
                    </section>
                </section>
            </section>
        </section>


    )
}