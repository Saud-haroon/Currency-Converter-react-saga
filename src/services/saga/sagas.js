import {  put,  takeLatest } from 'redux-saga/effects'
import {FETCH_RATES, FETCH_RATES_SUCCESS} from '../constant'
import axios from "axios"

const getRates = async  () => {
    const response = await axios
      .get('https://freecurrencyapi.net/api/v2/latest?apikey=3f01bf60-91cb-11ec-9fc1-7501ccac330f%27')
      .catch((err) => {
        console.log('Err', err);
      })
    return response.data.rates
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchRates(action) {
   try {
       
    //   const user = yield call(Api.fetchUser, action.payload.userId);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    const rates = yield getRates()
    yield put({type: FETCH_RATES_SUCCESS, payload: rates})
   } catch (e) {
       console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* ratesSaga() {
  yield takeLatest(FETCH_RATES, fetchRates);
}

export default ratesSaga