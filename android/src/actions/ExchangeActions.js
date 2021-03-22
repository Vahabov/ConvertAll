import axios from '../utils/Api';
import { FETCH_CURRENCIES, FETCH_CRYPTO_CURRENCIES, LOADING_FETCH_CRYPTO_CURRENCIES, LOADING_FETCH_CURRENCIES } from '../constants/ActionConstants';

export const currenciesFeth = () => {
    return (dispatch) => {
        dispatch({
            type: LOADING_FETCH_CURRENCIES,
            payload: true
        })
        axios.get('todos')
            .then((res) => {
                dispatch({
                    type: FETCH_CURRENCIES,
                    payload: res.data
                });
            })
            .catch((err) => {
                console.log("currenciesFeth() -- " + err)
            })
    }
}

export const cryptoCurrenciesFeth = () => {
    return (dispatch) => {
        dispatch({
            type: LOADING_FETCH_CRYPTO_CURRENCIES,
            payload: true
        })
        axios.get('todos')
            .then((res) => {
                dispatch({
                    type: FETCH_CRYPTO_CURRENCIES,
                    payload: res.data
                });
            })
            .catch((err) => {
                console.log("cryptoCurrenciesFeth() -- " + err)
            })
    }
}