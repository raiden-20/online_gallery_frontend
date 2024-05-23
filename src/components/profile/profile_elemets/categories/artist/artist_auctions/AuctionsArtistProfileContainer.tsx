import {connect} from "react-redux";
import {GetArtsArtist} from "@/store/thunks/artThunk";
import {ArtArtistInterface} from "@/interfaces/artInterface";
import {AuctionsArtistProfileComponent} from "@/components/profile/profile_elemets/categories/artist/artist_auctions/AuctionsArtistProfileComponent";

interface state {
    art : {
        arts_artist: ArtArtistInterface[]
    }
    profile: {
        artistName: string
    }
}

const mapStateToProps = (state: state) => {
    return {
        arts_artist: state.art.arts_artist,
        artistName: state.profile.artistName
    }
}

const mapDispatchToProps = {
    GetArtsArtist
}

export const AuctionsArtistProfileContainer = connect(mapStateToProps, mapDispatchToProps)(AuctionsArtistProfileComponent)