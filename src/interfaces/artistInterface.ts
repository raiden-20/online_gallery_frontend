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
    arts: { artId: string }
    isActive: boolean
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