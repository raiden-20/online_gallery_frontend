import {connect} from "react-redux";
import {EditEventThunk} from "@/store/thunks/adminThunk";
import {EditEvent} from "@/components/create_event/edit/EditEvent";
import {EventInterface} from "@/interfaces/eventInterface";
import {GetOneEvent} from "@/store/thunks/eventsThunk";

interface state {
    events: {
        event: EventInterface
    }
}

const mapStateToProps = (state: state) => {
    return {
        event: state.events.event
    }
}

const mapDispatchToProps = {
    EditEventThunk,
    GetOneEvent
}

export const EditEventContainer = connect(mapStateToProps, mapDispatchToProps)(EditEvent)