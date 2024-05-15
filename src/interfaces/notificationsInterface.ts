export interface NotificationsInterface {
    notificationId: string
    subjectId: string
    type: string
    text: string
    date: string
    avatarUrl: string
    isSystem: boolean
}

export interface PopUpNotificationInterface {
    avatarUrl: string
    message: string
}

export const TYPES_NOTIFICATIONS = {
    ART: 'ART',
    AUCTION: 'AUCTION',
    POST: 'POST',
    ORDER: 'ORDER',
    PRIVATE_DELETED: 'PRIVATE_DELETED',
    ART_BLOCK: 'ART_BLOCK',
    EVENT: 'EVENT'



}