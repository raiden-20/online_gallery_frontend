import {connect} from "react-redux";
import {Artist} from "@/interfaces/artistInterface";
import {ArtistProfileComponent} from "@/components/profile/components/ArtistProfileComponent";
import {changeArtistProfileData, getArtistProfileData} from "@/store/thunks/profileThunk";

interface containerState {
    profile: {
        artist_data: Artist
        my_artist_data: Artist
    }
}

const mapStateToProps = (state: containerState) => {
    return {
        artist_data: state.profile.artist_data,
        my_artist_data: state.profile.my_artist_data
    }
}

const mapDispatchToProps = {
    getArtistProfileData,
    changeArtistProfileData,
}

export const ArtistProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ArtistProfileComponent)