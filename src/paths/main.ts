export const ROLES = {
    ARTIST: 'artist',
    CUSTOMER: 'customer'
}

export const PATHS_CATEGORY = {
    ARTIST: '/artist',
    CUSTOMER: '/customer',

    CREATE: '/create',
    EDIT: '/edit',

    MAIN: '/main',
    AUTH: '/auth',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    ART: '/art',
    ARTS: '/arts',
    ARTISTS: '/artists',
    PAINTINGS: '/paintings',
    PHOTOS: '/photos',
    SCULPTURES: '/sculptures',
    PAINTING: '/painting',
    PHOTO: '/photo',
    SCULPTURE: '/sculpture',
    AUCTION: '/auction',
    AUCTIONS: '/auctions',
    SEARCH: '/search',
    CART: '/cart',
    ORDER: '/order',
    ORDERS: '/orders',
    SUBSCRIPTIONS: '/subscriptions',
    NOTIFICATIONS: '/notifications',
    POSTS: '/posts',

    ERROR_404: '/404',
    SUCCESS: '/success',

    CARDS: '/cards',
    ADDRESSES: '/addresses',

    PRIVATE: '/private',
    PUBLIC: '/public'
}

export const MAIN_PATHS = {
    MAIN: PATHS_CATEGORY.MAIN,
    AUTH: PATHS_CATEGORY.AUTH,

    PROFILE_CUSTOMER: PATHS_CATEGORY.PROFILE + PATHS_CATEGORY.CUSTOMER,
    PROFILE_ARTIST: PATHS_CATEGORY.PROFILE + PATHS_CATEGORY.ARTIST,
    CREATE_CUSTOMER: PATHS_CATEGORY.CREATE + PATHS_CATEGORY.CUSTOMER,
    CREATE_ARTIST: PATHS_CATEGORY.CREATE + PATHS_CATEGORY.ARTIST,
    PROFILE: PATHS_CATEGORY.PROFILE,

    POSTS: PATHS_CATEGORY.POSTS,

    SETTINGS: PATHS_CATEGORY.SETTINGS,

    ARTISTS: PATHS_CATEGORY.ARTISTS,

    PAINTINGS: PATHS_CATEGORY.PAINTINGS,
    PHOTO: PATHS_CATEGORY.PHOTOS,
    SCULPTURES: PATHS_CATEGORY.SCULPTURES,
    AUCTION: PATHS_CATEGORY.AUCTION,
    AUCTIONS: PATHS_CATEGORY.AUCTIONS,
    CREATE_ART: PATHS_CATEGORY.CREATE + PATHS_CATEGORY.ART,
    EDIT_ART: PATHS_CATEGORY.EDIT + PATHS_CATEGORY.ART,
    EDIT_AUCTION: PATHS_CATEGORY.EDIT + PATHS_CATEGORY.AUCTION,
    CREATE_ORDER: PATHS_CATEGORY.CREATE + PATHS_CATEGORY.ORDER,
    SUCCESS_ORDER: PATHS_CATEGORY.CREATE + PATHS_CATEGORY.ORDER + PATHS_CATEGORY.SUCCESS,

    SEARCH: PATHS_CATEGORY.SEARCH,

    CART: PATHS_CATEGORY.CART,
    ORDERS: PATHS_CATEGORY.ORDERS,
    ONE_ORDER: PATHS_CATEGORY.ORDERS,
    SUBSCRIPTIONS: PATHS_CATEGORY.SUBSCRIPTIONS,

    NOTIFICATIONS: PATHS_CATEGORY.NOTIFICATIONS,

    CARDS: PATHS_CATEGORY.SETTINGS + PATHS_CATEGORY.CARDS,
    ADDRESSES: PATHS_CATEGORY.SETTINGS + PATHS_CATEGORY.ADDRESSES,

    ONE_ART: PATHS_CATEGORY.ARTS
}