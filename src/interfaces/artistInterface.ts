export interface Artist {
    artistName: string,
    avatarUrl: string,
    coverUrl: string,
    customerId: string,
    description: string
}

export interface UserShort {
    artistId: string
    artistName: string,
    avatarUrl: string
}