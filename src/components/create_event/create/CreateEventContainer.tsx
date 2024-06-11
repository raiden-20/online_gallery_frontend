import {connect} from "react-redux";
import {CreateEventThunk} from "@/store/thunks/adminThunk";
import {CreateEvent} from "@/components/create_event/create/CreateEvent";

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    CreateEventThunk
}

export const CreateEventContainer = connect(mapStateToProps, mapDispatchToProps)(CreateEvent)