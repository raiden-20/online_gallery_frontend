import {connect} from "react-redux";
import {OneAuction} from "@/components/categories/works/auctions/one_auction/one_page/OneAuction";
import {DeleteAuction, GetAuction, SetMaxRate, SetNewCustomerRate, SetNewRate} from "@/store/thunks/auctionsThunk";
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
    GetAuction,
    DeleteAuction,
    SetMaxRate,
    SetNewRate,
    SetNewCustomerRate
}

export const OneAuctionContainer = connect(mapStateToProps, mapDispatchToProps)(OneAuction)