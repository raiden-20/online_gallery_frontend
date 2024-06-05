import {EventInterface, EventsCategoriesInterface} from "@/interfaces/eventInterface";

const SET_EVENTS = 'SET_EVENTS'
const SET_ONE_EVENT = 'SET_ONE_EVENT'
const CLEAR_ONE_EVENT = 'CLEAR_ONE_EVENT'

interface EventReducerInterface {
    events: EventsCategoriesInterface[]
    event: EventInterface
}


const initialState: EventReducerInterface = {
    events: [],
    event: {
        photoUrl: "",
        bannerUrl: "",
        name: "",
        startDate: new Date(),
        endDate: new Date(),
        description: "",
        subjects: [],
        type: "",
        status: ""
    }
}

export const eventReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_EVENTS: {
            stateCopy.events = []
            for (let i = 0; i < action.events.length; i++) {
                action.events[i].startDate = new Date(action.events[i].startDate)
                action.events[i].endDate = new Date(action.events[i].endDate)
                stateCopy.events.push(action.events[i])
            }

            return stateCopy
        }

        case SET_ONE_EVENT: {
            action.event.startDate = new Date(action.event.startDate)
            action.event.endDate = new Date(action.event.endDate)

            for (let i = 0; i < action.event.subjects.length; i++) {
                action.event.subjects[i].startDate = new Date(action.event.subjects[i].startDate)
                action.event.subjects[i].endDate = new Date(action.event.subjects[i].endDate)
            }

            stateCopy.event = action.event

            return stateCopy
        }

        case CLEAR_ONE_EVENT: {
            stateCopy.event = {
                status: "",
                photoUrl: "",
                bannerUrl: "",
                name: "",
                startDate: new Date(),
                endDate: new Date(),
                description: "",
                subjects: [],
                type: ""
            }
            stateCopy.events = []

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setEvents = (events: EventsCategoriesInterface[]) => {
    return {
        type: SET_EVENTS, events
    }
}

export const setOneEvent = (event: EventInterface) => {
    return {
        type: SET_ONE_EVENT, event
    }
}

export const clearOneEvent = () => {
    return {
        type: CLEAR_ONE_EVENT
    }
}
