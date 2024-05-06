import {connect} from "react-redux";
import {AddInformationComponent} from "@/components/create_art/pages/data/elements/add_info/AddInformationComponent";
import {SelectInterface} from "@/interfaces/filters";


interface state {
    filters : {
        tags: SelectInterface[],
        materials: SelectInterface[],
    }

}

const mapStateToProps = (state: state) => {
    return {
        tags_list: state.filters.tags,
        materials_list: state.filters.materials
    }
}

const mapDispatchToProps = {
}

export const AddInformationContainer = connect(mapStateToProps, mapDispatchToProps)(AddInformationComponent)