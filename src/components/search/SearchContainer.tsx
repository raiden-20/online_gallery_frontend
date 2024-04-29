import {connect} from "react-redux";
import {getAllArtists, getAllArts, getAllCustomers, getSmthByName} from "@/store/thunks/categoriesThunk";
import {Search} from "@/components/search/Search";

interface containerState {
    categories: {
        search: []
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        search: state.categories.search
    }
}

const mapDispatchToProps = {
    getSmthByName,
    getAllCustomers,
    getAllArtists,
    getAllArts
}

export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)