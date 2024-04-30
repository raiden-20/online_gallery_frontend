export interface Artist {
    artistName: string,
    avatarUrl: string,
    coverUrl: string,
    customerId: string,
    description: string,
    countSoldArts: string
    salesAmount: string
    countSubscribers: string
    isPublicSubscribe: boolean
    isPrivateSubscribe: boolean
}

export interface UserShort {
    artistId: string
    artistName: string,
    avatarUrl: string,
    viewsCount: string,
    photos: { artId: string }
}

export interface ArtShortSearch {
    artId: string,
    name: string,
    photoUrl: string,
    price: string,
    artistId: string,
    artistName: string
}

export interface ArtShortProfile {
    artId: string,
    name: string,
    photoUrl: string,
    price: string,
    artistId: string,
    artistName: string
    isPrivate: boolean
    available: string
    customerId: string
    avatarUrl : string
    customerName : string
}

export interface ArtShortCategories {
    artId: string,
    name: string,
    photoUrl: string,
    price: string,
    artistId: string,
    artistName: string
    customerId: string
    avatarUrl : string
    customerName : string
}