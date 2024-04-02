import {MAIN_PATHS} from "@/paths/main";

export const AUTH_CATEGORY = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    FORGOT_PASSWORD: '/forgotPassword',
    CREATE_ARTIST: '/createArtist',
}

export const AUTH_PATHS = {
    LOGIN:
        MAIN_PATHS.AUTH + AUTH_CATEGORY.LOGIN,
    REGISTRATION:
        MAIN_PATHS.AUTH + AUTH_CATEGORY.REGISTRATION,
    FORGOT_PASSWORD:
        MAIN_PATHS.AUTH + AUTH_CATEGORY.FORGOT_PASSWORD,
    CREATE_ARTIST:
        MAIN_PATHS.AUTH + AUTH_CATEGORY.REGISTRATION + AUTH_CATEGORY.CREATE_ARTIST,
}