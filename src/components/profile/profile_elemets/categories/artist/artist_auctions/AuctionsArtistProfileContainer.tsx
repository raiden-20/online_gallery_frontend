import {connect} from "react-redux";
import {AuctionsArtistProfileComponent} from "@/components/profile/profile_elemets/categories/artist/artist_auctions/AuctionsArtistProfileComponent";
import {GetArtistAuctions} from "@/store/thunks/auctionsThunk";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";

interface state {
    auction : {
        auctions_artist: AuctionCategoriesInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        auctions_artist: state.auction.auctions_artist,
    }
}

const mapDispatchToProps = {
    GetArtistAuctions
}

export const AuctionsArtistProfileContainer = connect(mapStateToProps, mapDispatchToProps)(AuctionsArtistProfileComponent)