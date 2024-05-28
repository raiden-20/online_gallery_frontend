export interface AuctionInterface {
    auctionId: string
    name: string
    type: string
    photoUrls: string[]
    lastPrice: string
    artistId: string
    artistName: string
    status: string
    customerId: string
    customerUrl: string
    customerName: string
    currentMaxRate: string | null
    description: string
    viewCount: string
    size: string
    createDate: string
    tags: string[]
    materials: string[]
    frame: boolean
    rate: string
    startDate: string
    endDate: string
    customerRates: CustomerRate[]
}

export interface AuctionCategoriesInterface {
    auctionId: string
    name: string
    type: string
    photoUrl: string
    lastPrice: string
    artistId: string
    artistName: string
    status: string
    rateCount: string
    customerId: string
    customerUrl: string
    customerName: string
    description: string
    size: string
    viewCount: string
    createDate: string
    tags: string[]
    materials: string[]
    frame: boolean
    rate: string
    startDate: string
    endDate: string
}

export interface CustomerRate {
    customerId: string,
    customerName: string
    customerUrl: string
    rate: string
}

export const AUCTION_STATUS = {
    WAIT: 'WAIT',
    AVAILABLE: 'AVAILABLE',
    SOLD: 'SOLD'
}