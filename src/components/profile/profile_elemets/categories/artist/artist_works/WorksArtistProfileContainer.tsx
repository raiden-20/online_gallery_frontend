import {connect} from "react-redux";
import {GetArtsArtist} from "@/store/thunks/artThunk";
import {ArtArtistInterface} from "@/interfaces/artInterface";
import {WorksArtistProfileComponent} from "@/components/profile/profile_elemets/categories/artist/artist_works/WorksArtistProfileComponent";

interface state {
    art : {
        arts: ArtArtistInterface[]
    }
    profile: {
        artistName: string
    }
}

const mapStateToProps = (state: state) => {
    return {
        arts: state.art.arts,
        artistName: state.profile.artistName
    }
}

const mapDispatchToProps = {
    GetArtsArtist
}

export const WorkArtistProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WorksArtistProfileComponent)