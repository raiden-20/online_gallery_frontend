import {connect} from "react-redux";
import {GetArtsCategories} from "@/store/thunks/artThunk";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {WorksArts} from "@/components/categories/works/works/WorksArts";

interface state {
    art : {
        arts: ArtShortInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        arts: state.art.arts
    }
}

const mapDispatchToProps = {
    GetArtsCategories
}

export const WorkArtsContainer = connect(mapStateToProps, mapDispatchToProps)(WorksArts)