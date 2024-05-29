import {connect} from "react-redux";
import {CreateArtTypeComponent} from "@/components/create_art/CreateArtTypeComponent";
import {CreateArt} from "@/store/thunks/artThunk";
import {CreateAuction} from "@/store/thunks/auctionsThunk";

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    CreateArt,
    CreateAuction
}

export const CreateArtContainer = connect(mapStateToProps, mapDispatchToProps)(CreateArtTypeComponent)