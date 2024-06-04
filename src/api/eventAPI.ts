import {instance, PathsAPI} from "@/api/api_main";


export const EventAPI = {
    async GetOneEvent(eventId: string, currentId: string) {
        try {
            return await instance.get(
                PathsAPI.EVENT + `/eventId=${eventId}&currentId=${currentId}`
            )
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },

    async GetAllEvents(currentId: string) {
        try {
            return await instance.get(
                PathsAPI.EVENTS + `/currentId=${currentId}`
            )
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },
}