import {connect} from "react-redux";
import {ArtInterface} from "@/interfaces/artInterface";
import {DeleteArt, GetArt} from "@/store/thunks/artThunk";
import {AddArtToCart} from "@/store/thunks/cartThunk";
import {OneWork} from "@/components/categories/works/works/one_work/one_page/OneWork";
import {DeleteArtByAdmin} from "@/store/thunks/adminThunk";

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
    AddArtToCart,
    DeleteArtByAdmin

}

export const OneWorkContainer = connect(mapStateToProps, mapDispatchToProps)(OneWork)