export interface CartInterface {
    photoUrl: string
    artId: string
    name: string
    price: number
    artistId: string
    artistName: string
}

export interface OrderInterface {
    orderId: string
    name: string
    country: string
    region: string
    city: string
    index: number
    location: string
    cardType: string
    number: string
    artistName: string
    customerName: string
    artUrl: string
    artName: string
    price: number
    status: string
    artistComment: string
    createDate: string
}