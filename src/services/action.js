import {FETCH_RATES} from './constant'

export const setRates = (rates) => {
    return {
        type: FETCH_RATES,
        payload: rates,
    }
}