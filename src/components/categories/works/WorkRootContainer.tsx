import {connect} from "react-redux";
import {WorksRoot} from "@/components/categories/works/WorksRoot";
import {Filters} from "@/interfaces/filters";

interface state {
    filters : {
        currentFilters: Filters
    }
}

const mapStateToProps = (state: state) => {
    return {
        currentFilters: state.filters.currentFilters,
    }
}

const mapDispatchToProps = {

}

export const WorkRootContainer = connect(mapStateToProps, mapDispatchToProps)(WorksRoot)