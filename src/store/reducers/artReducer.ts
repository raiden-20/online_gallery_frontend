import {ArtArtistInterface, ArtCustomerInterface, ArtInterface, ArtShortInterface} from "@/interfaces/artInterface";
import {ART_TYPES} from "@/paths/elements";

const SET_ARTS = 'SET_ARTS'
const SET_ARTIST_ARTS = 'SET_ARTIST_ARTS'
const SET_CUSTOMER_ARTS = 'SET_CUSTOMER_ARTS'
const SET_ONE_ART = 'SET_ONE_ART'
const SET_ONE_ART_ELEMENTS = 'SET_ONE_ART_ELEMENTS'
const CLEAR_ONE_ELEMENT = 'CLEAR_ONE_ELEMENT'

interface ArtReducerInterface {
    arts: ArtShortInterface[]
    arts_artist: ArtArtistInterface[]
    arts_customer: ArtCustomerInterface[]
    oneArt: ArtInterface
}


const initialState: ArtReducerInterface = {
    arts: [],
    arts_artist: [],
    arts_customer: [],
    oneArt: {
        artId: '0',
        artistName: 'Имя артиста',
        name: 'Имя товара',
        type: '',
        photoUrls: ['/default_art_photo.jpg', '/default_art_photo.jpg'],
        price: '0',
        artistId: '',
        status: '',
        isPrivate: false,
        customerId: '',
        customerName: '',
        description: 'Тут описание',
        size: '0х0',
        createDate: '1970',
        tags: [],
        materials: [],
        frame: false,
        publishDate: new Date('1970-01-01')
    }
}

export const artReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_ARTS: {
            stateCopy.arts = action.arts

            return stateCopy
        }

        case SET_ARTIST_ARTS: {
            stateCopy.arts_artist = action.arts_artist

            return stateCopy
        }

        case SET_CUSTOMER_ARTS: {
            stateCopy.arts_customer = action.arts_customer

            return stateCopy
        }

        case CLEAR_ONE_ELEMENT: {
            stateCopy.oneArt = {
                artId: '',
                artistName: '',
                name: '',
                type: '',
                photoUrls: [],
                price: '',
                artistId: '',
                status: '',
                isPrivate: false,
                customerId: '',
                customerName: '',
                description: '',
                size: '',
                createDate: '',
                tags: [],
                materials: [],
                frame: false,
                publishDate: new Date('1970-01-01')
            }

            return stateCopy
        }

        case SET_ONE_ART: {
            switch (action.oneArt.type) {
                case ART_TYPES.PAINTING : {
                    action.oneArt.type = 'Картина'
                    break
                }
                case ART_TYPES.PHOTO : {
                    action.oneArt.type = 'Фото'
                    break
                }
                case ART_TYPES.SCULPTURE : {
                    action.oneArt.type = 'Скульптура'
                    break
                }
            }
            action.oneArt.publishDate = new Date(action.oneArt.publishDate)
            stateCopy.oneArt = action.oneArt

            return stateCopy
        }

        case SET_ONE_ART_ELEMENTS: {
            stateCopy.oneArt = {
                artistName: action.artistName,
                artId: action.artId,
                name: action.name,
                type: action.type,
                photoUrls: action.photoUrls,
                price: action.price,
                artistId: action.artistId,
                status: action.status,
                isPrivate: action.isPrivate,
                customerId: action.customerId,
                customerName: action.customerName,
                description: action.description,
                size: action.size,
                createDate: action.createDate,
                tags: action.tags,
                materials: action.materials,
                frame: action.frame,
                publishDate: new Date(action.publishDate)
            }

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setArts = (arts: ArtShortInterface[]) => {
    return {
        type: SET_ARTS, arts
    }
}

export const setArtsArtist = (arts_artist: ArtArtistInterface[]) => {
    return {
        type: SET_ARTIST_ARTS, arts_artist
    }
}

export const setArtsCustomer = (arts_customer: ArtCustomerInterface[]) => {
    return {
        type: SET_CUSTOMER_ARTS, arts_customer
    }
}

export const setOneArt = (oneArt: ArtInterface) => {
    return {
        type: SET_ONE_ART, oneArt
    }
}
export const clearOneArt = () => {
    return {
        type: CLEAR_ONE_ELEMENT
    }
}
