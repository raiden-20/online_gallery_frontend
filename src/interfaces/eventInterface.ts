export interface EventsCategoriesInterface {
    eventId: string
    photoUrl: string
    bannerUrl: string
    name: string
    startDate: Date
    endDate: Date
    description: string
    status: string
}


export interface EventInterface {
    photoUrl: string
    bannerUrl: string
    name: string
    startDate: Date
    endDate: Date
    description: string
    subjects: EventSubjectsInterface[]
    type: string
    status: string
}

export interface EventSubjectsInterface {
    subjectId: string
    artistId: string
    artistName: string
    subjectName: string
    photoUrl: string
    status: string
    price: string
    viewCount: string
    size: string
    startDate: Date
    endDate: Date
    createDate: Date
    tags: string[]
    materials: string[]
    frame: boolean
    customerId: string
    customerUrl: string
    customerName: string
}