import {connect} from "react-redux";
import {EventsCategoriesInterface} from "@/interfaces/eventInterface";
import {GetEvents} from "@/store/thunks/eventsThunk";
import {EventsComponent} from "@/components/categories/events/EventsComponent";

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

export const EventsContainer = connect(mapStateToProps, mapDispatchToProps)(EventsComponent)