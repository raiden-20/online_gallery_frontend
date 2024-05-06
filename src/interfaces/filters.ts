export interface Filters {
    priceStart : string,
    priceEnd : string,
    size: string[],
    artists: string[],
    year: string[],
    materials: string[],
    tags: string[],
    frame: boolean | null,
    status: boolean | null
}

export interface FilteredElementsInterface {
    data: string,
    isActive: boolean
}

export interface SelectInterface {
    value: string,
    label: string,
    isActive: boolean
}

export const SizeInterface = {
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    BIG: 'BIG'
}