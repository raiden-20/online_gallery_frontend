export const ROLES = {
    ARTIST: 'artist',
    CUSTOMER: 'customer'
}

export const PATHS_CATEGORY = {
    ARTIST: '/artist',
    CUSTOMER: '/customer',

    CREATE: '/create',

    MAIN: '/main',
    AUTH: '/auth',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    ARTISTS: '/artists',
    SEARCH: '/search',

    ERROR_404: '/404'
}

export const MAIN_PATHS = {
    MAIN: PATHS_CATEGORY.MAIN,
    AUTH: PATHS_CATEGORY.AUTH,

    PROFILE_CUSTOMER: PATHS_CATEGORY.PROFILE + PATHS_CATEGORY.CUSTOMER,
    PROFILE_ARTIST: PATHS_CATEGORY.PROFILE + PATHS_CATEGORY.ARTIST,
    CREATE_CUSTOMER: PATHS_CATEGORY.CREATE + PATHS_CATEGORY.CUSTOMER,
    CREATE_ARTIST: PATHS_CATEGORY.CREATE + PATHS_CATEGORY.ARTIST,
    PROFILE: PATHS_CATEGORY.PROFILE,

    SETTINGS: PATHS_CATEGORY.SETTINGS,

    ARTISTS: PATHS_CATEGORY.ARTISTS,
    SEARCH: PATHS_CATEGORY.SEARCH,
}