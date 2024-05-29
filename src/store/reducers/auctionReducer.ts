import {ART_TYPES} from "@/paths/elements";
import {AuctionCategoriesInterface, AuctionInterface, CustomerRate} from "@/interfaces/auctionInterface";

const SET_AUCTIONS = 'SET_AUCTIONS'
const SET_ARTIST_AUCTIONS = 'SET_ARTIST_AUCTIONS'
const SET_ONE_AUCTION = 'SET_ONE_AUCTION'
const SET_CUSTOMER_RATE = 'SET_CUSTOMER_RATE'
const SET_MAX_RATE = 'SET_MAX_RATE'
const CLEAR_ONE_AUCTION = 'CLEAR_ONE_AUCTION'

interface ArtReducerInterface {
    auctions: AuctionCategoriesInterface[]
    auctions_artist: AuctionCategoriesInterface[]
    auction: AuctionInterface
}


const initialState: ArtReducerInterface = {
    auctions: [],
    auctions_artist: [],
    auction: {
        currentMaxRate: null,
        auctionId: "",
        name: "",
        type: "",
        photoUrls: [],
        lastPrice: "",
        artistId: "",
        artistName: "",
        status: "",
        customerId: "",
        customerUrl: "",
        customerName: "",
        description: "",
        viewCount: "",
        size: "",
        createDate: "",
        tags: [],
        materials: [],
        frame: false,
        rate: "",
        startDate: "",
        endDate: "",
        customerRates: []
    }
}

export const auctionReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_AUCTIONS: {
            stateCopy.auctions = []

            for (let i = 0; i < action.auctions.length; i++) {
                action.auctions[i].startDate = new Date(action.auctions[i].startDate)
                action.auctions[i].endDate = new Date(action.auctions[i].endDate)
                stateCopy.auctions.push(action.auctions[i])
            }

            return stateCopy
        }

        case SET_ARTIST_AUCTIONS: {
            stateCopy.auctions_artist = []

            for (let i = 0; i < action.auctions_artist.length; i++) {
                action.auctions_artist[i].startDate = new Date(action.auctions_artist[i].startDate)
                action.auctions_artist[i].endDate = new Date(action.auctions_artist[i].endDate)
                stateCopy.auctions_artist.push(action.auctions_artist[i])
            }

            return stateCopy
        }

        case CLEAR_ONE_AUCTION: {
            stateCopy.auction = {
                currentMaxRate: null,
                artistId: "",
                artistName: "",
                auctionId: "",
                createDate: "",
                customerId: "",
                customerName: "",
                customerRates: [],
                customerUrl: "",
                description: "",
                endDate: "",
                frame: false,
                lastPrice: "",
                materials: [],
                name: "",
                photoUrls: [],
                rate: "",
                size: "",
                startDate: "",
                status: "",
                tags: [],
                type: "",
                viewCount: ""

            }
            stateCopy.auctions = []

            return stateCopy
        }

        case SET_ONE_AUCTION: {
            switch (action.auction.type) {
                case ART_TYPES.PAINTING : {
                    action.auction.type = 'Картина'
                    break
                }
                case ART_TYPES.PHOTO : {
                    action.auction.type = 'Фото'
                    break
                }
                case ART_TYPES.SCULPTURE : {
                    action.auction.type = 'Скульптура'
                    break
                }
            }

            action.auction.startDate = new Date(action.auction.startDate)
            action.auction.endDate = new Date(action.auction.endDate)


            stateCopy.auction = action.auction

            console.log(action.auction)

            return stateCopy
        }

        case SET_CUSTOMER_RATE : {
            stateCopy.auction.customerRates.push(action.customerRate)
            stateCopy.auction.lastPrice = action.customerRate.rate

            return stateCopy
        }

        case SET_MAX_RATE : {
            stateCopy.auction.currentMaxRate = action.currentMaxRate

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setAuctions = (auctions: AuctionCategoriesInterface[]) => {
    return {
        type: SET_AUCTIONS, auctions
    }
}

export const setAuctionsArtist = (auctions_artist: AuctionCategoriesInterface[]) => {
    return {
        type: SET_ARTIST_AUCTIONS, auctions_artist
    }
}

export const setOneAuction = (auction: AuctionInterface) => {
    return {
        type: SET_ONE_AUCTION, auction
    }
}

export const setCustomerRate = (customerRate: CustomerRate) => {
    return {
        type: SET_CUSTOMER_RATE, customerRate
    }
}

export const setMaxRate = (currentMaxRate: string) => {
    return {
        type: SET_MAX_RATE, currentMaxRate
    }
}
export const clearOneAuction = () => {
    return {
        type: CLEAR_ONE_AUCTION
    }
}
