import {connect} from "react-redux";
import {EventsCategoriesInterface} from "@/interfaces/eventInterface";
import {GetEvents} from "@/store/thunks/eventsThunk";
import {BannerComponent} from "@/components/main/elements/banner/BannerComponent";

interface state {
    events : {
        events: EventsCategoriesInterface[]
    }
}

const mapStateToProps = (state: state) => {
    return {
        events: state.events.events
    }
}

const mapDispatchToProps = {
    GetEvents
}

export const MainBannerContainer = connect(mapStateToProps, mapDispatchToProps)(BannerComponent)