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
    photos: {artId: string}
}