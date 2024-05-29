import {connect} from "react-redux";
import {SelectInterface} from "@/interfaces/filters";
import {
    MaterialsFiltersComponent
} from "@/components/categories/works/filters/categories/materials/MaterialsFiltersComponent";

interface state {
    filters : {
        materials: SelectInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        materials: state.filters.materials
    }
}

const mapDispatchToProps = {

}

export const MaterialsFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(MaterialsFiltersComponent)
