import {connect} from "react-redux";
import {Auctions} from "@/components/categories/works/auctions/Auctions";
import {GetAuctionsCategories} from "@/store/thunks/auctionsThunk";
import {AuctionCategoriesInterface} from "@/interfaces/auctionInterface";

interface state {
    auction : {
        auctions: AuctionCategoriesInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        auctions: state.auction.auctions
    }
}

const mapDispatchToProps = {
    GetAuctionsCategories
}

export const AuctionsContainer = connect(mapStateToProps, mapDispatchToProps)(Auctions)