import {OneAddressInterface, OneCardInterface} from "@/interfaces/credentials";

const SET_ADDRESSES = 'SET_ADDRESSES'
const ADD_ADDRESSES = 'ADD_ADDRESSES'
const EDIT_ADDRESSES = 'EDIT_ADDRESSES'
const DELETE_ADDRESSES = 'DELETE_ADDRESSES'
const SET_CARDS = 'SET_CARDS'
const ADD_CARDS = 'ADD_CARDS'
const EDIT_CARDS = 'EDIT_CARDS'
const DELETE_CARDS = 'DELETE_CARDS'

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

        case ADD_ADDRESSES: {
            stateCopy.addresses.push(action.address)

            return stateCopy
        }

        case EDIT_ADDRESSES: {
            stateCopy.addresses.map((oneAddress) => {
                if (oneAddress.addressId === action.address.addressId) {
                    return  action.address
                } else
                    return oneAddress
            })

            return stateCopy
        }

        case DELETE_ADDRESSES: {
            stateCopy.addresses.forEach((oneAddress, index) => {
                if (oneAddress.addressId === action.addressId) {
                    stateCopy.addresses.splice(index)
                }
            })

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

        case ADD_CARDS: {
            stateCopy.cards.push(action.card)

            return stateCopy
        }

        case EDIT_CARDS: {
            stateCopy.cards.map((oneCard) => {
                if (oneCard.cardId === action.card.cardId) {
                    return action.card
                } else
                    return oneCard
            })

            return stateCopy
        }

        case DELETE_CARDS: {
            stateCopy.cards.forEach((oneCard, index) => {
                if (oneCard.cardId === action.cardId) {
                    stateCopy.cards.splice(index)
                }
            })

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setAddresses = (addresses: []) => {
    return {
        type: SET_ADDRESSES, addresses
    }
}

export const setCards = (cards: []) => {
    return {
        type: SET_CARDS, cards
    }
}
