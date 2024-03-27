export const HEADER_PATH= '/pages'

export const ROLES = {
    ARTIST: 'artist',
    CUSTOMER: 'customer'
}

export const PATHS_CATEGORY = {
    MAIN: '/main',
    AUTH: '/auth',
    PROFILE: '/profile',
    SETTINGS: '/settings'
}

export const MAIN_PATHS = {
    MAIN: HEADER_PATH + PATHS_CATEGORY.MAIN,
    AUTH: HEADER_PATH + PATHS_CATEGORY.AUTH,
    PROFILE: HEADER_PATH + PATHS_CATEGORY.PROFILE,
    SETTINGS: HEADER_PATH + PATHS_CATEGORY.SETTINGS
}