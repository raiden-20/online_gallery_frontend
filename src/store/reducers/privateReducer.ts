
const SET_PRICE = 'SET_PRICE'

interface PrivateReducerInterface {
    price: string
}


const initialState: PrivateReducerInterface = {
    price: '0'
}

export const privateReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_PRICE: {
            stateCopy.price = action.price

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setPrice = (price: string) => {
    return {
        type: SET_PRICE, price
    }
}
