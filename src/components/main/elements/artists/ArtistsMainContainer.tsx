import {connect} from "react-redux";
import {UserShort} from "@/interfaces/artistInterface";
import {getAllArtists} from "@/store/thunks/categoriesThunk";
import {ArtistsComponent} from "@/components/main/elements/artists/ArtistsComponent";

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

export const ArtistsMainContainer = connect(mapStateToProps, mapDispatchToProps)(ArtistsComponent)