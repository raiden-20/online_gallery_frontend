import {connect} from "react-redux";
import {SelectInterfaceWithActive} from "@/interfaces/filters";
import {TagsFiltersComponent} from "@/components/categories/works/filters/categories/tags/TagsFiltersComponent";

interface state {
    filters : {
        tags: SelectInterfaceWithActive[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        tags: state.filters.tags
    }
}

const mapDispatchToProps = {

}

export const TagsFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(TagsFiltersComponent)
