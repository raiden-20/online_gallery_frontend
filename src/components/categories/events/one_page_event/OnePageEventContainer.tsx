import {connect} from "react-redux";
import {EventInterface} from "@/interfaces/eventInterface";
import { GetOneEvent} from "@/store/thunks/eventsThunk";
import {OneEventPageComponent} from "@/components/categories/events/one_page_event/OneEventPageComponent";
import {DeleteEvent} from "@/store/thunks/adminThunk";

interface state {
    events : {
        event: EventInterface
    }
}

const mapStateToProps = (state: state) => {
    return {
        event: state.events.event
    }
}

const mapDispatchToProps = {
    GetOneEvent,
    DeleteEvent
}

export const OnePageEventContainer = connect(mapStateToProps, mapDispatchToProps)(OneEventPageComponent)