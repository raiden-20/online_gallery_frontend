import {FilteredElementsInterface, Filters, SelectInterface} from "@/interfaces/filters";

const SET_FILTERS_PRICE_START = 'SET_FILTERS_PRICE_START'
const SET_FILTERS_PRICE_END = 'SET_FILTERS_PRICE_END'
const SET_FILTERS_SIZE = 'SET_FILTERS_SIZE'
const SET_FILTERS_ARTISTS = 'SET_FILTERS_ARTISTS'
const SET_FILTERS_YEAR = 'SET_FILTERS_YEAR'
const SET_FILTERS_MATERIALS = 'SET_FILTERS_MATERIALS'
const SET_FILTERS_TAGS = 'SET_FILTERS_TAGS'
const SET_FILTERS_FRAME = 'SET_FILTERS_FRAME'
const SET_FILTERS_STATUS = 'SET_FILTERS_STATUS'

interface FiltersReducerInterface {
    tags: SelectInterface[],
    materials: SelectInterface[],
    year: FilteredElementsInterface[],
    currentFilters: Filters
}


const initialState: FiltersReducerInterface = {
    tags: [
        {value: '', label: 'Абстракционизм', isActive: false},
        {value: '', label: 'Арт-деко', isActive: false},
        {value: '', label: 'Граффити и стрит-арт', isActive: false},
        {value: '', label: 'Дадаизм', isActive: false},
        {value: '', label: 'Импрессионизм', isActive: false},
        {value: '', label: 'Керамика и гончарное дело', isActive: false},
        {value: '', label: 'Коллаж', isActive: false},
        {value: '', label: 'Концептуализм', isActive: false},
        {value: '', label: 'Кубизм', isActive: false},
        {value: '', label: 'Минимализм', isActive: false},
        {value: '', label: 'Модернизм', isActive: false},
        {value: '', label: 'Народное искусство', isActive: false},
        {value: '', label: 'Натюрморты', isActive: false},
        {value: '', label: 'Пейзажи', isActive: false},
        {value: '', label: 'Поп-арт', isActive: false},
        {value: '', label: 'Портреты', isActive: false},
        {value: '', label: 'Реализм', isActive: false},
        {value: '', label: 'Современное искусство', isActive: false},
        {value: '', label: 'Сюрреализм', isActive: false},
        {value: '', label: 'Фигуративизм', isActive: false},
        {value: '', label: 'Фотореализм', isActive: false},
        {value: '', label: 'Экспрессионизм', isActive: false},
    ],
    materials: [
        {value: 'Watercolour', label: 'Акварель', isActive: false},
        {value: 'Acrylic', label: 'Акрил', isActive: false},
        {value: 'Aluminum', label: 'Алюминий', isActive: false},
        {value: 'Bronze', label: 'Бронза', isActive: false},
        {value: 'Paper', label: 'Бумага', isActive: false},
        {value: 'Clay', label: 'Глина', isActive: false},
        {value: 'Graphite', label: 'Графит', isActive: false},
        {value: 'Gouache', label: 'Гуашь', isActive: false},
        {value: 'Tree', label: 'Дерево', isActive: false},
        {value: 'Iron', label: 'Железо', isActive: false},
        {value: 'Gold', label: 'Золото', isActive: false},
        {value: 'Pencil', label: 'Карандаш', isActive: false},
        {value: 'Paperboard', label: 'Картон', isActive: false},
        {value: 'Skin', label: 'Кожа', isActive: false},
        {value: 'Markers', label: 'Маркеры', isActive: false},
        {value: 'Copper', label: 'Медь', isActive: false},
        {value: 'Metal', label: 'Металл', isActive: false},
        {value: 'Marble', label: 'Мрамор', isActive: false},
        {value: 'Pastel', label: 'Пастель', isActive: false},
        {value: 'Plastic', label: 'Пластик', isActive: false},
        {value: 'Polaroid', label: 'Полароид', isActive: false},
        {value: 'Glass', label: 'Стекло', isActive: false},
        {value: 'Уголь', label: 'Уголь', isActive: false},
        {value: 'Porcelain', label: 'Фарфор', isActive: false},
        {value: 'Photo_paper', label: 'Фотобумага', isActive: false},
        {value: 'Cotton', label: 'Хлопок', isActive: false},
        {value: 'Canvas', label: 'Холст', isActive: false},
        {value: 'Ink', label: 'Чернила', isActive: false},
        {value: 'Enamel', label: 'Эмаль', isActive: false},
        {value: 'Epoxy_resin', label: 'Эпоксидная смола', isActive: false},
    ],
    year: [
        {data: '2020', isActive: false},
        {data: '2010', isActive: false},
        {data: '2000', isActive: false},
        {data: '1990', isActive: false},
        {data: '1980', isActive: false},
        {data: '1970', isActive: false},
        {data: '1960', isActive: false},
        {data: '1950', isActive: false},
        {data: '1940', isActive: false},
        {data: '1930', isActive: false},
        {data: '1920', isActive: false},
        {data: '1910', isActive: false},
        {data: '1900', isActive: false},
        {data: 'XIX век', isActive: false},
        {data: 'XVIII век', isActive: false},
        {data: 'XVII век', isActive: false},
        {data: 'XVI век', isActive: false},
        {data: 'XV век и раньше', isActive: false}
    ],

    currentFilters : {
        priceStart: "",
        priceEnd: "",
        size: [],
        artists: [],
        year: [],
        materials: [],
        tags: [],
        frame: null,
        status: null
    }
}

