import {OneAddressInterface, OneCardInterface} from "@/interfaces/credentials";

const SET_ADDRESSES = 'SET_ADDRESSES'
const SET_CARDS = 'SET_CARDS'

interface credentialInterface {
    addresses: OneAddressInterface[]
    cards: OneCardInterface[]
}


const initialState: credentialInterface = {
    addresses: [],
    cards: []
}

export const credentialsReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_ADDRESSES: {
            stateCopy.addresses = action.addresses

            return stateCopy
        }

        case SET_CARDS: {
            for (let i = 0; i < action.cards.length ; i++) {
                const dateArr = action.cards[i].date.split('-')
                const a = dateArr[0].split('').splice(2, 2).join('')
                action.cards[i].date = dateArr[1] + '/' + a
            }
            stateCopy.cards = action.cards

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setAddresses = (addresses: string) => {
    return {
        type: SET_ADDRESSES, addresses
    }
}

export const setCards = (cards: string) => {
    return {
        type: SET_CARDS, cards
    }
}