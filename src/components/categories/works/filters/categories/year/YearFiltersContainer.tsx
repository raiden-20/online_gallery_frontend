import {connect} from "react-redux";
import {YearFiltersComponent} from "@/components/categories/works/filters/categories/year/YearFiltersComponent";
import {FilteredElementsInterface, SelectInterface} from "@/interfaces/filters";

interface state {
    filters : {
        year: FilteredElementsInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        year: state.filters.year
    }
}

const mapDispatchToProps = {

}

export const YearFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(YearFiltersComponent)
