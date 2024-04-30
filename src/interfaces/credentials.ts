export interface OneAddressInterface {
    addressId: string
    name: string
    country: string
    region: string
    city: string
    index: string
    location: string
    isDefault: boolean
}

export interface OneCardInterface {
    cardId: string
    type: string
    number: string
    date: string
    isDefault: boolean
    cvv: string
}