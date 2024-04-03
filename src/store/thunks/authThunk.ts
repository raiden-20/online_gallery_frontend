import {AuthAPI} from "@/api/authAPI";
import {signOut} from "next-auth/react";
import axios from "axios";
import {MAIN_PATHS} from "@/paths/main";

const keycloakSessionLogOut = async () => {
    try {
        await axios.get(`/api/auth/logout`)
    } catch (error: any) {
        console.log(error)
    }
}

export const changeEmail = (input_email: string) =>
    () => {
        AuthAPI.ChangeEmailAPI(input_email)
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        keycloakSessionLogOut()
                            .then(() => signOut({callbackUrl: MAIN_PATHS.MAIN}))
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
                            .then(() => signOut({callbackUrl: MAIN_PATHS.MAIN}))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }

export const deleteAccount = () =>
    () => {
        AuthAPI.DeleteAccountAPI()
            .then(response => {
                switch (response[0]) {
                    case 200 : {
                        keycloakSessionLogOut()
                            .then(() => signOut({callbackUrl: MAIN_PATHS.MAIN}))
                    }
                }
            }).catch(error => {
            console.error(error)
        })
    }