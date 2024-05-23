import {connect} from "react-redux";
import {GetArtsCategories} from "@/store/thunks/artThunk";
import {ArtShortInterface} from "@/interfaces/artInterface";
import {Auctions} from "@/components/categories/works/auctions/Auctions";

interface state {
    art : {
        arts: ArtShortInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        arts: state.art.arts
    }
}

const mapDispatchToProps = {
    GetArtsCategories
}

export const AuctionsContainer = connect(mapStateToProps, mapDispatchToProps)(Auctions)