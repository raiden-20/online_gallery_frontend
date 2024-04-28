import one_work_scss from "@/scss/components/profile/categories/OneWork.module.scss";
import {signIn, useSession} from "next-auth/react";
import Cookies from "js-cookie";
import {ROLES} from "@/paths/main";
import {useState} from "react";

export const OneWorkButton = () => {
    const {status} = useSession();

    return (
        <button className={'main_button ' + one_work_scss.add_to_cart}
                onClick={() => {
                    if (status === 'authenticated') {
                    }
                    else {
                        signIn('keycloak')
                            .then(() => {
                                Cookies.set('role', ROLES.CUSTOMER)
                                Cookies.set('status', 'authenticated')

                            })
                    }
                }}>
            Добавить в корзину
        </button>
    )
}