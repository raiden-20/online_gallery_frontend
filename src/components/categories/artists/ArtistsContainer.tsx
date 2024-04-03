import {connect} from "react-redux";
import {UserShort} from "@/interfaces/artistInterface";
import {Artists} from "@/components/categories/artists/Artists";
import {getAllArtists} from "@/store/thunks/categoriesThunk";

interface containerState {
    categories: {
        artists: UserShort[]
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        artists: state.categories.artists
    }
}

const mapDispatchToProps = {
    getAllArtists
}

export const ArtistsContainer = connect(mapStateToProps, mapDispatchToProps)(Artists)