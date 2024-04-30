import {connect} from "react-redux";
import { GetArtsCategories} from "@/store/thunks/artThunk";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {WorksRoot} from "@/components/categories/works/WorksRoot";

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

export const WorkRootContainer = connect(mapStateToProps, mapDispatchToProps)(WorksRoot)