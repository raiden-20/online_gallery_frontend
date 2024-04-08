import {connect} from "react-redux";
import {Artist} from "@/interfaces/artistInterface";
import {ArtistProfileComponent} from "@/components/profile/components/ArtistProfileComponent";
import {changeArtistProfileData, getArtistProfileData} from "@/store/thunks/profileThunk";
import {getAllArtists, getAllCustomers, getSmthByName} from "@/store/thunks/categoriesThunk";
import {Search} from "@/components/search/Search";

interface containerState {
    categories: {
        artists: []
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        artists: state.categories.artists
    }
}

const mapDispatchToProps = {
    getSmthByName,
    getAllCustomers,
    getAllArtists
}

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)