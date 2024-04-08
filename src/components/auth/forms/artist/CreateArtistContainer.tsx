import {connect} from "react-redux";
import {createArtistProfile,} from "@/store/thunks/profileThunk";
import {CreateArtistComponent} from "@/components/auth/forms/artist/CreateArtistComponent";

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    createArtistProfile
}

export const CreateArtistContainer = connect(mapStateToProps, mapDispatchToProps)(CreateArtistComponent)