export const filtersReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_FILTERS_PRICE_START : {
            stateCopy.currentFilters.priceStart = action.priceStart

            return stateCopy
        }

        case SET_FILTERS_PRICE_END : {
            stateCopy.currentFilters.priceEnd = action.priceEnd

            return stateCopy
        }

        case SET_FILTERS_SIZE : {
            stateCopy.currentFilters.size = action.size

            return stateCopy
        }

        case SET_FILTERS_ARTISTS : {
            stateCopy.currentFilters.artists = action.artists
            return stateCopy
        }

        case SET_FILTERS_YEAR : {
            stateCopy.currentFilters.year = action.year

            return stateCopy
        }

        case SET_FILTERS_MATERIALS : {
            stateCopy.currentFilters.materials = action.materials

            return stateCopy
        }

        case SET_FILTERS_TAGS : {
            stateCopy.currentFilters.tags = action.tags

            return stateCopy
        }

        case SET_FILTERS_FRAME : {
            stateCopy.currentFilters.frame = action.frame

            return stateCopy
        }

        case SET_FILTERS_STATUS : {
            stateCopy.currentFilters.status = action.status

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setFiltersPriceStart = (priceStart: string) => {
    return {
        type: SET_FILTERS_PRICE_START, priceStart
    }
}

export const setFiltersPriceEnd = (priceEnd: string) => {
    return {
        type: SET_FILTERS_PRICE_END, priceEnd
    }
}

export const setFiltersSize = (size: string[] ) => {
    return {
        type: SET_FILTERS_SIZE, size
    }
}

export const setFiltersArtists = (artists: string[]) => {
    return {
        type: SET_FILTERS_ARTISTS, artists
    }
}

export const setFiltersYear = (year: string[]) => {
    return {
        type: SET_FILTERS_YEAR, year
    }
}

export const setFiltersMaterials = (materials: string[]) => {
    return {
        type: SET_FILTERS_MATERIALS, materials
    }
}

export const setFiltersTags = (tags: string[]) => {
    return {
        type: SET_FILTERS_TAGS, tags
    }
}

export const setFiltersFrame = (frame: boolean | null) => {
    return {
        type: SET_FILTERS_FRAME, frame
    }
}

export const setFiltersStatus = (status: boolean | null) => {
    return {
        type: SET_FILTERS_STATUS, status
    }
}
