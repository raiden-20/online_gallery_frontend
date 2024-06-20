import {instance, instanceWithoutToken, PathsAPI} from "@/api/api_main";


export const EventAPI = {
    async GetOneEvent(eventId: string, currentId: string) {
        try {
            return await instanceWithoutToken.get(
                PathsAPI.EVENT + `/eventId=${eventId}&currentId=${currentId}`
            )
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },

    async GetAllEvents() {
        try {
            return await instanceWithoutToken.get(
                PathsAPI.EVENTS
            )
        } catch (error: any) {
            console.error(error)
            return error.response;
        }
    },
}