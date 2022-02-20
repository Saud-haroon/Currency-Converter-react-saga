import { useState, useEffect } from 'react';
import './App.css';
import CurrencyInputs from './component/CurrencyInputs';
import Header from './component/Header';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"

import Typography from '@mui/material/Typography';
import { setRates } from './services/action'

function App() {
  let INITIAL_STATE = {
    amount1: 0,
    amount2: 0,
    currency1: "EUR",
    currency2: "PKR"
  }
  const [userInput, setuserInput] = useState(INITIAL_STATE)
  const [LastUpdate, setLastUpdate] = useState()



  const rates = useSelector((state) => state.allrates.rates)
  let ratesKeys = Object.keys(rates)
  // let ratesKeys = ["USD"]
  let factorial = 1/rates["PKR"]
  console.log(factorial);

  const dispatch = useDispatch()

  const decimalLimit = (value) => {
    return value.toFixed(2)
  }

  const onChangeHandler = (e) => {
    debugger
    let name = e.target.name
    let value = e.target.value

    if (name === "amount1") {
      setuserInput(state => ({
        ...state,
        amount1: value,
        amount2: decimalLimit(value * rates[userInput.currency2] / rates[userInput.currency1]),
      }));

    } else if (name === "currency1") {
      setuserInput(state => ({
        ...state,
        currency1: value,
        amount1: 1,
        amount2: decimalLimit(1 * rates[userInput.currency2] / rates[userInput.currency1]),
      }));

    } else if (name === "amount2") {
      setuserInput(state => ({
        ...state,
        amount2: value,
        amount1: decimalLimit(value * rates[userInput.currency1] / rates[userInput.currency2]),
      }));

    } else if (name === "currency2") {
      setuserInput(state => ({
        ...state,
        currency2: value,
        amount1: decimalLimit(1 * rates[userInput.currency1] / rates[userInput.currency2]),
        amount2: 1
      }));

    }
  }

  const fetchRates = async () => {
    const response = await axios
      .get('https://freecurrencyapi.net/api/v2/latest?apikey=3f01bf60-91cb-11ec-9fc1-7501ccac330f')
      .catch((err) => {
        console.log('Err', err);
      })

    dispatch(setRates(response.data.data))
  }

  useEffect(() => {
    fetchRates()
  }, [])




  useEffect(() => {
    setuserInput(state => ({
      ...state,
      amount1: 1,
      amount2: Number(decimalLimit(userInput.amount1 * rates[userInput.currency2] / rates[userInput.currency1])),    
    }));    
  }, [rates])


  return (
    <div className="App">
      <Header />
      <Typography variant="h2" gutterBottom component="div">
        {`${userInput.amount1} ${userInput.currency1} is Equal to ${userInput.amount2} ${userInput.currency2}`}
      </Typography>
      {LastUpdate && (
        <Typography variant="subtitle2" gutterBottom component="div">
          LastUpdate : {LastUpdate}
        </Typography>
      )}

      <CurrencyInputs InputName={"amount1"} selectName={"currency1"} currencies={ratesKeys} amount={userInput.amount1} currency={userInput.currency1} onChange={onChangeHandler} />
      <CurrencyInputs InputName={"amount2"} selectName={"currency2"} currencies={ratesKeys} amount={userInput.amount2} currency={userInput.currency2} onChange={onChangeHandler} />
      {/* <CurrencyInputs/> */}
      {/* <p>Last Update: {LastUpdate.slice(0, 15)}</p> */}
      {JSON.stringify(userInput, undefined, 2)}

      <Typography variant="body" gutterBottom component="div">

      </Typography>


    </div>
  );
}


export default App;
