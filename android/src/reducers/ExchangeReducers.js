import {
    FETCH_CURRENCIES,
    ADD_CURRENCY,
    REMOVE_CURRENCY,
} from '../constants/ActionConstants';
const initialState = {
    nowCurrencies: [],
    currencies: [],
}

export default function ExcReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENCIES:
            var responseJson = action.payload.map(item => {
                item.isSelect = false;
                return item;
            });
            return {
                ...state,
                currencies: responseJson
            }
        case ADD_CURRENCY: {
            let addedItem = state.nowCurrencies.find(item => {
                return item.id === action.payload.id
            });
            var addFilteredCurrency = state.currencies.filter((item) => {
                item.id !== action.payload.id ?
                    null : item.isSelect = !item.isSelect;
                return item
            });
            if (!addedItem) {
                return {
                    ...state,
                    nowCurrencies: [
                        ...state.nowCurrencies,
                        action.payload
                    ]
                }
            }
            else {
                return {
                    ...state,
                    nowCurrencies: state.nowCurrencies.filter(item => item.id !== action.payload.id),
                    currencies: addFilteredCurrency
                }
            }
        }
        case REMOVE_CURRENCY:
            var removeFilteredCurrency = state.currencies.filter((item) => {
                item.id === action.payload ?
                    item.isSelect = false : null;
                return item
            });
            return {
                ...state,
                nowCurrencies: state.nowCurrencies.filter(item => item.id !== action.payload),
                currencies: removeFilteredCurrency
            }
        default:
            return state
    }
}