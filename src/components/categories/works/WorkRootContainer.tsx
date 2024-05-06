import {connect} from "react-redux";
import { GetArtsCategories} from "@/store/thunks/artThunk";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {WorksRoot} from "@/components/categories/works/WorksRoot";
import {Filters} from "@/interfaces/filters";

interface state {
    filters : {
        currentFilters: Filters
    }
    art : {
        arts: ArtShortInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        currentFilters: state.filters.currentFilters,
        arts: state.art.arts
    }
}

const mapDispatchToProps = {
    GetArtsCategories
}

export const WorkRootContainer = connect(mapStateToProps, mapDispatchToProps)(WorksRoot)