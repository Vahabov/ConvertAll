import { FETCH_CURRENCIES, FETCH_CRYPTO_CURRENCIES, LOADING_FETCH_CURRENCIES, LOADING_FETCH_CRYPTO_CURRENCIES } from '../constants/ActionConstants';
const initialState = {
    nowCurrencies: [
        {
            id: 1,
            largeExcName: 'Azərbaycan manatı',
            smallExcName: 'AZN',
            sourceExc: 'Mənbə: A.R. Mərkəzi Bankı',
            comparativeValue: '1 AZN = 1 AZN'
        },
        // {
        //     id: 2,
        //     largeExcName: 'ABŞ dolları',
        //     smallExcName: 'USD',
        //     sourceExc: 'Mənbə: A.R. Mərkəzi Bankı',
        //     comparativeValue: '1 AZN = 0.5882 USD'
        // },
        // {
        //     id: 3,
        //     largeExcName: 'Avro',
        //     smallExcName: 'EUR',
        //     sourceExc: 'Mənbə: A.R. Mərkəzi Bankı',
        //     comparativeValue: '1 AZN = 0.4936 EUR'
        // },
        // {
        //     id: 4,
        //     largeExcName: 'Türk lirəsi',
        //     smallExcName: 'TRY',
        //     sourceExc: 'Mənbə: A.R. Mərkəzi Bankı',
        //     comparativeValue: '1 AZN = 4.3122 TRY'
        // }
    ],
    loadingFetchCurrencies: false,
    loadingFetchCryptoCurrencies: false,
    currencies: [
        {
            id: 1,
            largeExcName: 'Azərbaycan manatı',
            smallExcName: 'AZN',
        },
        // {
        //     id: 2,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 3,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 4,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 5,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 6,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 7,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 8,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 9,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 10,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 11,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 12,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 13,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 14,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
    ],
    cryptoCurrencies: [
        {
            id: 1,
            largeExcName: 'Azərbaycan manatı',
            smallExcName: 'AZN',
        },
        // {
        //     id: 2,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 3,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 4,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 5,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 6,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 7,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 8,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 9,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 10,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 11,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 12,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 13,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
        // {
        //     id: 14,
        //     largeExcName: 'Azərbaycan manatı',
        //     smallExcName: 'AZN',
        // },
    ]
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENCIES:
            return {
                ...state,
                currencies: action.payload,
                loadingFetchCurrencies: false
            }
        case FETCH_CRYPTO_CURRENCIES:
            return {
                ...state,
                cryptoCurrencies: action.payload,
                loadingFetchCryptoCurrencies: false
            }
        case LOADING_FETCH_CURRENCIES:
            return {
                ...state,
                loadingFetchCurrencies: action.payload
            }
        case LOADING_FETCH_CRYPTO_CURRENCIES:
            return {
                ...state,
                loadingFetchCryptoCurrencies: action.payload
            }
        default:
            return state
    }
}