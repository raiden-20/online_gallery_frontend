import {Artist, ArtShortCategories, UserShort} from "@/interfaces/artistInterface";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";

const SET_ARTISTS = 'SET_ARTISTS'
const SET_ARTS = 'SET_ARTS'
const SET_SEARCH = 'SET_SEARCH'

const CLEAR_CATEGORIES_DATA = 'CLEAR_CATEGORIES_DATA'


interface CategoriesReducerInterface {
    artists: UserShort[],
    arts: ArtShortCategories[],
    auctions: AuctionCategoriesInterface[],
    search: []
}


const initialState: CategoriesReducerInterface = {
    artists: [],
    arts: [],
    search: [],
    auctions: []
}

export const categoriesReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_ARTISTS: {
            stateCopy.artists = action.artists
            stateCopy.search = action.artists
            return stateCopy
        }

        case SET_ARTS: {
            stateCopy.arts = action.arts
            stateCopy.search = action.arts
            return stateCopy
        }

        case SET_SEARCH: {
            stateCopy.search = action.search

            return stateCopy
        }

        case CLEAR_CATEGORIES_DATA: {
            stateCopy.artists = []
            state.search = []

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setArtists = (artists: Artist[]) => {
    return {
        type: SET_ARTISTS, artists
    }
}

export const setArts = (arts: ArtShortCategories[]) => {
    return {
        type: SET_ARTS, arts
    }
}

export const setSearch = (search: []) => {
    return {
        type: SET_SEARCH, search
    }
}

export const clearCategoriesReducer = () => {
    return {
        type: CLEAR_CATEGORIES_DATA
    }
}
