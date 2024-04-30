import {connect} from "react-redux";
import {CreateArtTypeComponent} from "@/components/create_art/CreateArtTypeComponent";
import {CreateArt} from "@/store/thunks/artThunk";


const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    CreateArt
}

export const CreateArtContainer = connect(mapStateToProps, mapDispatchToProps)(CreateArtTypeComponent)