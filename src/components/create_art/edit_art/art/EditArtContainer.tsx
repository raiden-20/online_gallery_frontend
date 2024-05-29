import {connect} from "react-redux";
import {ArtInterface} from "@/interfaces/artInterface";
import {EditArtComponent} from "@/components/create_art/edit_art/art/EditArt";
import {EditArt} from "@/store/thunks/artThunk";

interface state {
    art: {
        oneArt: ArtInterface
    }
}

const mapStateToProps = (state: state) => {
    return {
        oneArt: state.art.oneArt
    }
}

const mapDispatchToProps = {
    EditArt
}

export const EditArtContainer = connect(mapStateToProps, mapDispatchToProps)(EditArtComponent)