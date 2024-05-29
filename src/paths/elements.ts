export const ART_TYPES = {
    PAINTING: 'PAINTING',
    PHOTO: 'PHOTO',
    SCULPTURE: 'SCULPTURE'
}

export const ART_TYPES_MANY = {
    PAINTINGS: 'paintings',
    PHOTOS: 'photos',
    SCULPTURES: 'sculptures'
}

export const ART_AUCTION = {
    ART: 'art',
    AUCTION: 'auction'
}

export const ART_STATUS = {
    AVAILABLE: 'AVAILABLE',
    SOLD: 'SOLD',
    CART: 'CART'
}

export const ORDER_STATUS = {
    CREATED: 'CREATED',
    PROGRESS: 'PROGRESS',
    FINISHED: 'FINISHED',
    AWAIT: 'AWAIT'
}

export const ORDER_STATUS_RUS = {
    CREATED: 'Оформлен',
    PROGRESS: 'В пути',
    FINISHED: 'Завершен',
    AWAIT: 'Оформление'
}

export const ANONYMOUS = 'anonymous'
export const ANONYMOUS_RUS = 'Анонимный пользователь'

export const CHARACTER_RESTRICTION = {
    ARTIST_NAME: 100,
    ARTIST_DESCRIPTIONS: 500,
    CUSTOMER_DESCRIPTION: 200,
    ART_NAME: 200,
    ART_DESCRIPTION: 500,
    MIN_YEAR: 1000,
    MAX_YEAR: new Date().getFullYear(),
    TAG_LENGTH: 30,
    TAG_COUNT: 22,
    MATERIAL_LENGTH: 20,
    MATERIAL_COUNT: 30,
    POST_TITLE: 200,
    POST_TEXT: 500,
    ART_PHOTO_COUNT: 5,
    CARD: 20,
    ADDRESS_NAME: 200,
    ADDRESS_COUNTRY: 200,
    ADDRESS_REGION: 200,
    ADDRESS_CITY: 200,
    ADDRESS_LOCATION: 200,
    MAX_RATE_SELECT_COUNT: 20
}