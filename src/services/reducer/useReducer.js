import {FETCH_RATES} from '../constant'

const initialState = {
    rates: []
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_RATES:
            return {
                ...state,
                rates: action.payload
            }
            
            
    
        default:
            return state
    }
}