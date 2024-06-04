import {AdminAPI} from '@/api/adminAPI'

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

export const DeleteArt = (id: string) =>
    () => {
        AdminAPI.DeleteArt(id)
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

export const DeleteAuction = (id: string) =>
    () => {
        AdminAPI.DeleteAuction(id)
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

export const CreateEvent = (name: string, photo: File, banner: File, type: string,
                            description: string, startDate: Date, endDate: Date) =>
    () => {
        AdminAPI.CreateEvent(name, photo, banner, type, description, startDate, endDate)
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

export const EditEvent = (eventId: string, name: string, changeMainPhoto: boolean, newPhoto: File,
                          changeBanner: boolean, newBanner: File, description: string, startDate: Date, endDate: Date) =>
    () => {
        AdminAPI.EditEvent(eventId, name, changeMainPhoto, newPhoto, changeBanner, newBanner, description, startDate, endDate)
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

export const DeleteEvent = (id: string) =>
    () => {
        AdminAPI.DeleteEvent(id)
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