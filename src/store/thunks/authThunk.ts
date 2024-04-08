import {AuthAPI} from "@/api/authAPI";
import {signOut} from "next-auth/react";
import {MAIN_PATHS, PATHS_CATEGORY} from "@/paths/main";
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const keycloakSessionLogOut = async () => {
    try {
        await fetch(`/api/auth/logout`, {method: "GET"})
    } catch (error: any) {
        console.log(error)
    }
}

export const changeEmail = (input_email: string, setMessage:(message: string) => void) =>
    () => {
        AuthAPI.ChangeEmailAPI(input_email)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        keycloakSessionLogOut()
                            .then(() => {
                                Cookies.remove('customerId');
                                Cookies.remove('currentId');
                                Cookies.remove('artistId');
                                Cookies.remove('role');
                                signOut({callbackUrl: MAIN_PATHS.MAIN})
                            })
                        break
                    }
                    case 409 : {
                        setMessage('Данный email уже занят')
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const changePassword = (input_password: string) =>
    () => {
        AuthAPI.ChangePasswordAPI(input_password)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        keycloakSessionLogOut()
                            .then(() => {
                                Cookies.remove('customerId');
                                Cookies.remove('currentId');
                                Cookies.remove('artistId');
                                Cookies.remove('role');
                                signOut({callbackUrl: MAIN_PATHS.MAIN})

                            })
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const deleteAccount = (router: AppRouterInstance) =>
    () => {
        AuthAPI.DeleteAccountAPI()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        keycloakSessionLogOut()
                            .then(() => {
                                Cookies.remove('customerId');
                                Cookies.remove('currentId');
                                Cookies.remove('artistId');
                                Cookies.remove('role');
                                signOut({callbackUrl: MAIN_PATHS.MAIN})

                            })
                        break
                    }
                    case 404 : {
                        router.push(PATHS_CATEGORY.ERROR_404)
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }