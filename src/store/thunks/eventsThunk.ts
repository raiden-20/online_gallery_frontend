import {Dispatch} from "redux";
import {EventAPI} from "@/api/eventAPI";
import {setEvents, setOneEvent} from "@/store/reducers/eventReducer";

export const GetEvents = (currentId: string) =>
    (dispatch: Dispatch) => {
        EventAPI.GetAllEvents(currentId)
            .then((response: any) => {
                switch (response.status) {
                    case 200 : {
                        dispatch(setEvents(response.data))
                        break
                    }
                }
            }).catch((error: any) => {
            console.error(error)
        })
    }

export const GetOneEvent = (eventId: string, currentId: string) =>
    (dispatch: Dispatch) => {
        EventAPI.GetOneEvent(eventId, currentId)
            .then((response: any) => {
                switch (response.status) {
                    case 200 : {
                        dispatch(setOneEvent(response.data))
                        break
                    }
                }
            }).catch((error: any) => {
            console.error(error)
        })
    }