import {Dispatch} from "redux";
import {
    setFiltersArtists, setFiltersFrame, setFiltersMaterials,
    setFiltersPriceEnd,
    setFiltersPriceStart,
    setFiltersSize, setFiltersStatus, setFiltersTags, setFiltersYear
} from "@/store/reducers/filtersReducer";

export const setFiltersPriceStartThunk = (priceStart: string) =>
    (dispatch: Dispatch) => {
        dispatch(setFiltersPriceStart(priceStart))
    }

export const setFiltersPriceEndThunk = (priceEnd: string) =>
    (dispatch: Dispatch) => {
        dispatch(setFiltersPriceEnd(priceEnd))
    }

export const setFiltersSizeThunk = (size: string[]) =>
    (dispatch: Dispatch) => {
        dispatch(setFiltersSize(size))
    }

export const setFiltersArtistsThunk = (artists: string[]) =>
    (dispatch: Dispatch) => {
        dispatch(setFiltersArtists(artists))
    }

export const setFiltersYearThunk = (year: string[]) =>
    (dispatch: Dispatch) => {
        dispatch(setFiltersYear(year))
    }

export const setFiltersMaterialsThunk = (materials: string[]) =>
    (dispatch: Dispatch) => {
        dispatch(setFiltersMaterials(materials))
    }

export const setFiltersTagsThunk = (tags: string[]) =>
    (dispatch: Dispatch) => {
        dispatch(setFiltersTags(tags))
    }

export const setFiltersFrameThunk = (frame: boolean | null) =>
    (dispatch: Dispatch) => {
        dispatch(setFiltersFrame(frame))
    }

export const setFiltersStatusThunk = (status: boolean | null) =>
    (dispatch: Dispatch) => {
        dispatch(setFiltersStatus(status))
    }