import {connect} from "react-redux";
import {FiltersComponent} from "@/components/categories/works/filters/FiltersComponent";
import {
    setFiltersArtistsThunk, setFiltersClear, setFiltersFrameThunk, setFiltersMaterialsThunk,
    setFiltersPriceEndThunk,
    setFiltersPriceStartThunk,
    setFiltersSizeThunk, setFiltersStatusThunk, setFiltersTagsThunk, setFiltersYearThunk
} from "@/store/thunks/filtersThunk";

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    setFiltersPriceStartThunk,
    setFiltersPriceEndThunk,
    setFiltersSizeThunk,
    setFiltersArtistsThunk,
    setFiltersYearThunk,
    setFiltersMaterialsThunk,
    setFiltersTagsThunk,
    setFiltersFrameThunk,
    setFiltersStatusThunk,
    setFiltersClear
}

export const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(FiltersComponent)