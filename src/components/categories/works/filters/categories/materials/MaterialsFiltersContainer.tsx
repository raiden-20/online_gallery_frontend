import {connect} from "react-redux";
import {SelectInterfaceWithActive} from "@/interfaces/filters";
import {
    MaterialsFiltersComponent
} from "@/components/categories/works/filters/categories/materials/MaterialsFiltersComponent";

interface state {
    filters : {
        materials: SelectInterfaceWithActive[]
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
