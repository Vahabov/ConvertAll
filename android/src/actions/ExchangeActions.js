import axios from '../utils/Api';
import {
    FETCH_CURRENCIES,
    ADD_CURRENCY,
    REMOVE_CURRENCY,
} from '../constants/ActionConstants';

export const currenciesFeth = () => {
    return async (dispatch) => {
        try {
            await axios.get('/currencies')
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
        catch (err) {
            console.log('currenciesFeth() ----- ' + err)
        }
    }
}


export const addCurrency = (currency) => {
    return (dispatch) => {
        dispatch({
            type: ADD_CURRENCY,
            payload: currency
        })
    }
}


export const removeCurrency = (currencyId) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_CURRENCY,
            payload: currencyId
        });
    }
}