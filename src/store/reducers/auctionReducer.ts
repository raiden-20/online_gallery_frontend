import {ART_TYPES} from "@/paths/elements";
import {AuctionCategoriesInterface, AuctionInterface} from "@/interfaces/auctionInterface";

const SET_AUCTIONS = 'SET_AUCTIONS'
const SET_ARTIST_AUCTIONS = 'SET_ARTIST_AUCTIONS'
const SET_ONE_AUCTION = 'SET_ONE_AUCTION'
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
            stateCopy.auctions = action.auctions

            return stateCopy
        }

        case SET_ARTIST_AUCTIONS: {
            stateCopy.auctions_artist = action.auction_artist

            return stateCopy
        }

        case CLEAR_ONE_AUCTION: {
            stateCopy.auction = {
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
            stateCopy.auction = action.auction

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
export const clearOneAuction = () => {
    return {
        type: CLEAR_ONE_AUCTION
    }
}
