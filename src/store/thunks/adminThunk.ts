import {AdminAPI} from '@/api/adminAPI'
import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {MAIN_PATHS} from "@/paths/main";
import App from "next/app";

export const IsAdmin = () => {
    return Cookies.get('isAdmin') === 'true'
}

export const BlockUser = (id: string) =>
    () => {
        AdminAPI.BlockUser(id)
            .then((response: any) => {
                switch (response.status) {
                    case 200 : {
                        break
                    }
                }
            }).catch((error: any) => {
            console.error(error)
        })
    }

export const UnblockUser = (id: string) =>
    () => {
        AdminAPI.UnblockUser(id)
            .then((response: any) => {
                switch (response.status) {
                    case 200 : {
                        break
                    }
                }
            }).catch((error: any) => {
            console.error(error)
        })
    }

export const DeleteArtByAdmin = (id: string, router: AppRouterInstance) =>
    () => {
        AdminAPI.DeleteArt(id)
            .then((response: any) => {
                switch (response.status) {
                    case 200 : {
                        router.push(MAIN_PATHS.PAINTINGS)
                        break
                    }
                }
            }).catch((error: any) => {
            console.error(error)
        })
    }

export const DeleteAuctionByAdmin = (id: string, router: AppRouterInstance) =>
    () => {
        AdminAPI.DeleteAuction(id)
            .then((response: any) => {
                switch (response.status) {
                    case 200 : {
                        router.push(MAIN_PATHS.AUCTION)
                        break
                    }
                }
            }).catch((error: any) => {
            console.error(error)
        })
    }

export const CreateEventThunk = (name: string, photo: File, banner: File, type: string,
                                 description: string, startDate: Date, endDate: Date, router: AppRouterInstance) =>
    () => {
        AdminAPI.CreateEvent(name, photo, banner, type, description, startDate, endDate)
            .then((response: any) => {
                switch (response.status) {
                    case 200 : {
                        Cookies.remove('eventId')
                        Cookies.remove('eventType')
                        router.push(MAIN_PATHS.EVENT + `/${response.data}`)
                        break
                    }
                }
            }).catch((error: any) => {
            console.error(error)
        })
    }

export const EditEventThunk = (eventId: string, name: string, changeMainPhoto: boolean, newPhoto: File,
                               changeBanner: boolean, newBanner: File, description: string, startDate: Date, endDate: Date,
                               router: AppRouterInstance) =>
    () => {
        AdminAPI.EditEvent(eventId, name, changeMainPhoto, newPhoto, changeBanner, newBanner, description, startDate, endDate)
            .then((response: any) => {
                switch (response.status) {
                    case 200 : {
                        Cookies.remove('eventId')
                        Cookies.remove('eventType')
                        router.push(MAIN_PATHS.EVENT + `/${eventId}`)
                        break
                    }
                }
            }).catch((error: any) => {
            console.error(error)
        })
    }

export const DeleteEvent = (id: string, router: AppRouterInstance) =>
    () => {
        AdminAPI.DeleteEvent(id)
            .then((response: any) => {
                switch (response.status) {
                    case 200 : {
                        router.push(MAIN_PATHS.EVENTS)
                        break
                    }
                }
            }).catch((error: any) => {
            console.error(error)
        })
    }