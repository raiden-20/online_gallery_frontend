import {connect} from "react-redux";
import {ArtInterface} from "@/interfaces/artInterface";
import {DeleteArt, GetArt} from "@/store/thunks/artThunk";
import {OneWorkComponent} from "@/components/categories/works/works/one_work/OneWorkComponent";
import {AddArtToCart} from "@/store/thunks/cartThunk";

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

export const OneWorkContainer = connect(mapStateToProps, mapDispatchToProps)(OneWorkComponent)