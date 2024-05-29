import {AuthAPI} from "@/api/authAPI";
import {signIn, signOut} from "next-auth/react";
import {MAIN_PATHS,  ROLES} from "@/paths/main";
import Cookies from "js-cookie";

export const keycloakSessionLogOut = async () => {
    try {
        await fetch(`/api/auth/logout`, {method: "GET"})
    } catch (error: any) {
        console.log(error)
    }
}

export const signin = () => {
    signIn('keycloak')
        .then(() => {
            Cookies.set('role', ROLES.CUSTOMER)
            Cookies.set('status', 'authenticated')
        })
}

export const deleteCookies = () => {
    Cookies.remove('customerId');
    Cookies.remove('currentId');
    Cookies.remove('artistId');
    Cookies.remove('role');
    Cookies.remove('registrationFlag');
    Cookies.remove('currentRole');
    Cookies.remove('status');
    Cookies.remove('artistName');
    Cookies.remove('customerName');
    Cookies.remove('customerUrl');
    Cookies.remove('SSE');
    localStorage.removeItem('access_token')
    localStorage.removeItem('session')
}

export const changeEmail = (input_email: string, setMessage:(message: string) => void) =>
    () => {
        AuthAPI.ChangeEmailAPI(input_email)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        keycloakSessionLogOut()
                            .then(() => {
                                deleteCookies()
                                signOut({callbackUrl: MAIN_PATHS.MAIN}).then()
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
                                deleteCookies()

                                signOut({callbackUrl: MAIN_PATHS.MAIN}).then()

                            })
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const deleteAccount = (setMessage:(message: string) => void) =>
    () => {
        AuthAPI.DeleteAccountAPI()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        keycloakSessionLogOut()
                            .then(() => {
                                deleteCookies()

                                signOut({callbackUrl: MAIN_PATHS.MAIN}).then()

                            })
                        break
                    }
                    case 400 : {
                        setMessage('Ошибка удаления аккаунта, повторите попытку')
                        break
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }