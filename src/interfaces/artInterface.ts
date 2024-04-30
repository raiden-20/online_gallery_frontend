export interface ArtInterface {
    artId: string,
    name: string
    type: string
    photoUrls: string[]
    price: string
    artistId: string
    artistName: string
    status: string
    isPrivate: boolean
    customerId: string
    customerName: string
    description: string
    size: string
    createDate: string
    tags: string[]
    materials: string[]
    frame: boolean
    publishDate: string
}

export interface ArtShortInterface {
    artId: string,
    name: string
    photoUrl: string
    price: string
    artistId: string
    isPrivate: boolean
    artistName: string
    customerId: string
    avatarUrl: string
    customerName: string
}

export interface ArtArtistInterface {
    artId: string,
    name: string
    photoUrl: string
    price: string
    isPrivate: string
    available: string
    customerId: string
    avatarUrl: string
    customerName: string
}

export interface ArtCustomerInterface {
    artId: string,
    artistName: string
    name: string
    photoUrl: string
    isPrivate: string
    price: string
}