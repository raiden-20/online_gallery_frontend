import {connect} from "react-redux";
import {ArtInterface} from "@/interfaces/artInterface";
import {DeleteArt, GetArt} from "@/store/thunks/artThunk";
import {AddArtToCart} from "@/store/thunks/cartThunk";
import {OneAuction} from "@/components/categories/works/auctions/one_auction/one_page/OneAuction";

interface state {
    art: {
        oneArt: ArtInterface
    }
}

const mapStateToProps = (state: state) => {
    return {
        one_work: state.art.oneArt
    }
}

const mapDispatchToProps = {
    GetArt,
    DeleteArt,
    AddArtToCart
}

export const OneAuctionContainer = connect(mapStateToProps, mapDispatchToProps)(OneAuction)