import {connect} from "react-redux";
import {EditAuctionThunk} from "@/store/thunks/auctionsThunk";
import {EditAuction} from "@/components/create_art/edit_art/auction/EditAuction";
import {AuctionInterface} from "@/interfaces/auctionInterface";

interface state {
    auction: {
        auction: AuctionInterface
    }
}

const mapStateToProps = (state: state) => {
    return {
        auction: state.auction.auction
    }
}

const mapDispatchToProps = {
    EditAuctionThunk
}

export const EditAuctionContainer = connect(mapStateToProps, mapDispatchToProps)(EditAuction)