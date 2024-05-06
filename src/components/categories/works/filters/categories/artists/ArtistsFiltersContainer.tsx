import {connect} from "react-redux";
import {
    ArtistsFiltersComponent
} from "@/components/categories/works/filters/categories/artists/ArtistsFiltersComponent";
import {UserShort} from "@/interfaces/artistInterface";
import {getAllArtists} from "@/store/thunks/categoriesThunk";

interface state {
    categories : {
        artists: UserShort[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        artists: state.categories.artists
    }
}

const mapDispatchToProps = {
    getAllArtists
}

export const ArtistsFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(ArtistsFiltersComponent)
