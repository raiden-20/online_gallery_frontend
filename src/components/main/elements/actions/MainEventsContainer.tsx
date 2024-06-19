import {connect} from "react-redux";
import {EventsCategoriesInterface} from "@/interfaces/eventInterface";
import {GetEvents} from "@/store/thunks/eventsThunk";
import {EventsComponent} from "@/components/main/elements/actions/EventsComponent";

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

export const MainEventsContainer = connect(mapStateToProps, mapDispatchToProps)(EventsComponent)